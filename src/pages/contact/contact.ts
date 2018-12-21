import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {
  }
    goPrev(){
      this.navCtrl.pop();
    

  }

}
