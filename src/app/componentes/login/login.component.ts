import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { User } from 'src/app/clases/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  constructor(private authService: AuthService, private router: Router) {


  }

  ngOnInit() {
  }

  async onLogin() {
    const user =await this.authService.onLogin(this.user);
    if(user)
    {
      console.info( this.authService.usuarioLogeado());
      console.info("LOGIN exitoso");
       this.router.navigateByUrl('/Principal');
     // this.router.navigateByUrl('/Piedratls');
    }
  }

}
