import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { RoutingComponent1Component } from './routing-component1/routing-component1.component';
import { RoutingComponent2Component } from './routing-component2/routing-component2.component';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { RelativeComponent } from './relative/relative.component';
const routes: Routes = [{
  path:'Slidemenu',
  component:SlidebarComponent
  // redirectTo:'aboutus',  
  // pathMatch: 'full' //redirect one page

},
  {
  path:'contactus',
  component:ContactusComponent,children:[{path:'relative',component:RelativeComponent}]
},{
  path:'aboutus',
  component:AboutusComponent,
  children:[
     {
      path:'comp1',
      component:RoutingComponent1Component
     },

    {
    path:':user',
    component:RoutingComponent2Component
     }
    ]
}, {
  path:'**',
  component:ErrorpageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
