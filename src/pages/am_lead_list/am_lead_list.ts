import { Component } from '@angular/core';
import { ModalController, NavController, Platform, NavParams, ViewController, AlertController } from 'ionic-angular';
import { RefreshLeadDetailPage } from '../refresh_lead_detail/refresh_lead_detail';

@Component({
  selector: 'page-am-lead-list',
  templateUrl: 'am_lead_list.html'
})

export class AmLeadListPage {
  tabs: string = "non_assegnate";
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    private alertCtrl: AlertController
  ) {
  }

  presentAssignLeadModal() {
    const modal = this.modalCtrl.create(ModalAssignLeadPage);
    modal.present();
  }

  rejectLead() {
    let alert = this.alertCtrl.create({
      title: 'Motivazione',
      inputs: [
        {
          name: 'motivazione',
          placeholder: 'Motivazione'
        }
      ],
      buttons: [
        {
          text: 'Annulla',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Rigetta',
          handler: data => {

          }
        }
      ]
    });
    alert.present();
  }

  goToRefreshLeadDetail(){
    this.navCtrl.push(RefreshLeadDetailPage);
  }

}

@Component({
  selector: 'modal-assign-lead',
  templateUrl: '../modals/assign_lead/assign_lead.html'
})

export class ModalAssignLeadPage {

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
