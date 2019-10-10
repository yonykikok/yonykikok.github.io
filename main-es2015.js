(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<!--Donde se encuentre este tag, se instancian los componentes dependientes del ruteo-->\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/adivina-el-numero/adivina-el-numero.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/adivina-el-numero/adivina-el-numero.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-cabecera title=\"Adivina el numero\" srcLink=\"/Juegos\" routerLinkk=\"/Juegos\" nameRouterLink=\"Volver\"\n  img=\"../../../assets/imagenes/utn.png\" srcLinkBoolean=\"true\"> </app-cabecera>\n<br>\n<div class=\"container centrado\">\n\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n  <form name=\"juego\">\n    <div id=\"intentos\">\n      <h5>Intentos</h5>\n      <label>{{contador}}</label>\n    </div>\n    <div>\n      <h1>Ingrese numero</h1> <input [(ngModel)]=\"nuevoJuego.numeroIngresado\" placeholder=\"ingrese numero\"\n        name=\"numeroIngresado\" type=\"text\" class=\"form-control centrado overflowHidden\" style=\"width:50%\" />\n    </div>\n    <h1 class=\"overflowHidden\">{{nuevoJuego.numeroIngresado}} </h1>\n\n    <h2 [hidden]=\"ocultarVerificar\"><button *ngIf=\"nuevoJuego.numeroSecreto!=0\" (click)=\"verificar()\"\n        class=\"btn btn-success btn-lg\">Verificar</button></h2>\n\n    <button *ngIf=\"nuevoJuego.numeroSecreto==0 \" (click)=\"generarnumero()\" class=\"btn btn-primary btn-lg\">Nuevo número\n      secreto</button>\n    <button *ngIf=\"mostrarAyuda\" class=\"btn btn-info btn-lg\" (click)=\"mostrarMensajeDeAyuda()\">Ayuda</button>\n    <h3 *ngIf=\"mostrarAyuda\">{{ayuda}}</h3>\n    <h3 [hidden]=\"!nuevoJuego.gano\">Adivino el número, felicidades!</h3>\n  </form>\n  <div id=\"snackbar\">{{Mensajes}}</div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<app-adivina-el-numero (enviarJuego)=\"tomarJuegoTerminado($event)\">   </app-adivina-el-numero> \n<h1> listado </h1>\n<app-listado-de-resultados [listado]=\"listadoParaCompartir\"> </app-listado-de-resultados>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-cabecera title=\"Agilidad aritmetica\" srcLink=\"/Juegos\" routerLinkk=\"/Juegos\" nameRouterLink=\"Volver\"\n  img=\"../../../assets/imagenes/cerebro.jpg\" srcLinkBoolean=\"true\"> </app-cabecera>\n<br>\n\n<div class=\"container centrado\">\n  <div *ngIf=\"juegoTerminado\">\n    <h1>Su puntaje fue de {{contadorGanadas}}</h1>\n    <button class=\"btn btn-success\" (click)=\"toggleJuegoTerminado()\">Volver a jugar</button>\n  </div>\n  <form name=\"juego\" *ngIf=\"!juegoTerminado\">\n\n    <div>\n      <h4>Primer número</h4> <input [(ngModel)]=\"nuevoJuego.numeroAleatorioUno\" placeholder=\"ingrese numero\"\n        name=\"numeroUno\" type=\"text\" class=\"form-control\" style=\"width:50%\" readonly />\n    </div>\n    <div>\n      <h4> Operador </h4> <input [(ngModel)]=\"nuevoJuego.operador\" placeholder=\"ingrese numero\" name=\"operador\"\n        type=\"text\" class=\"form-control\" style=\"width:50%\" readonly />\n    </div>\n    <div>\n      <h4> Segundo número</h4>\n      <input [(ngModel)]=\"nuevoJuego.numeroAleatorioDos\" placeholder=\"ingrese numero\" name=\"numeroDos\" type=\"text\"\n        class=\"form-control\" style=\"width:50%\" readonly />\n    </div>\n    <div>\n      <h4>Respuesta</h4><input [(ngModel)]=\"nuevoJuego.numeroIngresado\" placeholder=\"ingrese numero\"\n        name=\"numeroIngresado\" type=\"text\" class=\"form-control\" style=\"width:50%\" />\n    </div>\n    <br>\n    <h2 [hidden]=\"ocultarVerificar\"><button (click)=\"verificar()\" class=\"btn btn-success btn-lg\">Verificar\n        {{Tiempo}}\n      </button></h2>\n\n      <h2 [hidden]=\"!ocultarVerificar\"><button (click)=\"NuevoJuego()\" class=\"btn btn-info btn-lg\">Nuevo</button></h2>\n    <h3 [hidden]=\"!nuevoJuego.gano\">Logro superar el desafio, bien hecho!</h3>\n    <h3 *ngIf=\"mostrar\" [hidden]=\"nuevoJuego.gano\">Se acabo el tiempo, no desanimes</h3>\n\n\n  </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<app-agilidad-aritmetica (enviarJuego)=\"tomarJuegoTerminado($event)\">   </app-agilidad-aritmetica> \n<h1> Listado de Resultados </h1>\n<app-listado-de-resultados [listado]=\"listadoParaCompartir\"> </app-listado-de-resultados>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/alerta-custom/alerta-custom.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/alerta-custom/alerta-custom.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<img src=\"{{imagen}}\" alt=\"\">");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/anagrama/anagrama.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/anagrama/anagrama.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-cabecera title=\"Anagrama\" srcLink=\"/Juegos\" routerLinkk=\"/Juegos\" nameRouterLink=\"Volver\"\n  img=\"../../../assets/imagenes/anagrama.png\" srcLinkBoolean=\"true\"> </app-cabecera>\n<br>\n<div class=\"container centrado col-8\">\n  <br>\n\n  <div *ngIf=\"palabra && empesarPartida\" class=\"marginBottom overflowHidden\">\n    <div id=\"divContadorIntentos\">\n      <h5>Vidas</h5>\n      <p>{{vidas}}</p>\n    </div>\n    <img *ngFor=\"let letra of arrayPalabra\" src=\"../../../assets/imagenes/abc/{{letra}}.png\">\n  </div>\n\n  <button *ngIf=\"!empesarPartida\" id=\"btnComenzar\" class=\"btn btn-primary col-4 buttonAnimado\"\n    (click)=\"comenzar()\">Empezar\n    Partida</button>\n  <div *ngIf=\"empesarPartida\">\n\n    <div>\n      <h1 *ngIf=\"mostrarPalabraSecreta\">La palabra era: \"{{palabra}}\"</h1>\n    </div>\n    <div class=\" entradaDerecha\">\n      <button class=\"btn btn-primary col-3\" (click)=cambiarPalabraYDescontar()>cambiar palabra</button>\n    </div>\n    <div class=\" entradaIzquierda\">\n      <button class=\"btn btn-danger col-3\" *ngIf=\"!mostrar\" (click)=cambiarEstado()>\n        Me rindo</button>\n    </div>\n    <button class=\"btn btn-info col-3 \" *ngIf=\"mostrar\" (click)=mostrarPalabra()>Mostrar palabra </button>\n\n    <div class=\"input-group mb-3 col-8 offset-2\" id=\"inputPalabra\">\n      <div class=\"input-group-prepend\">\n        <button class=\"input-group-text \" id=\"btnComparar\" (click)=\"compararPalabra()\">Comparar</button>\n      </div>\n      <input type=\"input\" class=\"form-control borderTransicionColores centrado\" placeholder=\"palabra\"\n        [(ngModel)]=\"palabraIngresada\" name=\"palabra ingresada\" aria-label=\"palabra\" aria-describedby=\"basic-addon1\">\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/cabecera/cabecera.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/cabecera/cabecera.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container col-10\">\r\n  <nav class=\"navbar navbar-light bg-light\">\r\n    <h1 style=\"font-size:50px\">{{title}}</h1>\r\n    <a class=\"navbar-brand\">\r\n      <img src=\"{{img}}\" alt=\"Logo Utn-Fra\" class=\"logoUtn\">\r\n    </a>\r\n    <div class=\"specialPosition col-12\">\r\n        <a *ngIf=\"srcLinkBoolean\" routerLink=\"{{routerLinkk}}\" class=\"btnLink\">{{nameRouterLink}}</a>\r\n        <a *ngIf=\"routerLinkBoolean\" href=\"{{srcLink}}\" target=\"_blank\" class=\"btnLink\">{{nameLink}}</a>\r\n    </div>\r\n  </nav>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/card-img-top/card-img-top.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/card-img-top/card-img-top.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card col-4 centrado \" style=\"width: 22rem;\">\n    <img src=\"{{img}}\" class=\"card-img-top rotate-scale-up\" alt=\"{{title}}\">\n    <div class=\"card-body rotate-scale-up\">\n        <h5 class=\"card-title\">{{title}}</h5>\n        <p class=\"card-text\">{{description}}</p>\n    </div>\n    <div class=\"centrado\">\n        <button *ngIf=\"mostrarBoton\" class=\"btn btn-primary\" routerLink=\"{{routerLinkk}}\">Jugar</button>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/card-juego/card-juego.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/card-juego/card-juego.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container col-10 centrado\">\r\n    <div class=\"card {{clases}} text-center\">\r\n        <div class=\"card-header\">\r\n            <h4>{{title}}</h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <img src=\"{{img}}\" class=\"card-img\" alt=\"{{title}}\">\r\n            <p class=\"card-text\">{{description}}</p>\r\n        </div>\r\n        <div class=\"card-footer text-muted\">\r\n            <a routerLink=\"{{routerLinkk}}\" class=\"btn btn-primary btn-block\">{{title}}</a>\r\n        </div>\r\n    </div>\r\n</div>\r\n<br>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/card-tabs/card-tabs.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/card-tabs/card-tabs.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card text-center\">\n    <div class=\"card-header\">\n        <ul class=\"nav nav-tabs card-header-tabs\">\n            <li class=\"nav-item\">\n                <a [className]=\"'nav-link '+classNameUno\" (click)=\"seleccionarTabUno()\">{{nameTabUno}}</a>\n            </li>\n            <li class=\"nav-item\">\n                <a [className]=\"'nav-link '+classNameDos\" (click)=\"seleccionarTabDos()\">{{nameTabDos}}</a>\n            </li>\n            <li class=\"nav-item\">\n                <a [className]=\"'nav-link '+classNameTres\">{{nameTabTres}}</a>\n            </li>\n        </ul>\n    </div>\n    <div *ngIf=\"tabUnoBoolean\" class=\"card-body \">\n        <h5 class=\"card-title\">{{titleTabUno}}</h5>\n        <p class=\"card-text\">{{descriptionTabUno}}\n        </p>\n    </div>\n    <div *ngIf=\"tabDosBoolean\" class=\"card-body\">\n\n        <app-card-img-top description=\"Con las tecnologias WEB que permiten desarrollar aplicaciones multiplataforma\"\n            title=\"Nuevas Tecnologias\" class=\"mostrarTexto\" img=\"../../../assets/imagenes/quiensoy1.png\">\n        </app-card-img-top>\n        <app-card-img-top description=\"Principalmente orientada a la experiencia del usuario, garantizando que su \n            funcionamieto sea fluido y pensado en el comportamiento del usuario y en la funcionalidad.\"\n            title=\"Orientacion\" class=\"mostrarTexto\" img=\"../../../assets/imagenes/quiensoy2.png\">\n        </app-card-img-top>\n\n        <app-card-img-top description=\"Para los sistemas operativos lideres en el mercado del consumo masivo.\"\n            title=\"Diseñado\" class=\"mostrarTexto\" img=\"../../../assets/imagenes/quiensoy3.png\"></app-card-img-top>\n\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/dialog-jugador/dialog-jugador.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/dialog-jugador/dialog-jugador.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div *ngIf=\"mostrarse\" class=\"container\">\n        <div class=\"card centrado\" style=\"width: 48rem; height: 18rem;\">\n                <img id=\"imgClose\" src=\"../../../assets/imagenes/close.png\" (click)=\"cerrarModal();\">\n            <!-- <img class=\"card-img-top\" id=\"imgPrincipal\" src=\"{{producto.image}}\" alt=\"Card image cap\"> -->\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">JUGADOR</h5>\n                <p class=\"card-text\"><span></span> {{jugador.email}}</p>\n                <p class=\"card-text\"><span>Puntaje: </span> {{jugador.puntaje}}</p>\n            </div>\n        </div>\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/error/error.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/error/error.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container col-12\">\n    <app-cabecera title=\"Page not found\" img=\"../../../assets/imagenes/404-icon.png\"\n        srcLink=\"https://github.com/yonykikok\" routerLinkk=\"/Principal\" nameRouterLink=\"Pagina Principal\"\n        srcLinkBoolean=\"true\">\n    </app-cabecera>\n    <div class=\"divNotFound\">\n        <img src=\"../../../assets/imagenes/notFound.jpg\" alt=\"pagina no encontrada\">\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/footer/footer.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/footer/footer.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"page-footer font-small blue\">\n    <div class=\"footer-copyright text-center py-3\">© 2019 Copyright: Haedo Jonathan\n    </div>\n</footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/grabador-de-voz/grabador-de-voz.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/grabador-de-voz/grabador-de-voz.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button [disabled]=\"isRecording\" (click)=\"record()\">Grabar</button>\n<button [disabled]=\"!isRecording\" (click)=\"stop()\">Parar</button>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/input-jugadores/input-jugadores.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/input-jugadores/input-jugadores.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  input-jugadores works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/juegos/juegos.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/juegos/juegos.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" <router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/jugadores-listado/jugadores-listado.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/jugadores-listado/jugadores-listado.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul class=\"nav nav-pills nav-justified\">\n  <li class=\"active\"><a routerLink=\"/Principal\">Ir a inicio</a></li>\n  <li><a (click)=\"TraerTodos()\">Todos los jugadores</a></li>\n  <li><a (click)=\"TraerGanadores()\">Los ganadores</a></li>\n  <li><a (click)=\"TraerPerdedores()\">Los perdedores</a></li>\n</ul>\n\n\n\n<table class=\"table table-condensed\">\n  <thead>\n    <tr>\n      <th>usuario</th>\n      <th>cuit</th>\n      <th>sexo</th>\n      <th>gano</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let jugador of listado\" >\n      <td>{{jugador.usuario}} </td>\n      <td>{{jugador.cuit}} </td> \n      <td>{{jugador.sexo | sexo| uppercase}} </td> \n      <td>{{jugador.gano}} </td> \n      \n    </tr>\n   \n  </tbody>\n</table>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/lista-juegos/lista-juegos.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/lista-juegos/lista-juegos.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/listado-de-paises/listado-de-paises.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/listado-de-paises/listado-de-paises.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>\n Listado de paises\n</h1>\n<table class=\"table table-condensed\">\n  <thead>\n    <tr>\n      <th>Pais</th>\n      <th>Región</th>\n      <th>Nombre local</th>\n      <th>Sub Región</th>\n      <th>Población</th>\n      <th>Bandera</th>\n      <th>Capital</th>\n      <th>GPS</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let pais of listadoDePaises\">\n      <td>{{pais.name}} </td>\n      <td>{{pais.region}} </td> \n      <td>{{pais.nativeName}} </td> \n      <td>{{pais.subregion}} </td>       \n      <td>{{pais.population}} </td> \n      <td><img src='{{pais.flag}}' width=\"50px\"/> </td> \n      <td>{{pais.capital}} </td> \n      <td>{{pais.borders}} </td> \n      <td>{{pais.latlng}} </td> \n    </tr>\n   \n  </tbody>\n</table>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/listado-de-resultados/listado-de-resultados.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/listado-de-resultados/listado-de-resultados.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--div *ngFor=\"let juego of listado\">\n\n<p> {{juego.nombre}} </p>\n<p> {{juego.jugador}} </p>\n\n</div-->\n\n<table class=\"table table-condensed\">\n    <thead>\n      <tr>\n        <th>Juego</th>\n        <th>Jugador</th>\n        <th>Resultado</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let juego of listado\">\n        <td>{{juego.nombre}} </td>\n        <td>{{juego.jugador}} </td> \n        <td *ngIf=\"juego.gano\">Gano </td>   \n        <td *ngIf=\"!juego.gano\">Perdio</td>     \n      </tr>\n     \n    </tbody>\n  </table>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/listado/listado.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/listado/listado.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/listados/listados.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/listados/listados.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-cabecera title=\"Listado Top 3\" img=\"../../../assets/imagenes/top3.png\" routerLinkk=\"/Principal\"\n        nameRouterLink=\"Volver\" srcLinkBoolean=\"true\"></app-cabecera>\n\n\n<div class=\"container col-12 centrado\">\n        <app-top3-game [listaTop3]=\"listaToptresPptls\" tituloDelJuego=\"pptls\"></app-top3-game>\n        <app-top3-game [listaTop3]=\"listaToptresPpt\" tituloDelJuego=\"ppt\"></app-top3-game>\n        <app-top3-game [listaTop3]=\"listaToptresAnagrama\" tituloDelJuego=\"anagrama\"></app-top3-game>\n        <app-top3-game [listaTop3]=\"listaToptresAgilidad\" tituloDelJuego=\"agilidad\"></app-top3-game>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/login/login.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/login/login.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-cabecera title=\"Login\" img=\"../../../assets/imagenes/utn.png\"> </app-cabecera>\r\n<div class=\"container centrado\">\r\n  <div class=\"header-Login shadow-pop-tr\">\r\n    <img id=\"imgPerfil \" src=\"./assets/imagenes/login.png\" alt=\"Avatar\">\r\n  </div>\r\n  <br>\r\n  <div class=\"body-login col-6 offset-3 shadow-pop-tr\">\r\n    <form>\r\n      <div class=\"form-group\">\r\n        <input type=\"email\" class=\"form-control centrado\" [(ngModel)]=\"user.email\" name=\"email\"\r\n          placeholder=\"Enter email\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <input type=\"password\" class=\"form-control centrado\" [(ngModel)]=\"user.password\" name=\"password\"\r\n          placeholder=\"Password\">\r\n      </div>\r\n      <button type=\"submit\" class=\"btn btn-primary col-4\" (click)=\"onLogin()\">Ingresar</button>\r\n      <button type=\"submit\" class=\"btn btn-success col-4 offset-2\" routerLink=\"/Registro\">Registrarse</button>\r\n    </form>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/mapa-de-google/mapa-de-google.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/mapa-de-google/mapa-de-google.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>{{ title }}</h1>\n\n<!-- this creates a google map on the page with the given lat/lng from -->\n<!-- the component as the initial center of the map: -->\n<agm-map [latitude]=\"lat\" [longitude]=\"lng\"  (mapClick)=\"mapClicked($event)\">\n   \n  <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n</agm-map>\n<input type =\"text\" [(ngModel)]=\"lat\" />\n<input type=\"text\" [(ngModel)]=\"lng\"/> ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/menu-card/menu-card.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/menu-card/menu-card.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <app-cabecera title=\"Juegos\" srcLink=\"/Juegos\" routerLinkk=\"/Principal\" nameRouterLink=\"Volver\"\r\n  img=\"../../../assets/imagenes/joystick.png\" srcLinkBoolean=\"true\"> </app-cabecera>\r\n<br>\r\n<div class=\"container col-10\">\r\n  <div class=\"offset-1\">\r\n    <app-card-img-top title=\"Velocidad y agilidad aritmética\" description=\"Juego de agilidad mental\"\r\n      img=\"./assets/imagenes/velocidad.png\" routerLinkk=\"/Juegos/Agilidad\" mostrarBoton=\"true\"></app-card-img-top>\r\n\r\n    <app-card-img-top title=\"Piedra Papel o Tijera\" description=\"Juega contra la máquina\"\r\n      img=\"./assets/imagenes/piepaptig.png\" routerLinkk=\"/piedraPapelTijera\" mostrarBoton=\"true\"></app-card-img-top>\r\n\r\n    <app-card-img-top title=\"Adivina el número secreto\" description=\"Juega de estrategia\"\r\n      img=\"./assets/imagenes/adivina.png\" routerLinkk=\"/Juegos/Adivina\" mostrarBoton=\"true\"></app-card-img-top>\r\n\r\n    <app-card-img-top title=\"PPTLS\" description=\"Juega contra la maquina\" img=\"./assets/imagenes/pptls.png\"\r\n      routerLinkk=\"/Piedratls\" mostrarBoton=\"true\"></app-card-img-top>\r\n\r\n    <app-card-img-top title=\"Tateti\" description=\"juego de estrategia\" img=\"./assets/imagenes/tateti.png\"\r\n      routerLinkk=\"/tateti\" mostrarBoton=\"true\"></app-card-img-top>\r\n\r\n    <app-card-img-top title=\"Anagrama\" description=\"juego de agilidad\" img=\"./assets/imagenes/anagrama.png\"\r\n      routerLinkk=\"/anagrama\" mostrarBoton=\"true\"></app-card-img-top>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/menu/menu.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/menu/menu.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <nav class=\"navbar navbar-inverse\">\r\n      <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\r\n            <span class=\"icon-bar\"></span>\r\n                                  \r\n          </button>\r\n          <a class=\"navbar-brand\" routerLink=\"/Principal\">Inicio</a>\r\n        </div>\r\n        <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\r\n            <ul class=\"nav navbar-nav\">\r\n                <li class=\"active\"><a routerLink=\"/Juegos\">Menú de Juegos</a></li>\r\n                <li><a data-toggle=\"tooltip\" title=\"Hooray!\" (click)=\"Juego('Adivina')\">Adivina</a></li>\r\n                <li><a  (click)=\"Juego('Agilidad')\">Agilidad</a></li>\r\n                <li><a  (click)=\"Juego('AdivinaMasListado')\">Adivina+listado</a></li>\r\n                <li><a  (click)=\"Juego('AgilidadaMasListado')\">Agilidad+listado</a></li>\r\n              </ul>\r\n              <ul class=\"nav navbar-nav navbar-right\">\r\n                  <li><a href=\"#\"><span class=\"glyphicon glyphicon-user\"></span> Mis Datos</a></li>\r\n                  <li><a href=\"/Login\"><span class=\"glyphicon glyphicon-log-out\"></span> Salir</a></li>\r\n                </ul>\r\n        </div>\r\n      </div>\r\n    </nav>\r\n      \r\n   ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/name-editor/name-editor.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/name-editor/name-editor.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<label>\r\n    <p>\r\n        Value: {{ name.value }}\r\n    </p>\r\n    <input type=\"text\" [formControl]=\"name\">\r\n</label>\r\n<p>\r\n    <button (click)=\"updateName()\">Update Name</button>\r\n</p>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/piedra-p-t-l-s/piedra-p-t-l-s.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/piedra-p-t-l-s/piedra-p-t-l-s.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-grabador-de-voz></app-grabador-de-voz> -->\n<app-cabecera title=\"Piedra papel tijera lagarto Spock\" srcLinkBoolean=\"true\" routerLinkk=\"/Juegos\"\n    nameRouterLink=\"Volver\" img=\"../../../assets/imagenes/pptls.png\">\n</app-cabecera>\n<br>\n<!-- Card reglas de juego -->\n<div id=\"reglasDeJuego\" class=\"centrado\">\n    <div class=\"card hidden\" id=\"headerCardReglas\" style=\"width: 25rem;\">\n        <img id=\"iconExit\" (click)=\"ocultarCardReglas()\" src=\"../../../assets/icons/exitIcon2.png\">\n        <img src=\"../../../assets/imagenes/reglasPPTLS.png\" class=\"card-img-top\" alt=\"...\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Tijeras cortan el papel, papel tapa piedra, piedra aplasta lagarto,\n                lagarto envenena a Spock, Spock rompe tijeras, tijeras decapitan lagarto, lagarto\n                debora papel, papel desautorisa a Spock, Spock vaporiza piedra, y, como es siempre... piedra aplasta\n                tijeras.</p>\n            <img src=\"../.././../assets/imagenes/sound.png\" id=\"imgSpeeker\" (click)=\"reproducirExplicacion()\"\n                alt=\"escuchar reglas\">\n        </div>\n    </div>\n</div>\n<!-- fin Card reglas de juego -->\n<div class=\"container centrado\" id=\"contenedorPrincipal\">\n        <img src=\"../../../assets/imagenes/corona.png\" *ngIf=\"esTop1\"  id=\"imgCorona\" alt=\"top1\">\n\n    <label (click)=\"mostrarCardReglas()\" class=\"hvr-rectangle-out\">Como se juega?</label>\n    <div class=\"row\">\n        <div class=\"col-2 centrado\">\n            <img *ngFor=\"let juego of opcionesDeJuego\" class=\"imagenJuego visible hvr-buzz\" id=\"imagenJuegoHover\"\n                (click)=\"CalcukarJugada(juego)\" src=\"../../../assets/imagenes/{{juego}}.png\" alt=\"Foto {{juego}}\">\n        </div>\n        <div class=\"col-8 centrado fondo\">\n            <label class=\"puntaje\" id=\"puntajeJugador\">{{contadorGanadas}}</label>\n            <label class=\"puntaje\" id=\"puntajeMaquina\">{{contadorPerdidas}}</label>\n            <div *ngIf=\"!partidaTerminada\">\n                <img src=\"../../../assets/imagenes/pptls.png\" class=\"spinner\" alt=\"\">\n            </div>\n            <div>\n                <button class=\"btn btn-primary\" id=\"tituloResultadoDeJuego\"\n                    *ngIf=\"mostrarQuienGano && !partidaTerminada\"> {{mensajePartida}}</button>\n            </div>\n            <div *ngIf=\"partidaTerminada\">\n                <!-- <app-alerta-custom imagen=\"\"></app-alerta-custom> -->\n                <img id=\"imgWL\" src=\"{{imagenG_P}}\" alt=\"imagen resultado de partida\">\n            </div>\n            <div class=\"centrado\">\n                <button class=\"btn btn-primary btnSize\" (click)=\"reiniciarPartida()\" *ngIf=\"partidaTerminada\">Volver a\n                    Jugar</button>\n            </div>\n            <img class=\"imagenJuego visible resultados\" id=\"resultadoJugador\" *ngIf=\"eleccionJugador\"\n                src=\"../../../assets/imagenes/{{eleccionJugador}}.png\" alt=\"Foto {{juego}}\">\n            <img class=\"imagenJuego visible resultados\" id=\"resultadoMaquina\" *ngIf=\"eleccionJugador\"\n                src=\"../../../assets/imagenes/{{eleccionMaquina}}.png\" alt=\"Foto {{juego}}\">\n        </div>\n        <div class=\"col-2 centrado\">\n            <img *ngFor=\"let juego of opcionesDeJuego\" class=\"imagenJuego visible hvr-buzz\"\n                src=\"../../../assets/imagenes/{{juego}}.png\" alt=\"Foto {{juego}}\">\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-grabador-de-voz></app-grabador-de-voz> -->\n<app-cabecera title=\"Piedra papel tijera lagarto Spock\" srcLinkBoolean=\"true\" routerLinkk=\"/Juegos\"\n    nameRouterLink=\"Volver\" img=\"../../../assets/imagenes/pptls.png\">\n</app-cabecera>\n<br>\n<!-- Card reglas de juego -->\n<div id=\"reglasDeJuego\" class=\"centrado\">\n    <div class=\"card hidden\" id=\"headerCardReglas\" style=\"width: 25rem;\">\n        <img id=\"iconExit\" (click)=\"ocultarCardReglas()\" src=\"../../../assets/icons/exitIcon2.png\">\n        <img src=\"../../../assets/imagenes/pptreglas.png\" class=\"card-img-top\" alt=\"...\">\n        <div class=\"card-body\">\n            <p class=\"card-text\">Tijeras cortan el papel, papel tapa piedra, piedra aplasta\n                tijeras.</p>\n            <img src=\"../.././../assets/imagenes/sound.png\" id=\"imgSpeeker\" (click)=\"reproducirExplicacion()\"\n                alt=\"escuchar reglas\">\n        </div>\n    </div>\n</div>\n<!-- fin Card reglas de juego -->\n<div class=\"container centrado\" id=\"contenedorPrincipal\">\n        <img src=\"../../../assets/imagenes/corona.png\" *ngIf=\"esTop1\"  id=\"imgCorona\" alt=\"top1\">\n\n    <label (click)=\"mostrarCardReglas()\" class=\"hvr-rectangle-out\">Como se juega?</label>\n    <div class=\"row\">\n        <div class=\"col-2 centrado\">\n            <img *ngFor=\"let juego of opcionesDeJuego\" class=\"imagenJuego visible hvr-buzz\" id=\"imagenJuegoHover\"\n                (click)=\"CalcukarJugada(juego)\" src=\"../../../assets/imagenes/{{juego}}.png\" alt=\"Foto {{juego}}\">\n        </div>\n        <div class=\"col-8 centrado fondo\">\n            <label class=\"puntaje\" id=\"puntajeJugador\">{{contadorGanadas}}</label>\n            <label class=\"puntaje\" id=\"puntajeMaquina\">{{contadorPerdidas}}</label>\n            <div *ngIf=\"!partidaTerminada\">\n                <img src=\"../../../assets/imagenes/pptreglas.png\" class=\"spinner\" alt=\"\">\n            </div>\n            <div>\n                <button class=\"btn btn-primary\" id=\"tituloResultadoDeJuego\"\n                    *ngIf=\"mostrarQuienGano && !partidaTerminada\"> {{mensajePartida}}</button>\n            </div>\n            <div *ngIf=\"partidaTerminada\">\n                <app-alerta-custom imagen=\"\"></app-alerta-custom>\n                <img id=\"imgWL\" src=\"{{imagenG_P}}\" alt=\"imagen resultado de partida\">\n            </div>\n            <div class=\"centrado\">\n                <button class=\"btn btn-primary btnSize\" (click)=\"reiniciarPartida()\" *ngIf=\"partidaTerminada\">Volver a\n                    Jugar</button>\n            </div>\n            <img class=\"imagenJuego visible resultados\" id=\"resultadoJugador\" *ngIf=\"eleccionJugador\"\n                src=\"../../../assets/imagenes/{{eleccionJugador}}.png\" alt=\"Foto {{juego}}\">\n            <img class=\"imagenJuego visible resultados\" id=\"resultadoMaquina\" *ngIf=\"eleccionJugador\"\n                src=\"../../../assets/imagenes/{{eleccionMaquina}}.png\" alt=\"Foto {{juego}}\">\n        </div>\n        <div class=\"col-2 centrado\">\n            <img *ngFor=\"let juego of opcionesDeJuego\" class=\"imagenJuego visible hvr-buzz\"\n                src=\"../../../assets/imagenes/{{juego}}.png\" alt=\"Foto {{juego}}\">\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/principal/principal.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/principal/principal.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-cabecera title=\"Sala de Juegos\" srcLink=\"https://github.com/yonykikok\" \r\nrouterLinkk=\"/QuienSoy\" nameRouterLink=\"Quien Soy?\" nameLink=\"Github\" img=\"../../../assets/imagenes/utn.png\"\r\nrouterLinkBoolean=\"true\" srcLinkBoolean=\"true\"> </app-cabecera>\r\n\r\n<br>\r\n\r\n<!-- CARDS -->\r\n<app-card-juego id=\"slideInRight\" title=\"Juego\" clases=\"slideInLeft\" description=\"El método lúdico es un conjunto de estrategias diseñadas para crear un ambiente de\r\narmonía en los\r\nestudiantes que están inmersos en el proceso de aprendizaje. Este método busca que los alumnos se\r\napropien de los temas impartidos por los docentes utilizando el juego.\" \r\nimg=\"../../../assets/imagenes/juegos.png\" routerLinkk=\"/Juegos\"></app-card-juego>\r\n\r\n<app-card-juego class=\"slideInLeft\" title=\"Listado\" clases=\"slideInRight\" description=\"Los listados de los resultados con ordenamiento y busqueda\" \r\nimg=\"../../../assets/imagenes/top3.png\" routerLinkk=\"/Listados\"></app-card-juego>\r\n\r\n<app-card-juego class=\"slideInRight\" title=\"Configuracion\" clases=\"slideInLeft\" description=\"Ajustes de la aplicacion y los métodos de autentificación\" \r\nimg=\"../../../assets/imagenes/setting.png\" routerLinkk=\"/Configuracion\"></app-card-juego>\r\n<!-- end CARDS -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/quien-soy/quien-soy.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/quien-soy/quien-soy.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-cabecera title=\"Perfil\" srcLink=\"\" routerLinkk=\"/Principal\" nameRouterLink=\"Volver\"\r\n  img=\"../../../assets/imagenes/AlumnoPerfil.png\" srcLinkBoolean=\"true\"> </app-cabecera>\r\n\r\n\r\n<div class=\"container col-10\">\r\n  <!-- quien soy -->\r\n  <div class=\"card col-12 centrado\">\r\n    <img src=\"../../../assets/imagenes/quiensoy.jpeg\" class=\"slide-fwd-center card-img-top imagenPerfil\" alt=\"...\">\r\n    <div class=\"card-body\">\r\n      <h5 class=\"card-title\">Quien soy?</h5>\r\n      <p class=\"card-text\">Soy un alumno de la UTN FRA</p>\r\n    </div>\r\n  </div>\r\n  <!-- FIN quien soy -->\r\n  <!-- Card-TAB -->\r\n  <app-card-tabs nameTabUno=\"Trabajo Practico\" nameTabDos=\"Donde Funciona?\" titleTabUno=\"Esto es un trabajo práctico\"\r\n    descriptionTabUno=\"Piedra, papel, tijera, lagarto, spock es una version del tradicional piedra, papel, tijera en \r\n    la cual se busco agregar dificultad y en este caso las reglas son que: Tijeras cortan el papel, papel tapa piedra, piedra aplasta lagarto, \r\n    lagarto envenena a Spock, Spock rompe tijeras, tijeras decapitan lagarto, lagarto debora papel, \r\n    papel desautorisa a Spock, Spock vaporiza piedra, y, como es siempre... piedra aplasta tijeras.\r\n   \" ></app-card-tabs>\r\n  <!-- FIN Card-TAB -->\r\n  <app-footer></app-footer>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/registro/registro.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/registro/registro.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-cabecera title=\"Registro\" img=\"../../../assets/imagenes/utn.png\"> </app-cabecera>\n<div class=\"container centrado\">\n  <div *ngIf=\"aceptoTerminos\">\n    <div class=\"header-Login shadow-pop-tr\">\n      <img id=\"imgPerfil \" src=\"./assets/imagenes/login.png\" alt=\"Avatar\">\n    </div>\n    <br>\n    <div class=\"body-login col-6 offset-3 shadow-pop-tr\">\n      <form>\n        <div class=\"form-group\">\n          <input type=\"email\" class=\"form-control centrado\" [(ngModel)]=\"user.email\" name=\"email\" placeholder=\"Enter email\">\n        </div>\n        <div class=\"form-group\">\n          <input type=\"password\" class=\"form-control centrado\" [(ngModel)]=\"user.password\" name=\"password\" placeholder=\"Password\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary col-4\" (click)=\"onRegister()\">Registrar</button>\n        <button type=\"submit\" class=\"btn btn-danger col-4 offset-2\" routerLink=\"/Login\">Salir</button>\n      </form>\n    </div>\n  </div>\n  <br>\n\n  <div class=\"Divterminos col-8 offset-2\" *ngIf=\"!aceptoTerminos\">\n    <h2 id=\"terminos\">Terminos y condiciones</h2>\n    <p>La pagina se compromete a utilizar su informacion para comercializarla con agentes externos</p>\n    <p class=\"delay1s\">La pagina no puede garantizar el correcto funcionamiento de sus aplicaciones</p>\n    <p class=\"delay2s\">La pagina tomara posesion de sus bienes y/o familias</p>\n    <br>\n    <button class=\"btn btn-danger col-4\" (click)=\"aceptarTerminos()\">Acepto</button>\n    <button class=\"btn btn-primary col-4 offset-2\"routerLink=\"/Login\">No acepto</button>\n  </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/top3-game/top3-game.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/top3-game/top3-game.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container col-10 centrado\">\n    <div>\n        <app-dialog-jugador [mostrarse]=\"mostrarDetalleDelJugador\" [jugador]=\"usuarioAMostrar\" (toggleEvent)=\"toggleDialog()\"></app-dialog-jugador>\n        <img class=\"imgJuego\" src=\"../../../assets/imagenes/{{tituloDelJuego}}.png\" alt=\"\">\n\n        <button *ngIf=\"primerPuesto.puntaje\" class=\"lugar col-3\" (click)=\"mostrarUsuarioUno()\">\n            <!-- TOP1 -->\n            <img src=\"../../../assets/imagenes/primerLugar.png\" class=\"imgTrofeo\" alt=\"primer puesto\">\n            <div class=\"divBody\">\n                <label>Puntaje: {{primerPuesto.puntaje}}</label>\n            </div>\n        </button>\n        <!-- TOP2 -->\n        <button *ngIf=\"segundoPuesto.puntaje\" class=\"lugar col-3\" (click)=\"mostrarUsuarioDos()\">\n            <img src=\"../../../assets/imagenes/segundoLugar.png\" class=\"imgTrofeo\" alt=\"primer puesto\">\n            <div class=\"divBody\">\n                <label>Puntaje: {{segundoPuesto.puntaje}}</label>\n            </div>\n        </button>\n        <!-- TOP3 -->\n        <button *ngIf=\"tercerPuesto.puntaje\" class=\"lugar col-3\" (click)=\"mostrarUsuarioTres()\">\n            <img src=\"../../../assets/imagenes/tercerLugar.png\" class=\"imgTrofeo\" alt=\"primer puesto\">\n            <div class=\"divBody\">\n                <label>Puntaje: {{tercerPuesto.puntaje}}</label>\n            </div>\n        </button>\n    </div>\n\n\n    <!-- <div>\n        <img src=\"../../../assets/imagenes/segundoLugar.png\" class=\"imgTrofeo\" alt=\"segundo puesto\">\n    </div>\n    <div>\n        <img src=\"../../../assets/imagenes/tercerLugar.png\" class=\"imgTrofeo\" alt=\"tercer puesto\">\n    </div> -->\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("*{\r\n    font-family: monospace;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _componentes_adivina_el_numero_adivina_el_numero_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./componentes/adivina-el-numero/adivina-el-numero.component */ "./src/app/componentes/adivina-el-numero/adivina-el-numero.component.ts");
/* harmony import */ var _componentes_listado_de_resultados_listado_de_resultados_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./componentes/listado-de-resultados/listado-de-resultados.component */ "./src/app/componentes/listado-de-resultados/listado-de-resultados.component.ts");
/* harmony import */ var _componentes_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./componentes/login/login.component */ "./src/app/componentes/login/login.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _servicios_mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./servicios/mi-http/mi-http.service */ "./src/app/servicios/mi-http/mi-http.service.ts");
/* harmony import */ var _servicios_paises_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./servicios/paises.service */ "./src/app/servicios/paises.service.ts");
/* harmony import */ var _servicios_jugadores_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./servicios/jugadores.service */ "./src/app/servicios/jugadores.service.ts");
/* harmony import */ var _servicios_archivos_jugadores_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./servicios/archivos-jugadores.service */ "./src/app/servicios/archivos-jugadores.service.ts");
/* harmony import */ var _componentes_error_error_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./componentes/error/error.component */ "./src/app/componentes/error/error.component.ts");
/* harmony import */ var _componentes_principal_principal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./componentes/principal/principal.component */ "./src/app/componentes/principal/principal.component.ts");
/* harmony import */ var _componentes_agilidad_aritmetica_agilidad_aritmetica_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./componentes/agilidad-aritmetica/agilidad-aritmetica.component */ "./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts");
/* harmony import */ var _componentes_menu_menu_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./componentes/menu/menu.component */ "./src/app/componentes/menu/menu.component.ts");
/* harmony import */ var _componentes_adivina_mas_listado_adivina_mas_listado_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./componentes/adivina-mas-listado/adivina-mas-listado.component */ "./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.ts");
/* harmony import */ var _componentes_agilidad_mas_listado_agilidad_mas_listado_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./componentes/agilidad-mas-listado/agilidad-mas-listado.component */ "./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.ts");
/* harmony import */ var _ruteando_ruteando_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ruteando/ruteando.module */ "./src/app/ruteando/ruteando.module.ts");
/* harmony import */ var _componentes_listado_listado_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./componentes/listado/listado.component */ "./src/app/componentes/listado/listado.component.ts");
/* harmony import */ var _componentes_jugadores_listado_jugadores_listado_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./componentes/jugadores-listado/jugadores-listado.component */ "./src/app/componentes/jugadores-listado/jugadores-listado.component.ts");
/* harmony import */ var _servicios_juego_service_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./servicios/juego-service.service */ "./src/app/servicios/juego-service.service.ts");
/* harmony import */ var _componentes_listados_listados_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./componentes/listados/listados.component */ "./src/app/componentes/listados/listados.component.ts");
/* harmony import */ var _componentes_juegos_juegos_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./componentes/juegos/juegos.component */ "./src/app/componentes/juegos/juegos.component.ts");
/* harmony import */ var _componentes_registro_registro_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./componentes/registro/registro.component */ "./src/app/componentes/registro/registro.component.ts");
/* harmony import */ var _componentes_menu_card_menu_card_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./componentes/menu-card/menu-card.component */ "./src/app/componentes/menu-card/menu-card.component.ts");
/* harmony import */ var _componentes_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./componentes/cabecera/cabecera.component */ "./src/app/componentes/cabecera/cabecera.component.ts");
/* harmony import */ var _componentes_quien_soy_quien_soy_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./componentes/quien-soy/quien-soy.component */ "./src/app/componentes/quien-soy/quien-soy.component.ts");
/* harmony import */ var _componentes_anagrama_anagrama_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./componentes/anagrama/anagrama.component */ "./src/app/componentes/anagrama/anagrama.component.ts");
/* harmony import */ var _componentes_listado_de_paises_listado_de_paises_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./componentes/listado-de-paises/listado-de-paises.component */ "./src/app/componentes/listado-de-paises/listado-de-paises.component.ts");
/* harmony import */ var _componentes_mapa_de_google_mapa_de_google_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./componentes/mapa-de-google/mapa-de-google.component */ "./src/app/componentes/mapa-de-google/mapa-de-google.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _componentes_input_jugadores_input_jugadores_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./componentes/input-jugadores/input-jugadores.component */ "./src/app/componentes/input-jugadores/input-jugadores.component.ts");
/* harmony import */ var _pipes_sexo_pipe__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./pipes/sexo.pipe */ "./src/app/pipes/sexo.pipe.ts");
/* harmony import */ var _componentes_card_juego_card_juego_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./componentes/card-juego/card-juego.component */ "./src/app/componentes/card-juego/card-juego.component.ts");
/* harmony import */ var _componentes_name_editor_name_editor_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./componentes/name-editor/name-editor.component */ "./src/app/componentes/name-editor/name-editor.component.ts");
/* harmony import */ var _componentes_card_tabs_card_tabs_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./componentes/card-tabs/card-tabs.component */ "./src/app/componentes/card-tabs/card-tabs.component.ts");
/* harmony import */ var _componentes_card_img_top_card_img_top_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./componentes/card-img-top/card-img-top.component */ "./src/app/componentes/card-img-top/card-img-top.component.ts");
/* harmony import */ var _componentes_footer_footer_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./componentes/footer/footer.component */ "./src/app/componentes/footer/footer.component.ts");
/* harmony import */ var _componentes_lista_juegos_lista_juegos_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./componentes/lista-juegos/lista-juegos.component */ "./src/app/componentes/lista-juegos/lista-juegos.component.ts");
/* harmony import */ var _componentes_piedra_p_t_l_s_piedra_p_t_l_s_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./componentes/piedra-p-t-l-s/piedra-p-t-l-s.component */ "./src/app/componentes/piedra-p-t-l-s/piedra-p-t-l-s.component.ts");
/* harmony import */ var _componentes_alerta_custom_alerta_custom_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./componentes/alerta-custom/alerta-custom.component */ "./src/app/componentes/alerta-custom/alerta-custom.component.ts");
/* harmony import */ var _componentes_grabador_de_voz_grabador_de_voz_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./componentes/grabador-de-voz/grabador-de-voz.component */ "./src/app/componentes/grabador-de-voz/grabador-de-voz.component.ts");
/* harmony import */ var _componentes_piedra_papel_tijera_piedra_papel_tijera_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./componentes/piedra-papel-tijera/piedra-papel-tijera.component */ "./src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _componentes_top3_game_top3_game_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./componentes/top3-game/top3-game.component */ "./src/app/componentes/top3-game/top3-game.component.ts");
/* harmony import */ var _componentes_dialog_jugador_dialog_jugador_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./componentes/dialog-jugador/dialog-jugador.component */ "./src/app/componentes/dialog-jugador/dialog-jugador.component.ts");


















































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _componentes_adivina_el_numero_adivina_el_numero_component__WEBPACK_IMPORTED_MODULE_5__["AdivinaElNumeroComponent"],
            _componentes_listado_de_resultados_listado_de_resultados_component__WEBPACK_IMPORTED_MODULE_6__["ListadoDeResultadosComponent"],
            _componentes_error_error_component__WEBPACK_IMPORTED_MODULE_13__["ErrorComponent"],
            _componentes_principal_principal_component__WEBPACK_IMPORTED_MODULE_14__["PrincipalComponent"],
            _componentes_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
            _componentes_agilidad_aritmetica_agilidad_aritmetica_component__WEBPACK_IMPORTED_MODULE_15__["AgilidadAritmeticaComponent"],
            _componentes_menu_menu_component__WEBPACK_IMPORTED_MODULE_16__["MenuComponent"],
            _componentes_adivina_mas_listado_adivina_mas_listado_component__WEBPACK_IMPORTED_MODULE_17__["AdivinaMasListadoComponent"],
            _componentes_agilidad_mas_listado_agilidad_mas_listado_component__WEBPACK_IMPORTED_MODULE_18__["AgilidadMasListadoComponent"],
            _componentes_listado_listado_component__WEBPACK_IMPORTED_MODULE_20__["ListadoComponent"],
            _componentes_listados_listados_component__WEBPACK_IMPORTED_MODULE_23__["ListadosComponent"],
            _componentes_juegos_juegos_component__WEBPACK_IMPORTED_MODULE_24__["JuegosComponent"],
            _componentes_registro_registro_component__WEBPACK_IMPORTED_MODULE_25__["RegistroComponent"],
            _componentes_menu_card_menu_card_component__WEBPACK_IMPORTED_MODULE_26__["MenuCardComponent"],
            _componentes_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_27__["CabeceraComponent"],
            _componentes_quien_soy_quien_soy_component__WEBPACK_IMPORTED_MODULE_28__["QuienSoyComponent"],
            _componentes_anagrama_anagrama_component__WEBPACK_IMPORTED_MODULE_29__["AnagramaComponent"],
            _componentes_listado_de_paises_listado_de_paises_component__WEBPACK_IMPORTED_MODULE_30__["ListadoDePaisesComponent"],
            _componentes_mapa_de_google_mapa_de_google_component__WEBPACK_IMPORTED_MODULE_31__["MapaDeGoogleComponent"],
            _componentes_jugadores_listado_jugadores_listado_component__WEBPACK_IMPORTED_MODULE_21__["JugadoresListadoComponent"],
            _componentes_input_jugadores_input_jugadores_component__WEBPACK_IMPORTED_MODULE_33__["InputJugadoresComponent"],
            _pipes_sexo_pipe__WEBPACK_IMPORTED_MODULE_34__["SexoPipe"],
            _componentes_card_juego_card_juego_component__WEBPACK_IMPORTED_MODULE_35__["CardJuegoComponent"],
            _componentes_name_editor_name_editor_component__WEBPACK_IMPORTED_MODULE_36__["NameEditorComponent"],
            _componentes_card_tabs_card_tabs_component__WEBPACK_IMPORTED_MODULE_37__["CardTabsComponent"],
            _componentes_card_img_top_card_img_top_component__WEBPACK_IMPORTED_MODULE_38__["CardImgTopComponent"],
            _componentes_footer_footer_component__WEBPACK_IMPORTED_MODULE_39__["FooterComponent"],
            _componentes_lista_juegos_lista_juegos_component__WEBPACK_IMPORTED_MODULE_40__["ListaJuegosComponent"],
            _componentes_piedra_p_t_l_s_piedra_p_t_l_s_component__WEBPACK_IMPORTED_MODULE_41__["PiedraPTLSComponent"],
            _componentes_alerta_custom_alerta_custom_component__WEBPACK_IMPORTED_MODULE_42__["AlertaCustomComponent"],
            _componentes_grabador_de_voz_grabador_de_voz_component__WEBPACK_IMPORTED_MODULE_43__["GrabadorDeVozComponent"],
            _componentes_piedra_papel_tijera_piedra_papel_tijera_component__WEBPACK_IMPORTED_MODULE_44__["PiedraPapelTijeraComponent"],
            _componentes_top3_game_top3_game_component__WEBPACK_IMPORTED_MODULE_48__["Top3GameComponent"],
            _componentes_dialog_jugador_dialog_jugador_component__WEBPACK_IMPORTED_MODULE_49__["DialogJugadorComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ruteando_ruteando_module__WEBPACK_IMPORTED_MODULE_19__["RuteandoModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_45__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_47__["environment"].firebaseConfig),
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_46__["AngularFireAuthModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_32__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyB6f8x4IjRlesQ3oETc6BXYQHVRTOlY3Ys'
            })
        ],
        providers: [_servicios_juego_service_service__WEBPACK_IMPORTED_MODULE_22__["JuegoServiceService"], _servicios_mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_9__["MiHttpService"], _servicios_paises_service__WEBPACK_IMPORTED_MODULE_10__["PaisesService"], _servicios_archivos_jugadores_service__WEBPACK_IMPORTED_MODULE_12__["ArchivosJugadoresService"], _servicios_jugadores_service__WEBPACK_IMPORTED_MODULE_11__["JugadoresService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/clases/juego-adivina.ts":
/*!*****************************************!*\
  !*** ./src/app/clases/juego-adivina.ts ***!
  \*****************************************/
/*! exports provided: JuegoAdivina */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegoAdivina", function() { return JuegoAdivina; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _clases_juego__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../clases/juego */ "./src/app/clases/juego.ts");


class JuegoAdivina extends _clases_juego__WEBPACK_IMPORTED_MODULE_1__["Juego"] {
    constructor(nombre, gano, jugador) {
        super("Adivina el número", gano, jugador);
        this.numeroSecreto = 0;
        this.numeroIngresado = 0;
    }
    verificar() {
        if (this.numeroIngresado == this.numeroSecreto) {
            this.gano = true;
        }
        if (this.gano) {
            return true;
        }
        else {
            return false;
        }
    }
    generarnumero() {
        this.numeroSecreto = Math.floor((Math.random() * 100) + 1);
        console.info('numero Secreto:' + this.numeroSecreto);
        this.gano = false;
    }
    retornarAyuda() {
        if (this.numeroIngresado < this.numeroSecreto) {
            return "Falta";
        }
        else if (this.numeroIngresado == this.numeroSecreto) {
            return "Le pegaste";
        }
        return "Te pasate";
    }
}
JuegoAdivina.ctorParameters = () => [
    { type: String },
    { type: Boolean },
    { type: String }
];


/***/ }),

