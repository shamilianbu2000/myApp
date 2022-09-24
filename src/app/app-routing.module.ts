import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { RoutingComponent1Component } from './routing-component1/routing-component1.component';
import { RoutingComponent2Component } from './routing-component2/routing-component2.component';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { RelativeComponent } from './relative/relative.component';
import { UseridComponent } from './userid/userid.component';

const routes: Routes = [{
  path: '',
  // component: SlidebarComponent
  redirectTo:'aboutus',  
  pathMatch: 'full' //redirect one page

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
