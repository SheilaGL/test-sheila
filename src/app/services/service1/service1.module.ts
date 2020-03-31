import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { Service1Component } from './service1.component';

@NgModule({
    imports: [ CommonModule, FormsModule, IonicModule],
    declarations: [Service1Component],
    exports: [Service1Component]
})
export class Service1Module {}


