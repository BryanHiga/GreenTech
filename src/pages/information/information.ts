import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-information',
  templateUrl: 'information.html'
})
export class InformationPage {

  constructor(public navCtrl: NavController,public firebaseAuth: AngularFireAuth) {
    
  }

}
