import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RefreshListPage } from '../refresh_list/refresh_list';
import { RefreshLeadListPage } from '../refresh_lead_list/refresh_lead_list';

@Component({
  selector: 'page-home-refresher',
  templateUrl: 'home_refresher.html'
})
export class HomeRefresherPage {

  constructor(public navCtrl: NavController) {

  }

  goToRefreshListPage() {
    this.navCtrl.push(RefreshListPage);
  }

  goToRefreshLeadListPage() {
    this.navCtrl.push(RefreshLeadListPage);
  }

}
