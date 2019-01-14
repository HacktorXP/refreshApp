import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-am-vendor-detail',
  templateUrl: 'am_vendor_detail.html'
})
export class AmVendorDetailPage {
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
