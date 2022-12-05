import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { RoomsRoutingModule } from './rooms-routing.module';

import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { FormComponent } from './form/form.component';

@NgModule({
    declarations: [
        HomeComponent,
        DetailsComponent,
        FormComponent
    ],
    imports: [
        CommonModule,
        SharedModule,

        RoomsRoutingModule
    ]
})
export class RoomsModule { }
