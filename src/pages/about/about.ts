import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RestProvider } from '../../providers/rest/rest';




@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

	users: any;

	//sorting code
	descending: boolean = false;
	order: number;
	column: string = 'name';

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
  	
  	this.getBiz();
  		
  }

  getBiz() {
    this.restProvider.getData()
    .then(data => {
      this.users = data;
      console.log(this.users);
    });
  }


  sort(){
  this.descending = !this.descending;
  this.order = this.descending ? 1 : -1;
}


   


  ionViewDidLoad() {
    console.log('About page! ');
  }

}
