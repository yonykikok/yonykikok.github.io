import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { JuegoAgilidad } from '../../clases/juego-agilidad'

import { Subscription } from "rxjs";
import { TimerObservable } from "rxjs/observable/TimerObservable";
@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
})
export class AgilidadAritmeticaComponent implements OnInit {
  @Output() enviarJuego: EventEmitter<any> = new EventEmitter<any>();
  mostrar:boolean=false;
  operadores: string[] = ["*", "-", "/", "+"];
  @Input() nuevoJuego: JuegoAgilidad = new JuegoAgilidad();;
  ocultarVerificar: boolean;
  Tiempo: number;
  repetidor: any;
  private subscription: Subscription;
  ngOnInit() {
  }
  constructor() {
    this.ocultarVerificar = true;
    this.Tiempo = 5;
    // this.nuevoJuego = new JuegoAgilidad();
    console.info("Inicio agilidad");
  }

  // Retorna un número aleatorio entre min (incluido) y max (excluido)
  numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }


  NuevoJuego() {
    this.nuevoJuego = new JuegoAgilidad();
    this.nuevoJuego.numeroAleatorioUno = this.numeroAleatorio(0, 100);
    this.nuevoJuego.numeroAleatorioDos = this.numeroAleatorio(1, 10);
    this.nuevoJuego.operador = this.operadores[this.numeroAleatorio(0, 4)];
    console.log(this.nuevoJuego.numeroAleatorioUno);
    console.log(this.nuevoJuego.operador);
    console.log(this.nuevoJuego.numeroAleatorioDos);
    this.ocultarVerificar = false;
    this.repetidor = setInterval(() => {
      this.Tiempo--;
      // console.log("llego", this.Tiempo);
      if (this.Tiempo == 0) {
        clearInterval(this.repetidor);
        this.verificar();
        this.ocultarVerificar = true;
        this.Tiempo = 5;
      }
    }, 900);

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
    console.log(resultado);
    console.log(this.nuevoJuego.numeroIngresado);
    if (resultado == this.nuevoJuego.numeroIngresado) {
      this.mostrar=false;
      console.log("BIEN");
      this.nuevoJuego.gano=true;
    }
    else
    {
      this.mostrar=true;
    }
    clearInterval(this.repetidor);
  }

}
