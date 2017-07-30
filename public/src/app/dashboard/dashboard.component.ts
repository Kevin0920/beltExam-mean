import { Component, OnInit } from '@angular/core';
import { SurveyService } from "../survey.service";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user = null;
  polls = [];

  constructor(private _service: SurveyService) {
    this.user = this._service.dashboard()
  }

  ngOnInit() {
    this._service.findall()
        .then(data=>{this.polls=data})
        .catch(err=>{console.log(err)})
  }

}
