import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ForgotPasswordPageComponent } from './pages/forgot-password-page/forgot-password-page.component';

import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';

const routes: Routes = [
    { path: 'login', component: LoginPageComponent },
    { path: 'esqueci-a-senha', component: ForgotPasswordPageComponent },
    {
        path: 'dashboard',
        component: DashboardPageComponent,
    },
    {
        path: 'rooms',
        loadChildren: () => import('./pages/rooms/rooms.module').then(m => m.RoomsModule)
    },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
