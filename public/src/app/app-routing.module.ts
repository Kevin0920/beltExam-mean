import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateComponent } from './create/create.component';
import { SurveyPollComponent } from './survey-poll/survey-poll.component';

const routes: Routes = [
    { path: '', component: LoginComponent, pathMatch: 'full'},
    { path: 'dashboard', component: DashboardComponent },
    { path: 'create', component: CreateComponent },
    { path: 'poll/:id', component: SurveyPollComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
