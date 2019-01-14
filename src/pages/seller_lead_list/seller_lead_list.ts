import { Component } from '@angular/core';
import { ModalController, NavController, Platform, NavParams, ViewController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { SellerLeadDetailPage } from '../seller_lead_detail/seller_lead_detail';

@Component({
  selector: 'page-seller-lead-list',
  templateUrl: 'seller_lead_list.html'
})

export class SellerLeadListPage {
  tabs: string = "non_lavorate";
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
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

  goToSellerLeadDetail(){
    this.navCtrl.push(SellerLeadDetailPage);
  }

  presentSellerAppointmentModal() {
    const modal = this.modalCtrl.create(ModalManageAppointmentPage);
    modal.present();
  }

  presentSellerAppointmentResModal() {
    const modal = this.modalCtrl.create(ModalManageAppointmentResPage);
    modal.present();
  }

}

@Component({
  selector: 'modal-seller-appointment',
  templateUrl: '../modals/seller_appointment/seller_appointment.html'
})

export class ModalManageAppointmentPage {

  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }

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

@Component({
  selector: 'modal-seller-appointment-result',
  templateUrl: '../modals/seller_appointment/seller_appointment_result.html'
})

export class ModalManageAppointmentResPage {

  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }

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
