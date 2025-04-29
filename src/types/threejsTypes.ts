import { Vector3 } from 'three';
import { SkillContent } from './dataTypes';

export interface Book extends SkillContent {
  id: string;
  position: Vector3;
  width: number;
  height: number;
  depth: number;
  rotation: Vector3;
}

export interface Decoration {
  id: string;
  position: Vector3;
  size: Vector3;
  rotation: Vector3;
}