/***/ "./src/app/clases/juego-agilidad.ts":
/*!******************************************!*\
  !*** ./src/app/clases/juego-agilidad.ts ***!
  \******************************************/
/*! exports provided: JuegoAgilidad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegoAgilidad", function() { return JuegoAgilidad; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class JuegoAgilidad {
}


/***/ }),

/***/ "./src/app/clases/juego.ts":
/*!*********************************!*\
  !*** ./src/app/clases/juego.ts ***!
  \*********************************/
/*! exports provided: Juego */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Juego", function() { return Juego; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Juego {
    constructor(nombre, gano, jugador) {
        this.nombre = 'Sin Nombre';
        this.gano = false;
        if (nombre)
            this.nombre = nombre;
        if (gano)
            this.gano = gano;
        if (jugador)
            this.jugador = jugador;
        else
            this.jugador = "natalia natalia";
    }
    retornarAyuda() {
        return "NO hay Ayuda definida";
    }
}
Juego.ctorParameters = () => [
    { type: String },
    { type: Boolean },
    { type: String }
];


/***/ }),

/***/ "./src/app/clases/jugador.ts":
/*!***********************************!*\
  !*** ./src/app/clases/jugador.ts ***!
  \***********************************/
/*! exports provided: Jugador */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Jugador", function() { return Jugador; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Jugador {
}


/***/ }),

/***/ "./src/app/clases/user.ts":
/*!********************************!*\
  !*** ./src/app/clases/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class User {
}


/***/ }),

/***/ "./src/app/componentes/adivina-el-numero/adivina-el-numero.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/componentes/adivina-el-numero/adivina-el-numero.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n.centrado{\n    text-align: center;\n}\n.container\n{\nborder-radius: 30px;\nbackground: url('background-numbers.PNG') no-repeat center center/ cover;\n}\ninput{\n    display: inline-block;\n    border-radius: 100%;\n    height: 100px;\n    font-size: 200%;\n    font-weight: bold;\n}\n.overflowHidden{\n    overflow: hidden;\n}\n#snackbar{\n    font-size: 200%;\n    background-color: rgba(128, 0, 128, 0.356);\n    margin-bottom: 20px;\n    border-bottom-left-radius: 20px;\n    border-bottom-right-radius: 20px;\n}\n#intentos{\n    margin-top: 15px;\n    float: right;\n    background-color: rgba(255, 166, 0, 0.274);\n    border-radius: 10px;\n    padding: 10px;\n    position: absolute;\n    font-size: 200%;\n    font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvYWRpdmluYS1lbC1udW1lcm8vYWRpdmluYS1lbC1udW1lcm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTs7QUFFQSxtQkFBbUI7QUFDbkIsd0VBQWlHO0FBQ2pHO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGVBQWU7SUFDZiwwQ0FBMEM7SUFDMUMsbUJBQW1CO0lBQ25CLCtCQUErQjtJQUMvQixnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osMENBQTBDO0lBQzFDLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9hZGl2aW5hLWVsLW51bWVyby9hZGl2aW5hLWVsLW51bWVyby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY2VudHJhZG97XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbnRhaW5lclxue1xuYm9yZGVyLXJhZGl1czogMzBweDtcbmJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZW5lcy9iYWNrZ3JvdW5kLW51bWJlcnMuUE5HXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyLyBjb3Zlcjtcbn1cbmlucHV0e1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgZm9udC1zaXplOiAyMDAlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm92ZXJmbG93SGlkZGVue1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG4jc25hY2tiYXJ7XG4gICAgZm9udC1zaXplOiAyMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAwLCAxMjgsIDAuMzU2KTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XG59XG4jaW50ZW50b3N7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE2NiwgMCwgMC4yNzQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZm9udC1zaXplOiAyMDAlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/componentes/adivina-el-numero/adivina-el-numero.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/componentes/adivina-el-numero/adivina-el-numero.component.ts ***!
  \******************************************************************************/
/*! exports provided: AdivinaElNumeroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdivinaElNumeroComponent", function() { return AdivinaElNumeroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../clases/juego-adivina */ "./src/app/clases/juego-adivina.ts");
/* harmony import */ var src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/servicios/auth.service */ "./src/app/servicios/auth.service.ts");
/* harmony import */ var src_app_servicios_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/servicios/local-storage.service */ "./src/app/servicios/local-storage.service.ts");





let AdivinaElNumeroComponent = class AdivinaElNumeroComponent {
    constructor(authService, localStorageService) {
        this.authService = authService;
        this.localStorageService = localStorageService;
        this.enviarJuego = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.mostrarAyuda = false;
        //---puntaje
        this.esTop1 = false;
        this.nuevoJuego = new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__["JuegoAdivina"]();
        console.info("numero Secreto:", this.nuevoJuego.numeroSecreto);
        this.ocultarVerificar = false;
    }
    //fin puntaje
    ngOnInit() {
        this.obtenerMailDeUsuarioActual();
    }
    obtenerMailDeUsuarioActual() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const user = yield this.authService.usuarioLogeado();
            if (user) {
                this.emailUsuarioActual = user.email;
            }
        });
    }
    generarnumero() {
        this.nuevoJuego.generarnumero();
        this.contador = 0;
    }
    mostrarMensajeDeAyuda() {
        this.ayuda = this.nuevoJuego.retornarAyuda();
        this.verificar();
    }
    verificar() {
        this.contador++;
        let audio;
        this.ocultarVerificar = true;
        console.info("numero Secreto:", this.nuevoJuego.gano);
        if (this.nuevoJuego.verificar()) {
            audio = new Audio('../../../assets/audios/success.wav');
            audio.play();
            this.enviarJuego.emit(this.nuevoJuego);
            this.MostarMensaje("Sos un Genio!!!", true);
            this.nuevoJuego.numeroSecreto = 0;
        }
        else {
            audio = new Audio('../../../assets/audios/fail.wav');
            audio.play();
            let mensaje;
            switch (this.contador) {
                case 1:
                    mensaje = "Fallaste, animo vuelve a intentar";
                    break;
                case 2:
                    mensaje = "Fallaste otra ves,Te estaras Acercando???";
                    break;
                case 3:
                    mensaje = "Lastima, Yo crei que la tercera era la vencida.";
                    break;
                case 4:
                    mensaje = "Tampoco era el " + this.nuevoJuego.numeroIngresado;
                    break;
                case 5:
                    this.mostrarAyuda = true;
                    mensaje = "Estoy empezando a creer que no saldra. Revisa la ayuda";
                    break;
                case 6:
                    mensaje = "Afortunado en el amor";
                    break;
                default:
                    mensaje = "Ya le erraste " + this.contador + " veces";
                    if (this.contador == 10) {
                        mensaje = "Lo siento la proxima sera!";
                        this.terminarJuego();
                    }
                    break;
            }
            this.MostarMensaje("#" + this.contador + " " + mensaje);
        }
        console.info("numero Secreto:", this.nuevoJuego.gano);
    }
    terminarJuego() {
        this.ocultarVerificar = true;
        this.mostrarAyuda = false;
        this.nuevoJuego.numeroSecreto = 0;
        this.localStorageService.guardarPuntuacionEnLocalStorage(this.emailUsuarioActual, 'adivina', this.contador);
        // this.esTop1= this.localStorageService.verificarSiSuperoAlTopEnMenosIntentos();
    }
    MostarMensaje(mensaje = "este es el mensaje", ganador = false) {
        this.Mensajes = mensaje;
        var x = document.getElementById("snackbar");
        if (ganador) {
            x.className = "show Ganador";
        }
        else {
            x.className = "show Perdedor";
        }
        var modelo = this;
        setTimeout(function () {
            x.className = x.className.replace("show", "");
            modelo.ocultarVerificar = false;
        }, 3000);
        console.info("objeto", x);
    }
};
AdivinaElNumeroComponent.ctorParameters = () => [
    { type: src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: src_app_servicios_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], AdivinaElNumeroComponent.prototype, "enviarJuego", void 0);
AdivinaElNumeroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-adivina-el-numero',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./adivina-el-numero.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/adivina-el-numero/adivina-el-numero.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./adivina-el-numero.component.css */ "./src/app/componentes/adivina-el-numero/adivina-el-numero.component.css")).default]
    })
], AdivinaElNumeroComponent);



/***/ }),

/***/ "./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2FkaXZpbmEtbWFzLWxpc3RhZG8vYWRpdmluYS1tYXMtbGlzdGFkby5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AdivinaMasListadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdivinaMasListadoComponent", function() { return AdivinaMasListadoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AdivinaMasListadoComponent = class AdivinaMasListadoComponent {
    constructor() { this.listadoParaCompartir = new Array(); }
    ngOnInit() {
    }
    tomarJuegoTerminado(juego) {
        this.listadoParaCompartir.push(juego);
        // console.info("en app",this.listadoParaCompartir);
    }
};
AdivinaMasListadoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-adivina-mas-listado',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./adivina-mas-listado.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./adivina-mas-listado.component.css */ "./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.css")).default]
    })
], AdivinaMasListadoComponent);



/***/ }),

/***/ "./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".centrado{\r\n    text-align: center;\r\n}\r\ninput{\r\n    display: inline-block;\r\n    text-align: center;\r\n    \r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvYWdpbGlkYWQtYXJpdG1ldGljYS9hZ2lsaWRhZC1hcml0bWV0aWNhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7O0FBRXRCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvYWdpbGlkYWQtYXJpdG1ldGljYS9hZ2lsaWRhZC1hcml0bWV0aWNhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudHJhZG97XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuaW5wdXR7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AgilidadAritmeticaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgilidadAritmeticaComponent", function() { return AgilidadAritmeticaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _clases_juego_agilidad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../clases/juego-agilidad */ "./src/app/clases/juego-agilidad.ts");
/* harmony import */ var src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/servicios/auth.service */ "./src/app/servicios/auth.service.ts");
/* harmony import */ var src_app_servicios_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/servicios/local-storage.service */ "./src/app/servicios/local-storage.service.ts");





