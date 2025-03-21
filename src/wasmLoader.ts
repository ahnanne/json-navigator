// interface Snowflakes {
//   x: number;
//   y: number;
//   speed: number;
// }

export interface WasmExports {
  init_snowflakes: (width: number, height: number) => void;
  update_snowflakes: (width: number, height: number) => void;
  get_snowflakes: () => number;
  memory: Float32Array;
}

export async function loadWasm() {
  try {
    const response = await fetch("/wasm/snowflakes.wasm"); // WASM 파일 가져오기
    const bytes = await response.arrayBuffer();
    const { instance } = await WebAssembly.instantiate(bytes, {});

    return instance.exports as unknown as WasmExports; // 타입 캐스팅
  }
  catch (error) {
    console.error("Failed to load WASM: ", error);
    return null;
  }
}