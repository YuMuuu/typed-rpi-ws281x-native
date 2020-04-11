// https://github.com/beyondscreen/node-rpi-ws281x-native

declare module 'rpi-ws281x-native' {
  export function init(numLeds: number, options?: Object): void;
  export function setIndexMapping(map: Array<number>): void;
  export function render(data: Uint32Array): Uint32Array;
  export function setBrightness(brightness: number): void;
  export function reset(): void;
  export function isStub(): boolean;
}
