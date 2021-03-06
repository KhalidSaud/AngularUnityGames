import { Component, OnInit, AfterViewInit } from '@angular/core';
import { debug } from 'util';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit, AfterViewInit {

  chosenGameScriptsArray = [];
  chosenGameInstanceName = '';
  chosenGameInstance = '';
  gameName = '';

  blockBreaker = [
    '../../assets/Games/Block Breaker v1.1/TemplateData/UnityProgress.js',
    '../../assets/Games/Block Breaker v1.1/Build/UnityLoader.js'
  ];

  // tslint:disable-next-line: max-line-length
  blockBreakerInstance = 'var instance = UnityLoader.instantiate("gameContainer", "assets/Games/Block Breaker v1.1/Build/Block Breaker v1.1.json", {onProgress: UnityProgress});';

  laserDefender = [
    '../../assets/Games/Laser Defender v0.2/TemplateData/UnityProgress.js',
    '../../assets/Games/Laser Defender v0.2/Build/UnityLoader.js'
  ];

  // tslint:disable-next-line: max-line-length
  laserDefenderInstance = 'var instance = UnityLoader.instantiate("gameContainer", "assets/Games/Laser Defender v0.2/Build/Laser Defender v0.2.json", {onProgress: UnityProgress});';

  constructor(private route: ActivatedRoute, private shared: SharedService) {
    const gameName = this.route.snapshot.paramMap.get('gameName');
    if (gameName === 'BlockBreaker') {
      this.chosenGameScriptsArray = this.blockBreaker;
      this.chosenGameInstance = this.blockBreakerInstance;
      this.gameName = 'Block Breaker';
    }
    if (gameName === 'LaserDefender') {
      this.chosenGameScriptsArray = this.laserDefender;
      this.chosenGameInstance = this.laserDefenderInstance;
      this.gameName = 'Laser Defender';
    }
    this.loadScripts(this.chosenGameScriptsArray);
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.launchInstance();
  }

  loadScripts(scripts: string[]) {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < scripts.length; i++) {
      const node = document.createElement('script');
      node.src = scripts[i];
      node.type = 'text/javascript';
      node.async = false;
      // tslint:disable-next-line: deprecation
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }

  loadScriptInstance() {
    const node = document.createElement('script');
    // tslint:disable-next-line: max-line-length
    node.textContent = this.chosenGameInstance;
    node.type = 'text/javascript';
    node.async = true;
    // tslint:disable-next-line: deprecation
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
  }

  launchInstance() {
    setTimeout(() => {
      this.loadScriptInstance();
    }, 2000);
  }

}
