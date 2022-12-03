import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Imported Custom Modules
import { MaterialAngularModule } from './material-angular/material-angular.module';
import { SecurityModule } from './security/Security.module';

// Routes
import { AppRoutingModule } from './app-routing.module';

// Pages
import { AppComponent } from './app.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

// Components
import { ExternalPageTemplateComponent } from './components/templates/external-page-template/external-page-template.component';

@NgModule({
    declarations: [
        AppComponent,
        DashboardPageComponent,
        LoginPageComponent,
        ExternalPageTemplateComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,

        MaterialAngularModule,
        SecurityModule,

        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
