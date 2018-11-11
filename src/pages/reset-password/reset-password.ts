import { Component, ViewChild } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';

import { AngularFireAuth } from 'angularfire2/auth';

import { LoginPage } from '../login/login';

@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html',
})
export class ResetPasswordPage {

  @ViewChild('email') email;

  public resetPwdForm: any;
  messageEmail: string = "";
  errorEmail: boolean = false;

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public formBuilder: FormBuilder,
    public firebaseAuth: AngularFireAuth
  ) {
    this.resetPwdForm = formBuilder.group({
      email: [
        '',
        Validators.required
      ]
    });
  }

  public dataValidade(): void {
    let { email } = this.resetPwdForm.controls;
    if (!this.resetPwdForm.valid) {
      if (!email.valid) {
        this.errorEmail = true;
        this.messageEmail = "Email inválido!";
      }
      else {
        this.messageEmail = "";
      }
    }
    else {
      this.resetPassword();
    }
  }

  public resetPassword() {
    this.firebaseAuth.auth.sendPasswordResetEmail(this.email.value)
      .then(() => {
        this.showMessage('Um email foi enviado para a redefinição de senha.');
        this.navCtrl.setRoot(LoginPage);
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
}