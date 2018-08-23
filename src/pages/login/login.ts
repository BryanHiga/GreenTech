import { Component, ViewChild } from "@angular/core";
import { NavController, ToastController } from "ionic-angular";
import { AngularFireAuth } from "angularfire2/auth";
import { TabsPage } from "../tabs/tabs";

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {
    @ViewChild("email") email;
    @ViewChild("senha") senha;

    constructor(
        public navCtrl: NavController,
        public toastCtrl: ToastController,
        public firebaseAuth: AngularFireAuth
    ) { }

   public logarUsuario(): void {
        this.firebaseAuth.auth.signInWithEmailAndPassword(this.email.value , this.senha.value)
          .then(() => {
            this.exibirMensagem('Login efetuado com sucesso');
            this.navCtrl.setRoot(TabsPage);
          })
          .catch((erro: any) => {
            this.exibirMensagem(erro);
          });
      }
      

  private exibirMensagem(mensagem: string): void {
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