import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-refresh-lead-detail',
  templateUrl: 'refresh_lead_detail.html'
})
export class RefreshLeadDetailPage {
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
