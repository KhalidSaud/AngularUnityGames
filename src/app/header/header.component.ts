import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  gameName = '';
  gotName = false;
  constructor(private route: ActivatedRoute, private shared: SharedService) {
  }

  ngOnInit() { }

}