let AgilidadAritmeticaComponent = class AgilidadAritmeticaComponent {
    constructor(localStorageService, authService) {
        this.localStorageService = localStorageService;
        this.authService = authService;
        this.juegoTerminado = false;
        this.enviarJuego = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.mostrar = false;
        this.operadores = ["*", "-", "/", "+"];
        this.nuevoJuego = new _clases_juego_agilidad__WEBPACK_IMPORTED_MODULE_2__["JuegoAgilidad"]();
        this.contadorGanadas = 0;
        //---puntajes
        this.esTop1 = false;
        this.ocultarVerificar = true;
        this.Tiempo = 30;
        // this.nuevoJuego = new JuegoAgilidad();
        console.info("Inicio agilidad");
    }
    ;
    //------------
    ngOnInit() {
        this.obtenerMailDeUsuarioActual();
    }
    obtenerMailDeUsuarioActual() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const user = yield this.authService.usuarioLogeado();
            if (user) {
                this.emailUsuarioActual = user.email;
            }
        });
    }
    // Retorna un número aleatorio entre min (incluido) y max (excluido)
    numeroAleatorio(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    toggleJuegoTerminado() {
        this.juegoTerminado = !this.juegoTerminado;
        this.contadorGanadas = 0;
    }
    NuevoJuego() {
        this.mostrar = false;
        this.nuevoJuego = new _clases_juego_agilidad__WEBPACK_IMPORTED_MODULE_2__["JuegoAgilidad"]();
        this.nuevoJuego.numeroAleatorioUno = this.numeroAleatorio(0, 100);
        this.nuevoJuego.numeroAleatorioDos = this.numeroAleatorio(1, 10);
        this.nuevoJuego.operador = this.operadores[this.numeroAleatorio(0, 4)];
        this.ocultarVerificar = false;
        this.repetidor = setInterval(() => {
            this.Tiempo--;
            if (this.Tiempo == 0) {
                this.localStorageService.guardarPuntuacionEnLocalStorage(this.emailUsuarioActual, 'agilidad', this.contadorGanadas);
                this.esTop1 = this.localStorageService.verificarSiSuperoAlTop();
                this.juegoTerminado = true;
                clearInterval(this.repetidor);
                this.verificar();
                this.ocultarVerificar = true;
                this.Tiempo = 30;
            }
        }, 1000);
    }
    calcularResultado() {
        let numeroUno = this.nuevoJuego.numeroAleatorioUno;
        let numeroDos = this.nuevoJuego.numeroAleatorioDos;
        let operador = this.nuevoJuego.operador;
        switch (operador) {
            case "*":
                return numeroUno * numeroDos;
            case "/":
                return numeroUno / numeroDos;
            case "+":
                return numeroUno + numeroDos;
            case "-":
                return numeroUno - numeroDos;
        }
    }
    verificar() {
        this.ocultarVerificar = false;
        let resultado = (this.calcularResultado());
        if (resultado == this.nuevoJuego.numeroIngresado) {
            this.mostrar = false;
            this.nuevoJuego.gano = true;
            this.ocultarVerificar = true;
            let sonido = new Audio('../../../assets/audios/success.wav');
            sonido.play();
            this.contadorGanadas++;
        }
        else if (this.nuevoJuego.numeroIngresado) {
            this.mostrar = true;
            let sonido = new Audio('../../../assets/audios/fail.wav');
            sonido.play();
            this.NuevoJuego();
        }
        else {
            let sonido = new Audio('../../../assets/audios/fail.wav');
            sonido.play();
            this.ocultarVerificar = true;
            this.NuevoJuego();
        }
        clearInterval(this.repetidor);
    }
};
AgilidadAritmeticaComponent.ctorParameters = () => [
    { type: src_app_servicios_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] },
    { type: src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], AgilidadAritmeticaComponent.prototype, "enviarJuego", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AgilidadAritmeticaComponent.prototype, "nuevoJuego", void 0);
AgilidadAritmeticaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-agilidad-aritmetica',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./agilidad-aritmetica.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./agilidad-aritmetica.component.css */ "./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.css")).default]
    })
], AgilidadAritmeticaComponent);



/***/ }),

/***/ "./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.css ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2FnaWxpZGFkLW1hcy1saXN0YWRvL2FnaWxpZGFkLW1hcy1saXN0YWRvLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.ts ***!
  \************************************************************************************/
/*! exports provided: AgilidadMasListadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgilidadMasListadoComponent", function() { return AgilidadMasListadoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AgilidadMasListadoComponent = class AgilidadMasListadoComponent {
    constructor() { this.listadoParaCompartir = new Array(); }
    ngOnInit() {
    }
    tomarJuegoTerminado(juego) {
        this.listadoParaCompartir.push(juego);
        console.info("en app", this.listadoParaCompartir);
    }
};
AgilidadMasListadoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-agilidad-mas-listado',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./agilidad-mas-listado.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./agilidad-mas-listado.component.css */ "./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.css")).default]
    })
], AgilidadMasListadoComponent);



/***/ }),

/***/ "./src/app/componentes/alerta-custom/alerta-custom.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/componentes/alerta-custom/alerta-custom.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img{\r\n    width: 400px;\r\n    height: 350px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvYWxlcnRhLWN1c3RvbS9hbGVydGEtY3VzdG9tLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2FsZXJ0YS1jdXN0b20vYWxlcnRhLWN1c3RvbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgaGVpZ2h0OiAzNTBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/componentes/alerta-custom/alerta-custom.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/componentes/alerta-custom/alerta-custom.component.ts ***!
  \**********************************************************************/
/*! exports provided: AlertaCustomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertaCustomComponent", function() { return AlertaCustomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AlertaCustomComponent = class AlertaCustomComponent {
    constructor() { }
    ngOnInit() {
    }
};
AlertaCustomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-alerta-custom',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./alerta-custom.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/alerta-custom/alerta-custom.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./alerta-custom.component.css */ "./src/app/componentes/alerta-custom/alerta-custom.component.css")).default]
    })
], AlertaCustomComponent);



/***/ }),

/***/ "./src/app/componentes/anagrama/anagrama.component.css":
/*!*************************************************************!*\
  !*** ./src/app/componentes/anagrama/anagrama.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".centrado{\r\n    text-align: center;\r\n}\r\nh5{\r\n  font-family: fantasy;\r\n  margin: 0;\r\n}\r\np{\r\n  font-family: fantasy;\r\n  font-size: 300%;\r\n}\r\n#divContadorIntentos{\r\n  position: absolute;\r\n}\r\n.borderTransicionColores{\r\n  -webkit-animation-name: trancicion-colores-border;\r\n          animation-name: trancicion-colores-border;\r\n  -webkit-animation-duration: 3s;\r\n          animation-duration: 3s;\r\n  -webkit-animation-iteration-count: infinite;\r\n          animation-iteration-count: infinite;\r\n  -webkit-animation-delay: 3;\r\n          animation-delay: 3;\r\n}\r\n.btn-danger{\r\n  background-color: rgba(255, 0, 0, 0.521);\r\n}\r\n.btn-primary{\r\n  background-color: rgba(17, 0, 255, 0.521);\r\n}\r\n#btnComparar{\r\n  font-weight: bold;\r\n  -webkit-animation-name: trancicion-colores;\r\n          animation-name: trancicion-colores;\r\n  -webkit-animation-duration: 3s;\r\n          animation-duration: 3s;\r\n  -webkit-animation-iteration-count: infinite;\r\n          animation-iteration-count: infinite;\r\n  -webkit-animation-delay: 3;\r\n          animation-delay: 3;\r\n}\r\n@-webkit-keyframes trancicion-colores-border{\r\n  from{\r\n    border:solid rgba(255, 0, 0, 0.288) 3px;\r\n  }\r\n  50%{\r\n    border:solid rgba(0, 0, 255, 0.288) 3px;\r\n  }\r\n  to{\r\n    border:solid rgba(0, 255, 0, 0.288) 3px;\r\n  }\r\n}\r\n@keyframes trancicion-colores-border{\r\n  from{\r\n    border:solid rgba(255, 0, 0, 0.288) 3px;\r\n  }\r\n  50%{\r\n    border:solid rgba(0, 0, 255, 0.288) 3px;\r\n  }\r\n  to{\r\n    border:solid rgba(0, 255, 0, 0.288) 3px;\r\n  }\r\n}\r\n@-webkit-keyframes trancicion-colores{\r\n  from{\r\n    background-color: rgba(255, 0, 0, 0.288);\r\n  }\r\n  50%{\r\n    background-color: rgba(0, 0, 255, 0.288);\r\n  }\r\n  to{\r\n    background-color: rgba(0, 255, 0, 0.288);\r\n  }\r\n}\r\n@keyframes trancicion-colores{\r\n  from{\r\n    background-color: rgba(255, 0, 0, 0.288);\r\n  }\r\n  50%{\r\n    background-color: rgba(0, 0, 255, 0.288);\r\n  }\r\n  to{\r\n    background-color: rgba(0, 255, 0, 0.288);\r\n  }\r\n}\r\n#inputPalabra{\r\n  margin-top: 30px;\r\n}\r\n.container{\r\n    background: url('background-letras.jpg') center center/cover;\r\n    height: 400px;\r\n    border-radius: 30px;\r\n}\r\nh1 {\r\n    background-color: rgba(255, 166, 0, 0.671);\r\n    border-radius: 10px;\r\n    display: inline-block;\r\n}\r\nimg{\r\n    width: 4em;\r\n    height: 4em;\r\n    border: 2px solid black;\r\n    margin-right: 2px;\r\n    padding:3px;\r\n}\r\n.marginBottom{\r\n    margin-bottom: 20px;\r\n}\r\n#btnComenzar{\r\n    border-radius: 100%;\r\n    height: 80%;\r\n    padding-top: 80px;\r\n    padding-bottom: 80px;\r\n    font-size: 300%;\r\n}\r\n.overflowHidden{\r\n    overflow: hidden;\r\n}\r\nimg {\r\n    -webkit-animation-duration: 3s;\r\n            animation-duration: 3s;\r\n    -webkit-animation-name: slidenOut;\r\n            animation-name: slidenOut;\r\n  }\r\n.buttonAnimado {\r\n    -webkit-animation-duration: 2s;\r\n            animation-duration: 2s;\r\n    -webkit-animation-name: slideInLeft;\r\n            animation-name: slideInLeft;\r\n  }\r\n.entradaDerecha{\r\n    -webkit-animation-delay: 1s;\r\n            animation-delay: 1s;\r\n    -webkit-animation-duration: 3s;\r\n            animation-duration: 3s;\r\n    -webkit-animation-name: entradaDerecha;\r\n            animation-name: entradaDerecha;\r\n  }\r\n.entradaIzquierda{\r\n    -webkit-animation-delay: 1s;\r\n            animation-delay: 1s;\r\n    -webkit-animation-duration: 3s;\r\n            animation-duration: 3s;\r\n    -webkit-animation-name: entradaIzquierda;\r\n            animation-name: entradaIzquierda;\r\n  }\r\n@-webkit-keyframes entradaIzquierda {\r\n    from {\r\n      margin-left: 100%;\r\n    }\r\n    to {\r\n      margin-left: 0%;\r\n    }\r\n  }\r\n@keyframes entradaIzquierda {\r\n    from {\r\n      margin-left: 100%;\r\n    }\r\n    to {\r\n      margin-left: 0%;\r\n    }\r\n  }\r\n@-webkit-keyframes entradaDerecha {\r\n    from {\r\n      margin-right: 100%;\r\n    }\r\n  \r\n    to {\r\n      margin-right: 0%;\r\n    }\r\n  }\r\n@keyframes entradaDerecha {\r\n    from {\r\n      margin-right: 100%;\r\n    }\r\n  \r\n    to {\r\n      margin-right: 0%;\r\n    }\r\n  }\r\n@-webkit-keyframes slideInLeft {\r\n    from {\r\n      margin-left: 100%;\r\n      background-color: rgb(255, 0, 0);\r\n    }\r\n    85% {\r\n      background-color: rgb(0, 0, 255);\r\n      margin-top: 20%\r\n      }      \r\n    70% {\r\n      background-color: rgb(0, 128, 0);\r\n      margin-bottom: 30%\r\n    }\r\n    \r\n    60% {\r\n      background-color: rgb(255, 255, 0);\r\n      margin-left: 90%\r\n    }\r\n    \r\n    50% {\r\n        margin-right: 60%\r\n    }\r\n    40% {\r\n      background-color: violet;\r\n      margin-bottom: 30%\r\n    }\r\n    30% {\r\n        margin-top: 20%\r\n    }\r\n    20% {\r\n        margin-left: 50%\r\n    }\r\n    10% {\r\n        margin-top: 20%\r\n    }\r\n    to {\r\n      margin-left: 0%;\r\n    }\r\n  }\r\n@keyframes slideInLeft {\r\n    from {\r\n      margin-left: 100%;\r\n      background-color: rgb(255, 0, 0);\r\n    }\r\n    85% {\r\n      background-color: rgb(0, 0, 255);\r\n      margin-top: 20%\r\n      }      \r\n    70% {\r\n      background-color: rgb(0, 128, 0);\r\n      margin-bottom: 30%\r\n    }\r\n    \r\n    60% {\r\n      background-color: rgb(255, 255, 0);\r\n      margin-left: 90%\r\n    }\r\n    \r\n    50% {\r\n        margin-right: 60%\r\n    }\r\n    40% {\r\n      background-color: violet;\r\n      margin-bottom: 30%\r\n    }\r\n    30% {\r\n        margin-top: 20%\r\n    }\r\n    20% {\r\n        margin-left: 50%\r\n    }\r\n    10% {\r\n        margin-top: 20%\r\n    }\r\n    to {\r\n      margin-left: 0%;\r\n    }\r\n  }\r\n@-webkit-keyframes slidenOut {\r\n    from {\r\n      margin-top: 100%;\r\n    }\r\n  \r\n    to {\r\n      margin-top: 0%;\r\n    }\r\n  }\r\n@keyframes slidenOut {\r\n    from {\r\n      margin-top: 100%;\r\n    }\r\n  \r\n    to {\r\n      margin-top: 0%;\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvYW5hZ3JhbWEvYW5hZ3JhbWEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLFNBQVM7QUFDWDtBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsaURBQXlDO1VBQXpDLHlDQUF5QztFQUN6Qyw4QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLDJDQUFtQztVQUFuQyxtQ0FBbUM7RUFDbkMsMEJBQWtCO1VBQWxCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usd0NBQXdDO0FBQzFDO0FBRUE7RUFDRSx5Q0FBeUM7QUFDM0M7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQiwwQ0FBa0M7VUFBbEMsa0NBQWtDO0VBQ2xDLDhCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsMkNBQW1DO1VBQW5DLG1DQUFtQztFQUNuQywwQkFBa0I7VUFBbEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRTtJQUNFLHVDQUF1QztFQUN6QztFQUNBO0lBQ0UsdUNBQXVDO0VBQ3pDO0VBQ0E7SUFDRSx1Q0FBdUM7RUFDekM7QUFDRjtBQVZBO0VBQ0U7SUFDRSx1Q0FBdUM7RUFDekM7RUFDQTtJQUNFLHVDQUF1QztFQUN6QztFQUNBO0lBQ0UsdUNBQXVDO0VBQ3pDO0FBQ0Y7QUFDQTtFQUNFO0lBQ0Usd0NBQXdDO0VBQzFDO0VBQ0E7SUFDRSx3Q0FBd0M7RUFDMUM7RUFDQTtJQUNFLHdDQUF3QztFQUMxQztBQUNGO0FBVkE7RUFDRTtJQUNFLHdDQUF3QztFQUMxQztFQUNBO0lBQ0Usd0NBQXdDO0VBQzFDO0VBQ0E7SUFDRSx3Q0FBd0M7RUFDMUM7QUFDRjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7SUFDSSw0REFBcUY7SUFDckYsYUFBYTtJQUNiLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksMENBQTBDO0lBQzFDLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixXQUFXO0FBQ2Y7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksOEJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QixpQ0FBeUI7WUFBekIseUJBQXlCO0VBQzNCO0FBQ0E7SUFDRSw4QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLG1DQUEyQjtZQUEzQiwyQkFBMkI7RUFDN0I7QUFDRDtJQUNHLDJCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsOEJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QixzQ0FBOEI7WUFBOUIsOEJBQThCO0VBQ2hDO0FBQ0E7SUFDRSwyQkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLDhCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsd0NBQWdDO1lBQWhDLGdDQUFnQztFQUNsQztBQUdBO0lBQ0U7TUFDRSxpQkFBaUI7SUFDbkI7SUFDQTtNQUNFLGVBQWU7SUFDakI7RUFDRjtBQVBBO0lBQ0U7TUFDRSxpQkFBaUI7SUFDbkI7SUFDQTtNQUNFLGVBQWU7SUFDakI7RUFDRjtBQUNBO0lBQ0U7TUFDRSxrQkFBa0I7SUFDcEI7O0lBRUE7TUFDRSxnQkFBZ0I7SUFDbEI7RUFDRjtBQVJBO0lBQ0U7TUFDRSxrQkFBa0I7SUFDcEI7O0lBRUE7TUFDRSxnQkFBZ0I7SUFDbEI7RUFDRjtBQUNBO0lBQ0U7TUFDRSxpQkFBaUI7TUFDakIsZ0NBQWdDO0lBQ2xDO0lBQ0E7TUFDRSxnQ0FBZ0M7TUFDaEM7TUFDQTtJQUNGO01BQ0UsZ0NBQWdDO01BQ2hDO0lBQ0Y7O0lBRUE7TUFDRSxrQ0FBa0M7TUFDbEM7SUFDRjs7SUFFQTtRQUNJO0lBQ0o7SUFDQTtNQUNFLHdCQUF3QjtNQUN4QjtJQUNGO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7TUFDRSxlQUFlO0lBQ2pCO0VBQ0Y7QUF0Q0E7SUFDRTtNQUNFLGlCQUFpQjtNQUNqQixnQ0FBZ0M7SUFDbEM7SUFDQTtNQUNFLGdDQUFnQztNQUNoQztNQUNBO0lBQ0Y7TUFDRSxnQ0FBZ0M7TUFDaEM7SUFDRjs7SUFFQTtNQUNFLGtDQUFrQztNQUNsQztJQUNGOztJQUVBO1FBQ0k7SUFDSjtJQUNBO01BQ0Usd0JBQXdCO01BQ3hCO0lBQ0Y7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtNQUNFLGVBQWU7SUFDakI7RUFDRjtBQUVBO0lBQ0U7TUFDRSxnQkFBZ0I7SUFDbEI7O0lBRUE7TUFDRSxjQUFjO0lBQ2hCO0VBQ0Y7QUFSQTtJQUNFO01BQ0UsZ0JBQWdCO0lBQ2xCOztJQUVBO01BQ0UsY0FBYztJQUNoQjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvYW5hZ3JhbWEvYW5hZ3JhbWEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50cmFkb3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5oNXtcclxuICBmb250LWZhbWlseTogZmFudGFzeTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxucHtcclxuICBmb250LWZhbWlseTogZmFudGFzeTtcclxuICBmb250LXNpemU6IDMwMCU7XHJcbn1cclxuI2RpdkNvbnRhZG9ySW50ZW50b3N7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5ib3JkZXJUcmFuc2ljaW9uQ29sb3Jlc3tcclxuICBhbmltYXRpb24tbmFtZTogdHJhbmNpY2lvbi1jb2xvcmVzLWJvcmRlcjtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xyXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMztcclxufVxyXG4uYnRuLWRhbmdlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC41MjEpO1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnl7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNywgMCwgMjU1LCAwLjUyMSk7XHJcbn1cclxuI2J0bkNvbXBhcmFye1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiB0cmFuY2ljaW9uLWNvbG9yZXM7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcclxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICBhbmltYXRpb24tZGVsYXk6IDM7XHJcbn1cclxuQGtleWZyYW1lcyB0cmFuY2ljaW9uLWNvbG9yZXMtYm9yZGVye1xyXG4gIGZyb217XHJcbiAgICBib3JkZXI6c29saWQgcmdiYSgyNTUsIDAsIDAsIDAuMjg4KSAzcHg7XHJcbiAgfVxyXG4gIDUwJXtcclxuICAgIGJvcmRlcjpzb2xpZCByZ2JhKDAsIDAsIDI1NSwgMC4yODgpIDNweDtcclxuICB9XHJcbiAgdG97XHJcbiAgICBib3JkZXI6c29saWQgcmdiYSgwLCAyNTUsIDAsIDAuMjg4KSAzcHg7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgdHJhbmNpY2lvbi1jb2xvcmVze1xyXG4gIGZyb217XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4yODgpO1xyXG4gIH1cclxuICA1MCV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC4yODgpO1xyXG4gIH1cclxuICB0b3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCAwLCAwLjI4OCk7XHJcbiAgfVxyXG59XHJcblxyXG4jaW5wdXRQYWxhYnJhe1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuLmNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZW5lcy9iYWNrZ3JvdW5kLWxldHJhcy5qcGdcIikgY2VudGVyIGNlbnRlci9jb3ZlcjtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG59XHJcbmgxIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNjYsIDAsIDAuNjcxKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuaW1ne1xyXG4gICAgd2lkdGg6IDRlbTtcclxuICAgIGhlaWdodDogNGVtO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcclxuICAgIHBhZGRpbmc6M3B4O1xyXG59XHJcblxyXG4ubWFyZ2luQm90dG9te1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufSBcclxuI2J0bkNvbWVuemFye1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgcGFkZGluZy10b3A6IDgwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogODBweDtcclxuICAgIGZvbnQtc2l6ZTogMzAwJTtcclxufVxyXG4ub3ZlcmZsb3dIaWRkZW57XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbmltZyB7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlbk91dDtcclxuICB9XHJcbiAgLmJ1dHRvbkFuaW1hZG8ge1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZUluTGVmdDtcclxuICB9XHJcbiAuZW50cmFkYURlcmVjaGF7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDFzO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBlbnRyYWRhRGVyZWNoYTtcclxuICB9XHJcbiAgLmVudHJhZGFJenF1aWVyZGF7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDFzO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBlbnRyYWRhSXpxdWllcmRhO1xyXG4gIH1cclxuICAgXHJcbiAgXHJcbiAgQGtleWZyYW1lcyBlbnRyYWRhSXpxdWllcmRhIHtcclxuICAgIGZyb20ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTAwJTtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDAlO1xyXG4gICAgfVxyXG4gIH1cclxuICBAa2V5ZnJhbWVzIGVudHJhZGFEZXJlY2hhIHtcclxuICAgIGZyb20ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICB0byB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMCU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgc2xpZGVJbkxlZnQge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMDAlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcclxuICAgIH1cclxuICAgIDg1JSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAyNTUpO1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMCVcclxuICAgICAgfSAgICAgIFxyXG4gICAgNzAlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDEyOCwgMCk7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDMwJVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICA2MCUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDApO1xyXG4gICAgICBtYXJnaW4tbGVmdDogOTAlXHJcbiAgICB9XHJcbiAgICBcclxuICAgIDUwJSB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA2MCVcclxuICAgIH1cclxuICAgIDQwJSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZpb2xldDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMzAlXHJcbiAgICB9XHJcbiAgICAzMCUge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwJVxyXG4gICAgfVxyXG4gICAgMjAlIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNTAlXHJcbiAgICB9XHJcbiAgICAxMCUge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwJVxyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMCU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgc2xpZGVuT3V0IHtcclxuICAgIGZyb20ge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMDAlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgdG8ge1xyXG4gICAgICBtYXJnaW4tdG9wOiAwJTtcclxuICAgIH1cclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/componentes/anagrama/anagrama.component.ts":
/*!************************************************************!*\
  !*** ./src/app/componentes/anagrama/anagrama.component.ts ***!
  \************************************************************/
/*! exports provided: AnagramaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnagramaComponent", function() { return AnagramaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_servicios_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicios/local-storage.service */ "./src/app/servicios/local-storage.service.ts");
/* harmony import */ var src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/servicios/auth.service */ "./src/app/servicios/auth.service.ts");




let AnagramaComponent = class AnagramaComponent {
    //fin puntaje
    constructor(authService, localStorageService) {
        this.authService = authService;
        this.localStorageService = localStorageService;
        this.puntaje = 0;
        this.vidas = 5;
        this.mostrarPalabraSecreta = false;
        this.mostrar = false;
        this.empesarPartida = false;
        //---puntaje
        this.esTop1 = false;
        this.abecedario = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        this.palabras = ["abrelatas", "disposicion", "parlante", "aire", "mesa", "PC", "libros", "escuela", "pelusa",
            "Andres", "esfera", "periferico", "animal", "esquina", "perro", "casco", "Eugenia", "piscinas", "pasto", "cuaderno", "planta",
            "Argentina", "Fernanda", "Polonia", "atomo", "Francia", "posavasos", "Belen", "galleta", "programa", "Beto", "Guadalupe", "puerta",
            "boton", "guitarra", "quimica", "Brasil", "hoja", "rectangulo", "Bruselas", "idea", "ropa", "cable", "Juanita", "silla", "calculadora", "juguete", "sonido", "carpeta", "Julio", "Spotify",
            "cartera", "La", "lampara", "suciedad", "celular", "loros", "sustancia", "cerradura", "Louisiana", "televidente", "cesped", "manantial", "televisor", "Chile", "Mariano", "tierra",
            "notebook", "mausoleo", "tigre", "circulo", "mesa", "Tomas", "ciudad", "Mexico", "trabajador", "ciruela", "molecula", "trabajo",
            "claridad", "mouse", "triangulo", "clavel", "mueble", "tulipan", "competencia", "Nicolas", "utensilio", "computadora", "notas", "vaso", "cuerda", "Nueva York", "ventana", "Dinamarca", "telefono", "vidrio", "asiento", "pantalla", "violin", "bateria", "Paris", "visita"];
    }
    ngOnInit() {
        this.obtenerMailDeUsuarioActual();
    }
    obtenerMailDeUsuarioActual() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const user = yield this.authService.usuarioLogeado();
            if (user) {
                this.emailUsuarioActual = user.email;
            }
        });
    }
    comenzar() {
        this.empesarPartida = !this.empesarPartida;
        this.cambiarPalabra();
    }
    mostrarPalabra() {
        this.mostrarPalabraSecreta = !this.mostrarPalabraSecreta;
        this.vidas--;
        setTimeout(() => {
            this.cambiarPalabra();
        }, 4000);
    }
    cambiarEstado() {
        this.mostrar = !this.mostrar;
    }
    compararPalabra() {
        console.log(this.palabra);
        if (this.palabraIngresada == this.palabra) {
            let audio = new Audio('../../../assets/audios/success.wav');
            audio.play();
            this.cambiarPalabra();
            this.vidas++;
            this.puntaje++;
        }
        else {
            this.vidas--;
            let audio = new Audio('../../../assets/audios/fail.wav');
            audio.play();
        }
        if (this.vidas == 0) {
            this.terminarPartida();
        }
    }
    terminarPartida() {
        this.localStorageService.guardarPuntuacionEnLocalStorage(this.emailUsuarioActual, 'anagrama', this.puntaje);
        this.esTop1 = this.localStorageService.verificarSiSuperoAlTop();
        this.empesarPartida = false;
        this.vidas = 5;
        this.puntaje = 0;
    }
    // Retorna un número aleatorio entre min (incluido) y max (excluido)
    numeroRandom(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    //con esta funcion ordeno la palabra de 'A' a la 'Z'
    desordenarPalabra(arrayLetras) {
        let i = 0;
        let palabraDesordenada = new Array;
        this.abecedario.forEach(letraDelAbecedario => {
            arrayLetras.forEach(letraDeLaPalbra => {
                if (letraDeLaPalbra == letraDelAbecedario) {
                    palabraDesordenada.push(letraDeLaPalbra);
                }
            });
        });
        return palabraDesordenada;
    }
    mostrarImagenesDePalabra() {
        this.arrayPalabra.forEach(letra => {
        });
    }
    cambiarPalabraYDescontar() {
        this.vidas--;
        this.cambiarPalabra();
    }
    cambiarPalabra() {
        if (this.vidas == 0) {
            this.terminarPartida();
        }
        this.mostrarPalabraSecreta = false;
        this.mostrar = false;
        let numeroRandom = this.numeroRandom(0, 101);
        this.palabra = this.palabras[numeroRandom].toLocaleLowerCase();
        let arrayLetras = this.separarPalabras(this.palabra);
        this.arrayPalabra = this.desordenarPalabra(arrayLetras);
        this.mostrarImagenesDePalabra();
        this.palabraIngresada = "";
    }
    separarPalabras(palabra) {
        let i;
        let arrayLetras = new Array;
        for (i = 0; i < palabra.length; i++) {
            arrayLetras.push(palabra[i]);
        }
        return arrayLetras;
    }
};
AnagramaComponent.ctorParameters = () => [
    { type: src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: src_app_servicios_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AnagramaComponent.prototype, "palabra", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AnagramaComponent.prototype, "vidas", void 0);
AnagramaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-anagrama',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./anagrama.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/anagrama/anagrama.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./anagrama.component.css */ "./src/app/componentes/anagrama/anagrama.component.css")).default]
    })
], AnagramaComponent);



/***/ }),

