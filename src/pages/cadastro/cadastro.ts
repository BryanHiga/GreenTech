import { Component, ViewChild } from "@angular/core";
import { NavController, ToastController } from "ionic-angular";
import { AngularFireAuth } from "angularfire2/auth";

import { TabsPage } from "../tabs/tabs";

@Component({
    selector: 'page-cadastro',
    templateUrl: 'cadastro.html'
})
export class CadastroPage {

    @ViewChild('nome') nome;
    @ViewChild('telefone') telefone;
    @ViewChild('email') email;
    @ViewChild('senha') senha;

    constructor(
        public navCtrl: NavController,
        public toastCtrl: ToastController,
        public firebaseAuth: AngularFireAuth
    ) { }

    public cadastrarUsuario(): void {
        this.firebaseAuth.auth.createUserWithEmailAndPassword(this.email.value, this.senha.value)
            .then(() => {
              this.firebaseAuth.auth.currentUser.updateProfile({
                displayName: this.nome.value,
                photoURL: "https://example.com/jane-q-user/profile.jpg"
              });

                this.exibirMensagem('Usuário criado com sucesso!');
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