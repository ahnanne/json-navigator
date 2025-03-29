// interface Snowflakes {
//   x: number;
//   y: number;
//   speed: number;
// }

export interface WasmExports {
  /** 눈송이들 생성 */
  init_snowflakes: (width: number, height: number) => void;
  /** 눈송이들 좌표 변경 */
  update_snowflakes: (width: number, height: number) => void;
  /** 눈송이들 데이터가 저장된 메모리의 시작 위치(byte 단위)를 반환 */
  get_snowflakes: () => number;
  memory: Float32Array;
}

export async function loadWasm() {
  try {
    const response = await fetch("/json-navigator/wasm/snowflakes.wasm"); // WASM 파일 가져오기
    const bytes = await response.arrayBuffer();
    const { instance } = await WebAssembly.instantiate(bytes, {});

    return instance.exports as unknown as WasmExports; // 타입 캐스팅
  }
  catch (error) {
    console.error("Failed to load WASM: ", error);
    return null;
  }
}