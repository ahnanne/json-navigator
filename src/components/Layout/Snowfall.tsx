import { useEffect, useRef, useState, useCallback } from "react";
import { loadWasm, WasmExports } from "wasmLoader";
import { debounce } from 'lodash';

const NUMBER_OF_SNOWFLAKES = 300;
const SNOWFLAKE_FIELDS = 6; // 눈송이 구조체의 필드 개수

const Snowfall = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [wasm, setWasm] = useState<WasmExports | null>(null);

  const handleClientResize = useCallback(
    debounce(() => {
      if (canvasRef.current) {
        const width = document.documentElement.clientWidth;
        const height = document.documentElement.clientHeight;
    
        canvasRef.current.width = width;
        canvasRef.current.height = height;
      }
    }, 200),
    [canvasRef]
  );

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
      const width = document.documentElement.clientWidth;
      const height = document.documentElement.clientHeight;

      canvas.width = width;
      canvas.height = height;

      wasm.init_snowflakes(width, height);

      // * wasm가 저장된 메모리 공간으로부터 눈송이 정보를 읽어서 Float32Array(4 byte 실수를 저장하는 배열)로 변환
      const snowflakes = new Float32Array( // 숫자 하나 당 4 byte
        wasm.memory.buffer, // 버퍼(wasm가 사용하는 메모리 공간 전체) - Emscripten 기본값은 16MB(256 페이지, byte length=16908288)
        wasm.get_snowflakes(), // 버퍼의 어느 지점부터 데이터를 읽을지 전달
        NUMBER_OF_SNOWFLAKES * SNOWFLAKE_FIELDS, // 읽어올 요소의 개수 (눈송이 100개 * 눈송이 구조체 필드 개수 -> 총 1200 byte)
      );
      // * 참고:
      // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#buffer

      const render = () => {
        wasm.update_snowflakes(canvas.width, canvas.height);
        
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.fillStyle = "rgba(0, 0, 0, 0.1)";

          for (let i = 0; i < snowflakes.length; i += SNOWFLAKE_FIELDS) {
            const gradient = ctx.createRadialGradient(
              snowflakes[i],
              snowflakes[i + 1],
              0,
              snowflakes[i],
              snowflakes[i + 1],
              snowflakes[i + 5],
            );

            gradient.addColorStop(
              0,
              `rgba(255, 255, 255, ${snowflakes[i + 4]})`
            );
            gradient.addColorStop(
              0,
              `rgba(210, 236, 242, ${snowflakes[i + 4]})`
            );
            gradient.addColorStop(
              0,
              `rgba(237, 247, 249, ${snowflakes[i + 4]})`
            );

            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(snowflakes[i], snowflakes[i + 1], snowflakes[i + 5], 0, Math.PI * 2);
            ctx.fill();

            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;
            ctx.shadowColor = "#fafafa60";
            ctx.shadowBlur = 7;
          }
        }

        requestAnimationFrame(render); // 애니메이션을 부드럽게 구현하기 위함. - cf.) setInterval()과 달리 탭이 비활성화되면 멈추므로 CPU 자원 절약
        // * 참고:
        // https://developer.mozilla.org/ko/docs/Web/API/Window/requestAnimationFrame
      };

      render();
    }
  }, [wasm]);

  useEffect(() => {
    window.addEventListener('resize', handleClientResize);

    return () => {
      window.removeEventListener('resize', handleClientResize);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: "fixed", top: 0, right: 0, bottom: 0, left: 0, width: "100vw", height: "100vh", pointerEvents: "none"  }} />
};

export default Snowfall;