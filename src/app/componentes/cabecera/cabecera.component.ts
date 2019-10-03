import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  @Input() title: string;
  @Input() srcLink: string;
  @Input() nameLink: string;
  @Input() routerLinkk: string;
  @Input() nameRouterLink: string;
  @Input() img: string;
  @Input() srcLinkBoolean: boolean=false;
  @Input() routerLinkBoolean: boolean=false;
  constructor() { }

  ngOnInit() {
  }

}
