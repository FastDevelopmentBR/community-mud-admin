import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'add',
        component: FormComponent
    },
    {
        path: ':hash',
        component: DetailsComponent
    },
    {
        path: ':hash/edit',
        component: FormComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class RoomsRoutingModule { }
