import * as THREE from 'three';

import { Brick } from './ts/Brick';

class App{
    constructor(){
        this.brick = new Brick(100, new THREE.Color("rgb(0,0,255)"));
        this.scene.add(this.brick);

        this.camera.position.set(200,200,200);
        this.renderer.setSize(innerWidth, innerHeight);
        this.renderer.setClearColor(new THREE.Color("rgb(0,0,0)"));
        this.camera.lookAt(<THREE.Vector3>{x:0,y:0,z:0});

        this.render();
    }

    private readonly renderer = new THREE.WebGLRenderer({antialias:true, canvas:<HTMLCanvasElement>document.getElementById("mainCanvas")});
    private readonly scene = new THREE.Scene();
    private readonly camera = new THREE.PerspectiveCamera(45, innerWidth/innerHeight, 0.1, 10000);

     // Example mesh
    private brick:Brick;

    private adjustCanvasSize(){
        this.renderer.setSize(innerWidth, innerHeight);
        this.camera.aspect = innerWidth/innerHeight;
        this.camera.updateProjectionMatrix();
    }
    private render(){
        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(()=>{this.render()});
        this.adjustCanvasSize();

        this.brick.rotateY(0.03);
    }
}

const app = new App();
