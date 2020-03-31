import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent} from "./services.component";
import {IonicModule} from "@ionic/angular";
import {Service1Module} from "./service1/service1.module";


@NgModule({
  declarations: [ServicesComponent],
  imports: [
    CommonModule,
    IonicModule,
   Service1Module

  ],
  exports: [
    ServicesComponent,


  ],
})
export class ServicesModule { }

