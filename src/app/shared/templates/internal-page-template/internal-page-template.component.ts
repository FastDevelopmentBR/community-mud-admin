import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ThemeService } from '../../services/theme.service';
import { AuthService } from '../../../security/auth.service';

@Component({
    selector: 'commud-internal-page-template',
    templateUrl: './internal-page-template.component.html',
    styleUrls: ['./internal-page-template.component.scss']
})
export class InternalPageTemplateComponent implements OnInit {
    isDarkMode: boolean = false;

    constructor(private router: Router,
        private authService: AuthService,
        private themeService: ThemeService) { }

    ngOnInit(): void {
        this.isDarkMode = this.themeService.isDarkMode();
    }

    toggleColorScheme() {
        this.isDarkMode
            ? this.themeService.update('light-mode')
            : this.themeService.update('dark-mode');

        this.isDarkMode = this.themeService.isDarkMode();
    }

    logout() {
        this.authService.logout()
        this.router.navigate(['/login'])
    }
}
