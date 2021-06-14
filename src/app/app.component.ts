import { Component } from '@angular/core';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { MeshOptions } from 'angular-stl-model-viewer';

import * as THREE from 'three'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Examples'

  renderer = new THREE.WebGLRenderer({ antialias: true });
  camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 1, 15);
  controls = new OrbitControls(this.camera, this.renderer.domElement);
  scene = new THREE.Scene();
  light = new THREE.PointLight(0xffffff);
  meshOptions: MeshOptions[] = [{
    position: new THREE.Vector3(2, 0, 0),
  }];

  constructor() {
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.shadowMap.enabled = true

    // default camera position
    this.camera.position.set(3, 3, 3)

    // default light position
    this.light.position.set(1, 1, 2)

    // default scene background
    this.scene.background = new THREE.Color(0xffffff)

    this.controls.enableZoom = true
    this.controls.minDistance = 1
    this.controls.maxDistance = 7

    this.controls.update()
  }


  stlModelFiles: string[] = [];

  /**
   * 
   * @param $event ファイル選択処理
   */
  changeFile($event: Readonly<Event>): void {
    // 処理
    const element = $event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    
    //fileが選択されていなければ何もしない
    if(!fileList || fileList.length === 0) {
      return;
    }
    
    if (fileList) {
      console.log("FileUpload -> files", fileList);
      let f = fileList[0];
      const r = new FileReader();

      // 読み込み終了
      r.onloadend = function (e) {
        //send your binary data via $http or $resource or do anything else with it
        console.log("stl モデル読めたよ");

        const res = r.result;
        if(typeof res === 'string'){
          const fs: string = res;
          const tmp: string[] = [];
          tmp.push(fs);
    
          // this.stlModelFiles = tmp;
        }
      }

      r.readAsBinaryString(f);
    }
  }
}
