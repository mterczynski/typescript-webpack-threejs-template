import { Color, PerspectiveCamera, Scene, Vector3, WebGLRenderer } from 'three';
import { Brick } from './Brick';

export class App {
  private readonly scene = new Scene();
  private readonly camera = new PerspectiveCamera(45, innerWidth / innerHeight, 0.1, 10000);
  private readonly renderer = new WebGLRenderer({
    antialias: true,
    canvas: <HTMLCanvasElement>document.getElementById("main-canvas")
  });

  private brick: Brick;

  constructor() {
    this.brick = new Brick(100, new Color("rgb(0,0,0)"));
    this.scene.add(this.brick);

    this.camera.position.set(200, 200, 200);
    this.camera.lookAt(<Vector3>{ x: 0, y: 0, z: 0 });

    this.renderer.setSize(innerWidth, innerHeight);
    this.renderer.setClearColor(new Color(0xffffff));

    this.render();
  }

  private adjustCanvasSize() {
    this.renderer.setSize(innerWidth, innerHeight);
    this.camera.aspect = innerWidth / innerHeight;
    this.camera.updateProjectionMatrix();
  }

  private render() {
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(() => { this.render() });

    this.adjustCanvasSize();
    this.brick.rotateY(0.03);
  }
}
