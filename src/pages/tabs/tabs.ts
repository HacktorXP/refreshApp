import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomeRefresherPage } from '../home_refresher/home_refresher';
import { AmVendorListPage } from '../am_vendor_list/am_vendor_list';
import { AmLeadListPage } from '../am_lead_list/am_lead_list';
import { SellerLeadListPage } from '../seller_lead_list/seller_lead_list';
import { RefreshListPage } from '../refresh_list/refresh_list';
import { RefreshLeadListPage } from '../refresh_lead_list/refresh_lead_list';
import { roleTabs } from '../../models/role_tabs';

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {

  refresherTabs : roleTabs = {
    role: 'refresher',
    tabs: [
      {name : 'tab1Root', page : RefreshListPage, title : 'Refresh' , icon : 'briefcase' },
      {name : 'tab2Root', page : RefreshLeadListPage, title : 'Lead caricate', icon : 'man'},
      //{name : 'tab3Root', page : ContactPage, title : 'Contact', icon : 'contacts'},
    ]
  }

  areaManagerTabs : roleTabs = {
    role: 'areaManager',
    tabs: [
      {name : 'tab1Root', page : AmLeadListPage, title : 'Lead' , icon : 'man' },
      {name : 'tab2Root', page : AmVendorListPage, title : 'Venditori', icon : 'contacts'},
      //{name : 'tab3Root', page : ContactPage, title : 'Contact', icon : 'contacts'},
    ]
  }

  sellerTabs : roleTabs = {
    role: 'seller',
    tabs: [
      {name : 'tab1Root', page : SellerLeadListPage, title : 'Lead' , icon : 'man' },
      //{name : 'tab2Root', page : AmVendorListPage, title : 'Venditori', icon : 'contacts'},
      //{name : 'tab3Root', page : ContactPage, title : 'Contact', icon : 'contacts'},
    ]
  }

  selectedTabs = this.sellerTabs;


  constructor() {

  }
}
