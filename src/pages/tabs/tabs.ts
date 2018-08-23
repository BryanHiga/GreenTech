import { Component } from "@angular/core";

import { HomePage } from "../home/home";
import { CadastroPage } from "../cadastro/cadastro";
import { NavController, ToastController } from "ionic-angular";
import { AngularFireAuth } from "angularfire2/auth";
import firebase from "firebase";
import { LoginPage } from "../login/login";




@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {
    home = HomePage;
    higrometro = HomePage;
    temperatura = HomePage;
    cadUsuario = CadastroPage;
    informacoes = HomePage;


    constructor(
        public navCtrl: NavController,
        public toastCtrl: ToastController,
        public firebaseAuth: AngularFireAuth

    ) {}
    
    public sair(): void {
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
            else{
                console.log('Nenhum usuário logado');
            }
        })
    }
    
    /*public exibirMensagem(mensagem: string): void {
        let toast = this.toastCtrl.create(
            {
                duration: 3000,
                position: 'botton'
            }
        );
        toast.setMessage(mensagem);
        toast.present();
    }*/
}