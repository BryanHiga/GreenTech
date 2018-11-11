webpackJsonp([0],{

/***/ 161:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 161;

/***/ }),

/***/ 204:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 204;

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, formBuilder, toastCtrl, firebaseAuth) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.firebaseAuth = firebaseAuth;
        this.messageName = "";
        this.messageEmail = "";
        this.messagePassword = "";
        this.errorName = false;
        this.errorEmail = false;
        this.errorPassword = false;
        this.registerForm = formBuilder.group({
            name: [
                '',
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required
            ],
            email: [
                '',
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required
            ],
            password: [
                '',
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].minLength(6),
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].maxLength(15),
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required
                ])
            ]
        });
    }
    RegisterPage.prototype.dataValidade = function () {
        var _a = this.registerForm.controls, name = _a.name, email = _a.email, password = _a.password;
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
    };
    RegisterPage.prototype.registerUser = function () {
        var _this = this;
        this.firebaseAuth.auth.createUserWithEmailAndPassword(this.email.value, this.password.value)
            .then(function () {
            _this.firebaseAuth.auth.currentUser.updateProfile({
                displayName: _this.name.value,
                photoURL: "https://example.com/jane-q-user/profile.jpg"
            });
            _this.showMessage('Usuário criado com sucesso!');
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
        })
            .catch(function (erro) {
            _this.showMessage(erro);
        });
    };
    RegisterPage.prototype.showMessage = function (message) {
        var toast = this.toastCtrl.create({
            duration: 3000,
            position: 'botton'
        });
        toast.setMessage(message);
        toast.present();
    };
    RegisterPage.prototype.loginUser = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('name'),
        __metadata("design:type", Object)
    ], RegisterPage.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('email'),
        __metadata("design:type", Object)
    ], RegisterPage.prototype, "email", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('password'),
        __metadata("design:type", Object)
    ], RegisterPage.prototype, "password", void 0);
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"D:\TCC\Greentech\src\pages\register\register.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title text-center>\n\n            GreenTech - Cadastro-se\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n    <form [formGroup]="registerForm" (ngSubmit)="dataValidade()" novalidate>\n\n\n\n        <h1 col-8>Junte-se ao\n\n            <br> GreenTech\n\n        </h1>\n\n        <ion-list>\n\n\n\n            <ion-item>\n\n                <ion-label floating>Nome Completo</ion-label>\n\n                <ion-input type="text" formControlName="name" clearInput nofocus clearOnEdit="false" #name></ion-input>\n\n                <span *ngIf="errorName" class="error"> {{ messageName }} </span>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label floating>Email</ion-label>\n\n                <ion-input type="email" formControlName="email" clearInput nofocus clearOnEdit="false" #email></ion-input>\n\n                <span *ngIf="errorEmail" class="error"> {{ messageEmail }} </span>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label floating>Senha</ion-label>\n\n                <ion-input type="password" formControlName="password" clearInput clearOnEdit="false" #password></ion-input>\n\n                <span *ngIf="errorPassword" class="error"> {{ messagePassword }} </span>\n\n            </ion-item>\n\n        </ion-list>\n\n\n\n        <button type="submit" ion-button block [disabled]="!registerForm.valid">\n\n            Adicionar Usuário\n\n        </button>\n\n\n\n        <p>Já possui conta? <a (click)="loginUser()"> Fazer login</a></p>\n\n\n\n    </form>\n\n\n\n</ion-content>\n\n\n\n<ion-footer>\n\n    <ion-toolbar>\n\n        <ion-title text-center>GreenTech&copy;2018</ion-title>\n\n    </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"D:\TCC\Greentech\src\pages\register\register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ResetPasswordPage = /** @class */ (function () {
    function ResetPasswordPage(navCtrl, toastCtrl, formBuilder, firebaseAuth) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.firebaseAuth = firebaseAuth;
        this.messageEmail = "";
        this.errorEmail = false;
        this.resetPwdForm = formBuilder.group({
            email: [
                '',
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
            ]
        });
    }
    ResetPasswordPage.prototype.dataValidade = function () {
        var email = this.resetPwdForm.controls.email;
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
    };
    ResetPasswordPage.prototype.resetPassword = function () {
        var _this = this;
        this.firebaseAuth.auth.sendPasswordResetEmail(this.email.value)
            .then(function () {
            _this.showMessage('Um email foi enviado para a redefinição de senha.');
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
        })
            .catch(function (erro) {
            _this.showMessage(erro);
        });
    };
    ResetPasswordPage.prototype.showMessage = function (mensagem) {
        var toast = this.toastCtrl.create({
            duration: 3000,
            position: 'botton'
        });
        toast.setMessage(mensagem);
        toast.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('email'),
        __metadata("design:type", Object)
    ], ResetPasswordPage.prototype, "email", void 0);
    ResetPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reset-password',template:/*ion-inline-start:"D:\TCC\Greentech\src\pages\reset-password\reset-password.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title text-center>GreenTech - Redefinir senha</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <p>Informe o email cadastrado para receber as instruções para recuperação de acesso.</p>\n  <form [formGroup]="resetPwdForm" (ngSubmit)="dataValidade()" novalidate>\n\n    <ion-list>\n\n      <ion-item>\n        <ion-label floating>Seu Email</ion-label>\n        <ion-input type="email" formControlName="email" clearInput clearOnEdit="false" #email></ion-input>\n        <span *ngIf="errorEmail" class="error"> {{ messageEmail }} </span>\n      </ion-item>\n\n    </ion-list>\n\n    <button type="submit" ion-button block [disabled]="!resetPwdForm.valid">\n      Redefinir Senha\n    </button>\n\n  </form>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-title text-center>GreenTech&copy;2018</ion-title>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"D:\TCC\Greentech\src\pages\reset-password\reset-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], ResetPasswordPage);
    return ResetPasswordPage;
}());

