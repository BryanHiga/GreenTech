import { Component, ViewChild } from "@angular/core";
import { NavController, ToastController } from "ionic-angular";
import { FormBuilder, Validators } from "@angular/forms";

import { AngularFireAuth } from "angularfire2/auth";
import firebase from "firebase";

import { TabsPage } from "../tabs/tabs";
import { RegisterPage } from "../register/register";
import { ResetPasswordPage } from "../reset-password/reset-password";


@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})

export class LoginPage {
    @ViewChild('email') email;
    @ViewChild('password') password;

    public loginForm: any;
    messageEmail: string = "";
    messagePassword: string = "";
    errorEmail: boolean = false;
    errorPassword: boolean = false;

    constructor(
        public navCtrl: NavController,
        public formBuilder: FormBuilder,
        public toastCtrl: ToastController,
        public firebaseAuth: AngularFireAuth
    ) {
        console.log(firebase.auth());
        firebase.auth().getRedirectResult()
            .then(() => {
                if (this.firebaseAuth.auth.currentUser.uid) {
                    //this.navCtrl.setRoot(TabsPage);
                    console.log("vai para o tabs");
                }
            }).catch((error: any) => {
                console.log(error);
            });

        this.loginForm = formBuilder.group({
            email: [
                '',
                Validators.required
            ],
            password: [
                '',
                Validators.compose([
                    Validators.minLength(6),
                    Validators.maxLength(15),
                    Validators.required
                ])
            ]
        });

    }

    ionViewDidLoad(){
        console.log("TabsPage");
    }
    
    public dataValidade(): void {
        let { email, password } = this.loginForm.controls;
        if (!this.loginForm.valid) {
            if (!email.valid) {
                this.errorEmail = true;
                this.messageEmail = "Email inválido!";
            }
            else {
                this.messageEmail = "";
            }

            if (!password.valid) {
                this.errorPassword = true;
                this.messagePassword = "Lembre-se que a senha precisa ter entre 6 a 15 caracteres!";
            }
            else {
                this.messagePassword = "";
            }
        }
        else {
            this.loginUser();
        }
    }

    public loginUser() {
        this.firebaseAuth.auth.signInWithEmailAndPassword(this.email.value, this.password.value)
            .then(() => {
                this.showMessage('Login efetuado com sucesso');
                this.navCtrl.setRoot(TabsPage);
            })
            .catch((erro: any) => {
                this.showMessage(erro);
            });
    }

    private showMessage(mensagem: string): void {
        let toast = this.toastCtrl.create(
            {
                duration: 3000,
                position: 'botton'
            }
        );
        toast.setMessage(mensagem);
        toast.present();
    }

    deslogarUsuario() {
        this.firebaseAuth.auth.onAuthStateChanged((user) => {
            if (user) {
                firebase.auth().signOut()
                    .then(() => {
                        console.log('Usuário deslogado');
                        this.navCtrl.setRoot(LoginPage);
                    })
                    .catch((erro: any) => {
                        console.log('Erro: ' + erro);
                    })
            }
        })
    }

    public registerUser() {
        this.navCtrl.setRoot(RegisterPage);
    }

    public resetPassword() {
        this.navCtrl.push(ResetPasswordPage);
    }
}