import { Component, ViewChild } from "@angular/core";
import { NavController, ToastController } from "ionic-angular";
import { AngularFireAuth } from "angularfire2/auth";

import { TabsPage } from "../tabs/tabs";
import { LoginPage } from "../login/login";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
    selector: 'page-register',
    templateUrl: 'register.html'
})
export class RegisterPage {

    @ViewChild('name') name;
    @ViewChild('email') email;
    @ViewChild('password') password;

    public registerForm: any;
    messageName: string = "";
    messageEmail: string = "";
    messagePassword: string = "";
    errorName: boolean = false;
    errorEmail: boolean = false;
    errorPassword: boolean = false;
    
    constructor(
        public navCtrl: NavController,
        public formBuilder: FormBuilder,
        public toastCtrl: ToastController,
        public firebaseAuth: AngularFireAuth
    ) { 
        this.registerForm = formBuilder.group({
            name: [
                '',
                Validators.required
            ],
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

    public dataValidade(): void {
        let { name, email, password } = this.registerForm.controls;
        if (!this.registerForm.valid) {
            if (!name.valid) {
                this.errorName = true;
                this.messageName = "Nome inválido!";
            }
            else {
                this.messageName = "";
            }
            
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
            this.registerUser();
        }
    }


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