/***/ "./src/app/componentes/cabecera/cabecera.component.css":
/*!*************************************************************!*\
  !*** ./src/app/componentes/cabecera/cabecera.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("*{\r\n    font-family: monospace;\r\n}\r\n.panel\r\n{\r\n    height: 200px;\r\n    background-image: url(\"/TP_LAV4_2017/assets/imagenes/cabecera.png\");\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    position: relative;\r\n}\r\n.navbar{\r\n    border-radius: 10px;\r\n}\r\n.logoUtn{\r\n    width: 60px;\r\n    height: 60px;\r\n    border-radius: 10px;\r\n    }\r\n/* .specialPosition{\r\n    margin-top:2em;\r\n    position: absolute;\r\n    float: left;\r\n} */\r\n.specialPosition>a:last-child{\r\n    margin-left: 20px;\r\n}\r\n.btnLink{\r\n    border: 10px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    background-color: rgb(17, 157, 204);\r\n    color:white;\r\n    border-radius: 30px;\r\n    text-decoration: none;\r\n}\r\n.btnLink:hover{\r\n    background-color: rgb(44, 145, 179);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvY2FiZWNlcmEvY2FiZWNlcmEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBOztJQUVJLGFBQWE7SUFDYixtRUFBbUU7SUFDbkUsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CO0FBRUo7Ozs7R0FJRztBQUNIO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixtQ0FBbUM7SUFDbkMsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7QUFFQTtJQUNJLG1DQUFtQztBQUN2QyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2NhYmVjZXJhL2NhYmVjZXJhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxufVxyXG4ucGFuZWxcclxue1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9UUF9MQVY0XzIwMTcvYXNzZXRzL2ltYWdlbmVzL2NhYmVjZXJhLnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5uYXZiYXJ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5sb2dvVXRue1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuLyogLnNwZWNpYWxQb3NpdGlvbntcclxuICAgIG1hcmdpbi10b3A6MmVtO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn0gKi9cclxuLnNwZWNpYWxQb3NpdGlvbj5hOmxhc3QtY2hpbGR7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG4gICAgXHJcbi5idG5MaW5re1xyXG4gICAgYm9yZGVyOiAxMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNywgMTU3LCAyMDQpO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbiAgICBcclxuLmJ0bkxpbms6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDQsIDE0NSwgMTc5KTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/componentes/cabecera/cabecera.component.ts":
/*!************************************************************!*\
  !*** ./src/app/componentes/cabecera/cabecera.component.ts ***!
  \************************************************************/
/*! exports provided: CabeceraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CabeceraComponent", function() { return CabeceraComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CabeceraComponent = class CabeceraComponent {
    constructor() {
        this.srcLinkBoolean = false;
        this.routerLinkBoolean = false;
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CabeceraComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CabeceraComponent.prototype, "srcLink", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CabeceraComponent.prototype, "nameLink", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CabeceraComponent.prototype, "routerLinkk", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CabeceraComponent.prototype, "nameRouterLink", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CabeceraComponent.prototype, "img", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CabeceraComponent.prototype, "srcLinkBoolean", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CabeceraComponent.prototype, "routerLinkBoolean", void 0);
CabeceraComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cabecera',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cabecera.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/cabecera/cabecera.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cabecera.component.css */ "./src/app/componentes/cabecera/cabecera.component.css")).default]
    })
], CabeceraComponent);



/***/ }),

/***/ "./src/app/componentes/card-img-top/card-img-top.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/componentes/card-img-top/card-img-top.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card{\r\n    display: inline-block;\r\n    border: none;\r\n}\r\n\r\n.text-Overflow-Hide{    \r\n    white-space: nowrap; \r\n    overflow: hidden;\r\n    text-overflow: ellipsis; \r\n  }\r\n\r\n.card-text{    \r\n    overflow: hidden;\r\n    text-overflow: ellipsis; \r\n  }\r\n\r\n.text-Overflow-Hide:hover{\r\n    white-space: normal; \r\n  }\r\n\r\nimg{\r\n    width: 15rem;\r\n    height: 8rem;\r\n  }\r\n\r\n.btn{\r\n    text-align: center;\r\n    border-radius: 10px;\r\n    min-width: 70%;\r\n    border: 2px dotted rgb(0, 0, 0);\r\n  }\r\n\r\n.centrado{\r\n    text-align: center;\r\n  }\r\n\r\n.delay1s{\r\n    -webkit-animation: rotate-scale-up 1s linear both;\r\n            animation: rotate-scale-up 1s linear both;\r\n    -webkit-animation-delay: 1s;\r\n            animation-delay: 1s;\r\n}\r\n\r\n.delay2s{\r\n    -webkit-animation: rotate-scale-up 1s linear both;\r\n            animation: rotate-scale-up 1s linear both;\r\n    -webkit-animation-delay: 2s;\r\n            animation-delay: 2s;\r\n}\r\n\r\n.delay3s{\r\n    -webkit-animation: rotate-scale-up 1s linear both;\r\n            animation: rotate-scale-up 1s linear both;\r\n    -webkit-animation-delay: 3s;\r\n            animation-delay: 3s;\r\n}\r\n\r\n.delay4s{\r\n    -webkit-animation: rotate-scale-up 1s linear both;\r\n            animation: rotate-scale-up 1s linear both;\r\n    -webkit-animation-delay: 4s;\r\n            animation-delay: 4s;\r\n}\r\n\r\n.inline-block{\r\ndisplay: inline-block;\r\n}\r\n\r\n.rotate-scale-up {\r\n-webkit-animation: rotate-scale-up 1s linear both;\r\n        animation: rotate-scale-up 1s linear both;\r\n}\r\n\r\n@-webkit-keyframes rotate-scale-up {\r\n0% {\r\n      transform: scale(1) rotateZ(0);\r\n}\r\n50% {\r\n      transform: scale(2) rotateZ(180deg);\r\n}\r\n100% {\r\n      transform: scale(1) rotateZ(360deg);\r\n}\r\n}\r\n\r\n@keyframes rotate-scale-up {\r\n0% {\r\n      transform: scale(1) rotateZ(0);\r\n}\r\n50% {\r\n      transform: scale(2) rotateZ(180deg);\r\n}\r\n100% {\r\n      transform: scale(1) rotateZ(360deg);\r\n}\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvY2FyZC1pbWctdG9wL2NhcmQtaW1nLXRvcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtFQUN6Qjs7QUFFRjtJQUNJLGdCQUFnQjtJQUNoQix1QkFBdUI7RUFDekI7O0FBQ0E7SUFDRSxtQkFBbUI7RUFDckI7O0FBQ0E7SUFDRSxZQUFZO0lBQ1osWUFBWTtFQUNkOztBQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsK0JBQStCO0VBQ2pDOztBQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCOztBQUVBO0lBQ0UsaURBQXlDO1lBQXpDLHlDQUF5QztJQUN6QywyQkFBbUI7WUFBbkIsbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksaURBQXlDO1lBQXpDLHlDQUF5QztJQUN6QywyQkFBbUI7WUFBbkIsbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksaURBQXlDO1lBQXpDLHlDQUF5QztJQUN6QywyQkFBbUI7WUFBbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaURBQXlDO1lBQXpDLHlDQUF5QztJQUN6QywyQkFBbUI7WUFBbkIsbUJBQW1CO0FBQ3ZCOztBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsaURBQXlDO1FBQXpDLHlDQUF5QztBQUN6Qzs7QUFDQTtBQUNBO01BQ00sOEJBQThCO0FBQ3BDO0FBQ0E7TUFDTSxtQ0FBbUM7QUFDekM7QUFDQTtNQUNNLG1DQUFtQztBQUN6QztBQUNBOztBQUNBO0FBQ0E7TUFDTSw4QkFBOEI7QUFDcEM7QUFDQTtNQUNNLG1DQUFtQztBQUN6QztBQUNBO01BQ00sbUNBQW1DO0FBQ3pDO0FBQ0EiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9jYXJkLWltZy10b3AvY2FyZC1pbWctdG9wLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLnRleHQtT3ZlcmZsb3ctSGlkZXsgICAgXHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyBcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgXHJcbiAgfVxyXG4gICBcclxuLmNhcmQtdGV4dHsgICAgXHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IFxyXG4gIH1cclxuICAudGV4dC1PdmVyZmxvdy1IaWRlOmhvdmVye1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgXHJcbiAgfVxyXG4gIGltZ3tcclxuICAgIHdpZHRoOiAxNXJlbTtcclxuICAgIGhlaWdodDogOHJlbTtcclxuICB9XHJcbiAgLmJ0bntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtaW4td2lkdGg6IDcwJTtcclxuICAgIGJvcmRlcjogMnB4IGRvdHRlZCByZ2IoMCwgMCwgMCk7XHJcbiAgfVxyXG4gIC5jZW50cmFkb3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5kZWxheTFze1xyXG4gICAgYW5pbWF0aW9uOiByb3RhdGUtc2NhbGUtdXAgMXMgbGluZWFyIGJvdGg7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDFzO1xyXG59XHJcbi5kZWxheTJze1xyXG4gICAgYW5pbWF0aW9uOiByb3RhdGUtc2NhbGUtdXAgMXMgbGluZWFyIGJvdGg7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDJzO1xyXG59XHJcbi5kZWxheTNze1xyXG4gICAgYW5pbWF0aW9uOiByb3RhdGUtc2NhbGUtdXAgMXMgbGluZWFyIGJvdGg7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDNzO1xyXG59XHJcblxyXG4uZGVsYXk0c3tcclxuICAgIGFuaW1hdGlvbjogcm90YXRlLXNjYWxlLXVwIDFzIGxpbmVhciBib3RoO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiA0cztcclxufVxyXG4uaW5saW5lLWJsb2Nre1xyXG5kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5yb3RhdGUtc2NhbGUtdXAge1xyXG5hbmltYXRpb246IHJvdGF0ZS1zY2FsZS11cCAxcyBsaW5lYXIgYm90aDtcclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRlLXNjYWxlLXVwIHtcclxuMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZVooMCk7XHJcbn1cclxuNTAlIHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgyKSByb3RhdGVaKDE4MGRlZyk7XHJcbn1cclxuMTAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlWigzNjBkZWcpO1xyXG59XHJcbn1cclxuQGtleWZyYW1lcyByb3RhdGUtc2NhbGUtdXAge1xyXG4wJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlWigwKTtcclxufVxyXG41MCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDIpIHJvdGF0ZVooMTgwZGVnKTtcclxufVxyXG4xMDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGVaKDM2MGRlZyk7XHJcbn1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/componentes/card-img-top/card-img-top.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/componentes/card-img-top/card-img-top.component.ts ***!
  \********************************************************************/
/*! exports provided: CardImgTopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardImgTopComponent", function() { return CardImgTopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CardImgTopComponent = class CardImgTopComponent {
    constructor() {
        this.mostrarBoton = false;
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardImgTopComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardImgTopComponent.prototype, "description", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardImgTopComponent.prototype, "img", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardImgTopComponent.prototype, "mostrarBoton", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardImgTopComponent.prototype, "routerLinkk", void 0);
CardImgTopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-card-img-top',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./card-img-top.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/card-img-top/card-img-top.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./card-img-top.component.css */ "./src/app/componentes/card-img-top/card-img-top.component.css")).default]
    })
], CardImgTopComponent);



/***/ }),

/***/ "./src/app/componentes/card-juego/card-juego.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/componentes/card-juego/card-juego.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-img-top{\r\n    max-height: 13em;\r\n}\r\n.centrado{\r\n    text-align: center;\r\n}\r\n.inline-block{\r\n    display: inline-block;\r\n}\r\n.hide-overflow-text{\r\n    white-space: nowrap; \r\n    overflow: hidden;\r\n    text-overflow: ellipsis; \r\n}\r\n.hide-overflow-text:hover {\r\n    overflow: visible;\r\n    white-space: normal; \r\n\r\n  }\r\n.card-img{\r\n      width: 5rem;\r\n      float: left;\r\n  }\r\n.card-title{\r\n      display: inline;\r\n  }\r\nimg{\r\n     width: 10rem;\r\n     height: 5rem;\r\n }\r\n.card-header{\r\n     -webkit-animation-duration: 5s;\r\n             animation-duration: 5s;\r\n     -webkit-animation-name: transicion-De-Colores;\r\n             animation-name: transicion-De-Colores;\r\n }\r\n@-webkit-keyframes transicion-De-Colores {\r\n     from{\r\n        background-color: rgba(255, 0, 0, 0.274);\r\n     }\r\n     50%{\r\n        background-color: rgba(255, 255, 0, 0.274);\r\n     }\r\n     to{\r\n        background-color: rgba(0, 0, 255, 0.274);\r\n     }\r\n }\r\n@keyframes transicion-De-Colores {\r\n     from{\r\n        background-color: rgba(255, 0, 0, 0.274);\r\n     }\r\n     50%{\r\n        background-color: rgba(255, 255, 0, 0.274);\r\n     }\r\n     to{\r\n        background-color: rgba(0, 0, 255, 0.274);\r\n     }\r\n }\r\n.slideInRight{\r\n    -webkit-animation-duration: 3s;\r\n            animation-duration: 3s;\r\n    -webkit-animation-name: slideinRight;\r\n            animation-name: slideinRight;\r\n }\r\n.slideInLeft{\r\n    -webkit-animation-duration: 3s;\r\n            animation-duration: 3s;\r\n    -webkit-animation-name: slidein;\r\n            animation-name: slidein;\r\n  }\r\n@-webkit-keyframes slideinRight {\r\n    from {\r\n      margin-left: -100%;\r\n      width: 100%\r\n    }\r\n  \r\n    to {\r\n      margin-left: 0%;\r\n      width: 100%;\r\n    }\r\n}\r\n@keyframes slideinRight {\r\n    from {\r\n      margin-left: -100%;\r\n      width: 100%\r\n    }\r\n  \r\n    to {\r\n      margin-left: 0%;\r\n      width: 100%;\r\n    }\r\n}\r\n@-webkit-keyframes slidein {\r\n    from {\r\n      margin-left: 100%;\r\n      width: 300%\r\n    }\r\n  \r\n    to {\r\n      margin-left: 0%;\r\n      width: 100%;\r\n    }\r\n  }\r\n@keyframes slidein {\r\n    from {\r\n      margin-left: 100%;\r\n      width: 300%\r\n    }\r\n  \r\n    to {\r\n      margin-left: 0%;\r\n      width: 100%;\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvY2FyZC1qdWVnby9jYXJkLWp1ZWdvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjs7RUFFckI7QUFDQTtNQUNJLFdBQVc7TUFDWCxXQUFXO0VBQ2Y7QUFDQTtNQUNJLGVBQWU7RUFDbkI7QUFDRDtLQUNJLFlBQVk7S0FDWixZQUFZO0NBQ2hCO0FBQ0E7S0FDSSw4QkFBc0I7YUFBdEIsc0JBQXNCO0tBQ3RCLDZDQUFxQzthQUFyQyxxQ0FBcUM7Q0FDekM7QUFHQTtLQUNJO1FBQ0csd0NBQXdDO0tBQzNDO0tBQ0E7UUFDRywwQ0FBMEM7S0FDN0M7S0FDQTtRQUNHLHdDQUF3QztLQUMzQztDQUNKO0FBVkE7S0FDSTtRQUNHLHdDQUF3QztLQUMzQztLQUNBO1FBQ0csMENBQTBDO0tBQzdDO0tBQ0E7UUFDRyx3Q0FBd0M7S0FDM0M7Q0FDSjtBQUVBO0lBQ0csOEJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QixvQ0FBNEI7WUFBNUIsNEJBQTRCO0NBQy9CO0FBQ0E7SUFDRyw4QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLCtCQUF1QjtZQUF2Qix1QkFBdUI7RUFDekI7QUFFQTtJQUNFO01BQ0Usa0JBQWtCO01BQ2xCO0lBQ0Y7O0lBRUE7TUFDRSxlQUFlO01BQ2YsV0FBVztJQUNiO0FBQ0o7QUFWRTtJQUNFO01BQ0Usa0JBQWtCO01BQ2xCO0lBQ0Y7O0lBRUE7TUFDRSxlQUFlO01BQ2YsV0FBVztJQUNiO0FBQ0o7QUFDRTtJQUNFO01BQ0UsaUJBQWlCO01BQ2pCO0lBQ0Y7O0lBRUE7TUFDRSxlQUFlO01BQ2YsV0FBVztJQUNiO0VBQ0Y7QUFWQTtJQUNFO01BQ0UsaUJBQWlCO01BQ2pCO0lBQ0Y7O0lBRUE7TUFDRSxlQUFlO01BQ2YsV0FBVztJQUNiO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9jYXJkLWp1ZWdvL2NhcmQtanVlZ28uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWltZy10b3B7XHJcbiAgICBtYXgtaGVpZ2h0OiAxM2VtO1xyXG59XHJcbi5jZW50cmFkb3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uaW5saW5lLWJsb2Nre1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi5oaWRlLW92ZXJmbG93LXRleHR7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyBcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgXHJcbn1cclxuLmhpZGUtb3ZlcmZsb3ctdGV4dDpob3ZlciB7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7IFxyXG5cclxuICB9XHJcbiAgLmNhcmQtaW1ne1xyXG4gICAgICB3aWR0aDogNXJlbTtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgfVxyXG4gIC5jYXJkLXRpdGxle1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgfVxyXG4gaW1ne1xyXG4gICAgIHdpZHRoOiAxMHJlbTtcclxuICAgICBoZWlnaHQ6IDVyZW07XHJcbiB9XHJcbiAuY2FyZC1oZWFkZXJ7XHJcbiAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1cztcclxuICAgICBhbmltYXRpb24tbmFtZTogdHJhbnNpY2lvbi1EZS1Db2xvcmVzO1xyXG4gfVxyXG5cclxuXHJcbiBAa2V5ZnJhbWVzIHRyYW5zaWNpb24tRGUtQ29sb3JlcyB7XHJcbiAgICAgZnJvbXtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4yNzQpO1xyXG4gICAgIH1cclxuICAgICA1MCV7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMCwgMC4yNzQpO1xyXG4gICAgIH1cclxuICAgICB0b3tcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC4yNzQpO1xyXG4gICAgIH1cclxuIH1cclxuXHJcbiAuc2xpZGVJblJpZ2h0e1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZWluUmlnaHQ7XHJcbiB9XHJcbiAuc2xpZGVJbkxlZnR7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlaW47XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgc2xpZGVpblJpZ2h0IHtcclxuICAgIGZyb20ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogLTEwMCU7XHJcbiAgICAgIHdpZHRoOiAxMDAlXHJcbiAgICB9XHJcbiAgXHJcbiAgICB0byB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwJTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuICBAa2V5ZnJhbWVzIHNsaWRlaW4ge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMDAlO1xyXG4gICAgICB3aWR0aDogMzAwJVxyXG4gICAgfVxyXG4gIFxyXG4gICAgdG8ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMCU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/componentes/card-juego/card-juego.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/componentes/card-juego/card-juego.component.ts ***!
  \****************************************************************/
/*! exports provided: CardJuegoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardJuegoComponent", function() { return CardJuegoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let CardJuegoComponent = class CardJuegoComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
    }
    ngOnInit() {
    }
};
CardJuegoComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardJuegoComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardJuegoComponent.prototype, "description", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardJuegoComponent.prototype, "img", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardJuegoComponent.prototype, "routerLinkk", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardJuegoComponent.prototype, "clases", void 0);
CardJuegoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-card-juego',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./card-juego.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/card-juego/card-juego.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./card-juego.component.css */ "./src/app/componentes/card-juego/card-juego.component.css")).default]
    })
], CardJuegoComponent);



/***/ }),

/***/ "./src/app/componentes/card-tabs/card-tabs.component.css":
/*!***************************************************************!*\
  !*** ./src/app/componentes/card-tabs/card-tabs.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".text-Overflow-Hide{\r\n    \r\n    white-space: nowrap; \r\n    overflow: hidden;\r\n    text-overflow: ellipsis; \r\n  }\r\n  .text-Overflow-Hide>p{    \r\n    overflow: hidden;\r\n    text-overflow: ellipsis; \r\n  }\r\n  .text-Overflow-Hide:hover{\r\n    white-space: normal; \r\n  }\r\n  .delay1s{\r\n            -webkit-animation: rotate-scale-up 1s linear both;\r\n                    animation: rotate-scale-up 1s linear both;\r\n            -webkit-animation-delay: 1s;\r\n                    animation-delay: 1s;\r\n}\r\n  .delay2s{\r\n            -webkit-animation: rotate-scale-up 1s linear both;\r\n                    animation: rotate-scale-up 1s linear both;\r\n            -webkit-animation-delay: 2s;\r\n                    animation-delay: 2s;\r\n  }\r\n  .delay3s{\r\n            -webkit-animation: rotate-scale-up 1s linear both;\r\n                    animation: rotate-scale-up 1s linear both;\r\n            -webkit-animation-delay: 3s;\r\n                    animation-delay: 3s;\r\n}\r\n  .delay4s{\r\n            -webkit-animation: rotate-scale-up 1s linear both;\r\n                    animation: rotate-scale-up 1s linear both;\r\n            -webkit-animation-delay: 4s;\r\n                    animation-delay: 4s;\r\n}\r\n  .inline-block{\r\n  display: inline-block;\r\n}\r\n  .rotate-scale-up {\r\n  -webkit-animation: rotate-scale-up 1s linear both;\r\n          animation: rotate-scale-up 1s linear both;\r\n}\r\n  @-webkit-keyframes rotate-scale-up {\r\n    0% {\r\n              transform: scale(1) rotateZ(0);\r\n    }\r\n    50% {\r\n              transform: scale(2) rotateZ(180deg);\r\n    }\r\n    100% {\r\n              transform: scale(1) rotateZ(360deg);\r\n    }\r\n  }\r\n  @keyframes rotate-scale-up {\r\n    0% {\r\n              transform: scale(1) rotateZ(0);\r\n    }\r\n    50% {\r\n              transform: scale(2) rotateZ(180deg);\r\n    }\r\n    100% {\r\n              transform: scale(1) rotateZ(360deg);\r\n    }\r\n    \r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvY2FyZC10YWJzL2NhcmQtdGFicy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7RUFFQTtZQUNVLGlEQUF5QztvQkFBekMseUNBQXlDO1lBQ3pDLDJCQUFtQjtvQkFBbkIsbUJBQW1CO0FBQy9CO0VBQ0U7WUFDVSxpREFBeUM7b0JBQXpDLHlDQUF5QztZQUN6QywyQkFBbUI7b0JBQW5CLG1CQUFtQjtFQUM3QjtFQUNBO1lBQ1UsaURBQXlDO29CQUF6Qyx5Q0FBeUM7WUFDekMsMkJBQW1CO29CQUFuQixtQkFBbUI7QUFDL0I7RUFFQTtZQUNZLGlEQUF5QztvQkFBekMseUNBQXlDO1lBQ3pDLDJCQUFtQjtvQkFBbkIsbUJBQW1CO0FBQy9CO0VBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7RUFFQTtFQUNFLGlEQUF5QztVQUF6Qyx5Q0FBeUM7QUFDM0M7RUFDRTtJQUNFO2NBQ1UsOEJBQThCO0lBQ3hDO0lBQ0E7Y0FDVSxtQ0FBbUM7SUFDN0M7SUFDQTtjQUNVLG1DQUFtQztJQUM3QztFQUNGO0VBQ0E7SUFDRTtjQUNVLDhCQUE4QjtJQUN4QztJQUNBO2NBQ1UsbUNBQW1DO0lBQzdDO0lBQ0E7Y0FDVSxtQ0FBbUM7SUFDN0M7O0VBRUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9jYXJkLXRhYnMvY2FyZC10YWJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1PdmVyZmxvdy1IaWRle1xyXG4gICAgXHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyBcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgXHJcbiAgfVxyXG4gIC50ZXh0LU92ZXJmbG93LUhpZGU+cHsgICAgXHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IFxyXG4gIH1cclxuICAudGV4dC1PdmVyZmxvdy1IaWRlOmhvdmVye1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgXHJcbiAgfVxyXG5cclxuICAuZGVsYXkxc3tcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiByb3RhdGUtc2NhbGUtdXAgMXMgbGluZWFyIGJvdGg7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMXM7XHJcbn1cclxuICAuZGVsYXkyc3tcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiByb3RhdGUtc2NhbGUtdXAgMXMgbGluZWFyIGJvdGg7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMnM7XHJcbiAgfVxyXG4gIC5kZWxheTNze1xyXG4gICAgICAgICAgICBhbmltYXRpb246IHJvdGF0ZS1zY2FsZS11cCAxcyBsaW5lYXIgYm90aDtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAzcztcclxufVxyXG5cclxuLmRlbGF5NHN7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogcm90YXRlLXNjYWxlLXVwIDFzIGxpbmVhciBib3RoO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDRzO1xyXG59XHJcbi5pbmxpbmUtYmxvY2t7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4ucm90YXRlLXNjYWxlLXVwIHtcclxuICBhbmltYXRpb246IHJvdGF0ZS1zY2FsZS11cCAxcyBsaW5lYXIgYm90aDtcclxufVxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyByb3RhdGUtc2NhbGUtdXAge1xyXG4gICAgMCUge1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlWigwKTtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgyKSByb3RhdGVaKDE4MGRlZyk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZVooMzYwZGVnKTtcclxuICAgIH1cclxuICB9XHJcbiAgQGtleWZyYW1lcyByb3RhdGUtc2NhbGUtdXAge1xyXG4gICAgMCUge1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlWigwKTtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgyKSByb3RhdGVaKDE4MGRlZyk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZVooMzYwZGVnKTtcclxuICAgIH1cclxuICAgIFxyXG4gIH1cclxuICAiXX0= */");

/***/ }),

/***/ "./src/app/componentes/card-tabs/card-tabs.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/componentes/card-tabs/card-tabs.component.ts ***!
  \**************************************************************/
/*! exports provided: CardTabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardTabsComponent", function() { return CardTabsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CardTabsComponent = class CardTabsComponent {
    constructor() {
        this.classNameUno = 'active';
        this.classNameDos = 'false';
        this.tabUnoBoolean = true;
        this.tabDosBoolean = false;
    }
    ngOnInit() {
    }
    seleccionarTabUno() {
        if (this.classNameUno == 'active') {
        }
        else {
            this.classNameUno = 'active';
            this.classNameDos = '';
            this.tabUnoBoolean = true;
            this.tabDosBoolean = false;
        }
    }
    seleccionarTabDos() {
        if (this.classNameDos == 'active') {
        }
        else {
            this.classNameUno = '';
            this.classNameDos = 'active';
            this.tabUnoBoolean = false;
            this.tabDosBoolean = true;
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardTabsComponent.prototype, "nameTabUno", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardTabsComponent.prototype, "nameTabDos", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardTabsComponent.prototype, "nameTabTres", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardTabsComponent.prototype, "titleTabUno", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardTabsComponent.prototype, "titleTabDos", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardTabsComponent.prototype, "descriptionTabUno", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardTabsComponent.prototype, "descriptionTabDos", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardTabsComponent.prototype, "nameButtom", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardTabsComponent.prototype, "classNameUno", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardTabsComponent.prototype, "classNameDos", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardTabsComponent.prototype, "tabUnoBoolean", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardTabsComponent.prototype, "tabDosBoolean", void 0);
CardTabsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-card-tabs',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./card-tabs.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/card-tabs/card-tabs.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./card-tabs.component.css */ "./src/app/componentes/card-tabs/card-tabs.component.css")).default]
    })
], CardTabsComponent);



/***/ }),

/***/ "./src/app/componentes/dialog-jugador/dialog-jugador.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/componentes/dialog-jugador/dialog-jugador.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container{\r\n    position: absolute;\r\n    z-index: 999;\r\n    top: 0%;\r\n    left:15%;\r\n}\r\n.centrado{\r\n    text-align: center;\r\n}\r\n#imgClose{\r\n    width: 1.5em;\r\n    height: 1.5em;\r\n    position: absolute;\r\n    margin-left: 96.5%;\r\n    border-radius: 20%;\r\n}\r\nh5{\r\n    font-size: 400%;\r\n}\r\np{\r\n    font-size: 200%;\r\n}\r\nspan{\r\n    font-weight: bold;\r\n}\r\n#imgPrincipal{\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 1em;\r\n    width: 8em;\r\n}\r\n.card{\r\n    -webkit-animation-duration: 2s;\r\n            animation-duration: 2s;\r\n    -webkit-animation-name: aparicion;\r\n            animation-name: aparicion;\r\n    border: 1px solid gray;\r\n}\r\n@-webkit-keyframes aparicion{\r\n    from{\r\n       opacity: 0;\r\n    }\r\n    30%{\r\n    border: 1px solid rgb(0, 17, 255);\r\n\r\n    }\r\n    60%{\r\n    border: 1px solid rgb(255, 0, 0);\r\n\r\n    }\r\n    to{\r\n    border: 1px solid rgb(0, 255, 0);\r\n    opacity: 1;\r\n    }\r\n}\r\n@keyframes aparicion{\r\n    from{\r\n       opacity: 0;\r\n    }\r\n    30%{\r\n    border: 1px solid rgb(0, 17, 255);\r\n\r\n    }\r\n    60%{\r\n    border: 1px solid rgb(255, 0, 0);\r\n\r\n    }\r\n    to{\r\n    border: 1px solid rgb(0, 255, 0);\r\n    opacity: 1;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvZGlhbG9nLWp1Z2Fkb3IvZGlhbG9nLWp1Z2Fkb3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osT0FBTztJQUNQLFFBQVE7QUFDWjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFVBQVU7QUFDZDtBQUNBO0lBQ0ksOEJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QixpQ0FBeUI7WUFBekIseUJBQXlCO0lBQ3pCLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0k7T0FDRyxVQUFVO0lBQ2I7SUFDQTtJQUNBLGlDQUFpQzs7SUFFakM7SUFDQTtJQUNBLGdDQUFnQzs7SUFFaEM7SUFDQTtJQUNBLGdDQUFnQztJQUNoQyxVQUFVO0lBQ1Y7QUFDSjtBQWhCQTtJQUNJO09BQ0csVUFBVTtJQUNiO0lBQ0E7SUFDQSxpQ0FBaUM7O0lBRWpDO0lBQ0E7SUFDQSxnQ0FBZ0M7O0lBRWhDO0lBQ0E7SUFDQSxnQ0FBZ0M7SUFDaEMsVUFBVTtJQUNWO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9kaWFsb2ctanVnYWRvci9kaWFsb2ctanVnYWRvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIHRvcDogMCU7XHJcbiAgICBsZWZ0OjE1JTtcclxufVxyXG4uY2VudHJhZG97XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuI2ltZ0Nsb3Nle1xyXG4gICAgd2lkdGg6IDEuNWVtO1xyXG4gICAgaGVpZ2h0OiAxLjVlbTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiA5Ni41JTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwJTtcclxufVxyXG5oNXtcclxuICAgIGZvbnQtc2l6ZTogNDAwJTtcclxufVxyXG5we1xyXG4gICAgZm9udC1zaXplOiAyMDAlO1xyXG59XHJcbnNwYW57XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4jaW1nUHJpbmNpcGFse1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgICB3aWR0aDogOGVtO1xyXG59XHJcbi5jYXJke1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBhcGFyaWNpb247XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG59XHJcbkBrZXlmcmFtZXMgYXBhcmljaW9ue1xyXG4gICAgZnJvbXtcclxuICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgICAzMCV7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMCwgMTcsIDI1NSk7XHJcblxyXG4gICAgfVxyXG4gICAgNjAle1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI1NSwgMCwgMCk7XHJcblxyXG4gICAgfVxyXG4gICAgdG97XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMCwgMjU1LCAwKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/componentes/dialog-jugador/dialog-jugador.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/componentes/dialog-jugador/dialog-jugador.component.ts ***!
  \************************************************************************/
