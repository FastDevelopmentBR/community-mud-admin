import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Imported Custom Modules
import { MaterialAngularModule } from './material-angular/material-angular.module';

// Services
import { ThemeService } from './services/theme.service';

// Components
import { ExternalPageTemplateComponent } from './templates/external-page-template/external-page-template.component';
import { InternalPageTemplateComponent } from './templates/internal-page-template/internal-page-template.component';

@NgModule({
    declarations: [
        ExternalPageTemplateComponent,
        InternalPageTemplateComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,

        MaterialAngularModule
    ],
    exports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,

        MaterialAngularModule,

        ExternalPageTemplateComponent,
        InternalPageTemplateComponent
    ],
    providers: [ThemeService],
    bootstrap: []
})
export class SharedModule { }
