import { Component } from "@angular/core";
import { NavController, ToastController } from "ionic-angular";

import { AngularFireAuth } from "angularfire2/auth";
import firebase from "firebase";

import { LoginPage } from "../login/login";
import { InformationPage } from "../information/information";
import { ChartPage } from "../chart/chart";
import { TablePage } from "../table/table";

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {
    information = InformationPage;
    chart = ChartPage;
    table = TablePage;
    

    constructor(
        public navCtrl: NavController,
        public toastCtrl: ToastController,
        public firebaseAuth: AngularFireAuth

    ) {}
    ionViewDidLoad(){
        console.log("TabsPage");
    }
    public logout(): void {
        this.firebaseAuth.auth.onAuthStateChanged((user) => {
            
            if (user) {
                firebase.auth().signOut()
                    .then(() => {
                       //console.log('Usuário deslogado');
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
    
    public exibirMensagem(mensagem: string): void {
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