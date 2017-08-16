import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Details } from '../details/details';
import { AddExpenseModalPage } from '../add-expense-modal/add-expense-modal';

/**
 * Generated class for the Tabs page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root:any= 'HomePage';
  tab2Root:any= 'Details';
  //tab3Root = ContactPage;

  //constructor () {
  //}

  constructor(public modalCtrl: ModalController) {

  }

  //constructor(public navCtrl: NavController, public navParams: NavParams) {
  //}

  openModal() {
    let myModal = this.modalCtrl.create('AddExpenseModalPage');
    myModal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tabs');
  }

}
