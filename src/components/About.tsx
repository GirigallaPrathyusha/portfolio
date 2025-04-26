import React, { useState, useRef, useEffect } from 'react';
import { Renderer, Program, Mesh, Triangle, Vec3 } from 'ogl';
import AnimatedContent from './AnimatedContent'; // Ensure this import is present

const AboutSection = () => {
  const [orbs, setOrbs] = useState<{id: number, x: number, y: number, hue: number}[]>([]);
  const photoContainerRef = useRef<HTMLDivElement>(null);

  // WebGL Orb Component
  const Orb = ({ x, y, hue }: { x: number; y: number; hue: number }) => {
    const ctnDom = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (!ctnDom.current) return;

      const container = ctnDom.current;
      const renderer = new Renderer({ alpha: true, premultipliedAlpha: false });
      const gl = renderer.gl;
      gl.clearColor(0, 0, 0, 0);
      container.appendChild(gl.canvas);

      const vert = /* glsl */ `
        precision highp float;
        attribute vec2 position;
        attribute vec2 uv;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 0.0, 1.0);
        }
      `;

      const frag = /* glsl */ `
        precision highp float;

        uniform float iTime;
        uniform vec3 iResolution;
        uniform float hue;
        uniform float hover;
        uniform float rot;
        uniform float hoverIntensity;
        varying vec2 vUv;

        vec3 rgb2yiq(vec3 c) {
          return vec3(
            dot(c, vec3(0.299, 0.587, 0.114)),
            dot(c, vec3(0.596, -0.274, -0.322)),
            dot(c, vec3(0.211, -0.523, 0.312))
          );
        }
        
        vec3 yiq2rgb(vec3 c) {
          return vec3(
            c.x + 0.956 * c.y + 0.621 * c.z,
            c.x - 0.272 * c.y - 0.647 * c.z,
            c.x - 1.106 * c.y + 1.703 * c.z
          );
        }
        
        vec3 adjustHue(vec3 color, float hueDeg) {
          float hueRad = hueDeg * 3.14159265 / 180.0;
          vec3 yiq = rgb2yiq(color);
          float cosA = cos(hueRad);
          float sinA = sin(hueRad);
          return yiq2rgb(vec3(
            yiq.x,
            yiq.y * cosA - yiq.z * sinA,
            yiq.y * sinA + yiq.z * cosA
          ));
        }
        
        vec3 hash33(vec3 p3) {
          p3 = fract(p3 * vec3(0.1031, 0.11369, 0.13787));
          p3 += dot(p3, p3.yxz + 19.19);
          return -1.0 + 2.0 * fract(vec3(
            p3.x + p3.y,
            p3.x + p3.z,
            p3.y + p3.z
          ) * p3.zyx);
        }
        
        float snoise3(vec3 p) {
          const float K1 = 0.333333333;
          const float K2 = 0.166666667;
          vec3 i = floor(p + (p.x + p.y + p.z) * K1);
          vec3 d0 = p - (i - (i.x + i.y + i.z) * K2);
          vec3 e = step(vec3(0.0), d0 - d0.yzx);
          vec3 i1 = e * (1.0 - e.zxy);
          vec3 i2 = 1.0 - e.zxy * (1.0 - e);
          vec3 d1 = d0 - (i1 - K2);
          vec3 d2 = d0 - (i2 - K1);
          vec3 d3 = d0 - 0.5;
          vec4 h = max(0.6 - vec4(
            dot(d0, d0),
            dot(d1, d1),
            dot(d2, d2),
            dot(d3, d3)
          ), 0.0);
          vec4 n = h * h * h * h * vec4(
            dot(d0, hash33(i)),
            dot(d1, hash33(i + i1)),
            dot(d2, hash33(i + i2)),
            dot(d3, hash33(i + 1.0))
          );
          return dot(vec4(31.316), n);
        }
        
        vec4 extractAlpha(vec3 colorIn) {
          float a = max(max(colorIn.r, colorIn.g), colorIn.b);
          return vec4(colorIn.rgb / (a + 1e-5), a);
        }
        
        const vec3 baseColor1 = vec3(0.611765, 0.262745, 0.996078);
        const vec3 baseColor2 = vec3(0.298039, 0.760784, 0.913725);
        const vec3 baseColor3 = vec3(0.062745, 0.078431, 0.600000);
        const float innerRadius = 0.6;
        const float noiseScale = 0.65;
        
        float light1(float intensity, float attenuation, float dist) {
          return intensity / (1.0 + dist * attenuation);
        }
        
        float light2(float intensity, float attenuation, float dist) {
          return intensity / (1.0 + dist * dist * attenuation);
        }
        
        vec4 draw(vec2 uv) {
          vec3 color1 = adjustHue(baseColor1, hue);
          vec3 color2 = adjustHue(baseColor2, hue);
          vec3 color3 = adjustHue(baseColor3, hue);
          
          float ang = atan(uv.y, uv.x);
          float len = length(uv);
          float invLen = len > 0.0 ? 1.0 / len : 0.0;
          
          float n0 = snoise3(vec3(uv * noiseScale, iTime * 0.5)) * 0.5 + 0.5;
          float r0 = mix(mix(innerRadius, 1.0, 0.4), mix(innerRadius, 1.0, 0.6), n0);
          float d0 = distance(uv, (r0 * invLen) * uv);
          float v0 = light1(1.0, 10.0, d0);
          v0 *= smoothstep(r0 * 1.05, r0, len);
          float cl = cos(ang + iTime * 2.0) * 0.5 + 0.5;
          
          float a = iTime * -1.0;
          vec2 pos = vec2(cos(a), sin(a)) * r0;
          float d = distance(uv, pos);
          float v1 = light2(1.5, 5.0, d);
          v1 *= light1(1.0, 50.0, d0);
          
          float v2 = smoothstep(1.0, mix(innerRadius, 1.0, n0 * 0.5), len);
          float v3 = smoothstep(innerRadius, mix(innerRadius, 1.0, 0.5), len);
          
          vec3 col = mix(color1, color2, cl);
          col = mix(color3, col, v0);
          col = (col + v1) * v2 * v3;
          col = clamp(col, 0.0, 1.0);
          
          return extractAlpha(col);
        }
        
        vec4 mainImage(vec2 fragCoord) {
          vec2 center = iResolution.xy * 0.5;
          float size = min(iResolution.x, iResolution.y);
          vec2 uv = (fragCoord - center) / size * 2.0;
          
          float angle = rot;
          float s = sin(angle);
          float c = cos(angle);
          uv = vec2(c * uv.x - s * uv.y, s * uv.x + c * uv.y);
          
          uv.x += hover * hoverIntensity * 0.1 * sin(uv.y * 10.0 + iTime);
          uv.y += hover * hoverIntensity * 0.1 * sin(uv.x * 10.0 + iTime);
          
          return draw(uv);
        }
        
        void main() {
          vec2 fragCoord = vUv * iResolution.xy;
          vec4 col = mainImage(fragCoord);
          gl_FragColor = vec4(col.rgb * col.a, col.a);
        }
      `;

      const geometry = new Triangle(gl);
      const program = new Program(gl, {
        vertex: vert,
        fragment: frag,
        uniforms: {
          iTime: { value: 0 },
          iResolution: { value: new Vec3(100, 100, 1) },
          hue: { value: hue },
          hover: { value: 1 }, // Always show hover effect for click animation
          rot: { value: 0 },
          hoverIntensity: { value: 0.5 },
        },
      });

      const mesh = new Mesh(gl, { geometry, program });

      function resize() {
        const dpr = window.devicePixelRatio || 1;
        renderer.setSize(100 * dpr, 100 * dpr);
        gl.canvas.style.width = '100px';
        gl.canvas.style.height = '100px';
        program.uniforms.iResolution.value.set(100, 100, 1);
      }
      resize();

      let lastTime = 0;
      let currentRot = 0;
      const rotationSpeed = 2.0; // Faster rotation for click effect

      const update = (t: number) => {
        requestAnimationFrame(update);
        const dt = (t - lastTime) * 0.001;
        lastTime = t;
        program.uniforms.iTime.value = t * 0.001;
        
        currentRot += dt * rotationSpeed;
        program.uniforms.rot.value = currentRot;

        renderer.render({ scene: mesh });
      };
      update(0);

      return () => {
        container.removeChild(gl.canvas);
        gl.getExtension("WEBGL_lose_context")?.loseContext();
      };
    }, [hue]);

    return (
      <div 
        ref={ctnDom} 
        className="absolute pointer-events-none"
        style={{
          left: `${x - 50}px`,
          top: `${y - 50}px`,
          width: '100px',
          height: '100px',
        }}
      />
    );
  };

  const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const img = document.querySelector('#profile-img') as HTMLImageElement;
    if (img) {
      img.classList.add('animate-pulse');
      setTimeout(() => img.classList.remove('animate-pulse'), 1000);
    }

    if (!photoContainerRef.current) return;

    const rect = photoContainerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const hue = Math.random() * 360;

    const newOrb = {
      id: Date.now(),
      x,
      y,
      hue
    };

    setOrbs([...orbs, newOrb]);

    setTimeout(() => {
      setOrbs(orbs.filter(orb => orb.id !== newOrb.id));
    }, 2000);
  };

  return (
    <section id="about" className="py-16 bg-portfolio-dark">
      <div className="container mx-auto px-4">
        <AnimatedContent>
          <div className="text-center mb-12 appear-animated">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 font-montserrat">
              About <span className="text-[#54F4F4]">Me</span>
            </h2>
            <div className="h-1 w-20 bg-portfolio-accent mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-lg text-gray-300">
              ✨ Crafting seamless digital journeys through code and design ✨
            </p>
          </div>
        </AnimatedContent>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <AnimatedContent>
            <div className="flex flex-col justify-center appear-animated appear-animated-delay-1">
              <h3 className="text-2xl font-bold mb-4 font-montserrat">
                <span className="bg-gradient-to-r from-[#4EDBE0] to-[#B945EE] text-transparent bg-clip-text">Hello</span>, I'm <span className="text-gradient">Prathyusha</span>
              </h3>
              <p className="mb-4 text-white-700 dark:text-gray-300">
              I am a B.Tech student in Information Technology at BVRIT. I am
              eager to apply my knowledge to real-world challenges and contribute
              to innovative tech projects.
              </p>
              <p className="mb-6 text-white-700 dark:text-gray-300">
                I believe in writing clean, maintainable code and creating intuitive user experiences.
                My approach combines technical expertise with creative problem-solving to deliver
                solutions that exceed expectations.
              </p>
            </div>
          </AnimatedContent>
          
          <div className="appear-animated appear-animated-delay-2 flex justify-center items-center">
            <div 
              ref={photoContainerRef}
              className="relative rounded-full overflow-hidden w-[300px] h-[300px] border-4 border-portfolio-primary shadow-xl 
                transform hover:scale-110 hover:rotate-3 hover:border-[#54F4F4] 
                active:scale-95 cursor-pointer transition-all duration-300 
                hover:shadow-[0_0_30px_rgba(84,244,244,0.3)]"
              onClick={handleImageClick}
            >
              <img 
                id="profile-img"
                src="https://res.cloudinary.com/dlled6nof/image/upload/v1745659450/prathyusha_ve4m15.jpg" 
                alt="Girigalla Prathyusha" 
                className="w-full h-full object-cover transition-transform duration-500"
              />
              
              {/* Render WebGL orbs */}
              {orbs.map(orb => (
                <Orb key={orb.id} x={orb.x} y={orb.y} hue={orb.hue} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;