//# sourceMappingURL=reset-password.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_sensores_sensores__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InformationPage = /** @class */ (function () {
    function InformationPage(provider) {
        this.provider = provider;
        this.umidade = 0;
        this.chuva = 0;
        this.sensor = this.provider.getLast();
        this.getLast();
    }
    InformationPage.prototype.getLast = function () {
        var _this = this;
        this.sensor.subscribe(function (res) {
            _this.umidade = res[0].umidade;
            _this.chuva = res[0].chuva;
        });
    };
    InformationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-information',template:/*ion-inline-start:"D:\TCC\Greentech\src\pages\information\information.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <!-- <img src="../../assets/imgs/logoProjeto.png" alt="logo GreenTech"> -->\n\n    <ion-title>\n\n      Informações\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Dados Atuais\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-row>\n\n        <ion-col center text-center>\n\n          <ion-card>\n\n            {{ umidade }}\n\n            <p>Umidade</p>\n\n          </ion-card>\n\n        </ion-col>\n\n        <ion-col center text-center>\n\n          <ion-card>\n\n            {{ chuva }}\n\n            <p>Chuva</p>\n\n          </ion-card>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n      <ion-card-header>\n\n        Sobre o GreenTech\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n          texto\n\n      </ion-card-content>\n\n    </ion-card>\n\n  \n\n</ion-content>'/*ion-inline-end:"D:\TCC\Greentech\src\pages\information\information.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_sensores_sensores__["a" /* SensoresProvider */]])
    ], InformationPage);
    return InformationPage;
}());

