import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { RoutingComponent1Component } from './routing-component1/routing-component1.component';
import { RoutingComponent2Component } from './routing-component2/routing-component2.component';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { RelativeComponent } from './relative/relative.component';
import { UseridComponent } from './userid/userid.component';
import { MainComponent } from './main/main.component';
import { FormComponent } from './form/form.component';
import { ListuserComponent } from './listuser/listuser.component';
import { LoginComponent } from './login/login.component';
import { AuthguardGuard } from './authguard.guard';
import { LastComponent } from './last/last.component';
import { SignupComponent } from './signup/signup.component';
import { LogInComponent } from './log-in/log-in.component';
import { TableComponent } from './table/table.component';


const routes: Routes = [ {
  path : "",
  redirectTo : "adduser",
  pathMatch : "full"
  // component:LoginComponent
},
{

    path : "list",
    component : LoginComponent,
  

},
{
  path:'signup',
  component:SignupComponent
},
{
  path:'log-in',
  component:LogInComponent
},
{

  path : "footer",
  component : LastComponent,


},

{
  path : "adduser",
  component : FormComponent,
  // canActivate:[AuthguardGuard]
},
{
  path : "table",
  component : TableComponent,
  children:[
    {
      path: ":userid",
      component:TableComponent
    }
  ]

},
{
  path : "userlist",
  component : ListuserComponent
},
{
  path : "userlist/edituser/:id",
  component : FormComponent

},
{
  path:'main',
  component: MainComponent
},
{
  path: 'contactus',
  component: ContactusComponent,
  children: [
    {path: 'comp1',
        component: RoutingComponent1Component},
    {
      path: 'relative',
      component: RelativeComponent,
      children:[
        {
        path:':userid',component:UseridComponent}, ]
    
         
      }]
}, {
  path: 'aboutus',
  component: AboutusComponent,
  children: [
    {
      path: 'comp1',
      component: RoutingComponent1Component
    },

    {
      path: ':user',///any componenet can do redirect page
      component: RoutingComponent2Component
    }
  ]
},
{
  path:'new',
  loadChildren:()=>import('./module/module.module').then(m=>m.ModuleModule
  )
},

{
  path: '**',
  component: SlidebarComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