/*! exports provided: DialogJugadorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogJugadorComponent", function() { return DialogJugadorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_clases_jugador__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/clases/jugador */ "./src/app/clases/jugador.ts");



let DialogJugadorComponent = class DialogJugadorComponent {
    constructor() {
        this.mostrarse = false;
        this.jugador = new src_app_clases_jugador__WEBPACK_IMPORTED_MODULE_2__["Jugador"]();
        this.toggleEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    cerrarModal() {
        this.toggleEvent.emit(this.mostrarse);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DialogJugadorComponent.prototype, "mostrarse", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DialogJugadorComponent.prototype, "jugador", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DialogJugadorComponent.prototype, "toggleEvent", void 0);
DialogJugadorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dialog-jugador',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialog-jugador.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/dialog-jugador/dialog-jugador.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dialog-jugador.component.css */ "./src/app/componentes/dialog-jugador/dialog-jugador.component.css")).default]
    })
], DialogJugadorComponent);



/***/ }),

/***/ "./src/app/componentes/error/error.component.css":
/*!*******************************************************!*\
  !*** ./src/app/componentes/error/error.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container{\r\n    --background:none;\r\n    background-color: rgba(255, 0, 0, 0.603); \r\n}\r\nimg{\r\n    margin-top: 3em;\r\n    margin-bottom: 3em;\r\n    border-radius: 30%;\r\n    width: 28.1em;\r\n    height: 28.1em;\r\n}\r\n.divNotFound{\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvZXJyb3IvZXJyb3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQix3Q0FBd0M7QUFDNUM7QUFDQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9lcnJvci9lcnJvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIC0tYmFja2dyb3VuZDpub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNjAzKTsgXHJcbn1cclxuaW1ne1xyXG4gICAgbWFyZ2luLXRvcDogM2VtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM2VtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzAlO1xyXG4gICAgd2lkdGg6IDI4LjFlbTtcclxuICAgIGhlaWdodDogMjguMWVtO1xyXG59XHJcbi5kaXZOb3RGb3VuZHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/componentes/error/error.component.ts":
/*!******************************************************!*\
  !*** ./src/app/componentes/error/error.component.ts ***!
  \******************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/switchMap */ "./node_modules/rxjs-compat/_esm2015/add/operator/switchMap.js");



let ErrorComponent = class ErrorComponent {
    constructor() { }
    ngOnInit() {
    }
};
ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-error',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./error.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/error/error.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./error.component.css */ "./src/app/componentes/error/error.component.css")).default]
    })
], ErrorComponent);



/***/ }),

/***/ "./src/app/componentes/footer/footer.component.css":
/*!*********************************************************!*\
  !*** ./src/app/componentes/footer/footer.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/componentes/footer/footer.component.ts":
/*!********************************************************!*\
  !*** ./src/app/componentes/footer/footer.component.ts ***!
  \********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/componentes/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/componentes/grabador-de-voz/grabador-de-voz.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/componentes/grabador-de-voz/grabador-de-voz.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2dyYWJhZG9yLWRlLXZvei9ncmFiYWRvci1kZS12b3ouY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/componentes/grabador-de-voz/grabador-de-voz.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/componentes/grabador-de-voz/grabador-de-voz.component.ts ***!
  \**************************************************************************/
/*! exports provided: GrabadorDeVozComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrabadorDeVozComponent", function() { return GrabadorDeVozComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GrabadorDeVozComponent = class GrabadorDeVozComponent {
    constructor() {
        this.isRecording = false;
        this.chunks = [];
        const onSuccess = stream => {
            this.mediaRecorder = new MediaRecorder(stream);
            this.mediaRecorder.onstop = e => {
                const audio = new Audio();
                const blob = new Blob(this.chunks, { 'type': 'audio/ogg; codecs=opus' });
                this.chunks.length = 0;
                audio.src = window.URL.createObjectURL(blob);
                audio.load();
                audio.play();
                this.ultimoAudio = audio.src;
            };
            this.mediaRecorder.ondataavailable = e => this.chunks.push(e.data);
        };
        navigator.getUserMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia || navigator.msGetUserMedia);
        navigator.getUserMedia({ audio: true }, onSuccess, e => console.log(e));
    }
    record() {
        this.isRecording = true;
        this.mediaRecorder.start();
    }
    stop() {
        this.isRecording = false;
        this.mediaRecorder.stop();
    }
    ngOnInit() {
    }
};
GrabadorDeVozComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-grabador-de-voz',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./grabador-de-voz.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/grabador-de-voz/grabador-de-voz.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./grabador-de-voz.component.css */ "./src/app/componentes/grabador-de-voz/grabador-de-voz.component.css")).default]
    })
], GrabadorDeVozComponent);



/***/ }),

/***/ "./src/app/componentes/input-jugadores/input-jugadores.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/componentes/input-jugadores/input-jugadores.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2lucHV0LWp1Z2Fkb3Jlcy9pbnB1dC1qdWdhZG9yZXMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/componentes/input-jugadores/input-jugadores.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/componentes/input-jugadores/input-jugadores.component.ts ***!
  \**************************************************************************/
/*! exports provided: InputJugadoresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputJugadoresComponent", function() { return InputJugadoresComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InputJugadoresComponent = class InputJugadoresComponent {
    constructor() { }
    ngOnInit() {
    }
};
InputJugadoresComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-input-jugadores',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./input-jugadores.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/input-jugadores/input-jugadores.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./input-jugadores.component.css */ "./src/app/componentes/input-jugadores/input-jugadores.component.css")).default]
    })
], InputJugadoresComponent);



/***/ }),

/***/ "./src/app/componentes/juegos/juegos.component.css":
/*!*********************************************************!*\
  !*** ./src/app/componentes/juegos/juegos.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2p1ZWdvcy9qdWVnb3MuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/componentes/juegos/juegos.component.ts":
/*!********************************************************!*\
  !*** ./src/app/componentes/juegos/juegos.component.ts ***!
  \********************************************************/
/*! exports provided: JuegosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegosComponent", function() { return JuegosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let JuegosComponent = class JuegosComponent {
    constructor() { }
    ngOnInit() {
    }
};
JuegosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-juegos',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./juegos.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/juegos/juegos.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./juegos.component.css */ "./src/app/componentes/juegos/juegos.component.css")).default]
    })
], JuegosComponent);



/***/ }),

/***/ "./src/app/componentes/jugadores-listado/jugadores-listado.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/componentes/jugadores-listado/jugadores-listado.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2p1Z2Fkb3Jlcy1saXN0YWRvL2p1Z2Fkb3Jlcy1saXN0YWRvLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/componentes/jugadores-listado/jugadores-listado.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/componentes/jugadores-listado/jugadores-listado.component.ts ***!
  \******************************************************************************/
/*! exports provided: JugadoresListadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JugadoresListadoComponent", function() { return JugadoresListadoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _servicios_jugadores_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/jugadores.service */ "./src/app/servicios/jugadores.service.ts");



let JugadoresListadoComponent = class JugadoresListadoComponent {
    constructor(serviceJugadores) {
        this.miJugadoresServicio = serviceJugadores;
    }
    ngOnInit() {
    }
    TraerTodos() {
        //alert("totos");
        this.miJugadoresServicio.traertodos('jugadores/', 'todos').then(data => {
            //console.info("jugadores listado",(data));
            this.listado = data;
        });
    }
    TraerGanadores() {
        this.miJugadoresServicio.traertodos('jugadores/', 'ganadores').then(data => {
            //console.info("jugadores listado",(data));
            this.listado = data;
        });
    }
    TraerPerdedores() {
        this.miJugadoresServicio.traertodos('jugadores/', 'perdedores').then(data => {
            //console.info("jugadores listado",(data));
            this.listado = data;
        });
    }
};
JugadoresListadoComponent.ctorParameters = () => [
    { type: _servicios_jugadores_service__WEBPACK_IMPORTED_MODULE_2__["JugadoresService"] }
];
JugadoresListadoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-jugadores-listado',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./jugadores-listado.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/jugadores-listado/jugadores-listado.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./jugadores-listado.component.css */ "./src/app/componentes/jugadores-listado/jugadores-listado.component.css")).default]
    })
], JugadoresListadoComponent);



/***/ }),

/***/ "./src/app/componentes/lista-juegos/lista-juegos.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/componentes/lista-juegos/lista-juegos.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2xpc3RhLWp1ZWdvcy9saXN0YS1qdWVnb3MuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/componentes/lista-juegos/lista-juegos.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/componentes/lista-juegos/lista-juegos.component.ts ***!
  \********************************************************************/
/*! exports provided: ListaJuegosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaJuegosComponent", function() { return ListaJuegosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ListaJuegosComponent = class ListaJuegosComponent {
    constructor() { }
    ngOnInit() {
    }
};
ListaJuegosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lista-juegos',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lista-juegos.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/lista-juegos/lista-juegos.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lista-juegos.component.css */ "./src/app/componentes/lista-juegos/lista-juegos.component.css")).default]
    })
], ListaJuegosComponent);



/***/ }),

/***/ "./src/app/componentes/listado-de-paises/listado-de-paises.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/componentes/listado-de-paises/listado-de-paises.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2xpc3RhZG8tZGUtcGFpc2VzL2xpc3RhZG8tZGUtcGFpc2VzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/componentes/listado-de-paises/listado-de-paises.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/componentes/listado-de-paises/listado-de-paises.component.ts ***!
  \******************************************************************************/
/*! exports provided: ListadoDePaisesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoDePaisesComponent", function() { return ListadoDePaisesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _servicios_paises_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/paises.service */ "./src/app/servicios/paises.service.ts");



let ListadoDePaisesComponent = class ListadoDePaisesComponent {
    constructor(servicioPaises) {
        this.miServicioDePaises = servicioPaises;
    }
    ngOnInit() {
        this.miServicioDePaises.listar()
            .then(datos => {
            console.info("listado de paises", datos);
            this.listadoDePaises = datos;
        });
    }
};
ListadoDePaisesComponent.ctorParameters = () => [
    { type: _servicios_paises_service__WEBPACK_IMPORTED_MODULE_2__["PaisesService"] }
];
ListadoDePaisesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-listado-de-paises',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./listado-de-paises.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/listado-de-paises/listado-de-paises.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./listado-de-paises.component.css */ "./src/app/componentes/listado-de-paises/listado-de-paises.component.css")).default]
    })
], ListadoDePaisesComponent);



/***/ }),

/***/ "./src/app/componentes/listado-de-resultados/listado-de-resultados.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/componentes/listado-de-resultados/listado-de-resultados.component.css ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2xpc3RhZG8tZGUtcmVzdWx0YWRvcy9saXN0YWRvLWRlLXJlc3VsdGFkb3MuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/componentes/listado-de-resultados/listado-de-resultados.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/componentes/listado-de-resultados/listado-de-resultados.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ListadoDeResultadosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoDeResultadosComponent", function() { return ListadoDeResultadosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ListadoDeResultadosComponent = class ListadoDeResultadosComponent {
    constructor() {
    }
    ngOnInit() {
    }
    ver() {
        console.info(this.listado);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ListadoDeResultadosComponent.prototype, "listado", void 0);
ListadoDeResultadosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-listado-de-resultados',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./listado-de-resultados.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/listado-de-resultados/listado-de-resultados.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./listado-de-resultados.component.css */ "./src/app/componentes/listado-de-resultados/listado-de-resultados.component.css")).default]
    })
], ListadoDeResultadosComponent);



/***/ }),

/***/ "./src/app/componentes/listado/listado.component.css":
/*!***********************************************************!*\
  !*** ./src/app/componentes/listado/listado.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Style all font awesome icons */\n.fa {\n    padding: 20px;\n    font-size: 30px;\n    width: 50px;\n    text-align: center;\n    text-decoration: none;\n    border-radius: 50%;\n}\n/* Add a hover effect if you want */\n.fa:hover {\n    opacity: 0.7;\n}\n/* Set a specific color for each brand */\n/* Facebook */\n.fa-facebook {\n    background: #3B5998;\n    color: white;\n}\n/* Twitter */\n.fa-twitter {\n    background: #55ACEE;\n    color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvbGlzdGFkby9saXN0YWRvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUNBQWlDO0FBQ2pDO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7QUFFQSxtQ0FBbUM7QUFDbkM7SUFDSSxZQUFZO0FBQ2hCO0FBRUEsd0NBQXdDO0FBRXhDLGFBQWE7QUFDYjtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCO0FBRUEsWUFBWTtBQUNaO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9saXN0YWRvL2xpc3RhZG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFN0eWxlIGFsbCBmb250IGF3ZXNvbWUgaWNvbnMgKi9cbi5mYSB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi8qIEFkZCBhIGhvdmVyIGVmZmVjdCBpZiB5b3Ugd2FudCAqL1xuLmZhOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjc7XG59XG5cbi8qIFNldCBhIHNwZWNpZmljIGNvbG9yIGZvciBlYWNoIGJyYW5kICovXG5cbi8qIEZhY2Vib29rICovXG4uZmEtZmFjZWJvb2sge1xuICAgIGJhY2tncm91bmQ6ICMzQjU5OTg7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4vKiBUd2l0dGVyICovXG4uZmEtdHdpdHRlciB7XG4gICAgYmFja2dyb3VuZDogIzU1QUNFRTtcbiAgICBjb2xvcjogd2hpdGU7XG59Il19 */");

/***/ }),

/***/ "./src/app/componentes/listado/listado.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/componentes/listado/listado.component.ts ***!
  \**********************************************************/
/*! exports provided: ListadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoComponent", function() { return ListadoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _servicios_juego_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/juego-service.service */ "./src/app/servicios/juego-service.service.ts");



let ListadoComponent = class ListadoComponent {
    constructor(servicioJuego) {
        this.miServicioJuego = servicioJuego;
    }
    ngOnInit() {
    }
    llamaService() {
        console.log("llamaService");
        this.listadoParaCompartir = this.miServicioJuego.listar();
    }
    llamaServicePromesa() {
        console.log("llamaServicePromesa");
        this.miServicioJuego.listarPromesa().then((listado) => {
            this.listadoParaCompartir = listado;
        });
    }
};
ListadoComponent.ctorParameters = () => [
    { type: _servicios_juego_service_service__WEBPACK_IMPORTED_MODULE_2__["JuegoServiceService"] }
];
ListadoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-listado',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./listado.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/listado/listado.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./listado.component.css */ "./src/app/componentes/listado/listado.component.css")).default]
    })
], ListadoComponent);



/***/ }),

/***/ "./src/app/componentes/listados/listados.component.css":
/*!*************************************************************!*\
  !*** ./src/app/componentes/listados/listados.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2xpc3RhZG9zL2xpc3RhZG9zLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/componentes/listados/listados.component.ts":
/*!************************************************************!*\
  !*** ./src/app/componentes/listados/listados.component.ts ***!
  \************************************************************/
/*! exports provided: ListadosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadosComponent", function() { return ListadosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ListadosComponent = class ListadosComponent {
    constructor() {
        this.listaDeJugadoresPptls = new Array();
        this.listaToptresPptls = new Array();
        this.listaDeJugadoresPpt = new Array();
        this.listaToptresPpt = new Array();
        this.listaDeJugadoresAnagrama = new Array();
        this.listaToptresAnagrama = new Array();
        this.listaDeJugadoresAgilidad = new Array();
        this.listaToptresAgilidad = new Array();
    }
    ngOnInit() {
        this.cargarListaDeJuego(this.listaDeJugadoresPptls, this.listaToptresPptls, 'pptls');
        this.cargarListaDeJuego(this.listaDeJugadoresPpt, this.listaToptresPpt, 'ppt');
        this.cargarListaDeJuego(this.listaDeJugadoresAnagrama, this.listaToptresAnagrama, 'anagrama');
        this.cargarListaDeJuego(this.listaDeJugadoresAgilidad, this.listaToptresAgilidad, 'agilidad');
        // console.info(this.listaToptresPptls);
    }
    cargarListaDeJuego(lista, listaTop3, titulo) {
        lista = JSON.parse(localStorage.getItem(titulo)); //obtengo la lista
        lista.sort(this.ordenarDeMayorAMenorPuntaje); //ordeno la lista 
        for (let i = 0; i < 3; i++) {
            if (lista[i]) {
                listaTop3.push(lista[i]);
            }
        }
    }
    ordenarDeMayorAMenorPuntaje(jugadorA, jugadorB) {
        if (jugadorA.puntaje > jugadorB.puntaje) {
            return -1;
        }
        else if (jugadorA.puntaje == jugadorB.puntaje) {
            return 0;
        }
        else {
            return 1;
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ListadosComponent.prototype, "listaDeJugadoresPptls", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ListadosComponent.prototype, "listaDeJugadoresPpt", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ListadosComponent.prototype, "listaDeJugadoresAnagrama", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ListadosComponent.prototype, "listaDeJugadoresAgilidad", void 0);
ListadosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-listados',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./listados.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/listados/listados.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./listados.component.css */ "./src/app/componentes/listados/listados.component.css")).default]
    })
], ListadosComponent);



/***/ }),

/***/ "./src/app/componentes/login/login.component.css":
/*!*******************************************************!*\
  !*** ./src/app/componentes/login/login.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".centrado{\r\n    text-align: center;\r\n}\r\ninput{\r\n    border-radius: 30px;\r\n}\r\n#imgPerfil{\r\n    position: relative;\r\n}\r\n.header-Login{\r\n    margin-top: 100px;\r\n    display: inline-block;\r\n    background-color: rgba(128, 128, 128, 0.281);\r\n    border-top-right-radius: 30px;\r\n    border-top-left-radius: 30px;\r\n}\r\n.body-login{\r\n    padding-top: 2em;\r\n    background-color: rgba(128, 128, 128, 0.281);\r\n    padding-bottom: 2em;\r\n    border-radius: 30px;\r\n}\r\n.shadow-pop-tr  {\r\n\t-webkit-animation: shadow-pop-tr 0.8s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;\r\n\t        animation: shadow-pop-tr 0.8s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;\r\n}\r\n@-webkit-keyframes shadow-pop-tr {\r\n  0% {\r\n            box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e;\r\n            transform: translateX(0) translateY(0);\r\n  }\r\n\r\n  100% {\r\n            box-shadow: 1px -1px #3e3e3e, 2px -2px #3e3e3e, 3px -3px #3e3e3e, 4px -4px #3e3e3e, 5px -5px #3e3e3e, 6px -6px #3e3e3e, 7px -7px #3e3e3e, 8px -8px #3e3e3e;\r\n            transform: translateX(-8px) translateY(8px);\r\n  }\r\n}\r\n@keyframes shadow-pop-tr {\r\n    0% {\r\n                box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e;\r\n                transform: translateX(0) translateY(0);           \r\n    }\r\n    50%{\r\n        background-color: rgba(255, 0, 0, 0.438);\r\n        }\r\n    25%{\r\n    background-color: rgba(0, 128, 0, 0.418);\r\n    }\r\n    100% {\r\n                box-shadow: 1px -1px #3e3e3e, 2px -2px #3e3e3e, 3px -3px #3e3e3e, 4px -4px #3e3e3e, 5px -5px #3e3e3e, 6px -6px #3e3e3e, 7px -7px #3e3e3e, 8px -8px #3e3e3e;\r\n                transform: translateX(-8px) translateY(8px);\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsNENBQTRDO0lBQzVDLDZCQUE2QjtJQUM3Qiw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQiw0Q0FBNEM7SUFDNUMsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2QjtBQUVBO0NBQ0MsbUZBQW1GO1NBQzNFLDJFQUEyRTtBQUNwRjtBQUVBO0VBQ0U7WUFDVSxrSEFBa0g7WUFDbEgsc0NBQXNDO0VBQ2hEOztFQUVBO1lBQ1UsMEpBQTBKO1lBQzFKLDJDQUEyQztFQUNyRDtBQUNGO0FBQ0E7SUFDSTtnQkFDWSxrSEFBa0g7Z0JBQ2xILHNDQUFzQztJQUNsRDtJQUNBO1FBQ0ksd0NBQXdDO1FBQ3hDO0lBQ0o7SUFDQSx3Q0FBd0M7SUFDeEM7SUFDQTtnQkFDWSwwSkFBMEo7Z0JBQzFKLDJDQUEyQztJQUN2RDtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50cmFkb3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5pbnB1dHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbn1cclxuI2ltZ1BlcmZpbHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uaGVhZGVyLUxvZ2lue1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMjgxKTtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzBweDtcclxufVxyXG4uYm9keS1sb2dpbntcclxuICAgIHBhZGRpbmctdG9wOiAyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMjgxKTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG59XHJcblxyXG4uc2hhZG93LXBvcC10ciAge1xyXG5cdC13ZWJraXQtYW5pbWF0aW9uOiBzaGFkb3ctcG9wLXRyIDAuOHMgY3ViaWMtYmV6aWVyKDAuNDcwLCAwLjAwMCwgMC43NDUsIDAuNzE1KSBib3RoO1xyXG5cdCAgICAgICAgYW5pbWF0aW9uOiBzaGFkb3ctcG9wLXRyIDAuOHMgY3ViaWMtYmV6aWVyKDAuNDcwLCAwLjAwMCwgMC43NDUsIDAuNzE1KSBib3RoO1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2hhZG93LXBvcC10ciB7XHJcbiAgMCUge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgIzNlM2UzZSwgMCAwICMzZTNlM2UsIDAgMCAjM2UzZTNlLCAwIDAgIzNlM2UzZSwgMCAwICMzZTNlM2UsIDAgMCAjM2UzZTNlLCAwIDAgIzNlM2UzZSwgMCAwICMzZTNlM2U7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSB0cmFuc2xhdGVZKDApO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAtMXB4ICMzZTNlM2UsIDJweCAtMnB4ICMzZTNlM2UsIDNweCAtM3B4ICMzZTNlM2UsIDRweCAtNHB4ICMzZTNlM2UsIDVweCAtNXB4ICMzZTNlM2UsIDZweCAtNnB4ICMzZTNlM2UsIDdweCAtN3B4ICMzZTNlM2UsIDhweCAtOHB4ICMzZTNlM2U7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtOHB4KSB0cmFuc2xhdGVZKDhweCk7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgc2hhZG93LXBvcC10ciB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgIzNlM2UzZSwgMCAwICMzZTNlM2UsIDAgMCAjM2UzZTNlLCAwIDAgIzNlM2UzZSwgMCAwICMzZTNlM2UsIDAgMCAjM2UzZTNlLCAwIDAgIzNlM2UzZSwgMCAwICMzZTNlM2U7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgdHJhbnNsYXRlWSgwKTsgICAgICAgICAgIFxyXG4gICAgfVxyXG4gICAgNTAle1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjQzOCk7XHJcbiAgICAgICAgfVxyXG4gICAgMjUle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMjgsIDAsIDAuNDE4KTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IC0xcHggIzNlM2UzZSwgMnB4IC0ycHggIzNlM2UzZSwgM3B4IC0zcHggIzNlM2UzZSwgNHB4IC00cHggIzNlM2UzZSwgNXB4IC01cHggIzNlM2UzZSwgNnB4IC02cHggIzNlM2UzZSwgN3B4IC03cHggIzNlM2UzZSwgOHB4IC04cHggIzNlM2UzZTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtOHB4KSB0cmFuc2xhdGVZKDhweCk7XHJcbiAgICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/componentes/login/login.component.ts":
/*!******************************************************!*\
  !*** ./src/app/componentes/login/login.component.ts ***!
  \******************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/servicios/auth.service */ "./src/app/servicios/auth.service.ts");
/* harmony import */ var src_app_clases_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/clases/user */ "./src/app/clases/user.ts");





let LoginComponent = class LoginComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.user = new src_app_clases_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
    }
    ngOnInit() {
    }
    onLogin() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const user = yield this.authService.onLogin(this.user);
            if (user) {
                console.info(this.authService.usuarioLogeado());
                console.info("LOGIN exitoso");
                this.router.navigateByUrl('/Principal');
                // this.router.navigateByUrl('/Piedratls');
            }
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/componentes/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/componentes/mapa-de-google/mapa-de-google.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/componentes/mapa-de-google/mapa-de-google.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("agm-map {\n    height: 300px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvbWFwYS1kZS1nb29nbGUvbWFwYS1kZS1nb29nbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7RUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL21hcGEtZGUtZ29vZ2xlL21hcGEtZGUtZ29vZ2xlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhZ20tbWFwIHtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICB9Il19 */");

/***/ }),

/***/ "./src/app/componentes/mapa-de-google/mapa-de-google.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/componentes/mapa-de-google/mapa-de-google.component.ts ***!
  \************************************************************************/
/*! exports provided: MapaDeGoogleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapaDeGoogleComponent", function() { return MapaDeGoogleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MapaDeGoogleComponent = class MapaDeGoogleComponent {
    constructor() {
        this.title = 'El Primer mapa';
        this.lat = 33.678418;
        this.lng = 5.809007;
        // google maps zoom level
        this.zoom = 8;
    }
    ngOnInit() {
    }
};
MapaDeGoogleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mapa-de-google',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mapa-de-google.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/mapa-de-google/mapa-de-google.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mapa-de-google.component.css */ "./src/app/componentes/mapa-de-google/mapa-de-google.component.css")).default]
    })
], MapaDeGoogleComponent);



/***/ }),

/***/ "./src/app/componentes/menu-card/menu-card.component.css":
/*!***************************************************************!*\
  !*** ./src/app/componentes/menu-card/menu-card.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img{\n    width: 30rem;\n    height: 30rem;\n}\n.button{\n    padding-left: 14%;\n    padding-right: 14%;\n    border-radius: 100px;\n    background-color: rgb(34, 111, 211);\n    color:white;\n}\napp-card-img-top{\n    -webkit-animation-duration: 3s;\n            animation-duration: 3s;\n    -webkit-animation-name: slidein;\n            animation-name: slidein;\n  }\n@-webkit-keyframes slidein {\n    from {\n      margin-left: 100%;\n      width: 300%\n    }\n  \n    to {\n      margin-left: 0%;\n      width: 100%;\n    }\n  }\n@keyframes slidein {\n    from {\n      margin-left: 100%;\n      width: 300%\n    }\n  \n    to {\n      margin-left: 0%;\n      width: 100%;\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvbWVudS1jYXJkL21lbnUtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLG1DQUFtQztJQUNuQyxXQUFXO0FBQ2Y7QUFFQTtJQUNJLDhCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsK0JBQXVCO1lBQXZCLHVCQUF1QjtFQUN6QjtBQUVBO0lBQ0U7TUFDRSxpQkFBaUI7TUFDakI7SUFDRjs7SUFFQTtNQUNFLGVBQWU7TUFDZixXQUFXO0lBQ2I7RUFDRjtBQVZBO0lBQ0U7TUFDRSxpQkFBaUI7TUFDakI7SUFDRjs7SUFFQTtNQUNFLGVBQWU7TUFDZixXQUFXO0lBQ2I7RUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL21lbnUtY2FyZC9tZW51LWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ3tcbiAgICB3aWR0aDogMzByZW07XG4gICAgaGVpZ2h0OiAzMHJlbTtcbn1cbi5idXR0b257XG4gICAgcGFkZGluZy1sZWZ0OiAxNCU7XG4gICAgcGFkZGluZy1yaWdodDogMTQlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNCwgMTExLCAyMTEpO1xuICAgIGNvbG9yOndoaXRlO1xufVxuXG5hcHAtY2FyZC1pbWctdG9we1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XG4gICAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlaW47XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgc2xpZGVpbiB7XG4gICAgZnJvbSB7XG4gICAgICBtYXJnaW4tbGVmdDogMTAwJTtcbiAgICAgIHdpZHRoOiAzMDAlXG4gICAgfVxuICBcbiAgICB0byB7XG4gICAgICBtYXJnaW4tbGVmdDogMCU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/componentes/menu-card/menu-card.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/componentes/menu-card/menu-card.component.ts ***!
  \**************************************************************/
/*! exports provided: MenuCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuCardComponent", function() { return MenuCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let MenuCardComponent = class MenuCardComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
    }
    Juego(tipo) {
        switch (tipo) {
            case 'Adivina':
                this.router.navigate(['/Juegos/Adivina']);
                break;
            case 'Agilidad':
                this.router.navigate(['/Juegos/Agilidad']);
                break;
            case 'AdivinaMasListado':
                this.router.navigate(['/Juegos/AdivinaMasListado']);
                break;
            case 'AgilidadaMasListado':
                this.router.navigate(['/Juegos/AgilidadaMasListado']);
                break;
        }
    }
};
MenuCardComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
MenuCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menu-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/menu-card/menu-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menu-card.component.css */ "./src/app/componentes/menu-card/menu-card.component.css")).default]
    })
], MenuCardComponent);



/***/ }),

/***/ "./src/app/componentes/menu/menu.component.css":
/*!*****************************************************!*\
  !*** ./src/app/componentes/menu/menu.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL21lbnUvbWVudS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/componentes/menu/menu.component.ts":
/*!****************************************************!*\
  !*** ./src/app/componentes/menu/menu.component.ts ***!
  \****************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let MenuComponent = class MenuComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
    }
    Juego(tipo) {
        switch (tipo) {
            case 'Adivina':
                this.router.navigate(['/Juegos/Adivina']);
                break;
            case 'Agilidad':
                this.router.navigate(['/Juegos/Agilidad']);
                break;
            case 'AdivinaMasListado':
                this.router.navigate(['/Juegos/AdivinaMasListado']);
                break;
            case 'AgilidadaMasListado':
                this.router.navigate(['/Juegos/AgilidadaMasListado']);
                break;
        }
    }
};
MenuComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/menu/menu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menu.component.css */ "./src/app/componentes/menu/menu.component.css")).default]
    })
], MenuComponent);



/***/ }),

/***/ "./src/app/componentes/name-editor/name-editor.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/componentes/name-editor/name-editor.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL25hbWUtZWRpdG9yL25hbWUtZWRpdG9yLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/componentes/name-editor/name-editor.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/componentes/name-editor/name-editor.component.ts ***!
  \******************************************************************/
/*! exports provided: NameEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NameEditorComponent", function() { return NameEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let NameEditorComponent = class NameEditorComponent {
    constructor() {
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
    }
    ngOnInit() {
    }
    updateName() {
        this.name.setValue('Nancy');
    }
};
NameEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-name-editor',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./name-editor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/name-editor/name-editor.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./name-editor.component.css */ "./src/app/componentes/name-editor/name-editor.component.css")).default]
    })
], NameEditorComponent);



/***/ }),

