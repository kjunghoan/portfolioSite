import { Vector2 } from 'three';

export interface Book {
  id: string;
  position: Vector2;
  width: number;
  height: number;
  rotation?: number; // In radians
  title?: string;
  logo?: string;
  type?: 'language' | 'framework' | 'database' | 'cloud' | 'tool' | 'misc';
}

export interface Decoration {
  id: string;
  position: Vector2;
  size: Vector2;
  rotation?: number;
}
