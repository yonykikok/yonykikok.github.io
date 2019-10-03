import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { User } from 'src/app/clases/user';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  user: User = new User();
  aceptoTerminos: boolean = false;
  ngOnInit() {
  }
  constructor(private authService: AuthService, private router: Router) { }

  aceptarTerminos() {
    this.aceptoTerminos = true;
  }

  async onRegister() {
    const user = await this.authService.onRegister(this.user);
    if (user) {
      console.info("Resgistro Exitoso");
      this.router.navigateByUrl('/Principal')
    }
  }
}
