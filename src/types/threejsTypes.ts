import { Vector3Tuple } from 'three';
import { SkillContent } from './dataTypes';

export interface Book extends SkillContent {
  id: string;
  position: Vector3Tuple;
  width: number; // The width is the spine thickness
  height: number;
  depth: number;
  rotation: Vector3Tuple | null;
}

export interface Decoration {
  id: string;
  position: Vector3Tuple;
  size: Vector3Tuple;
  rotation: Vector3Tuple;
}
