import { useEffect, useRef, useState } from "react";
import { loadWasm ,WasmExports } from "wasmLoader";

const Snowfall = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [wasm, setWasm] = useState<WasmExports | null>(null);

  useEffect(() => {
    loadWasm().then((wasm) => {
      if (wasm) {
        setWasm(wasm);
      }
    });
  }, []);

  useEffect(() => {
    if (!wasm) {
      return;
    }

    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width;
      canvas.height = height;

      wasm.init_snowflakes(width, height);

      const render = () => {
        wasm.update_snowflakes(width, height);

        const snowflakes = new Float32Array(
          wasm.memory.buffer, // buffer
          wasm.get_snowflakes(), // byteOffset
          100 * 3, // length
        );
        // * 참고:
        // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#buffer

        if (ctx) {
          ctx.clearRect(0, 0, width, height);
          ctx.fillStyle = "#fafafa";

          for (let i = 0; i < 100; i++) {
            ctx.beginPath();
            ctx.arc(snowflakes[i * 3], snowflakes[i * 3 + 1], 3, 0, Math.PI * 2);
            ctx.fill();
          }
        }

        requestAnimationFrame(render); // 애니메이션을 부드럽게 구현하기 위함.
        // * 참고:
        // https://developer.mozilla.org/ko/docs/Web/API/Window/requestAnimationFrame
      };

      render();
    }
  }, [wasm]);

  return <canvas ref={canvasRef} style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", pointerEvents: "none"  }} />
};

export default Snowfall;