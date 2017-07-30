import { Component, OnInit } from '@angular/core';
import { SurveyService } from "../survey.service";
import { Router } from "@angular/router"
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = null;
  constructor( private _service: SurveyService, private _router: Router) { }

  ngOnInit() {
    this._service.login(this.user);
  }

  login(){
    this._service.login(this.user);
    this._router.navigate(['/dashboard'])
  }
}
