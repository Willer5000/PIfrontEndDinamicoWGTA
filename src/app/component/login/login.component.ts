import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  ngOnInit(): void {}

  get Email() {
    return this.form.get('email');
  }

  get Password() {
    return this.form.get('password');
  }

  onLogin() {
    this.authService.Login(this.form.value).subscribe(data => {
      console.log("DATA" + JSON.stringify(data));
      this.router.navigate(['/home']);
    });
  }
}

//OPCION B
/*import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:FormGroup ;
  constructor(private formBuilder:FormBuilder, private authService:AuthService, private ruta:Router){
    this.form=this.formBuilder.group(
      {
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required, Validators.minLength(4)]]
      }
    )
    }
  ngOnInit(): void {
          }
    get Email(){
      return this.form.get('email');
    }
    get Password(){
      return this.form.get('password');
    }

    onLogin(event:Event){
      event.preventDefault;
      this.authService.Login(this.form.value).subscribe(data=>{
        console.log("DATA" + JSON.stringify(data));
        this.ruta.navigate(['/home']);
      })
    }
}
*/
/*@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogged = false;
  isLogginFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  roles: string[] = [];
  errMsj!: string;

  constructor(private tokenService: TokenService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

onLogin(): void {
  this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
   this.authService.login(this.loginUsuario).subscribe(data => {
      this.isLogged = true;
      this.isLogginFail = false;
      this.tokenService.setToken(data.token);
      this.tokenService.setUserName(data.nombreUsuario);
      this.tokenService.setAuthorities(data.authorities);
      this.roles = data.authorities;
      this.router.navigate(['']);
    }, err => {
      this.isLogged = false;
      this.isLogged = true;
      this.errMsj = err.error.mensaje;
      console.log(this.errMsj);
      

    })
}

}*/
