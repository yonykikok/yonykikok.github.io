import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {

  @Input() palabra: string;
  @Input() intentos:number=0;
  arrayPalabra: string[];
  mostrarPalabraSecreta: boolean = false;
  mostrar: boolean = false;
  empesarPartida: boolean = false;
  palabraIngresada: string;

  abecedario: string[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  palabras: string[] = ["abrelatas", "disposicion", "parlante",
    "aire", "mesa", "PC",
    "libros", "escuela", "pelusa",
    "Andres", "esfera", "periferico",
    "animal", "esquina", "perro",
    "casco", "Eugenia", "piscinas",
    "pasto", "cuaderno", "planta",
    "Argentina", "Fernanda", "Polonia",
    "atomo", "Francia", "posavasos",
    "Belen", "galleta", "programa",
    "Beto", "Guadalupe", "puerta",
    "boton", "guitarra", "quimica",
    "Brasil", "hoja", "rectangulo",
    "Bruselas", "idea", "ropa",
    "cable", "Juanita", "silla",
    "calculadora", "juguete", "sonido",
    "carpeta", "Julio", "Spotify",
    "cartera", "La", "lampara", "suciedad",
    "celular", "loros", "sustancia",
    "cerradura", "Louisiana", "televidente",
    "cesped", "manantial", "televisor",
    "Chile", "Mariano", "tierra",
    "notebook", "mausoleo", "tigre",
    "circulo", "mesa", "Tomas",
    "ciudad", "Mexico", "trabajador",
    "ciruela", "molecula", "trabajo",
    "claridad", "mouse", "triangulo",
    "clavel", "mueble", "tulipan",
    "competencia", "Nicolas", "utensilio",
    "computadora", "notas", "vaso",
    "cuerda", "Nueva York", "ventana",
    "Dinamarca", "telefono", "vidrio",
    "asiento", "pantalla", "violin",
    "bateria", "Paris", "visita"];
  constructor() {
  }
  comenzar() {
    this.empesarPartida = !this.empesarPartida;
    this.cambiarPalabra();
  }
  mostrarPalabra() {
    this.mostrarPalabraSecreta = !this.mostrarPalabraSecreta;
  }
  cambiarEstado() {
    this.mostrar = !this.mostrar;
  }
  ngOnInit() {
  }

  compararPalabra() {
    console.log(this.palabra);
    if (this.palabraIngresada == this.palabra) {
      let audio=new Audio('../../../assets/audios/success.wav');
      audio.play();
      this.cambiarPalabra();
      this.intentos=0;
    }
    else {
      this.intentos++;
      let audio=new Audio('../../../assets/audios/fail.wav');
      audio.play();
    }
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
  cambiarPalabra() {
    this.mostrarPalabraSecreta = false;
    this.mostrar = false;
    let numeroRandom = this.numeroRandom(0, 101);
    this.palabra = this.palabras[numeroRandom].toLocaleLowerCase();
    let arrayLetras = this.separarPalabras(this.palabra);
    this.arrayPalabra = this.desordenarPalabra(arrayLetras);
    this.mostrarImagenesDePalabra();
    this.palabraIngresada="";
  }

  separarPalabras(palabra) {
    let i;
    let arrayLetras = new Array;
    for (i = 0; i < palabra.length; i++) {
      arrayLetras.push(palabra[i]);
    }
    return arrayLetras;
  }

}
