import { Component, OnInit } from '@angular/core';
import { SurveyService } from "../survey.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  ques = {
    question: null,
    optionone: null,
    optiontwo: null,
    optionthree: null,
    optionfour: null,
  };

  constructor(private _service: SurveyService, private _router: Router) { }

  ngOnInit() {
  }

  create(){
    this._service.create(this.ques);
    this._router.navigate(['/dashboard'])
  }
}
