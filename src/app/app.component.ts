import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GamesKhalidSaud';

  constructor() {
    // this.loadScripts();
  }

  ngOnInit() {
    // this.loadLink('assets/Games/Laser Defender v0.2/TemplateData/favicon.ico', 'shortcut icon');
    // this.loadLink('assets/Games/Laser Defender v0.2/TemplateData/style.css', 'stylesheet');
    // this.loadScript('assets/Games/Laser Defender v0.2/TemplateData/UnityProgress.js');
    // this.loadScript('assets/Games/Laser Defender v0.2/Build/UnityLoader.js');
  }

  // ngAfterViewInit() {
  //   // this.loadScriptInstance();
  //   this.launchInstance();
  // }

  // loadScripts() {
  //   const dynamicScripts = [
  //    '../../assets/Games/Laser Defender v0.2/TemplateData/UnityProgress.js',
  //    '../../assets/Games/Laser Defender v0.2/Build/UnityLoader.js'
  //   ];

  //   for (let i = 0; i < dynamicScripts.length; i++) {
  //     const node = document.createElement('script');
  //     node.src = dynamicScripts[i];
  //     node.type = 'text/javascript';
  //     node.async = false;
  //     node.charset = 'utf-8';
  //     document.getElementsByTagName('head')[0].appendChild(node);
  //   }
  // }

  // loadScriptInstance() {
  //   const node = document.createElement('script');
  //   // tslint:disable-next-line: max-line-length
  //   node.textContent = 'var LaserDefenderGameInstance = UnityLoader.instantiate("gameContainer", "../../assets/Games/Laser Defender v0.2/Build/Laser Defender v0.2.json", {onProgress: UnityProgress});';
  //   node.type = 'text/javascript';
  //   node.async = false;
  //   // tslint:disable-next-line: deprecation
  //   node.charset = 'utf-8';
  //   document.getElementsByTagName('head')[0].appendChild(node);
  // }

  // launchInstance() {
  //   setTimeout(() => {
  //     console.log('test');
  //     this.loadScriptInstance();
  //   }, 3000);
  // }

}
