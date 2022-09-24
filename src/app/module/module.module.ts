import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleRoutingModule } from './module-routing.module';
import { NewComponent } from './new/new.component';


@NgModule({
  declarations: [
    NewComponent
  ],
  imports: [
    CommonModule,
    ModuleRoutingModule
  ]
})
export class ModuleModule { }
