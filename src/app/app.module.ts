import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { HomeRefresherPage } from '../pages/home_refresher/home_refresher';
import { RefreshListPage } from '../pages/refresh_list/refresh_list';
import { RefreshDetailPage } from '../pages/refresh_detail/refresh_detail';
import { RefreshVisitPage } from '../pages/refresh_visit/refresh_visit';
import { RefreshLeadListPage } from '../pages/refresh_lead_list/refresh_lead_list';
import { RefreshLeadDetailPage } from '../pages/refresh_lead_detail/refresh_lead_detail';
import { AmVendorListPage } from '../pages/am_vendor_list/am_vendor_list';
import { AmVendorDetailPage } from '../pages/am_vendor_detail/am_vendor_detail';
import { AmLeadListPage } from '../pages/am_lead_list/am_lead_list';
import { ModalAssignLeadPage } from '../pages/am_lead_list/am_lead_list';
import { SellerLeadListPage } from '../pages/seller_lead_list/seller_lead_list';
import { SellerLeadDetailPage } from '../pages/seller_lead_detail/seller_lead_detail';
import { ModalManageAppointmentPage } from '../pages/seller_lead_list/seller_lead_list';
import { ModalManageAppointmentResPage } from '../pages/seller_lead_list/seller_lead_list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CallNumber } from '@ionic-native/call-number';
import { FileTransfer } from '@ionic-native/file-transfer';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    HomeRefresherPage,
    RefreshListPage,
    RefreshDetailPage,
    RefreshVisitPage,
    RefreshLeadListPage,
    RefreshLeadDetailPage,
    AmVendorListPage,
    AmVendorDetailPage,
    AmLeadListPage,
    ModalAssignLeadPage,
    SellerLeadListPage,
    SellerLeadDetailPage,
    ModalManageAppointmentPage,
    ModalManageAppointmentResPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    HomeRefresherPage,
    RefreshListPage,
    RefreshDetailPage,
    RefreshVisitPage,
    RefreshLeadListPage,
    RefreshLeadDetailPage,
    AmVendorListPage,
    AmVendorDetailPage,
    AmLeadListPage,
    ModalAssignLeadPage,
    SellerLeadListPage,
    SellerLeadDetailPage,
    ModalManageAppointmentPage,
    ModalManageAppointmentResPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CallNumber,
    FileTransfer,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
