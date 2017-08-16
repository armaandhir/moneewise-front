import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ExpenseService } from '../../providers/expense-service'
import { Description } from '../description/description'

/**
 * Generated class for the Details page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class Details {

  expenses: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public expenseService: ExpenseService) {
    this.loadExpenses();
  }

  loadExpenses(){
    this.expenseService.getExpenses(new Date()).subscribe(
      result => {
        this.expenses = result;
        console.log(this.expenses);
      },
      err => {
        console.log('error in getExpenses()');
      },
      () => {
        console.log('Expenses retrieved');
      } 
    );
  }

  goToDescription(expense) {
    this.navCtrl.push('Description', {expense: expense});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Details');
    //this.loadExpenses();
  }

}