//# sourceMappingURL=information.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_sensores_sensores__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChartPage = /** @class */ (function () {
    function ChartPage(provider) {
        this.provider = provider;
        this.sensores = this.provider.getAll();
        this.showChart();
    }
    ChartPage.prototype.showChart = function () {
        var data = new google.visualization.DataTable();
        data.addColumn('timeofday', 'Hora do Dia');
        data.addColumn('number', 'Umidade');
        data.addColumn('number', 'Chuva');
        this.sensores.forEach(function (s1) {
            var rows = [];
            var i = 0;
            s1.forEach(function (sensor) {
                console.log(sensor);
                var row = [{ v: [8 + i, 0, 0], f: (8 + i) + '' }, sensor.umidade, sensor.chuva];
                rows.push(row);
                i++;
            });
            console.log(rows);
            data.addRows(rows);
            var options = {
                chart: {
                    title: 'Umidade do Solo e Quantidade de Chuva',
                    subTitle: 'Médias das Últimas Horas'
                },
                axes: {
                    x: {
                        0: { side: 'top' }
                    }
                },
                hAxis: {
                    title: 'Hora do Dia',
                    format: 'h:mm a',
                    viewWindow: {
                        min: [7, 0, 0],
                        max: [19, 0, 0]
                    }
                },
                vAxis: {
                    title: '%, mm3',
                }
            };
            var materialChart = new google.visualization.AreaChart(document.getElementById('chart'));
            materialChart.draw(data, options);
        });
    };
    ChartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chart',template:/*ion-inline-start:"D:\TCC\Greentech\src\pages\chart\chart.html"*/'<!--\n  Generated template for the ChartsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>charts</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n        <p>Umidade do Solo<br> e <br>Quantidade de Chuva</p>\n    </ion-card-header>\n    <ion-card-content id="chart">\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"D:\TCC\Greentech\src\pages\chart\chart.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_sensores_sensores__["a" /* SensoresProvider */]])
    ], ChartPage);
    return ChartPage;
}());

//# sourceMappingURL=chart.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TablePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_sensores_sensores__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TablePage = /** @class */ (function () {
    function TablePage(provider) {
        this.provider = provider;
        this.sensores = this.provider.getAll();
        this.drawTable();
    }
    TablePage.prototype.drawTable = function () {
        var data = new google.visualization.DataTable();
        data.addColumn('timeofday', 'Hora do Dia');
        data.addColumn('number', 'Umidade');
        data.addColumn('number', 'Chuva');
        this.sensores.forEach(function (s1) {
            var rows = [];
            var i = 0;
            s1.forEach(function (sensor) {
                console.log(sensor);
                var row = [{ v: [8 + i, 0, 0], f: (8 + i) + '' }, sensor.umidade, sensor.chuva];
                rows.push(row);
                i++;
            });
            console.log(rows);
            data.addRows(rows);
            var table = new google.visualization.Table(document.getElementById('table'));
            table.draw(data, { showRowNumber: false, width: '100%', height: '100%' });
        });
    };
    TablePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-table',template:/*ion-inline-start:"D:\TCC\Greentech\src\pages\table\table.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>table</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header text-center>\n      <p>Umidade do Solo<br> e <br>Quantidade de Chuva</p>\n    </ion-card-header>\n    <ion-card-content id="table">\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"D:\TCC\Greentech\src\pages\table\table.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_sensores_sensores__["a" /* SensoresProvider */]])
    ], TablePage);
    return TablePage;
}());

