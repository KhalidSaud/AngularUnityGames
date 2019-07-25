import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  currentGameName = '';

  constructor() { }

  setCurrentGameName(gameName: string) {
    this.currentGameName = gameName;
  }

  getCurrentGameName() {
    return this.currentGameName;
  }

}
