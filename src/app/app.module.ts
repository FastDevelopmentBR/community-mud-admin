import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Imported Custom Modules
import { SharedModule } from './shared/shared.module';
import { SecurityModule } from './security/security.module';

// Routes
import { AppRoutingModule } from './app-routing.module';

// Pages
import { AppComponent } from './app.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

@NgModule({
    declarations: [
        AppComponent,
        
        DashboardPageComponent,
        LoginPageComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        
        SharedModule,
        SecurityModule,

        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