/***/ "./src/app/componentes/piedra-p-t-l-s/piedra-p-t-l-s.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/componentes/piedra-p-t-l-s/piedra-p-t-l-s.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#imgCorona{\r\n  width: 2em;\r\n  height: 2em;\r\n  position: relative;\r\n  float: right;\r\n  /* margin-left: auto;\r\n  margin-right: auto; */\r\n}\r\n.inline-block{\r\n    display: inline;\r\n}\r\n#iconExit{\r\n    position: absolute;\r\n    border: 1px solid black;\r\n    border-radius: 100%;\r\n}\r\n#headerCardReglas>img{\r\n    background-color: rgb(215, 240, 250);\r\n}\r\n#reglasDeJuego{\r\n    position: absolute;\r\n    left: 35%;\r\n    top: 10%;\r\n    z-index: 10;\r\n    font-weight: bold;\r\n}\r\n#imagenJuegoHover:hover\r\n{\r\n    background-color: lightblue;\r\n    border-radius: 25%;\r\n}\r\n#imgSpeeker:hover{\r\n    background-color: rgba(173, 216, 230, 0.384);\r\n    border-radius: 20%;    \r\n}\r\n#imgSpeeker{\r\n    \r\n    width: 30px;\r\n    height: 30px;\r\n    margin-bottom: 20px;   \r\n}\r\n.imagenJuego{\r\n    width: 100px;\r\n    height: 100px;\r\n}\r\n.hidden{\r\n    visibility: hidden;\r\n\r\n}\r\n.btnSize{\r\n    margin-top: 10px;\r\n    width: 15em;\r\n}\r\n.visible{\r\n    visibility: visible;\r\n\r\n}\r\n.centrado{\r\n    text-align: center;\r\n}\r\n.puntaje{\r\n    font-family: serif;\r\n    font-size: 5em;\r\n    margin-right: 5px;\r\n}\r\n#puntajeJugador\r\n{\r\n    background-color: rgba(27, 172, 240, 0.733);\r\n    border-top-left-radius: 30%;\r\n    border-bottom-left-radius: 30%;\r\n    min-width: 1em;\r\n}\r\n#puntajeMaquina\r\n{\r\n    background-color: rgba(240, 165, 27, 0.733);\r\n    border-top-right-radius: 30%;\r\n    border-bottom-right-radius: 30%;\r\n    min-width: 1em;\r\n}\r\n#resultadoMaquina, #resultadoJugador{\r\n    width: 10em;\r\n    height: 10em;   \r\n}\r\n#resultadoMaquina{\r\n    background-color: rgba(240, 165, 27, 0.733);\r\n    border-top-right-radius: 30%;\r\n    border-bottom-right-radius: 30%;\r\n}\r\n#resultadoJugador{\r\n    background-color: rgba(27, 172, 240, 0.733);\r\n    border-top-left-radius: 30%;\r\n    border-bottom-left-radius: 30%;\r\n}\r\n#tituloResultadoDeJuego{\r\n    font-size: 5em;\r\n    font-family: gameover;\r\n    border-radius: 30px;\r\n    /* border-radius: 10% */\r\n    margin-bottom: 10px;\r\n}\r\n#imgWL{\r\n    width: 400px;\r\n    height: 350px;\r\n}\r\n.hvr-rectangle-out{\r\n    background:none;\r\n }\r\n/* SPINNER! */\r\n.spinner {\r\n    z-index: -2;\r\n    position: absolute;\r\n    width: 450px;\r\n    height: 450px;\r\n    top: 10%;\r\n    left: 20%;\r\n    background-color: #333;\r\n  \r\n    border-radius: 100%;  \r\n    -webkit-animation: sk-scaleout 4.0s infinite ease-in-out;\r\n    animation: sk-scaleout 4.0s infinite ease-in-out;\r\n  }\r\n.container{\r\n    background-color: rgba(51, 117, 216, 0.459);\r\n    /* background-color: rgba(158, 156, 156, 0.114); */\r\n    border-radius: 10px;\r\n}\r\n.hidden{    \r\n    display: none;\r\n}\r\n@-webkit-keyframes sk-scaleout {\r\n    0% { -webkit-transform: scale(0) }\r\n    100% {\r\n      -webkit-transform: scale(1.0);\r\n      opacity: 0;\r\n    }\r\n  }\r\n@keyframes sk-scaleout {\r\n    0% {\r\n      transform: scale(0);\r\n    } 100% {\r\n      transform: scale(1.0);\r\n      opacity: 0;\r\n    }\r\n  }\r\n/*FIN SPINER*/\r\n/* SELECCION MAQUINA! */\r\n.animacionSeleccion {\r\n    width: 40px;\r\n    height: 40px;\r\n  \r\n    position: relative;\r\n    margin: 100px auto;\r\n  }\r\n.double-bounce1, .double-bounce2 {\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 50%;\r\n    background-color: #333;\r\n    opacity: 0.6;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    \r\n    -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\r\n    animation: sk-bounce 2.0s infinite ease-in-out;\r\n  }\r\n.double-bounce2 {\r\n    -webkit-animation-delay: -1.0s;\r\n    animation-delay: -1.0s;\r\n  }\r\n@-webkit-keyframes sk-bounce {\r\n    0%, 100% { -webkit-transform: scale(0.0) }\r\n    50% { -webkit-transform: scale(1.0) }\r\n  }\r\n@keyframes sk-bounce {\r\n    0%, 100% { \r\n      transform: scale(0.0);\r\n      -webkit-transform: scale(0.0);\r\n    } 50% { \r\n      transform: scale(1.0);\r\n      -webkit-transform: scale(1.0);\r\n    }\r\n  }\r\n/*FIN SELECCION MAQUINA*/\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvcGllZHJhLXAtdC1sLXMvcGllZHJhLXAtdC1sLXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWjt1QkFDcUI7QUFDdkI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxvQ0FBb0M7QUFDeEM7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtJQUNSLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7QUFDQTs7SUFFSSwyQkFBMkI7SUFDM0Isa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSw0Q0FBNEM7SUFDNUMsa0JBQWtCO0FBQ3RCO0FBQ0E7O0lBRUksV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxrQkFBa0I7O0FBRXRCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxtQkFBbUI7O0FBRXZCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCO0FBQ0E7O0lBRUksMkNBQTJDO0lBQzNDLDJCQUEyQjtJQUMzQiw4QkFBOEI7SUFDOUIsY0FBYztBQUNsQjtBQUNBOztJQUVJLDJDQUEyQztJQUMzQyw0QkFBNEI7SUFDNUIsK0JBQStCO0lBQy9CLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSwyQ0FBMkM7SUFDM0MsNEJBQTRCO0lBQzVCLCtCQUErQjtBQUNuQztBQUVBO0lBQ0ksMkNBQTJDO0lBQzNDLDJCQUEyQjtJQUMzQiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxlQUFlO0NBQ2xCO0FBRUQsYUFBYTtBQUViO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLFFBQVE7SUFDUixTQUFTO0lBQ1Qsc0JBQXNCOztJQUV0QixtQkFBbUI7SUFDbkIsd0RBQXdEO0lBQ3hELGdEQUFnRDtFQUNsRDtBQUNGO0lBQ0ksMkNBQTJDO0lBQzNDLGtEQUFrRDtJQUNsRCxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDRTtJQUNFLEtBQUssNEJBQTRCO0lBQ2pDO01BQ0UsNkJBQTZCO01BQzdCLFVBQVU7SUFDWjtFQUNGO0FBRUE7SUFDRTtNQUVFLG1CQUFtQjtJQUNyQixFQUFFO01BRUEscUJBQXFCO01BQ3JCLFVBQVU7SUFDWjtFQUNGO0FBQ0EsYUFBYTtBQUVmLHVCQUF1QjtBQUN2QjtJQUNJLFdBQVc7SUFDWCxZQUFZOztJQUVaLGtCQUFrQjtJQUNsQixrQkFBa0I7RUFDcEI7QUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPOztJQUVQLHNEQUFzRDtJQUN0RCw4Q0FBOEM7RUFDaEQ7QUFFQTtJQUNFLDhCQUE4QjtJQUM5QixzQkFBc0I7RUFDeEI7QUFFQTtJQUNFLFdBQVcsOEJBQThCO0lBQ3pDLE1BQU0sOEJBQThCO0VBQ3RDO0FBRUE7SUFDRTtNQUNFLHFCQUFxQjtNQUNyQiw2QkFBNkI7SUFDL0IsRUFBRTtNQUNBLHFCQUFxQjtNQUNyQiw2QkFBNkI7SUFDL0I7RUFDRjtBQUNBLHdCQUF3QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3BpZWRyYS1wLXQtbC1zL3BpZWRyYS1wLXQtbC1zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaW1nQ29yb25he1xyXG4gIHdpZHRoOiAyZW07XHJcbiAgaGVpZ2h0OiAyZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICAvKiBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87ICovXHJcbn1cclxuLmlubGluZS1ibG9ja3tcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG4jaWNvbkV4aXR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbn1cclxuI2hlYWRlckNhcmRSZWdsYXM+aW1ne1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNSwgMjQwLCAyNTApO1xyXG59XHJcbiNyZWdsYXNEZUp1ZWdve1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMzUlO1xyXG4gICAgdG9wOiAxMCU7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiNpbWFnZW5KdWVnb0hvdmVyOmhvdmVyXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1JTtcclxufVxyXG4jaW1nU3BlZWtlcjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTczLCAyMTYsIDIzMCwgMC4zODQpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjAlOyAgICBcclxufVxyXG4jaW1nU3BlZWtlcntcclxuICAgIFxyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4OyAgIFxyXG59XHJcbi5pbWFnZW5KdWVnb3tcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbn1cclxuLmhpZGRlbntcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHJcbn1cclxuLmJ0blNpemV7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgd2lkdGg6IDE1ZW07XHJcbn1cclxuLnZpc2libGV7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG5cclxufVxyXG4uY2VudHJhZG97XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnB1bnRhamV7XHJcbiAgICBmb250LWZhbWlseTogc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDVlbTtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcbiNwdW50YWplSnVnYWRvclxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI3LCAxNzIsIDI0MCwgMC43MzMpO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzAlO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMzAlO1xyXG4gICAgbWluLXdpZHRoOiAxZW07XHJcbn1cclxuI3B1bnRhamVNYXF1aW5hXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxNjUsIDI3LCAwLjczMyk7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzAlO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDMwJTtcclxuICAgIG1pbi13aWR0aDogMWVtO1xyXG59XHJcbiNyZXN1bHRhZG9NYXF1aW5hLCAjcmVzdWx0YWRvSnVnYWRvcntcclxuICAgIHdpZHRoOiAxMGVtO1xyXG4gICAgaGVpZ2h0OiAxMGVtOyAgIFxyXG59XHJcbiNyZXN1bHRhZG9NYXF1aW5he1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDE2NSwgMjcsIDAuNzMzKTtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMCU7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMzAlO1xyXG59XHJcblxyXG4jcmVzdWx0YWRvSnVnYWRvcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjcsIDE3MiwgMjQwLCAwLjczMyk7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMCU7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzMCU7XHJcbn1cclxuI3RpdHVsb1Jlc3VsdGFkb0RlSnVlZ297XHJcbiAgICBmb250LXNpemU6IDVlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBnYW1lb3ZlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAvKiBib3JkZXItcmFkaXVzOiAxMCUgKi9cclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuI2ltZ1dMe1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgaGVpZ2h0OiAzNTBweDtcclxufVxyXG4uaHZyLXJlY3RhbmdsZS1vdXR7XHJcbiAgICBiYWNrZ3JvdW5kOm5vbmU7XHJcbiB9XHJcbiAgXHJcbi8qIFNQSU5ORVIhICovXHJcblxyXG4uc3Bpbm5lciB7XHJcbiAgICB6LWluZGV4OiAtMjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA0NTBweDtcclxuICAgIGhlaWdodDogNDUwcHg7XHJcbiAgICB0b3A6IDEwJTtcclxuICAgIGxlZnQ6IDIwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgXHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlOyAgXHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stc2NhbGVvdXQgNC4wcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICAgIGFuaW1hdGlvbjogc2stc2NhbGVvdXQgNC4wcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICB9XHJcbi5jb250YWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUxLCAxMTcsIDIxNiwgMC40NTkpO1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTgsIDE1NiwgMTU2LCAwLjExNCk7ICovXHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5oaWRkZW57ICAgIFxyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBzay1zY2FsZW91dCB7XHJcbiAgICAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKSB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMCk7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgc2stc2NhbGVvdXQge1xyXG4gICAgMCUgeyBcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgfSAxMDAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMCk7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wKTtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICB9XHJcbiAgLypGSU4gU1BJTkVSKi9cclxuXHJcbi8qIFNFTEVDQ0lPTiBNQVFVSU5BISAqL1xyXG4uYW5pbWFjaW9uU2VsZWNjaW9uIHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gIFxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiAxMDBweCBhdXRvO1xyXG4gIH1cclxuICBcclxuICAuZG91YmxlLWJvdW5jZTEsIC5kb3VibGUtYm91bmNlMiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgXHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stYm91bmNlIDIuMHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgICBhbmltYXRpb246IHNrLWJvdW5jZSAyLjBzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICBcclxuICAuZG91YmxlLWJvdW5jZTIge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0xLjBzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMS4wcztcclxuICB9XHJcbiAgXHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIHNrLWJvdW5jZSB7XHJcbiAgICAwJSwgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjApIH1cclxuICAgIDUwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjApIH1cclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBzay1ib3VuY2Uge1xyXG4gICAgMCUsIDEwMCUgeyBcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjApO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4wKTtcclxuICAgIH0gNTAlIHsgXHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wKTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8qRklOIFNFTEVDQ0lPTiBNQVFVSU5BKi8iXX0= */");

/***/ }),

/***/ "./src/app/componentes/piedra-p-t-l-s/piedra-p-t-l-s.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/componentes/piedra-p-t-l-s/piedra-p-t-l-s.component.ts ***!
  \************************************************************************/
/*! exports provided: PiedraPTLSComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PiedraPTLSComponent", function() { return PiedraPTLSComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicios/auth.service */ "./src/app/servicios/auth.service.ts");
/* harmony import */ var src_app_servicios_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/servicios/local-storage.service */ "./src/app/servicios/local-storage.service.ts");
/* harmony import */ var src_app_clases_jugador__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/clases/jugador */ "./src/app/clases/jugador.ts");





let PiedraPTLSComponent = class PiedraPTLSComponent {
    constructor(authService, localStorageService) {
        this.authService = authService;
        this.localStorageService = localStorageService;
        this.contadorGanadas = 0;
        this.contadorPerdidas = 0;
        this.mostrarQuienGano = false;
        this.mostrarPuntuacion = false;
        this.partidaTerminada = false;
        this.listaDeJugadores = new Array();
        this.esTop1 = false;
        this.jugador = new src_app_clases_jugador__WEBPACK_IMPORTED_MODULE_4__["Jugador"]();
        this.opcionesDeJuego = ["piedra", "papel", "tijera", "lagarto", "spock"];
    }
    ngOnInit() {
        this.obtenerMailDeUsuarioActual();
        // this.obtenerUsuarioConPuntuacionMasAlta();
    }
    obtenerMailDeUsuarioActual() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const user = yield this.authService.usuarioLogeado();
            if (user) {
                this.emailUsuarioActual = user.email;
            }
        });
    }
    reproducirExplicacion() {
        let audio = new Audio('../../../assets/audios/pptls.wav');
        audio.play();
    }
    cambiarEstadoOculatar_Mostrar() {
        let imagenes = document.getElementsByClassName("imagenJuego");
        for (let i = 0; i < imagenes.length; i++) {
            if (imagenes[i].getAttribute("class") == "imagenJuego visible hvr-buzz") {
                imagenes[i].setAttribute("class", "imagenJuego hidden hvr-buzz");
            }
            else {
                imagenes[i].setAttribute("class", "imagenJuego visible hvr-buzz");
            }
        }
    }
    cambiarColorResultadoDeJuego() {
        let labelTitulo = document.getElementById('tituloResultadoDeJuego');
        let audio;
        if (labelTitulo != null) {
            switch (this.resultadoDelJuego) {
                case "Empate":
                    labelTitulo.setAttribute("style", "background-color: gray;");
                    break;
                case "Ganaste":
                    audio = new Audio('../../../assets/audios/success.wav');
                    audio.play();
                    labelTitulo.setAttribute("style", "background-color: blue;");
                    break;
                case "Perdiste":
                    audio = new Audio('../../../assets/audios/fail.wav');
                    audio.play();
                    labelTitulo.setAttribute("style", "background-color: red;");
                    break;
            }
        }
    }
    JuegadaDeLaMaquina() {
        let opcionRandom = Math.floor(Math.random() * (5 - 0));
        return this.opcionesDeJuego[opcionRandom];
    }
    verificarVictoria(jugada, jugadaMaquina, jugadaGanaA, jugadaGanaB) {
        if (jugada == jugadaMaquina) {
            this.resultadoDelJuego = "Empate";
            this.mensajePartida = "Nadie gana";
        }
        else if (jugadaMaquina == jugadaGanaA || jugadaMaquina == jugadaGanaB) {
            this.mensajePartida = jugada[0].toUpperCase() + jugada.substr(1).toLowerCase() + " GANA!";
            this.resultadoDelJuego = "Ganaste";
            this.contadorGanadas++;
        }
        else {
            this.mensajePartida = jugadaMaquina[0].toUpperCase() + jugadaMaquina.substr(1).toLowerCase() + " GANA!";
            this.resultadoDelJuego = "Perdiste";
            this.contadorPerdidas++;
        }
        if (this.contadorPerdidas == 5) {
            this.terminarPartida();
        }
    }
    ocultarCardReglas() {
        document.getElementById("headerCardReglas").setAttribute('class', "card hidden");
    }
    mostrarCardReglas() {
        document.getElementById("headerCardReglas").setAttribute('class', "card");
    }
    obtenerListaDeJugadores() {
        const datosObtenidos = localStorage.getItem('pptls');
        if (datosObtenidos) {
            return JSON.parse(datosObtenidos);
        }
    }
    verificarSiExiteJugador(emailJugador) {
        let retorno = false;
        this.listaDeJugadores.forEach(auxJugador => {
            if (auxJugador.email == emailJugador) {
                retorno = true;
            }
        });
        return retorno;
    }
    actualizarPuntajeDelUsuario(jugador) {
        this.listaDeJugadores.forEach(auxJugador => {
            if (auxJugador.email == jugador.email && auxJugador.puntaje < jugador.puntaje) {
                auxJugador.puntaje = jugador.puntaje;
                console.log("Lograste una mejor puntuacion");
            }
        });
    }
    obtenerUsuarioConPuntuacionMasAlta() {
        const auxjugadorTop = new src_app_clases_jugador__WEBPACK_IMPORTED_MODULE_4__["Jugador"]();
        auxjugadorTop.puntaje = 0;
        this.listaDeJugadores.forEach(jugador => {
            if (jugador.puntaje > auxjugadorTop.puntaje) {
                auxjugadorTop.puntaje = jugador.puntaje;
                auxjugadorTop.email = jugador.email;
            }
        });
        if (auxjugadorTop.email == this.jugador.email) {
            console.info(auxjugadorTop.email + " " + this.jugador.email);
            console.log("Estas a la cabeza en el top 3");
            this.esTop1 = true;
        }
    }
    guardarPuntuacionEnLocalStorage() {
        if (this.emailUsuarioActual) {
            this.jugador.email = this.emailUsuarioActual;
            this.jugador.puntaje = this.contadorGanadas;
            this.listaDeJugadores = this.obtenerListaDeJugadores();
            if (this.listaDeJugadores && this.listaDeJugadores.length > 0) {
                if (this.verificarSiExiteJugador(this.emailUsuarioActual)) {
                    this.actualizarPuntajeDelUsuario(this.jugador);
                }
                else {
                    this.listaDeJugadores.push(this.jugador);
                }
            }
            else {
                console.info("LISTA VACIA");
                this.listaDeJugadores = [];
                this.listaDeJugadores.push(this.jugador);
            }
            localStorage.setItem('pptls', JSON.stringify(this.listaDeJugadores));
        }
        else {
            console.log("no deberias haber llegado hasta aca sin logear.");
        }
    }
    terminarPartida() {
        this.localStorageService.guardarPuntuacionEnLocalStorage(this.emailUsuarioActual, 'pptls', this.contadorGanadas);
        this.esTop1 = this.localStorageService.verificarSiSuperoAlTop();
        // this.guardarPuntuacionEnLocalStorage();
        // this.obtenerUsuarioConPuntuacionMasAlta();
        let sonido;
        if (this.contadorGanadas > this.contadorPerdidas) {
            this.imagenG_P = "../../../assets/imagenes/ganaste.png";
            sonido = new Audio("../../../assets/audios/TaDa.wav");
            sonido.play();
        }
        else if (this.contadorGanadas == this.contadorPerdidas) {
        }
        else {
            sonido = new Audio("../../../assets/audios/perdida.wav");
            this.imagenG_P = "../../../assets/imagenes/gameover.png";
            sonido.play();
        }
        this.cambiarEstadoOculatar_Mostrar();
        this.partidaTerminada = true;
        // this.esTop1=false;
        this.eleccionJugador = "";
        this.eleccionMaquina = "";
        this.resultadoDelJuego = "";
    }
    reiniciarPartida() {
        this.contadorPerdidas = 0;
        this.contadorGanadas = 0;
        this.partidaTerminada = false;
        this.mostrarQuienGano = false;
        this.cambiarEstadoOculatar_Mostrar();
    }
    CalcukarJugada(jugada) {
        let jugadaMaquina = this.JuegadaDeLaMaquina();
        this.eleccionJugador = jugada;
        this.eleccionMaquina = jugadaMaquina;
        this.mostrarQuienGano = true;
        switch (jugada) {
            case "piedra":
                this.verificarVictoria(jugada, jugadaMaquina, "tijera", "lagarto");
                break;
            case "papel":
                this.verificarVictoria(jugada, jugadaMaquina, "spock", "piedra");
                break;
            case "tijera":
                this.verificarVictoria(jugada, jugadaMaquina, "lagarto", "papel");
                break;
            case "lagarto":
                this.verificarVictoria(jugada, jugadaMaquina, "spock", "papel");
                break;
            case "spock":
                this.verificarVictoria(jugada, jugadaMaquina, "tijera", "piedra");
                break;
        }
        this.cambiarColorResultadoDeJuego();
    }
};
PiedraPTLSComponent.ctorParameters = () => [
    { type: src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: src_app_servicios_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"] }
];
PiedraPTLSComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-piedra-p-t-l-s',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./piedra-p-t-l-s.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/piedra-p-t-l-s/piedra-p-t-l-s.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./piedra-p-t-l-s.component.css */ "./src/app/componentes/piedra-p-t-l-s/piedra-p-t-l-s.component.css")).default]
    })
], PiedraPTLSComponent);



/***/ }),

/***/ "./src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".inline-block{\r\n    display: inline;\r\n}\r\n#contenedorPrincipal{\r\n  padding-bottom: 10em;\r\n}\r\n#imgCorona{\r\n  width: 2em;\r\n  height: 2em;\r\n  position: relative;\r\n  float: right;\r\n  /* margin-left: auto;\r\n  margin-right: auto; */\r\n}\r\n#iconExit{\r\n    position: absolute;\r\n    border: 1px solid black;\r\n    border-radius: 100%;\r\n}\r\n#headerCardReglas>img{\r\n    background-color: rgb(215, 240, 250);\r\n}\r\n#reglasDeJuego{\r\n    position: absolute;\r\n    left: 35%;\r\n    top: 10%;\r\n    z-index: 10;\r\n    font-weight: bold;\r\n}\r\n#imagenJuegoHover:hover\r\n{\r\n    background-color: lightblue;\r\n    border-radius: 25%;\r\n}\r\n#imgSpeeker:hover{\r\n    background-color: rgba(173, 216, 230, 0.384);\r\n    border-radius: 20%;    \r\n}\r\n#imgSpeeker{\r\n    \r\n    width: 30px;\r\n    height: 30px;\r\n    margin-bottom: 20px;   \r\n}\r\n.imagenJuego{\r\n  margin-top: 10%;\r\n    width: 100px;\r\n    height: 100px;\r\n}\r\n.hidden{\r\n    visibility: hidden;\r\n\r\n}\r\n.btnSize{\r\n    margin-top: 10px;\r\n    width: 15em;\r\n}\r\n.visible{\r\n    visibility: visible;\r\n\r\n}\r\n.centrado{\r\n    text-align: center;\r\n}\r\n.puntaje{\r\n    font-family: serif;\r\n    font-size: 5em;\r\n    margin-right: 5px;\r\n}\r\n#puntajeJugador\r\n{\r\n    background-color: rgba(27, 172, 240, 0.733);\r\n    border-top-left-radius: 30%;\r\n    border-bottom-left-radius: 30%;\r\n    min-width: 1em;\r\n}\r\n#puntajeMaquina\r\n{\r\n    background-color: rgba(240, 165, 27, 0.733);\r\n    border-top-right-radius: 30%;\r\n    border-bottom-right-radius: 30%;\r\n    min-width: 1em;\r\n}\r\n#resultadoMaquina, #resultadoJugador{\r\n    width: 10em;\r\n    height: 10em;   \r\n}\r\n#resultadoMaquina{\r\n    background-color: rgba(240, 165, 27, 0.733);\r\n    border-top-right-radius: 30%;\r\n    border-bottom-right-radius: 30%;\r\n}\r\n#resultadoJugador{\r\n    background-color: rgba(27, 172, 240, 0.733);\r\n    border-top-left-radius: 30%;\r\n    border-bottom-left-radius: 30%;\r\n}\r\n#tituloResultadoDeJuego{\r\n    font-size: 5em;\r\n    font-family: gameover;\r\n    border-radius: 30px;\r\n    /* border-radius: 10% */\r\n    margin-bottom: 10px;\r\n}\r\n#imgWL{\r\n    width: 400px;\r\n    height: 350px;\r\n}\r\n.hvr-rectangle-out{\r\n    background:none;\r\n }\r\n/* SPINNER! */\r\n.spinner {\r\n    z-index: -2;\r\n    position: absolute;\r\n    width: 450px;\r\n    height: 450px;\r\n    top: 10%;\r\n    left: 20%;\r\n    background-color: #333;\r\n  \r\n    border-radius: 100%;  \r\n    -webkit-animation: sk-scaleout 4.0s infinite ease-in-out;\r\n    animation: sk-scaleout 4.0s infinite ease-in-out;\r\n  }\r\n.container{\r\n    background-color: rgba(51, 117, 216, 0.459);\r\n    /* background-color: rgba(158, 156, 156, 0.114); */\r\n    border-radius: 10px;\r\n}\r\n.hidden{    \r\n    display: none;\r\n}\r\n@-webkit-keyframes sk-scaleout {\r\n    0% { -webkit-transform: scale(0) }\r\n    100% {\r\n      -webkit-transform: scale(1.0);\r\n      opacity: 0;\r\n    }\r\n  }\r\n@keyframes sk-scaleout {\r\n    0% {\r\n      transform: scale(0);\r\n    } 100% {\r\n      transform: scale(1.0);\r\n      opacity: 0;\r\n    }\r\n  }\r\n/*FIN SPINER*/\r\n/* SELECCION MAQUINA! */\r\n.animacionSeleccion {\r\n    width: 40px;\r\n    height: 40px;\r\n  \r\n    position: relative;\r\n    margin: 100px auto;\r\n  }\r\n.double-bounce1, .double-bounce2 {\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 50%;\r\n    background-color: #333;\r\n    opacity: 0.6;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    \r\n    -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\r\n    animation: sk-bounce 2.0s infinite ease-in-out;\r\n  }\r\n.double-bounce2 {\r\n    -webkit-animation-delay: -1.0s;\r\n    animation-delay: -1.0s;\r\n  }\r\n@-webkit-keyframes sk-bounce {\r\n    0%, 100% { -webkit-transform: scale(0.0) }\r\n    50% { -webkit-transform: scale(1.0) }\r\n  }\r\n@keyframes sk-bounce {\r\n    0%, 100% { \r\n      transform: scale(0.0);\r\n      -webkit-transform: scale(0.0);\r\n    } 50% { \r\n      transform: scale(1.0);\r\n      -webkit-transform: scale(1.0);\r\n    }\r\n  }\r\n/*FIN SELECCION MAQUINA*/\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvcGllZHJhLXBhcGVsLXRpamVyYS9waWVkcmEtcGFwZWwtdGlqZXJhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7RUFDRSxvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWjt1QkFDcUI7QUFDdkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxvQ0FBb0M7QUFDeEM7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtJQUNSLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7QUFDQTs7SUFFSSwyQkFBMkI7SUFDM0Isa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSw0Q0FBNEM7SUFDNUMsa0JBQWtCO0FBQ3RCO0FBQ0E7O0lBRUksV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7QUFDQTtFQUNFLGVBQWU7SUFDYixZQUFZO0lBQ1osYUFBYTtBQUNqQjtBQUNBO0lBQ0ksa0JBQWtCOztBQUV0QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksbUJBQW1COztBQUV2QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGlCQUFpQjtBQUNyQjtBQUNBOztJQUVJLDJDQUEyQztJQUMzQywyQkFBMkI7SUFDM0IsOEJBQThCO0lBQzlCLGNBQWM7QUFDbEI7QUFDQTs7SUFFSSwyQ0FBMkM7SUFDM0MsNEJBQTRCO0lBQzVCLCtCQUErQjtJQUMvQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksMkNBQTJDO0lBQzNDLDRCQUE0QjtJQUM1QiwrQkFBK0I7QUFDbkM7QUFFQTtJQUNJLDJDQUEyQztJQUMzQywyQkFBMkI7SUFDM0IsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjtBQUNBO0lBQ0ksZUFBZTtDQUNsQjtBQUVELGFBQWE7QUFFYjtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixRQUFRO0lBQ1IsU0FBUztJQUNULHNCQUFzQjs7SUFFdEIsbUJBQW1CO0lBQ25CLHdEQUF3RDtJQUN4RCxnREFBZ0Q7RUFDbEQ7QUFDRjtJQUNJLDJDQUEyQztJQUMzQyxrREFBa0Q7SUFDbEQsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0U7SUFDRSxLQUFLLDRCQUE0QjtJQUNqQztNQUNFLDZCQUE2QjtNQUM3QixVQUFVO0lBQ1o7RUFDRjtBQUVBO0lBQ0U7TUFFRSxtQkFBbUI7SUFDckIsRUFBRTtNQUVBLHFCQUFxQjtNQUNyQixVQUFVO0lBQ1o7RUFDRjtBQUNBLGFBQWE7QUFFZix1QkFBdUI7QUFDdkI7SUFDSSxXQUFXO0lBQ1gsWUFBWTs7SUFFWixrQkFBa0I7SUFDbEIsa0JBQWtCO0VBQ3BCO0FBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTzs7SUFFUCxzREFBc0Q7SUFDdEQsOENBQThDO0VBQ2hEO0FBRUE7SUFDRSw4QkFBOEI7SUFDOUIsc0JBQXNCO0VBQ3hCO0FBRUE7SUFDRSxXQUFXLDhCQUE4QjtJQUN6QyxNQUFNLDhCQUE4QjtFQUN0QztBQUVBO0lBQ0U7TUFDRSxxQkFBcUI7TUFDckIsNkJBQTZCO0lBQy9CLEVBQUU7TUFDQSxxQkFBcUI7TUFDckIsNkJBQTZCO0lBQy9CO0VBQ0Y7QUFDQSx3QkFBd0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9waWVkcmEtcGFwZWwtdGlqZXJhL3BpZWRyYS1wYXBlbC10aWplcmEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbmxpbmUtYmxvY2t7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuI2NvbnRlbmVkb3JQcmluY2lwYWx7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwZW07XHJcbn1cclxuI2ltZ0Nvcm9uYXtcclxuICB3aWR0aDogMmVtO1xyXG4gIGhlaWdodDogMmVtO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgLyogbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvOyAqL1xyXG59XHJcbiNpY29uRXhpdHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxufVxyXG4jaGVhZGVyQ2FyZFJlZ2xhcz5pbWd7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE1LCAyNDAsIDI1MCk7XHJcbn1cclxuI3JlZ2xhc0RlSnVlZ297XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAzNSU7XHJcbiAgICB0b3A6IDEwJTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuI2ltYWdlbkp1ZWdvSG92ZXI6aG92ZXJcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjUlO1xyXG59XHJcbiNpbWdTcGVla2VyOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzMsIDIxNiwgMjMwLCAwLjM4NCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMCU7ICAgIFxyXG59XHJcbiNpbWdTcGVla2Vye1xyXG4gICAgXHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7ICAgXHJcbn1cclxuLmltYWdlbkp1ZWdve1xyXG4gIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbn1cclxuLmhpZGRlbntcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHJcbn1cclxuLmJ0blNpemV7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgd2lkdGg6IDE1ZW07XHJcbn1cclxuLnZpc2libGV7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG5cclxufVxyXG4uY2VudHJhZG97XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnB1bnRhamV7XHJcbiAgICBmb250LWZhbWlseTogc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDVlbTtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcbiNwdW50YWplSnVnYWRvclxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI3LCAxNzIsIDI0MCwgMC43MzMpO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzAlO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMzAlO1xyXG4gICAgbWluLXdpZHRoOiAxZW07XHJcbn1cclxuI3B1bnRhamVNYXF1aW5hXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxNjUsIDI3LCAwLjczMyk7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzAlO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDMwJTtcclxuICAgIG1pbi13aWR0aDogMWVtO1xyXG59XHJcbiNyZXN1bHRhZG9NYXF1aW5hLCAjcmVzdWx0YWRvSnVnYWRvcntcclxuICAgIHdpZHRoOiAxMGVtO1xyXG4gICAgaGVpZ2h0OiAxMGVtOyAgIFxyXG59XHJcbiNyZXN1bHRhZG9NYXF1aW5he1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDE2NSwgMjcsIDAuNzMzKTtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMCU7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMzAlO1xyXG59XHJcblxyXG4jcmVzdWx0YWRvSnVnYWRvcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjcsIDE3MiwgMjQwLCAwLjczMyk7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMCU7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzMCU7XHJcbn1cclxuI3RpdHVsb1Jlc3VsdGFkb0RlSnVlZ297XHJcbiAgICBmb250LXNpemU6IDVlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBnYW1lb3ZlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAvKiBib3JkZXItcmFkaXVzOiAxMCUgKi9cclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuI2ltZ1dMe1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgaGVpZ2h0OiAzNTBweDtcclxufVxyXG4uaHZyLXJlY3RhbmdsZS1vdXR7XHJcbiAgICBiYWNrZ3JvdW5kOm5vbmU7XHJcbiB9XHJcbiAgXHJcbi8qIFNQSU5ORVIhICovXHJcblxyXG4uc3Bpbm5lciB7XHJcbiAgICB6LWluZGV4OiAtMjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA0NTBweDtcclxuICAgIGhlaWdodDogNDUwcHg7XHJcbiAgICB0b3A6IDEwJTtcclxuICAgIGxlZnQ6IDIwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgXHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlOyAgXHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stc2NhbGVvdXQgNC4wcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICAgIGFuaW1hdGlvbjogc2stc2NhbGVvdXQgNC4wcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICB9XHJcbi5jb250YWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUxLCAxMTcsIDIxNiwgMC40NTkpO1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTgsIDE1NiwgMTU2LCAwLjExNCk7ICovXHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5oaWRkZW57ICAgIFxyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBzay1zY2FsZW91dCB7XHJcbiAgICAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKSB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMCk7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgc2stc2NhbGVvdXQge1xyXG4gICAgMCUgeyBcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgfSAxMDAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMCk7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wKTtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICB9XHJcbiAgLypGSU4gU1BJTkVSKi9cclxuXHJcbi8qIFNFTEVDQ0lPTiBNQVFVSU5BISAqL1xyXG4uYW5pbWFjaW9uU2VsZWNjaW9uIHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gIFxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiAxMDBweCBhdXRvO1xyXG4gIH1cclxuICBcclxuICAuZG91YmxlLWJvdW5jZTEsIC5kb3VibGUtYm91bmNlMiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgXHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stYm91bmNlIDIuMHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgICBhbmltYXRpb246IHNrLWJvdW5jZSAyLjBzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICBcclxuICAuZG91YmxlLWJvdW5jZTIge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0xLjBzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMS4wcztcclxuICB9XHJcbiAgXHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIHNrLWJvdW5jZSB7XHJcbiAgICAwJSwgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjApIH1cclxuICAgIDUwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjApIH1cclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBzay1ib3VuY2Uge1xyXG4gICAgMCUsIDEwMCUgeyBcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjApO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4wKTtcclxuICAgIH0gNTAlIHsgXHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wKTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8qRklOIFNFTEVDQ0lPTiBNQVFVSU5BKi8iXX0= */");

