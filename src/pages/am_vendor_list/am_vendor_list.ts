import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AmVendorDetailPage } from '../am_vendor_detail/am_vendor_detail';

@Component({
  selector: 'page-am-vendor-list',
  templateUrl: 'am_vendor_list.html'
})
export class AmVendorListPage {

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController
  ) {

  }

  showDeleteConfirm(){
    const confirm = this.alertCtrl.create({
    title: 'Conferma',
    message: 'Sicuro di voler procedere con l\'eliminazione del venditore?',
    buttons: [
      {
        text: 'Annulla',
        handler: () => {
          console.log('Disagree clicked');
        }
      },
      {
        text: 'Procedi',
        handler: () => {
          console.log('Agree clicked');
        }
      }
        ]
      });
    confirm.present();
    }

    goToAmVendorDetail(){
      this.navCtrl.push(AmVendorDetailPage);
    }

}
