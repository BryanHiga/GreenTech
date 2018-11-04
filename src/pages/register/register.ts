import { Component, ViewChild } from "@angular/core";
import { NavController, ToastController } from "ionic-angular";
import { AngularFireAuth } from "angularfire2/auth";

import { TabsPage } from "../tabs/tabs";
import { LoginPage } from "../login/login";

@Component({
    selector: 'page-register',
    templateUrl: 'register.html'
})
export class RegisterPage {

    @ViewChild('name') name;
    @ViewChild('email') email;
    @ViewChild('password') password;

    constructor(
        public navCtrl: NavController,
        public toastCtrl: ToastController,
        public firebaseAuth: AngularFireAuth
    ) { }

    public registerUser(): void {
        this.firebaseAuth.auth.createUserWithEmailAndPassword(this.email.value, this.password.value)
            .then(() => {
              this.firebaseAuth.auth.currentUser.updateProfile({
                displayName: this.name.value,
                photoURL: "https://example.com/jane-q-user/profile.jpg"
              });

                this.showMessage('Usuário criado com sucesso!');
                this.navCtrl.setRoot(TabsPage);
            })
            .catch((erro: any) => {
                this.showMessage(erro);
            });
    }
    private showMessage(message: string): void {
        let toast = this.toastCtrl.create(
            {
                duration: 3000,
                position: 'botton'
            }
        );
        toast.setMessage(message);
        toast.present();
    }

    public loginUser(){
        this.navCtrl.setRoot(LoginPage);
    }
}