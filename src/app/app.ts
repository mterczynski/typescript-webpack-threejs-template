import {
  PerspectiveCamera,
  Scene,
  Vector3,
  WebGLRenderer,
  Timer,
} from "three";
import { Brick } from "./brick";

export class App {
  private readonly timer = new Timer();
  private readonly scene = new Scene();

  private readonly camera = new PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    10000
  );

  private readonly renderer = new WebGLRenderer({
    antialias: true,
    canvas: document.getElementById("main-canvas") as HTMLCanvasElement,
  });

  private brick: Brick;

  constructor() {
    this.brick = new Brick (100, "red");
    this.scene.add(this.brick);

    this.camera.position.set(200, 200, 200);
    this.camera.lookAt(new Vector3(0, 0, 0));

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setClearColor("black");

    window.addEventListener("resize", () => this.adjustCanvasSize());

    this.renderer.setAnimationLoop(this.animate);
  }

  private adjustCanvasSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.renderer.setSize(width, height);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  }

  private animate = () => {
    this.timer.update();
    const delta = this.timer.getDelta();

    this.brick.rotateY(3 * delta);

    this.renderer.render(this.scene, this.camera);
  };
}