/***/ }),

/***/ "./src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.ts ***!
  \**********************************************************************************/
/*! exports provided: PiedraPapelTijeraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PiedraPapelTijeraComponent", function() { return PiedraPapelTijeraComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicios/auth.service */ "./src/app/servicios/auth.service.ts");
/* harmony import */ var src_app_servicios_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/servicios/local-storage.service */ "./src/app/servicios/local-storage.service.ts");




let PiedraPapelTijeraComponent = class PiedraPapelTijeraComponent {
    //fin puntuaciones 
    constructor(authService, localStorageService) {
        this.authService = authService;
        this.localStorageService = localStorageService;
        this.contadorGanadas = 0;
        this.contadorPerdidas = 0;
        this.mostrarQuienGano = false;
        this.mostrarPuntuacion = false;
        this.partidaTerminada = false;
        //puntuaciones
        // listaDeJugadores: Jugador[] = new Array();
        this.esTop1 = false;
        this.opcionesDeJuego = ["piedra", "papel", "tijera"];
    }
    ngOnInit() {
        this.obtenerMailDeUsuarioActual();
    }
    obtenerMailDeUsuarioActual() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const user = yield this.authService.usuarioLogeado();
            if (user) {
                this.emailUsuarioActual = user.email;
            }
        });
    }
    reproducirExplicacion() {
        let audio = new Audio('../../../assets/audios/ppt.wav');
        audio.play();
    }
    cambiarEstadoOculatar_Mostrar() {
        let imagenes = document.getElementsByClassName("imagenJuego");
        for (let i = 0; i < imagenes.length; i++) {
            if (imagenes[i].getAttribute("class") == "imagenJuego visible hvr-buzz") {
                imagenes[i].setAttribute("class", "imagenJuego hidden hvr-buzz");
            }
            else {
                imagenes[i].setAttribute("class", "imagenJuego visible hvr-buzz");
            }
        }
    }
    cambiarColorResultadoDeJuego() {
        let labelTitulo = document.getElementById('tituloResultadoDeJuego');
        let audio;
        if (labelTitulo != null) {
            switch (this.resultadoDelJuego) {
                case "Empate":
                    labelTitulo.setAttribute("style", "background-color: gray;");
                    break;
                case "Ganaste":
                    audio = new Audio('../../../assets/audios/success.wav');
                    audio.play();
                    labelTitulo.setAttribute("style", "background-color: blue;");
                    break;
                case "Perdiste":
                    audio = new Audio('../../../assets/audios/fail.wav');
                    audio.play();
                    labelTitulo.setAttribute("style", "background-color: red;");
                    break;
            }
        }
    }
    JuegadaDeLaMaquina() {
        let opcionRandom = Math.floor(Math.random() * (3 - 0));
        return this.opcionesDeJuego[opcionRandom];
    }
    verificarVictoria(jugada, jugadaMaquina, jugadaGana) {
        if (jugada == jugadaMaquina) {
            this.resultadoDelJuego = "Empate";
            this.mensajePartida = "Nadie gana";
        }
        else if (jugadaMaquina == jugadaGana) {
            this.mensajePartida = jugada[0].toUpperCase() + jugada.substr(1).toLowerCase() + " GANA!";
            this.resultadoDelJuego = "Ganaste";
            this.contadorGanadas++;
        }
        else {
            this.mensajePartida = jugadaMaquina[0].toUpperCase() + jugadaMaquina.substr(1).toLowerCase() + " GANA!";
            this.resultadoDelJuego = "Perdiste";
            this.contadorPerdidas++;
        }
        if (this.contadorPerdidas == 5) {
            this.terminarPartida();
        }
    }
    ocultarCardReglas() {
        document.getElementById("headerCardReglas").setAttribute('class', "card hidden");
    }
    mostrarCardReglas() {
        document.getElementById("headerCardReglas").setAttribute('class', "card");
    }
    terminarPartida() {
        this.localStorageService.guardarPuntuacionEnLocalStorage(this.emailUsuarioActual, 'ppt', this.contadorGanadas);
        this.esTop1 = this.localStorageService.verificarSiSuperoAlTop();
        let sonido;
        if (this.contadorGanadas > this.contadorPerdidas) {
            this.imagenG_P = "../../../assets/imagenes/ganaste.png";
            sonido = new Audio("../../../assets/audios/TaDa.wav");
            sonido.play();
        }
        else if (this.contadorGanadas == this.contadorPerdidas) {
        }
        else {
            sonido = new Audio("../../../assets/audios/perdida.wav");
            this.imagenG_P = "../../../assets/imagenes/gameover.png";
            sonido.play();
        }
        this.cambiarEstadoOculatar_Mostrar();
        this.partidaTerminada = true;
        this.eleccionJugador = "";
        this.eleccionMaquina = "";
        this.resultadoDelJuego = "";
    }
    reiniciarPartida() {
        this.contadorPerdidas = 0;
        this.contadorGanadas = 0;
        this.partidaTerminada = false;
        this.mostrarQuienGano = false;
        this.cambiarEstadoOculatar_Mostrar();
    }
    CalcukarJugada(jugada) {
        let jugadaMaquina = this.JuegadaDeLaMaquina();
        this.eleccionJugador = jugada;
        this.eleccionMaquina = jugadaMaquina;
        this.mostrarQuienGano = true;
        switch (jugada) {
            case "piedra":
                this.verificarVictoria(jugada, jugadaMaquina, "tijera");
                break;
            case "papel":
                this.verificarVictoria(jugada, jugadaMaquina, "piedra");
                break;
            case "tijera":
                this.verificarVictoria(jugada, jugadaMaquina, "papel");
                break;
        }
        this.cambiarColorResultadoDeJuego();
    }
};
PiedraPapelTijeraComponent.ctorParameters = () => [
    { type: src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: src_app_servicios_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"] }
];
PiedraPapelTijeraComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-piedra-papel-tijera',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./piedra-papel-tijera.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./piedra-papel-tijera.component.css */ "./src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.css")).default]
    })
], PiedraPapelTijeraComponent);



/***/ }),

/***/ "./src/app/componentes/principal/principal.component.css":
/*!***************************************************************!*\
  !*** ./src/app/componentes/principal/principal.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".imagenDeMenu{\r\nwidth: 80px;\r\nheight: 70px;\r\n}\r\n\r\nbutton{\r\n    -webkit-animation-duration: 3s;\r\n            animation-duration: 3s;\r\n    -webkit-animation-name: slideinRight;\r\n            animation-name: slideinRight;\r\n  }\r\n\r\n.slideInLeft{\r\n    -webkit-animation-duration: 3s;\r\n            animation-duration: 3s;\r\n    -webkit-animation-name: slideinLeft;\r\n            animation-name: slideinLeft;\r\n  }\r\n\r\n@-webkit-keyframes slideinRight {\r\n    from {\r\n      margin-right: 100%;\r\n      width: 300%\r\n    }\r\n  \r\n    to {\r\n      margin-right: 0%;\r\n      width: 100%;\r\n    }\r\n  }\r\n\r\n@keyframes slideinRight {\r\n    from {\r\n      margin-right: 100%;\r\n      width: 300%\r\n    }\r\n  \r\n    to {\r\n      margin-right: 0%;\r\n      width: 100%;\r\n    }\r\n  }\r\n\r\n@-webkit-keyframes slideinLeft {\r\n    from {\r\n      margin-left: 100%;\r\n      width: 300%\r\n    }\r\n  \r\n    to {\r\n      margin-left: 0%;\r\n      width: 100%;\r\n    }\r\n  }\r\n\r\n@keyframes slideinLeft {\r\n    from {\r\n      margin-left: 100%;\r\n      width: 300%\r\n    }\r\n  \r\n    to {\r\n      margin-left: 0%;\r\n      width: 100%;\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvcHJpbmNpcGFsL3ByaW5jaXBhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsV0FBVztBQUNYLFlBQVk7QUFDWjs7QUFFQTtJQUNJLDhCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsb0NBQTRCO1lBQTVCLDRCQUE0QjtFQUM5Qjs7QUFDRjtJQUNJLDhCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsbUNBQTJCO1lBQTNCLDJCQUEyQjtFQUM3Qjs7QUFFQTtJQUNFO01BQ0Usa0JBQWtCO01BQ2xCO0lBQ0Y7O0lBRUE7TUFDRSxnQkFBZ0I7TUFDaEIsV0FBVztJQUNiO0VBQ0Y7O0FBVkE7SUFDRTtNQUNFLGtCQUFrQjtNQUNsQjtJQUNGOztJQUVBO01BQ0UsZ0JBQWdCO01BQ2hCLFdBQVc7SUFDYjtFQUNGOztBQUVBO0lBQ0U7TUFDRSxpQkFBaUI7TUFDakI7SUFDRjs7SUFFQTtNQUNFLGVBQWU7TUFDZixXQUFXO0lBQ2I7RUFDRjs7QUFWQTtJQUNFO01BQ0UsaUJBQWlCO01BQ2pCO0lBQ0Y7O0lBRUE7TUFDRSxlQUFlO01BQ2YsV0FBVztJQUNiO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9wcmluY2lwYWwvcHJpbmNpcGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2VuRGVNZW51e1xyXG53aWR0aDogODBweDtcclxuaGVpZ2h0OiA3MHB4O1xyXG59XHJcblxyXG5idXR0b257XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlaW5SaWdodDtcclxuICB9XHJcbi5zbGlkZUluTGVmdHtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XHJcbiAgICBhbmltYXRpb24tbmFtZTogc2xpZGVpbkxlZnQ7XHJcbiAgfVxyXG5cclxuICBAa2V5ZnJhbWVzIHNsaWRlaW5SaWdodCB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMDAlO1xyXG4gICAgICB3aWR0aDogMzAwJVxyXG4gICAgfVxyXG4gIFxyXG4gICAgdG8ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDAlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBzbGlkZWluTGVmdCB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDEwMCU7XHJcbiAgICAgIHdpZHRoOiAzMDAlXHJcbiAgICB9XHJcbiAgXHJcbiAgICB0byB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwJTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/componentes/principal/principal.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/componentes/principal/principal.component.ts ***!
  \**************************************************************/
/*! exports provided: PrincipalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincipalComponent", function() { return PrincipalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PrincipalComponent = class PrincipalComponent {
    constructor() {
        this.status = {
            isFirstOpen: true,
            isFirstDisabled: false
        };
    }
    ngOnInit() {
    }
};
PrincipalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-principal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./principal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/principal/principal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./principal.component.css */ "./src/app/componentes/principal/principal.component.css")).default]
    })
], PrincipalComponent);



/***/ }),

/***/ "./src/app/componentes/quien-soy/quien-soy.component.css":
/*!***************************************************************!*\
  !*** ./src/app/componentes/quien-soy/quien-soy.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("*{\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n}\n.imagenDeQuienSoy{\n    width: 100%;\n   \n    }\nbody {\n    font: 20px Montserrat, sans-serif;\n    line-height: 1.8;\n    color: #f5f6f7;\n}\np {font-size: 16px;}\n.margin {margin-bottom: 45px;}\n.bg-1 { \n    background-color: #1abc9c; /* Green */\n    color: #ffffff;\n}\n.bg-2 { \n    background-color: #474e5d; /* Dark Blue */\n    color: #ffffff;\n}\n.bg-3 { \n    background-color: #ffffff; /* White */\n    color: #555555;\n}\n.bg-4 { \n    background-color: #2f2f2f; /* Black Gray */\n    color: #fff;\n}\n.container-fluid {\n    padding-top: 70px;\n    padding-bottom: 70px;\n}\n.navbar {\n    padding-top: 15px;\n    padding-bottom: 15px;\n    border: 0;\n    border-radius: 0;\n    margin-bottom: 0;\n    font-size: 12px;\n    letter-spacing: 5px;\n}\n.navbar-nav  li a:hover {\n    color: #1abc9c !important;\n}\n.centrado{\n    text-align: center;\n}\n.imagenPerfil{\n    border-radius: 100%;\n    position: relative;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 2em;\n    width: 18em;\n    height: 18em;\n    opacity: 0.5;\n    background-color: blue;\n}\n.imagenPerfil{\n    -webkit-animation-duration: 4s;\n            animation-duration: 4s;\n    -webkit-animation-name: fondoColores;\n            animation-name: fondoColores;\n}\n@-webkit-keyframes fondoColores{\n    from{\n        width: 2em;\n        height: 2em;\n    }\n    25%{\n        width:18em;\n        height: 18em;\n        padding: 6em;\n        background-color: rgba(255, 0, 0, 0.500);\n\n    }\n    50%{\n        padding: 2em;\n        background-color: rgba(0, 0, 255, 0.500);\n    }\n    75%{\n        \n        padding: 6em;\n        background-color: rgba(255, 255, 0, 0.500);\n    }\n\n    85%{\n        padding-left: 10em;\n        padding-right: 10em;\n        background-color: rgba(0, 128, 0, 0.500);\n    }\n    to{\n\n    }\n}\n@keyframes fondoColores{\n    from{\n        width: 2em;\n        height: 2em;\n    }\n    25%{\n        width:18em;\n        height: 18em;\n        padding: 6em;\n        background-color: rgba(255, 0, 0, 0.500);\n\n    }\n    50%{\n        padding: 2em;\n        background-color: rgba(0, 0, 255, 0.500);\n    }\n    75%{\n        \n        padding: 6em;\n        background-color: rgba(255, 255, 0, 0.500);\n    }\n\n    85%{\n        padding-left: 10em;\n        padding-right: 10em;\n        background-color: rgba(0, 128, 0, 0.500);\n    }\n    to{\n\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvcXVpZW4tc295L3F1aWVuLXNveS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0VBQXdFO0FBQzVFO0FBQ0E7SUFDSSxXQUFXOztJQUVYO0FBQ0o7SUFDSSxpQ0FBaUM7SUFDakMsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7QUFDQSxHQUFHLGVBQWUsQ0FBQztBQUNuQixTQUFTLG1CQUFtQixDQUFDO0FBQzdCO0lBQ0kseUJBQXlCLEVBQUUsVUFBVTtJQUNyQyxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSx5QkFBeUIsRUFBRSxjQUFjO0lBQ3pDLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHlCQUF5QixFQUFFLFVBQVU7SUFDckMsY0FBYztBQUNsQjtBQUNBO0lBQ0kseUJBQXlCLEVBQUUsZUFBZTtJQUMxQyxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsU0FBUztJQUNULGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osc0JBQXNCO0FBQzFCO0FBR0E7SUFDSSw4QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLG9DQUE0QjtZQUE1Qiw0QkFBNEI7QUFDaEM7QUFFQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLFdBQVc7SUFDZjtJQUNBO1FBQ0ksVUFBVTtRQUNWLFlBQVk7UUFDWixZQUFZO1FBQ1osd0NBQXdDOztJQUU1QztJQUNBO1FBQ0ksWUFBWTtRQUNaLHdDQUF3QztJQUM1QztJQUNBOztRQUVJLFlBQVk7UUFDWiwwQ0FBMEM7SUFDOUM7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLHdDQUF3QztJQUM1QztJQUNBOztJQUVBO0FBQ0o7QUE5QkE7SUFDSTtRQUNJLFVBQVU7UUFDVixXQUFXO0lBQ2Y7SUFDQTtRQUNJLFVBQVU7UUFDVixZQUFZO1FBQ1osWUFBWTtRQUNaLHdDQUF3Qzs7SUFFNUM7SUFDQTtRQUNJLFlBQVk7UUFDWix3Q0FBd0M7SUFDNUM7SUFDQTs7UUFFSSxZQUFZO1FBQ1osMENBQTBDO0lBQzlDOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQix3Q0FBd0M7SUFDNUM7SUFDQTs7SUFFQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvcXVpZW4tc295L3F1aWVuLXNveS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcbiAgICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG4uaW1hZ2VuRGVRdWllblNveXtcbiAgICB3aWR0aDogMTAwJTtcbiAgIFxuICAgIH1cbmJvZHkge1xuICAgIGZvbnQ6IDIwcHggTW9udHNlcnJhdCwgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMS44O1xuICAgIGNvbG9yOiAjZjVmNmY3O1xufVxucCB7Zm9udC1zaXplOiAxNnB4O31cbi5tYXJnaW4ge21hcmdpbi1ib3R0b206IDQ1cHg7fVxuLmJnLTEgeyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWFiYzljOyAvKiBHcmVlbiAqL1xuICAgIGNvbG9yOiAjZmZmZmZmO1xufVxuLmJnLTIgeyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc0ZTVkOyAvKiBEYXJrIEJsdWUgKi9cbiAgICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5iZy0zIHsgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjsgLyogV2hpdGUgKi9cbiAgICBjb2xvcjogIzU1NTU1NTtcbn1cbi5iZy00IHsgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJmMmYyZjsgLyogQmxhY2sgR3JheSAqL1xuICAgIGNvbG9yOiAjZmZmO1xufVxuLmNvbnRhaW5lci1mbHVpZCB7XG4gICAgcGFkZGluZy10b3A6IDcwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDcwcHg7XG59XG4ubmF2YmFyIHtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xufVxuLm5hdmJhci1uYXYgIGxpIGE6aG92ZXIge1xuICAgIGNvbG9yOiAjMWFiYzljICFpbXBvcnRhbnQ7XG59XG4gIFxuLmNlbnRyYWRve1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5pbWFnZW5QZXJmaWx7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDJlbTtcbiAgICB3aWR0aDogMThlbTtcbiAgICBoZWlnaHQ6IDE4ZW07XG4gICAgb3BhY2l0eTogMC41O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG5cblxuLmltYWdlblBlcmZpbHtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDRzO1xuICAgIGFuaW1hdGlvbi1uYW1lOiBmb25kb0NvbG9yZXM7XG59XG5cbkBrZXlmcmFtZXMgZm9uZG9Db2xvcmVze1xuICAgIGZyb217XG4gICAgICAgIHdpZHRoOiAyZW07XG4gICAgICAgIGhlaWdodDogMmVtO1xuICAgIH1cbiAgICAyNSV7XG4gICAgICAgIHdpZHRoOjE4ZW07XG4gICAgICAgIGhlaWdodDogMThlbTtcbiAgICAgICAgcGFkZGluZzogNmVtO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC41MDApO1xuXG4gICAgfVxuICAgIDUwJXtcbiAgICAgICAgcGFkZGluZzogMmVtO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC41MDApO1xuICAgIH1cbiAgICA3NSV7XG4gICAgICAgIFxuICAgICAgICBwYWRkaW5nOiA2ZW07XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDAsIDAuNTAwKTtcbiAgICB9XG5cbiAgICA4NSV7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBlbTtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTBlbTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMjgsIDAsIDAuNTAwKTtcbiAgICB9XG4gICAgdG97XG5cbiAgICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/componentes/quien-soy/quien-soy.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/componentes/quien-soy/quien-soy.component.ts ***!
  \**************************************************************/
/*! exports provided: QuienSoyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuienSoyComponent", function() { return QuienSoyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let QuienSoyComponent = class QuienSoyComponent {
    constructor() { }
    ngOnInit() {
    }
};
QuienSoyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quien-soy',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quien-soy.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/quien-soy/quien-soy.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./quien-soy.component.css */ "./src/app/componentes/quien-soy/quien-soy.component.css")).default]
    })
], QuienSoyComponent);



/***/ }),