//# sourceMappingURL=table.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(333);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__firebase_credentials__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_sensores_sensores__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_register_register__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_information_information__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_reset_password_reset_password__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_chart_chart__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_table_table__ = __webpack_require__(312);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_information_information__["a" /* InformationPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_reset_password_reset_password__["a" /* ResetPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_chart_chart__["a" /* ChartPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_table_table__["a" /* TablePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_7__firebase_credentials__["a" /* FIREBASE_CONFIG */]),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["b" /* AngularFireDatabaseModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_information_information__["a" /* InformationPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_reset_password_reset_password__["a" /* ResetPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_chart_chart__["a" /* ChartPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_table_table__["a" /* TablePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__providers_sensores_sensores__["a" /* SensoresProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CONFIG; });
var FIREBASE_CONFIG = {
    // apiKey: "AIzaSyDPKPQUtuEMaGDF3Na-FvUF7jq9z2PiW1s",
    // authDomain: "tcc-arduino-c2ee7.firebaseapp.com",
    // databaseURL: "https://tcc-arduino-c2ee7.firebaseio.com",
    // projectId: "tcc-arduino-c2ee7",
    // storageBucket: "tcc-arduino-c2ee7.appspot.com",
    // messagingSenderId: "49271928523"
    apiKey: "AIzaSyDcppxef20gMCd-AyWl50SbUCEGMeLq7Ek",
    authDomain: "greentech-ef28f.firebaseapp.com",
    databaseURL: "https://greentech-ef28f.firebaseio.com",
    projectId: "greentech-ef28f",
    storageBucket: "greentech-ef28f.appspot.com",
    messagingSenderId: "388104592510"
};
//# sourceMappingURL=firebase.credentials.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, angularFireAuth) {
        this.angularFireAuth = angularFireAuth;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.ngOnInit = function () {
        this.angularFireAuth.auth.onAuthStateChanged(function (user) {
            if (user) {
                console.log("tabs");
                console.log(user.displayName);
                this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
            }
            else {
                console.log("login");
                this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('rootNav'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _a || Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\TCC\Greentech\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\TCC\Greentech\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _e || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__register_register__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reset_password_reset_password__ = __webpack_require__(309);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, formBuilder, toastCtrl, firebaseAuth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.firebaseAuth = firebaseAuth;
        this.messageEmail = "";
        this.messagePassword = "";
        this.errorEmail = false;
        this.errorPassword = false;
        console.log(__WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth());
        __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().getRedirectResult()
            .then(function () {
            if (_this.firebaseAuth.auth.currentUser.uid) {
                //this.navCtrl.setRoot(TabsPage);
                console.log("vai para o tabs");
            }
        }).catch(function (error) {
            console.log(error);
        });
        this.loginForm = formBuilder.group({
            email: [
                '',
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
            ],
            password: [
                '',
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(15),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])
            ]
        });
    }
    LoginPage_1 = LoginPage;
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log("TabsPage");
    };
    LoginPage.prototype.dataValidade = function () {
        var _a = this.loginForm.controls, email = _a.email, password = _a.password;
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
    };
    LoginPage.prototype.loginUser = function () {
        var _this = this;
        this.firebaseAuth.auth.signInWithEmailAndPassword(this.email.value, this.password.value)
            .then(function () {
            _this.showMessage('Login efetuado com sucesso');
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]);
        })
            .catch(function (erro) {
            _this.showMessage(erro);
        });
    };
    LoginPage.prototype.showMessage = function (mensagem) {
        var toast = this.toastCtrl.create({
            duration: 3000,
            position: 'botton'
        });
        toast.setMessage(mensagem);
        toast.present();
    };
    LoginPage.prototype.deslogarUsuario = function () {
        var _this = this;
        this.firebaseAuth.auth.onAuthStateChanged(function (user) {
            if (user) {
                __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().signOut()
                    .then(function () {
                    console.log('Usuário deslogado');
                    _this.navCtrl.setRoot(LoginPage_1);
                })
                    .catch(function (erro) {
                    console.log('Erro: ' + erro);
                });
            }
        });
    };
    LoginPage.prototype.registerUser = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.resetPassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__reset_password_reset_password__["a" /* ResetPasswordPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('email'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "email", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('password'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "password", void 0);
    LoginPage = LoginPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\TCC\Greentech\src\pages\login\login.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title text-center>\n\n            GreenTech - Login\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <h1 col-8>Bem-Vind@ ao\n\n        <br> GreenTech\n\n    </h1>\n\n    <form [formGroup]="loginForm" (ngSubmit)="dataValidade()" novalidate>\n\n\n\n        <ion-list>\n\n\n\n            <ion-item>\n\n                <ion-label floating>Email</ion-label>\n\n                <ion-input type="email" formControlName="email" clearInput nofocus clearOnEdit="false" #email></ion-input>\n\n                <span *ngIf="errorEmail" class="error"> {{ messageEmail }} </span>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label floating>Senha</ion-label>\n\n                <ion-input type="password" formControlName="password" clearInput clearOnEdit="false" #password></ion-input>\n\n                <span *ngIf="errorPassword" class="error"> {{ messagePassword }} </span>\n\n            </ion-item>\n\n\n\n        </ion-list>\n\n\n\n        <button type="submit" ion-button block [disabled]="!loginForm.valid">\n\n            Entrar\n\n        </button>\n\n        <p><a (click)="resetPassword()">Esqueci minha senha</a></p>\n\n        <p>Não tem conta? <a (click)="registerUser()"> Cadastre-se agora</a></p>\n\n\n\n    </form>\n\n\n\n</ion-content>\n\n\n\n<ion-footer>\n\n    <ion-toolbar>\n\n        <ion-title text-center>GreenTech&copy;2018</ion-title>\n\n    </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"D:\TCC\Greentech\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], LoginPage);
    return LoginPage;
    var LoginPage_1;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SensoresProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(262);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SensoresProvider = /** @class */ (function () {
    function SensoresProvider(db) {
        this.db = db;
        this.PATH = 'sensor/';
    }
    SensoresProvider.prototype.getAll = function () {
        return this.db.list(this.PATH, function (ref) { return ref.limitToLast(10); })
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    };
    SensoresProvider.prototype.getLast = function () {
        return this.db.list(this.PATH, function (ref) { return ref.limitToLast(1); })
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    };
    SensoresProvider.prototype.get = function (key) {
        return this.db.object(this.PATH + key).snapshotChanges()
            .map(function (c) {
            return __assign({ key: c.key }, c.payload.val());
        });
    };
    SensoresProvider.prototype.save = function (sensores) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (sensores.key) {
                _this.db.list(_this.PATH)
                    .update(sensores.key, { umidade: sensores.umidade, chuva: sensores.chuva })
                    .then(function () { return resolve(); })
                    .catch(function (e) { return reject(e); });
            }
            else {
                _this.db.list(_this.PATH)
                    .push({ umidade: sensores.umidade, chuva: sensores.chuva })
                    .then(function () { return resolve(); });
            }
        });
    };
    SensoresProvider.prototype.remove = function (key) {
        return this.db.list(this.PATH).remove(key);
    };
    SensoresProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], SensoresProvider);
    return SensoresProvider;
}());

