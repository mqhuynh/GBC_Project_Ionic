import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',


  /*
  template: `
    <h1>{{title}}</h1>
    <h2>My favorite hero is: {{myHero}}</h2>
    `

    // yedi esto garda constructor mathi halne ani this keyword chaindaina tesma chai.
    
    // ani .html ma chai <page-info> </page-info> tag dine

*/
  
})
export class InfoPage {
	
	
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  	 

    

    }

  


  ionViewDidLoad() {
    console.log('Hello info page');
  }

}
