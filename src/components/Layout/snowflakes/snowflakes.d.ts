/* tslint:disable */
/* eslint-disable */
/**
*/
export class Particle {
  free(): void;
}
/**
*/
export class SnowCanvas {
  free(): void;
/**
* @param {number} width
* @param {number} height
* @param {number} count
* @returns {SnowCanvas}
*/
  static new(width: number, height: number, count: number): SnowCanvas;
/**
*/
  update(): void;
/**
* @param {number} index
* @returns {number}
*/
  get_particle_x(index: number): number;
/**
* @param {number} index
* @returns {number}
*/
  get_particle_y(index: number): number;
/**
* @param {number} index
* @returns {number}
*/
  get_particle_opacity(index: number): number;
/**
* @param {number} index
* @returns {number}
*/
  get_particle_speed_x(index: number): number;
/**
* @param {number} index
* @returns {number}
*/
  get_particle_speed_y(index: number): number;
/**
* @param {number} index
* @returns {number}
*/
  get_particle_radius(index: number): number;
}
