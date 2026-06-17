<script setup lang="ts">
import { Mesh, Program, Renderer, Triangle } from "ogl";
import { onBeforeUnmount, onMounted, useTemplateRef } from "vue";

const props = withDefaults(
  defineProps<{
    noise?: number;
    scale?: number;
    timeScale?: number;
    transparent?: boolean;
  }>(),
  {
    noise: 0.045,
    scale: 1,
    timeScale: 0.5,
    transparent: false,
  },
);

const containerRef = useTemplateRef<HTMLDivElement>("containerRef");

let cleanup: (() => void) | null = null;

function setupPrism() {
  const container = containerRef.value;

  if (!container) return;

  const renderer = new Renderer({
    dpr: Math.min(2, window.devicePixelRatio || 1),
    alpha: props.transparent,
    antialias: false,
  });
  const gl = renderer.gl;

  gl.disable(gl.DEPTH_TEST);
  gl.disable(gl.CULL_FACE);

  Object.assign(gl.canvas.style, {
    position: "absolute",
    inset: "0",
    width: "100%",
    height: "100%",
    display: "block",
  });

  container.appendChild(gl.canvas);

  const resolution = new Float32Array(2);

  const program = new Program(gl, {
    vertex: /* glsl */ `
      attribute vec2 position;

      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `,
    fragment: /* glsl */ `
      precision highp float;

      uniform vec2 uResolution;
      uniform float uTime;
      uniform float uNoise;
      uniform float uScale;

      mat2 rotate2d(float angle) {
        float s = sin(angle);
        float c = cos(angle);
        return mat2(c, -s, s, c);
      }

      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
      }

      float prism(vec2 p, float sides, float radius) {
        float angle = atan(p.x, p.y) + 3.14159265;
        float sector = 6.28318530 / sides;
        return cos(floor(0.5 + angle / sector) * sector - angle) * length(p) - radius;
      }

      void main() {
        vec2 uv = (gl_FragCoord.xy * 2.0 - uResolution.xy) / min(uResolution.x, uResolution.y);
        uv *= uScale;

        float t = uTime * 0.24;
        vec2 p = uv * rotate2d(t);
        float shape = prism(p, 4.0, 0.56 + sin(uTime * 0.32) * 0.04);
        float edge = smoothstep(0.18, -0.015, abs(shape));
        float core = smoothstep(0.4, -0.5, shape);

        vec3 base = vec3(0.02, 0.03, 0.10);
        vec3 cyan = vec3(0.04, 0.84, 1.0);
        vec3 blue = vec3(0.22, 0.42, 1.0);
        vec3 pink = vec3(1.0, 0.18, 0.64);

        float sweep = sin((uv.x + uv.y) * 2.2 + uTime * 0.75) * 0.5 + 0.5;
        vec3 color = mix(base, mix(blue, pink, sweep), core * 0.76);
        color += cyan * edge * 0.9;
        color += pink * smoothstep(0.65, 0.0, length(uv - vec2(0.54, -0.32))) * 0.26;
        color += blue * smoothstep(0.78, 0.0, length(uv + vec2(0.42, 0.28))) * 0.34;

        float grid = step(0.985, sin((uv.x + t) * 34.0)) + step(0.985, sin((uv.y - t) * 34.0));
        color += grid * vec3(0.06, 0.16, 0.26);

        float vignette = smoothstep(1.46, 0.2, length(uv));
        color *= vignette;
        color += (hash(gl_FragCoord.xy + uTime) - 0.5) * uNoise;

        gl_FragColor = vec4(color, 1.0);
      }
    `,
    uniforms: {
      uResolution: { value: resolution },
      uTime: { value: 0 },
      uNoise: { value: props.noise },
      uScale: { value: props.scale },
    },
  });

  const geometry = new Triangle(gl);
  const mesh = new Mesh(gl, { geometry, program });
  const startedAt = performance.now();
  let raf = 0;

  function resize() {
    const width = container?.clientWidth || 1;
    const height = container?.clientHeight || 1;

    renderer.setSize(width, height);
    resolution[0] = gl.drawingBufferWidth;
    resolution[1] = gl.drawingBufferHeight;
  }

  function render(now: number) {
    program.uniforms.uTime.value = ((now - startedAt) / 1000) * props.timeScale;
    renderer.render({ scene: mesh });
    raf = requestAnimationFrame(render);
  }

  const observer = new ResizeObserver(resize);

  observer.observe(container);
  resize();
  raf = requestAnimationFrame(render);

  cleanup = () => {
    cancelAnimationFrame(raf);
    observer.disconnect();

    if (gl.canvas.parentElement === container) {
      container.removeChild(gl.canvas);
    }
  };
}

onMounted(setupPrism);

onBeforeUnmount(() => {
  cleanup?.();
});
</script>

<template>
  <div ref="containerRef" class="absolute inset-0 overflow-hidden bg-[#050816]" />
</template>
