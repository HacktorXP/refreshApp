import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RefreshLeadDetailPage } from '../refresh_lead_detail/refresh_lead_detail';

@Component({
  selector: 'page-refresh-lead-list',
  templateUrl: 'refresh_lead_list.html'
})
export class RefreshLeadListPage {

  constructor(
    public navCtrl: NavController,
  ) {
  }

  goToRefreshLeadDetail(){
    this.navCtrl.push(RefreshLeadDetailPage);
  }

}
