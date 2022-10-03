import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { StylesComponent } from './styles/styles.component';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import {CardModule} from 'primeng/card';

import {SidebarModule} from 'primeng/sidebar';

import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
                //api




import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { ToHeaderComponent } from './to-header/to-header.component';
import { InputfieldComponent } from './inputfield/inputfield.component';
import { ListviewComponent } from './listview/listview.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { RoutingComponent1Component } from './routing-component1/routing-component1.component';
import { RoutingComponent2Component } from './routing-component2/routing-component2.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { RelativeComponent } from './relative/relative.component';
import { UseridComponent } from './userid/userid.component';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './form/form.component';
import { ListuserComponent } from './listuser/listuser.component';
import { LoginComponent } from './login/login.component'
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService, MessageService} from 'primeng/api';

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
    AboutusComponent,
    ContactusComponent,
    RoutingComponent1Component,
    RoutingComponent2Component,
    ErrorpageComponent,
    RelativeComponent,
    UseridComponent,
    FormComponent,
    ListuserComponent,
    LoginComponent
 


    

  ],

 
  
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    InputTextModule,
    TableModule,
    CardModule,
    ButtonModule,
    AccordionModule,
    ToastModule,
    ConfirmDialogModule,
    BrowserAnimationsModule,
  
    SidebarModule
    
  ],
  
  providers: [ConfirmationService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