/***/ "./src/app/componentes/registro/registro.component.css":
/*!*************************************************************!*\
  !*** ./src/app/componentes/registro/registro.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".centrado{\n    text-align: center;\n}\n.Divterminos{\n    background-color: #3e3e3e13;\n    border-radius: 30px;\n    padding-top: 3em;\n    padding-bottom: 3em;\n    overflow: hidden;\n    -webkit-animation-duration: 5s;\n            animation-duration: 5s;\n    -webkit-animation-name: zoom;\n            animation-name: zoom;\n}\n.delay1s\n{\n    -webkit-animation-delay: 1s;\n            animation-delay: 1s;\n}\n.delay2s\n{\n    -webkit-animation-delay: 2s;\n            animation-delay: 2s;\n}\np{\n    font-family: cursive;\n    -webkit-animation-duration: 3s;\n            animation-duration: 3s;\n    -webkit-animation-name: slidein;\n            animation-name: slidein;\n}\ninput{\n    border-radius: 30px;\n}\n#imgPerfil{\n    position: relative;\n}\n.header-Login{\n    margin-top: 100px;\n    display: inline-block;\n    background-color: rgba(128, 128, 128, 0.281);\n    border-top-right-radius: 30px;\n    border-top-left-radius: 30px;\n}\n.body-login{\n    padding-top: 2em;\n    background-color: rgba(128, 128, 128, 0.281);\n    padding-bottom: 2em;\n    border-radius: 30px;\n}\n.shadow-pop-tr  {\n\t-webkit-animation: shadow-pop-tr 0.8s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;\n\t        animation: shadow-pop-tr 0.8s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;\n}\n@-webkit-keyframes zoom {\n    from {\n        height: 0em;\n    }\n    15%{\n        height: 4em;\n    }\n    30%{\n        height: 4em;\n    }\n    50%{\n        /* height: 6em; */\n    }\n    75%{\n        /* height: 15em;     */\n    }      \n    to {\n        height:20.2em;\n    }\n  }\n@keyframes zoom {\n    from {\n        height: 0em;\n    }\n    15%{\n        height: 4em;\n    }\n    30%{\n        height: 4em;\n    }\n    50%{\n        /* height: 6em; */\n    }\n    75%{\n        /* height: 15em;     */\n    }      \n    to {\n        height:20.2em;\n    }\n  }\n@-webkit-keyframes slidein {\n    from {\n      margin-left: 100%;\n      width: 300%\n    }\n\n    to {\n      margin-left: 0%;\n      width: 100%;\n    }\n  }\n@keyframes slidein {\n    from {\n      margin-left: 100%;\n      width: 300%\n    }\n\n    to {\n      margin-left: 0%;\n      width: 100%;\n    }\n  }\n@-webkit-keyframes shadow-pop-tr {\n  0% {\n            box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e;\n            transform: translateX(0) translateY(0);\n  }\n\n  100% {\n            box-shadow: 1px -1px #3e3e3e, 2px -2px #3e3e3e, 3px -3px #3e3e3e, 4px -4px #3e3e3e, 5px -5px #3e3e3e, 6px -6px #3e3e3e, 7px -7px #3e3e3e, 8px -8px #3e3e3e;\n            transform: translateX(-8px) translateY(8px);\n  }\n}\n@keyframes shadow-pop-tr {\n    0% {\n                box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e;\n                transform: translateX(0) translateY(0);           \n    }\n    50%{\n        background-color: rgba(255, 0, 0, 0.438);\n        }\n    25%{\n    background-color: rgba(0, 128, 0, 0.418);\n    }\n    100% {\n                box-shadow: 1px -1px #3e3e3e, 2px -2px #3e3e3e, 3px -3px #3e3e3e, 4px -4px #3e3e3e, 5px -5px #3e3e3e, 6px -6px #3e3e3e, 7px -7px #3e3e3e, 8px -8px #3e3e3e;\n                transform: translateX(-8px) translateY(8px);\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvcmVnaXN0cm8vcmVnaXN0cm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQiw4QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLDRCQUFvQjtZQUFwQixvQkFBb0I7QUFDeEI7QUFFQTs7SUFFSSwyQkFBbUI7WUFBbkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7O0lBRUksMkJBQW1CO1lBQW5CLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLDhCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsK0JBQXVCO1lBQXZCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsNENBQTRDO0lBQzVDLDZCQUE2QjtJQUM3Qiw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQiw0Q0FBNEM7SUFDNUMsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2QjtBQUVBO0NBQ0MsbUZBQW1GO1NBQzNFLDJFQUEyRTtBQUNwRjtBQUNBO0lBQ0k7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtFQUNGO0FBbkJGO0lBQ0k7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtFQUNGO0FBQ0Y7SUFDSTtNQUNFLGlCQUFpQjtNQUNqQjtJQUNGOztJQUVBO01BQ0UsZUFBZTtNQUNmLFdBQVc7SUFDYjtFQUNGO0FBVkY7SUFDSTtNQUNFLGlCQUFpQjtNQUNqQjtJQUNGOztJQUVBO01BQ0UsZUFBZTtNQUNmLFdBQVc7SUFDYjtFQUNGO0FBQ0Y7RUFDRTtZQUNVLGtIQUFrSDtZQUNsSCxzQ0FBc0M7RUFDaEQ7O0VBRUE7WUFDVSwwSkFBMEo7WUFDMUosMkNBQTJDO0VBQ3JEO0FBQ0Y7QUFDQTtJQUNJO2dCQUNZLGtIQUFrSDtnQkFDbEgsc0NBQXNDO0lBQ2xEO0lBQ0E7UUFDSSx3Q0FBd0M7UUFDeEM7SUFDSjtJQUNBLHdDQUF3QztJQUN4QztJQUNBO2dCQUNZLDBKQUEwSjtnQkFDMUosMkNBQTJDO0lBQ3ZEO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9yZWdpc3Ryby9yZWdpc3Ryby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRyYWRve1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5EaXZ0ZXJtaW5vc3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2UzZTNlMTM7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBwYWRkaW5nLXRvcDogM2VtO1xuICAgIHBhZGRpbmctYm90dG9tOiAzZW07XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDVzO1xuICAgIGFuaW1hdGlvbi1uYW1lOiB6b29tO1xufVxuXG4uZGVsYXkxc1xue1xuICAgIGFuaW1hdGlvbi1kZWxheTogMXM7XG59XG4uZGVsYXkyc1xue1xuICAgIGFuaW1hdGlvbi1kZWxheTogMnM7XG59XG5cbnB7XG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcbiAgICBhbmltYXRpb24tbmFtZTogc2xpZGVpbjtcbn1cbmlucHV0e1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG59XG4jaW1nUGVyZmlse1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5oZWFkZXItTG9naW57XG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4yODEpO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMwcHg7XG59XG4uYm9keS1sb2dpbntcbiAgICBwYWRkaW5nLXRvcDogMmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4yODEpO1xuICAgIHBhZGRpbmctYm90dG9tOiAyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbn1cblxuLnNoYWRvdy1wb3AtdHIgIHtcblx0LXdlYmtpdC1hbmltYXRpb246IHNoYWRvdy1wb3AtdHIgMC44cyBjdWJpYy1iZXppZXIoMC40NzAsIDAuMDAwLCAwLjc0NSwgMC43MTUpIGJvdGg7XG5cdCAgICAgICAgYW5pbWF0aW9uOiBzaGFkb3ctcG9wLXRyIDAuOHMgY3ViaWMtYmV6aWVyKDAuNDcwLCAwLjAwMCwgMC43NDUsIDAuNzE1KSBib3RoO1xufVxuQGtleWZyYW1lcyB6b29tIHtcbiAgICBmcm9tIHtcbiAgICAgICAgaGVpZ2h0OiAwZW07XG4gICAgfVxuICAgIDE1JXtcbiAgICAgICAgaGVpZ2h0OiA0ZW07XG4gICAgfVxuICAgIDMwJXtcbiAgICAgICAgaGVpZ2h0OiA0ZW07XG4gICAgfVxuICAgIDUwJXtcbiAgICAgICAgLyogaGVpZ2h0OiA2ZW07ICovXG4gICAgfVxuICAgIDc1JXtcbiAgICAgICAgLyogaGVpZ2h0OiAxNWVtOyAgICAgKi9cbiAgICB9ICAgICAgXG4gICAgdG8ge1xuICAgICAgICBoZWlnaHQ6MjAuMmVtO1xuICAgIH1cbiAgfVxuQGtleWZyYW1lcyBzbGlkZWluIHtcbiAgICBmcm9tIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMDAlO1xuICAgICAgd2lkdGg6IDMwMCVcbiAgICB9XG5cbiAgICB0byB7XG4gICAgICBtYXJnaW4tbGVmdDogMCU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cbkAtd2Via2l0LWtleWZyYW1lcyBzaGFkb3ctcG9wLXRyIHtcbiAgMCUge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwICMzZTNlM2UsIDAgMCAjM2UzZTNlLCAwIDAgIzNlM2UzZSwgMCAwICMzZTNlM2UsIDAgMCAjM2UzZTNlLCAwIDAgIzNlM2UzZSwgMCAwICMzZTNlM2UsIDAgMCAjM2UzZTNlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHRyYW5zbGF0ZVkoMCk7XG4gIH1cblxuICAxMDAlIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAtMXB4ICMzZTNlM2UsIDJweCAtMnB4ICMzZTNlM2UsIDNweCAtM3B4ICMzZTNlM2UsIDRweCAtNHB4ICMzZTNlM2UsIDVweCAtNXB4ICMzZTNlM2UsIDZweCAtNnB4ICMzZTNlM2UsIDdweCAtN3B4ICMzZTNlM2UsIDhweCAtOHB4ICMzZTNlM2U7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLThweCkgdHJhbnNsYXRlWSg4cHgpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNoYWRvdy1wb3AtdHIge1xuICAgIDAlIHtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgIzNlM2UzZSwgMCAwICMzZTNlM2UsIDAgMCAjM2UzZTNlLCAwIDAgIzNlM2UzZSwgMCAwICMzZTNlM2UsIDAgMCAjM2UzZTNlLCAwIDAgIzNlM2UzZSwgMCAwICMzZTNlM2U7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHRyYW5zbGF0ZVkoMCk7ICAgICAgICAgICBcbiAgICB9XG4gICAgNTAle1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC40MzgpO1xuICAgICAgICB9XG4gICAgMjUle1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTI4LCAwLCAwLjQxOCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAtMXB4ICMzZTNlM2UsIDJweCAtMnB4ICMzZTNlM2UsIDNweCAtM3B4ICMzZTNlM2UsIDRweCAtNHB4ICMzZTNlM2UsIDVweCAtNXB4ICMzZTNlM2UsIDZweCAtNnB4ICMzZTNlM2UsIDdweCAtN3B4ICMzZTNlM2UsIDhweCAtOHB4ICMzZTNlM2U7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC04cHgpIHRyYW5zbGF0ZVkoOHB4KTtcbiAgICB9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/componentes/registro/registro.component.ts":
/*!************************************************************!*\
  !*** ./src/app/componentes/registro/registro.component.ts ***!
  \************************************************************/
/*! exports provided: RegistroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroComponent", function() { return RegistroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/servicios/auth.service */ "./src/app/servicios/auth.service.ts");
/* harmony import */ var src_app_clases_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/clases/user */ "./src/app/clases/user.ts");





let RegistroComponent = class RegistroComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.user = new src_app_clases_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
        this.aceptoTerminos = false;
    }
    ngOnInit() {
    }
    aceptarTerminos() {
        this.aceptoTerminos = true;
    }
    onRegister() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const user = yield this.authService.onRegister(this.user);
            if (user) {
                console.info("Resgistro Exitoso");
                this.router.navigateByUrl('/Principal');
            }
        });
    }
};
RegistroComponent.ctorParameters = () => [
    { type: src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
RegistroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registro',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./registro.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/registro/registro.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./registro.component.css */ "./src/app/componentes/registro/registro.component.css")).default]
    })
], RegistroComponent);



/***/ }),

/***/ "./src/app/componentes/top3-game/top3-game.component.css":
/*!***************************************************************!*\
  !*** ./src/app/componentes/top3-game/top3-game.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("*{\r\n    font-family: cursive;\r\n    font-weight: bold;\r\n    font-size: 100%;\r\n}\r\n\r\n.centrado{\r\n    text-align:center;\r\n}\r\n\r\n.imgJuego{\r\n    display: inline-block;\r\n    height: 7em;\r\n    width: 7em;\r\n}\r\n\r\n.imgTrofeo{\r\n    height: 4em;\r\n    width: 4em;\r\n}\r\n\r\n.divBody{\r\n    display: inline-block;\r\n}\r\n\r\n.lugar{\r\n    background-color: rgba(0, 0, 255, 0.466);\r\n    display: inline-block;\r\n    border-radius: 40px;\r\n    padding :10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvdG9wMy1nYW1lL3RvcDMtZ2FtZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsVUFBVTtBQUNkOztBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksd0NBQXdDO0lBQ3hDLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3RvcDMtZ2FtZS90b3AzLWdhbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxMDAlO1xyXG59XHJcblxyXG4uY2VudHJhZG97XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG4uaW1nSnVlZ297XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDdlbTtcclxuICAgIHdpZHRoOiA3ZW07XHJcbn1cclxuLmltZ1Ryb2Zlb3tcclxuICAgIGhlaWdodDogNGVtO1xyXG4gICAgd2lkdGg6IDRlbTtcclxufVxyXG4uZGl2Qm9keXtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmx1Z2Fye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAyNTUsIDAuNDY2KTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICBwYWRkaW5nIDoxMHB4O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/componentes/top3-game/top3-game.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/componentes/top3-game/top3-game.component.ts ***!
  \**************************************************************/
/*! exports provided: Top3GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Top3GameComponent", function() { return Top3GameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_clases_jugador__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/clases/jugador */ "./src/app/clases/jugador.ts");



let Top3GameComponent = class Top3GameComponent {
    constructor() {
        this.listaTop3 = new Array();
        this.primerPuesto = new src_app_clases_jugador__WEBPACK_IMPORTED_MODULE_2__["Jugador"]();
        this.segundoPuesto = new src_app_clases_jugador__WEBPACK_IMPORTED_MODULE_2__["Jugador"]();
        this.tercerPuesto = new src_app_clases_jugador__WEBPACK_IMPORTED_MODULE_2__["Jugador"]();
        this.usuarioAMostrar = new src_app_clases_jugador__WEBPACK_IMPORTED_MODULE_2__["Jugador"]();
        this.mostrarDetalleDelJugador = false;
    }
    toggleDialog() {
        this.mostrarDetalleDelJugador = !this.mostrarDetalleDelJugador;
    }
    mostrarUsuarioUno() {
        this.mostrarDetalleDelJugador = true;
        this.usuarioAMostrar = this.primerPuesto;
    }
    mostrarUsuarioDos() {
        this.mostrarDetalleDelJugador = true;
        this.usuarioAMostrar = this.segundoPuesto;
    }
    mostrarUsuarioTres() {
        this.mostrarDetalleDelJugador = true;
        this.usuarioAMostrar = this.tercerPuesto;
    }
    ngOnInit() {
        console.info(this.listaTop3);
        if (this.listaTop3[0]) {
            this.primerPuesto = this.listaTop3[0];
        }
        if (this.listaTop3[1]) {
            this.segundoPuesto = this.listaTop3[1];
        }
        if (this.listaTop3[2]) {
            this.tercerPuesto = this.listaTop3[2];
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], Top3GameComponent.prototype, "tituloDelJuego", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], Top3GameComponent.prototype, "listaTop3", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], Top3GameComponent.prototype, "mostrarDetalleDelJugador", void 0);
Top3GameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-top3-game',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./top3-game.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/top3-game/top3-game.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./top3-game.component.css */ "./src/app/componentes/top3-game/top3-game.component.css")).default]
    })
], Top3GameComponent);



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/servicios/auth.service */ "./src/app/servicios/auth.service.ts");




let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(next, state) {
        if (this.authService.isLogged) {
            return true;
        }
        console.info("Acceso Dengado necesitas logearte");
        this.router.navigateByUrl("/Login");
    }
};
AuthGuard.ctorParameters = () => [
    { type: src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/pipes/sexo.pipe.ts":
/*!************************************!*\
  !*** ./src/app/pipes/sexo.pipe.ts ***!
  \************************************/
/*! exports provided: SexoPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SexoPipe", function() { return SexoPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SexoPipe = class SexoPipe {
    transform(value, args) {
        if (value = 'M') {
            return "machito";
        }
        else {
            return "señorita";
        }
    }
};
SexoPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'sexo'
    })
], SexoPipe);



/***/ }),

/***/ "./src/app/ruteando/ruteando.module.ts":
/*!*********************************************!*\
  !*** ./src/app/ruteando/ruteando.module.ts ***!
  \*********************************************/
/*! exports provided: RuteandoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuteandoModule", function() { return RuteandoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _componentes_adivina_el_numero_adivina_el_numero_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../componentes/adivina-el-numero/adivina-el-numero.component */ "./src/app/componentes/adivina-el-numero/adivina-el-numero.component.ts");
/* harmony import */ var _componentes_error_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../componentes/error/error.component */ "./src/app/componentes/error/error.component.ts");
/* harmony import */ var _componentes_principal_principal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../componentes/principal/principal.component */ "./src/app/componentes/principal/principal.component.ts");
/* harmony import */ var _componentes_agilidad_aritmetica_agilidad_aritmetica_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../componentes/agilidad-aritmetica/agilidad-aritmetica.component */ "./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts");
/* harmony import */ var _componentes_adivina_mas_listado_adivina_mas_listado_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../componentes/adivina-mas-listado/adivina-mas-listado.component */ "./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.ts");
/* harmony import */ var _componentes_agilidad_mas_listado_agilidad_mas_listado_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../componentes/agilidad-mas-listado/agilidad-mas-listado.component */ "./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.ts");
/* harmony import */ var _componentes_juegos_juegos_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../componentes/juegos/juegos.component */ "./src/app/componentes/juegos/juegos.component.ts");
/* harmony import */ var _componentes_registro_registro_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../componentes/registro/registro.component */ "./src/app/componentes/registro/registro.component.ts");
/* harmony import */ var _componentes_menu_card_menu_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../componentes/menu-card/menu-card.component */ "./src/app/componentes/menu-card/menu-card.component.ts");
/* harmony import */ var _componentes_quien_soy_quien_soy_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../componentes/quien-soy/quien-soy.component */ "./src/app/componentes/quien-soy/quien-soy.component.ts");
/* harmony import */ var _componentes_listado_de_paises_listado_de_paises_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../componentes/listado-de-paises/listado-de-paises.component */ "./src/app/componentes/listado-de-paises/listado-de-paises.component.ts");
/* harmony import */ var _componentes_mapa_de_google_mapa_de_google_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../componentes/mapa-de-google/mapa-de-google.component */ "./src/app/componentes/mapa-de-google/mapa-de-google.component.ts");
/* harmony import */ var _componentes_jugadores_listado_jugadores_listado_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../componentes/jugadores-listado/jugadores-listado.component */ "./src/app/componentes/jugadores-listado/jugadores-listado.component.ts");
/* harmony import */ var _componentes_piedra_p_t_l_s_piedra_p_t_l_s_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../componentes/piedra-p-t-l-s/piedra-p-t-l-s.component */ "./src/app/componentes/piedra-p-t-l-s/piedra-p-t-l-s.component.ts");
/* harmony import */ var _componentes_piedra_papel_tijera_piedra_papel_tijera_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../componentes/piedra-papel-tijera/piedra-papel-tijera.component */ "./src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.ts");
/* harmony import */ var _componentes_anagrama_anagrama_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../componentes/anagrama/anagrama.component */ "./src/app/componentes/anagrama/anagrama.component.ts");
/* harmony import */ var _componentes_login_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../componentes/login/login.component */ "./src/app/componentes/login/login.component.ts");
/* harmony import */ var _componentes_listados_listados_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../componentes/listados/listados.component */ "./src/app/componentes/listados/listados.component.ts");
/* harmony import */ var src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/guards/auth.guard */ "./src/app/guards/auth.guard.ts");


// importo del module principal




















// declaro donde quiero que se dirija
const MiRuteo = [
    { path: 'Jugadores', component: _componentes_jugadores_listado_jugadores_listado_component__WEBPACK_IMPORTED_MODULE_15__["JugadoresListadoComponent"] },
    { path: '', component: _componentes_login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"] },
    { path: 'Login', component: _componentes_login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"] },
    { path: 'Mapa', component: _componentes_mapa_de_google_mapa_de_google_component__WEBPACK_IMPORTED_MODULE_14__["MapaDeGoogleComponent"] },
    { path: 'QuienSoy', component: _componentes_quien_soy_quien_soy_component__WEBPACK_IMPORTED_MODULE_12__["QuienSoyComponent"], canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]] },
    { path: 'Registro', component: _componentes_registro_registro_component__WEBPACK_IMPORTED_MODULE_10__["RegistroComponent"] },
    { path: 'Principal', component: _componentes_principal_principal_component__WEBPACK_IMPORTED_MODULE_5__["PrincipalComponent"], canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]] },
    { path: 'Listados', component: _componentes_listados_listados_component__WEBPACK_IMPORTED_MODULE_20__["ListadosComponent"], canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]] },
    { path: 'Paises', component: _componentes_listado_de_paises_listado_de_paises_component__WEBPACK_IMPORTED_MODULE_13__["ListadoDePaisesComponent"] },
    { path: 'Piedratls', component: _componentes_piedra_p_t_l_s_piedra_p_t_l_s_component__WEBPACK_IMPORTED_MODULE_16__["PiedraPTLSComponent"], canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]] },
    { path: 'piedraPapelTijera', component: _componentes_piedra_papel_tijera_piedra_papel_tijera_component__WEBPACK_IMPORTED_MODULE_17__["PiedraPapelTijeraComponent"], canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]] },
    { path: 'anagrama', component: _componentes_anagrama_anagrama_component__WEBPACK_IMPORTED_MODULE_18__["AnagramaComponent"], canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]] },
    {
        path: 'Juegos',
        component: _componentes_juegos_juegos_component__WEBPACK_IMPORTED_MODULE_9__["JuegosComponent"],
        children: [{ path: '', component: _componentes_menu_card_menu_card_component__WEBPACK_IMPORTED_MODULE_11__["MenuCardComponent"] },
            { path: 'Adivina', component: _componentes_adivina_el_numero_adivina_el_numero_component__WEBPACK_IMPORTED_MODULE_3__["AdivinaElNumeroComponent"] },
            { path: 'AdivinaMasListado', component: _componentes_adivina_mas_listado_adivina_mas_listado_component__WEBPACK_IMPORTED_MODULE_7__["AdivinaMasListadoComponent"] },
            { path: 'AgilidadaMasListado', component: _componentes_agilidad_mas_listado_agilidad_mas_listado_component__WEBPACK_IMPORTED_MODULE_8__["AgilidadMasListadoComponent"] },
            { path: 'Agilidad', component: _componentes_agilidad_aritmetica_agilidad_aritmetica_component__WEBPACK_IMPORTED_MODULE_6__["AgilidadAritmeticaComponent"] }], canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]]
    },
    { path: '**', component: _componentes_error_error_component__WEBPACK_IMPORTED_MODULE_4__["ErrorComponent"] },
    { path: 'error', component: _componentes_error_error_component__WEBPACK_IMPORTED_MODULE_4__["ErrorComponent"] }
];
let RuteandoModule = class RuteandoModule {
};
RuteandoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(MiRuteo)
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], RuteandoModule);



/***/ }),

/***/ "./src/app/servicios/archivos-jugadores.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/servicios/archivos-jugadores.service.ts ***!
  \*********************************************************/
/*! exports provided: ArchivosJugadoresService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchivosJugadoresService", function() { return ArchivosJugadoresService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mi-http/mi-http.service */ "./src/app/servicios/mi-http/mi-http.service.ts");



let ArchivosJugadoresService = class ArchivosJugadoresService {
    constructor(miHttp) {
        this.miHttp = miHttp;
        this.api = "http://localhost:8080/jugadoresarchivo/apirestjugadores/";
    }
    traerJugadores(ruta) {
        return this.miHttp.httpGetO(this.api + ruta)
            .toPromise()
            .then(data => {
            console.log("Archivo jugadores");
            // console.log( data );
            return data;
        }, err => {
            console.log(err);
        });
    }
};
ArchivosJugadoresService.ctorParameters = () => [
    { type: _mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_2__["MiHttpService"] }
];
ArchivosJugadoresService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ArchivosJugadoresService);



/***/ }),

/***/ "./src/app/servicios/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/servicios/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");



// import { }
let AuthService = class AuthService {
    constructor(angularFireAuth) {
        this.angularFireAuth = angularFireAuth;
        this.isLogged = false;
        angularFireAuth.authState.subscribe(user => (this.isLogged = user));
    }
    //login
    onLogin(user) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                console.log("LOGIN" + user.email);
                return yield this.angularFireAuth.auth.signInWithEmailAndPassword(user.email, user.password);
            }
            catch (error) {
                console.info("ERROR al registrar: ", error);
            }
        });
    }
    usuarioLogeado() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                return yield this.angularFireAuth.auth.currentUser;
            }
            catch (error) {
                console.info("ERROR, al obtener el usuario logeado: ", error);
            }
        });
    }
    //register
    onRegister(user) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                console.log("REGISTRO" + user.email);
                return yield this.angularFireAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
            }
            catch (error) {
                console.info("ERROR al registrar: ", error);
            }
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/servicios/juego-service.service.ts":
/*!****************************************************!*\
  !*** ./src/app/servicios/juego-service.service.ts ***!
  \****************************************************/
/*! exports provided: JuegoServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegoServiceService", function() { return JuegoServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../clases/juego-adivina */ "./src/app/clases/juego-adivina.ts");
/* harmony import */ var _mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mi-http/mi-http.service */ "./src/app/servicios/mi-http/mi-http.service.ts");




let JuegoServiceService = class JuegoServiceService {
    constructor(miHttp) {
        this.miHttp = miHttp;
        this.peticion = this.miHttp.httpGetO("http://localhost:3003");
        //    this.peticion = this.miHttp.httpGetO("https://restcountries.eu/rest/v2/all");
    }
    listar() {
        this.miHttp.httpGetP("https://restcountries.eu/rest/v2/all")
            .then(data => {
            console.log(data);
        })
            .catch(err => {
            console.log(err);
        });
        this.peticion
            .subscribe(data => {
            console.log("En listar");
            console.log(data);
        }, err => {
            console.info("error: ", err);
        });
        let miArray = new Array();
        miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__["JuegoAdivina"]("Juego 1", false));
        miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__["JuegoAdivina"]("Pepe", true));
        miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__["JuegoAdivina"]("Juego 3", false));
        miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__["JuegoAdivina"]("Juego 4", false));
        miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__["JuegoAdivina"]("Juego 5", false));
        miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__["JuegoAdivina"]("Juego 6", false));
        return miArray;
    }
    listarPromesa() {
        this.peticion
            .subscribe(data => {
            console.log("En listarPromesa");
            console.log(data);
        }, err => {
            console.log(err);
        });
        let promesa = new Promise((resolve, reject) => {
            let miArray = new Array();
            miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__["JuegoAdivina"]("JuegoPromesa 1", false, "promesa"));
            miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__["JuegoAdivina"]("PepePromesa", true));
            miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__["JuegoAdivina"]("JuegoPromesa 3", false));
            miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__["JuegoAdivina"]("JuegoPromesa 4", false));
            miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__["JuegoAdivina"]("JuegoPromesa 5", false));
            miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__["JuegoAdivina"]("JuegoPromesa 6", false));
            resolve(miArray);
        });
        return promesa;
    }
};
JuegoServiceService.ctorParameters = () => [
    { type: _mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_3__["MiHttpService"] }
];
JuegoServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], JuegoServiceService);



/***/ }),

/***/ "./src/app/servicios/jugadores.service.ts":
/*!************************************************!*\
  !*** ./src/app/servicios/jugadores.service.ts ***!
  \************************************************/
/*! exports provided: JugadoresService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JugadoresService", function() { return JugadoresService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _archivos_jugadores_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./archivos-jugadores.service */ "./src/app/servicios/archivos-jugadores.service.ts");



let JugadoresService = class JugadoresService {
    //peticion:any;
    constructor(miHttp) {
        this.miHttp = miHttp;
        // this.peticion = this.miHttp.traerJugadores();
        //    this.peticion = this.miHttp.httpGetO("https://restcountries.eu/rest/v2/all");
    }
    traertodos(ruta, filtro) {
        return this.miHttp.traerJugadores(ruta).then(data => {
            console.info("jugadores service", data);
            this.filtrado = data;
            let ganador;
            if (filtro == "ganadores") {
                ganador = true;
            }
            else {
                ganador = false;
            }
            this.filtrado = this.filtrado.filter(data => data.gano === ganador || filtro == "todos");
            return this.filtrado;
        })
            .catch(errror => {
            console.log("error");
            return this.filtrado;
        });
    }
};
JugadoresService.ctorParameters = () => [
    { type: _archivos_jugadores_service__WEBPACK_IMPORTED_MODULE_2__["ArchivosJugadoresService"] }
];
JugadoresService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], JugadoresService);



/***/ }),

/***/ "./src/app/servicios/local-storage.service.ts":
/*!****************************************************!*\
  !*** ./src/app/servicios/local-storage.service.ts ***!
  \****************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _clases_jugador__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../clases/jugador */ "./src/app/clases/jugador.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/servicios/auth.service.ts");




let LocalStorageService = class LocalStorageService {
    //fin puntuaciones 
    constructor(authService) {
        this.authService = authService;
        //puntuaciones
        this.listaDeJugadores = new Array();
        this.esTop1 = false;
        this.jugador = new _clases_jugador__WEBPACK_IMPORTED_MODULE_2__["Jugador"]();
    }
    verificarSiExiteJugador(emailJugador) {
        let retorno = false;
        this.listaDeJugadores.forEach(auxJugador => {
            if (auxJugador.email == emailJugador) {
                retorno = true;
            }
        });
        return retorno;
    }
    actualizarPuntajeDelUsuario(jugador) {
        this.listaDeJugadores.forEach(auxJugador => {
            if (auxJugador.email == jugador.email && auxJugador.puntaje < jugador.puntaje) {
                auxJugador.puntaje = jugador.puntaje;
                console.log("Lograste una mejor puntuacion");
            }
        });
    }
    verificarSiSuperoAlTopEnMenosIntentos() {
        let retorno = false;
        const auxjugadorTop = new _clases_jugador__WEBPACK_IMPORTED_MODULE_2__["Jugador"]();
        auxjugadorTop.puntaje = 0;
        this.listaDeJugadores.forEach(jugador => {
            if (jugador.puntaje < auxjugadorTop.puntaje) {
                auxjugadorTop.puntaje = jugador.puntaje;
                auxjugadorTop.email = jugador.email;
            }
        });
        if (auxjugadorTop.email == this.jugador.email) {
            console.info(auxjugadorTop.email + " " + this.jugador.email);
            console.log("Estas a la cabeza en el top 3");
            retorno = true;
        }
        return retorno;
    }
    verificarSiSuperoAlTop() {
        let retorno = false;
        const auxjugadorTop = new _clases_jugador__WEBPACK_IMPORTED_MODULE_2__["Jugador"]();
        auxjugadorTop.puntaje = 0;
        this.listaDeJugadores.forEach(jugador => {
            if (jugador.puntaje > auxjugadorTop.puntaje) {
                auxjugadorTop.puntaje = jugador.puntaje;
                auxjugadorTop.email = jugador.email;
            }
        });
        if (auxjugadorTop.email == this.jugador.email) {
            console.info(auxjugadorTop.email + " " + this.jugador.email);
            console.log("Estas a la cabeza en el top 3");
            retorno = true;
        }
        return retorno;
    }
    guardarPuntuacionEnLocalStorage(emailUsuarioActual, nombreDelJuego, puntaje) {
        if (emailUsuarioActual) {
            this.jugador.email = emailUsuarioActual;
            this.jugador.puntaje = puntaje;
            this.listaDeJugadores = this.obtenerListaDeJugadores(nombreDelJuego);
            if (this.listaDeJugadores && this.listaDeJugadores.length > 0) {
                if (this.verificarSiExiteJugador(emailUsuarioActual)) {
                    this.actualizarPuntajeDelUsuario(this.jugador);
                }
                else {
                    this.listaDeJugadores.push(this.jugador);
                }
            }
            else {
                console.info("LISTA VACIA");
                this.listaDeJugadores = [];
                this.listaDeJugadores.push(this.jugador);
            }
            localStorage.setItem(nombreDelJuego, JSON.stringify(this.listaDeJugadores));
        }
        else {
            console.log("no deberias haber llegado hasta aca sin logear.");
        }
    }
    obtenerListaDeJugadores(nombreDelJuego) {
        const datosObtenidos = localStorage.getItem(nombreDelJuego);
        if (datosObtenidos) {
            return JSON.parse(datosObtenidos);
        }
    }
};
LocalStorageService.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
LocalStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LocalStorageService);



/***/ }),

/***/ "./src/app/servicios/mi-http/mi-http.service.ts":
/*!******************************************************!*\
  !*** ./src/app/servicios/mi-http/mi-http.service.ts ***!
  \******************************************************/
/*! exports provided: MiHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiHttpService", function() { return MiHttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm2015/Observable.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm2015/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm2015/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_6__);







let MiHttpService = class MiHttpService {
    constructor(http) {
        this.http = http;
    }
    httpGetP(url) {
        return this.http
            .get(url)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }
    httpPostP(url, objeto) {
        return this.http
            .get(url)
            .subscribe(data => {
            console.log(data);
            return data;
        });
    }
    httpGetO(url) {
        return this.http.get(url)
            .map((res) => res.json())
            .catch((err) => rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(err.json().error || 'Server error'));
    }
    extractData(res) {
        return res.json() || {};
    }
    handleError(error) {
        return error;
    }
};
MiHttpService.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] }
];
MiHttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], MiHttpService);



/***/ }),

/***/ "./src/app/servicios/paises.service.ts":
/*!*********************************************!*\
  !*** ./src/app/servicios/paises.service.ts ***!
  \*********************************************/
/*! exports provided: PaisesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaisesService", function() { return PaisesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mi-http/mi-http.service */ "./src/app/servicios/mi-http/mi-http.service.ts");



let PaisesService = class PaisesService {
    constructor(miHttp) {
        this.miHttp = miHttp;
    }
    listar() {
        return this.miHttp.httpGetP("https://restcountries.eu/rest/v2/all")
            .then(data => {
            console.log(data);
            return data;
        })
            .catch(err => {
            console.log(err);
            return null;
        });
        //return null;
    }
};
PaisesService.ctorParameters = () => [
    { type: _mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_2__["MiHttpService"] }
];
PaisesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], PaisesService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyDYHu6o7Cqj0NiZ5kknZhx-bSp1iWcA1Bc",
        authDomain: "sala-de-juegos-tp.firebaseapp.com",
        databaseURL: "https://sala-de-juegos-tp.firebaseio.com",
        projectId: "sala-de-juegos-tp",
        storageBucket: "",
        messagingSenderId: "354303562663",
        appId: "1:354303562663:web:adc6947660c91252f31c82",
        measurementId: "G-RH4TT290S7"
    }
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\Users\Desktop-Pro\Desktop\Lab4\Sala-De-Juegos\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map