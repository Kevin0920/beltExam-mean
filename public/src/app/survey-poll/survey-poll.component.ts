import { Component, OnInit } from '@angular/core';
import { SurveyService } from "../survey.service";
import { Router, ActivatedRoute} from "@angular/router"


@Component({
  selector: 'app-survey-poll',
  templateUrl: './survey-poll.component.html',
  styleUrls: ['./survey-poll.component.css']
})
export class SurveyPollComponent implements OnInit {
  id = null;
  poll = null;
  constructor(
      private _service: SurveyService,
      private _router: Router,
      private _route: ActivatedRoute
  ) {
    this._route.params.subscribe(
        param => {this.id = param.id}
    )
  }

  ngOnInit() {
    this._service.findone(this.id)
        .then(data=>{this.poll=data})
        .catch(err=>{console.log(err)})
  }


  vote(number){
    switch(number) {
        case 'one':
          this.poll.voteone ++;
          break;
        case 'two':
            this.poll.votetwo ++;
            break;
        case 'three':
            this.poll.votethree ++;
            break;
        case 'four':
            this.poll.votefour ++;
            break;
        default: break;
    }

    this._service.vote({id:this.id, number:number})
  }
}
