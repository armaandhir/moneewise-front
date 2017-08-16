import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ExpenseService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ExpenseService {

  dataURL: string;
  uri: string;

  constructor(public http: Http) {
    console.log('Hello ExpenseService Provider');
    this.uri ='http://localhost:8080/moneewise/api/';
    this.dataURL = 'http://localhost:8080/moneewise/api/expense/month?stormpath_email=kash@gmail.com&month=2&year=2017';
  }

  addExpense(data){
    var endpoint = this.uri + 'expense';
    var myHeaders = new Headers();
    myHeaders.set('Content-type', 'application/x-www-form-urlencoded');
    return this.http.post(endpoint, data, {headers: myHeaders});
  }

  /*
    Gets the list of all expenses
  */
  getExpenses(date) {
    var myHeaders = new Headers();
    myHeaders.set('Content-type', 'application/json');
    var endpoint = this.uri + 'expense/month';
    endpoint += '?stormpath_email=' + 'dhir.armaan@gmail.com';
    endpoint += '&month=' + (date.getMonth()+1);
    endpoint += '&year=' + date.getFullYear();
    return this.http.get(endpoint, {headers: myHeaders}).map(res => res.json());
  }

  /*
    Gets the description of the expense if exists.
  */
  getExpenseDesc(expenseId) {
    var myHeaders = new Headers();
    myHeaders.set('Content-type', 'application/json');
    var endpoint = this.uri + 'expense/desc/' + expenseId;
    return this.http.get(endpoint, {headers: myHeaders}).map(res => res.json());
  }

}
