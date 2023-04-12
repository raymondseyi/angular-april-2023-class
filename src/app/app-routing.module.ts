import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DynamicpageComponent } from './dynamicpage/dynamicpage.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",redirectTo:"/",pathMatch:"full"},
  {
    path:"user",children:[
      {path:"",component:UserComponent},
      {path:"profile",component:ProfileComponent}
    ]
  },
  {path:"about",component:AboutComponent},
  {path:"about/:id",component:DynamicpageComponent},
  {path:"**",component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
