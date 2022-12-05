import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Imported Custom Modules
import { SharedModule } from './shared/shared.module';
import { SecurityModule } from './security/security.module';

// Services
import { ThemeService } from './services/theme.service';

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
    providers: [ThemeService],
    bootstrap: [AppComponent]
})
export class AppModule { }
