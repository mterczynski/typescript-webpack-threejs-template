import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  ColorRepresentation,
} from "three";
export class Brick extends Mesh {
  constructor(size: number, color: ColorRepresentation) {
    const geometry = new BoxGeometry(size, size, size);
    const material = new MeshBasicMaterial({ color });

    super(geometry, material);
  }
}