import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public model: object = {};
  public isError : string;

  constructor( private auth: AuthService, private router: Router ) { }

  ngOnInit() {
  }

  /**
   * Authenticate function
   * @param loginForm FormObject with username name and password
   */
  onLogin( loginForm: NgForm ){
    this.auth.start( loginForm.form.value ).subscribe( res => {
      if ( res['status'] === 200 ){
        this.isError = ''; 
        
        // Redirect to Lobby 
        this.router.navigate(['/lobby']);

      } else {
        this.isError = res['message'];
      }
    });

    this.model = {};
  }

}
