import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { RefreshDetailPage } from '../refresh_detail/refresh_detail';
import { RefreshVisitPage } from '../refresh_visit/refresh_visit';

@Component({
  selector: 'page-refresh-list',
  templateUrl: 'refresh_list.html'
})
export class RefreshListPage {

  constructor(
    public navCtrl: NavController,
    public actionSheetCtrl: ActionSheetController,
    private callNumber: CallNumber
  ) {

  }

  presentCalls() {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Rubrica',
      buttons: [
        {
          text: 'Chiama +39 081 540 52 45',
          role: 'destructive',
          handler: () => {
            this.callNumber.callNumber("18001010101", true)
              .then(res => console.log('Launched dialer!', res))
              .catch(err => console.log('Error launching dialer', err));
          }
        },{
          text: 'Chiama +39 339 630 78 16',
          role: 'destructive',
          handler: () => {
            console.log('Bau');
          }
        },{
          text: 'Annulla',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  presentDownloads() {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Rubrica',
      buttons: [
        {
          text: 'Scarica ultima fattura Energia',
          role: 'destructive',
          handler: () => {

          }
        },{
          text: 'Scarica ultima fattura GAS',
          role: 'destructive',
          handler: () => {
            console.log('Bau');
          }
        },{
          text: 'Annulla',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  goToRefreshDetail(){
    this.navCtrl.push(RefreshDetailPage);
  }

  goToRefreshVisit(){
    this.navCtrl.push(RefreshVisitPage);
  }

}

  export class SlidingPage { }
