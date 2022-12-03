import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Imported Custom Modules
import { MaterialAngularModule } from './material-angular/material-angular.module';

// Routes
import { AppRoutingModule } from './app-routing.module';

// Pages
import { AppComponent } from './app.component';

// Components
import { ExternalPageTemplateComponent } from './components/templates/external-page-template/external-page-template.component';

@NgModule({
    declarations: [
        AppComponent,
        ExternalPageTemplateComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,

        MaterialAngularModule,

        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
