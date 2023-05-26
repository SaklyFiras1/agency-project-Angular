import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetintouchComponent } from './getintouch/getintouch.component';
import { HomeComponent } from './home/home.component';
import { StartprojectComponent } from './startproject/startproject.component';
import { WhatwedoComponent } from './whatwedo/whatwedo.component';
import { WhoweareComponent } from './whoweare/whoweare.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Whoweare',component:WhoweareComponent},
  {path:'Whatwedo',component:WhatwedoComponent},
  {path:'Getintouch',component:GetintouchComponent},
  {path:'Startproject',component:StartprojectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents=[HomeComponent,WhoweareComponent,WhatwedoComponent,GetintouchComponent,StartprojectComponent]