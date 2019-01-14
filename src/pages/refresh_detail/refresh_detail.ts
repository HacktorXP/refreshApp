import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-refresh-detail',
  templateUrl: 'refresh_detail.html'
})
export class RefreshDetailPage {
  tabs: string = "anagrafica";
  isAndroid: boolean = false;

  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }

  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }
}