//# sourceMappingURL=sensores.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__information_information__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chart_chart__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__table_table__ = __webpack_require__(312);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, toastCtrl, firebaseAuth) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.firebaseAuth = firebaseAuth;
        this.information = __WEBPACK_IMPORTED_MODULE_5__information_information__["a" /* InformationPage */];
        this.chart = __WEBPACK_IMPORTED_MODULE_6__chart_chart__["a" /* ChartPage */];
        this.table = __WEBPACK_IMPORTED_MODULE_7__table_table__["a" /* TablePage */];
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        console.log("TabsPage");
    };
    TabsPage.prototype.logout = function () {
        var _this = this;
        this.firebaseAuth.auth.onAuthStateChanged(function (user) {
            if (user) {
                __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().signOut()
                    .then(function () {
                    //console.log('Usuário deslogado');
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
                })
                    .catch(function (erro) {
                    console.log('Erro: ' + erro);
                });
            }
            else {
                console.log('Nenhum usuário logado');
            }
        });
    };
    TabsPage.prototype.exibirMensagem = function (mensagem) {
        var toast = this.toastCtrl.create({
            duration: 3000,
            position: 'botton'
        });
        toast.setMessage(mensagem);
        toast.present();
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\TCC\Greentech\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n    <ion-tab [root]="information" tabTitle="Informações" tabIcon="information-circle"></ion-tab>\n\n    <ion-tab [root]="chart" tabTitle="Gráfico" tabIcon="rainy"></ion-tab> \n\n    <ion-tab [root]="table" tabTitle="Tabela" tabIcon="rainy"></ion-tab>\n\n    <ion-tab  tabTitle="Sair" tabIcon="log-out" (ionSelect)="logout()"></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"D:\TCC\Greentech\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ })

},[313]);
//# sourceMappingURL=main.js.map