import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Imported Custom Modules
import { MaterialAngularModule } from './material-angular/material-angular.module';

// Components
import { ExternalPageTemplateComponent } from './templates/external-page-template/external-page-template.component';
import { InternalPageTemplateComponent } from './templates/internal-page-template/internal-page-template.component';
import { SideNavMenuComponent } from './templates/internal-page-template/side-nav-menu/side-nav-menu.component';
import { SideNavMenuItemComponent } from './templates/internal-page-template/side-nav-menu-item/side-nav-menu-item.component';
import { ExclusionDialogComponent } from './components/exclusion-dialog/exclusion-dialog.component';
import { MdLayoutGridCellComponent } from './components/md-layout-grid-cell/md-layout-grid-cell.component';

@NgModule({
    declarations: [
        ExternalPageTemplateComponent,
        InternalPageTemplateComponent,
        SideNavMenuComponent,
        SideNavMenuItemComponent,
        ExclusionDialogComponent,
        MdLayoutGridCellComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,

        MaterialAngularModule
    ],
    exports: [
        CommonModule,
        RouterModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,

        MaterialAngularModule,
        MdLayoutGridCellComponent,

        ExternalPageTemplateComponent,
        InternalPageTemplateComponent
    ]
})
export class SharedModule { }
