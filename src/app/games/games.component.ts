import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit, AfterViewInit {

  constructor() {}

  ngOnInit() {
    this.loadLink('assets/Games/Laser Defender v0.2/TemplateData/favicon.ico', 'shortcut icon');
    this.loadLink('assets/Games/Laser Defender v0.2/TemplateData/style.css', 'stylesheet');
    this.loadScript('assets/Games/Laser Defender v0.2/TemplateData/UnityProgress.js');
    this.loadScript('assets/Games/Laser Defender v0.2/Build/UnityLoader.js');
  }

  ngAfterViewInit() {
    this.loadScriptInstance();
  }

  loadLink(url: string, rel: string) {
    const node = document.createElement('link');
    node.href = '' + url; // insert url in between quotes
    node.rel = rel;
    // tslint:disable-next-line: deprecation
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
  }

  loadScript(url: string) {
    const node = document.createElement('script');
    node.src = 'assets/Games/Laser Defender v0.2/Build/UnityLoader.js'; // insert url in between quotes
    node.type = 'text/javascript';
    node.async = true;
    // tslint:disable-next-line: deprecation
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
  }

  loadScriptInstance() {
    const node = document.createElement('script');
    // tslint:disable-next-line: max-line-length
    node.textContent = 'var LaserDefenderGameInstance = UnityLoader.instantiate("gameContainer", "assets/Games/Laser Defender v0.2/Build/Laser Defender v0.2.json", {onProgress: UnityProgress});';
    node.type = 'text/javascript';
    node.async = true;
    // tslint:disable-next-line: deprecation
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
  }

}
