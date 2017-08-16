import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';
import { ExpenseService } from '../../providers/expense-service';

@IonicPage()
@Component({
  selector: 'page-add-expense-modal',
  templateUrl: 'add-expense-modal.html',
})
export class AddExpenseModalPage {

 constructor(public viewCtrl: ViewController, public expenseService: ExpenseService) {
 }

 dismiss(){
   this.viewCtrl.dismiss();
 }

 addTransaction(){

   var data = 'stormpathEmail=dhir.armaan@gmail.com' + 
      '&place=walmart' + '&amount=21' + 
      '&currency=CAD' + '&categoryId=1' + '&description=meat';
    this.expenseService.addExpense(data).subscribe(
      data => {
        console.log('added');
      },
        err => {
        console.log('error in addExpense() '+ err);
      },
    );
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddExpenseModal');
  }

}
