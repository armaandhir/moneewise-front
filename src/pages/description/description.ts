import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ExpenseService } from '../../providers/expense-service';

/**
 * Generated class for the Description page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-description',
  templateUrl: 'description.html',
})
export class Description {

  expense: any;
  expenseDesc: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public expenseService: ExpenseService) {
    this.expense = navParams.get('expense');
    this.loadDescription();
  }

  loadDescription(){
    this.expenseService.getExpenseDesc(this.expense.id).subscribe(
      result => {
        this.expenseDesc = result;
        console.log(this.expenseDesc);
      },
      err => {
        console.log('error in getExpenses()');
      },
      () => {
        console.log('Expenses retrieved');
      } 
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Description');
  }

}
