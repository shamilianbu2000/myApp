import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from "@angular/forms";
import { StylesComponent } from './styles/styles.component';

import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { ToHeaderComponent } from './to-header/to-header.component';
import { InputfieldComponent } from './inputfield/inputfield.component';
import { ListviewComponent } from './listview/listview.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    SlidebarComponent,
    FooterComponent,
    StylesComponent,
    ChildComponent,
    ParentComponent,
    UsersListComponent,
    UsersDetailComponent,
    ToHeaderComponent,
    InputfieldComponent,
    ListviewComponent,
  ],

 
  
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
