import { Component } from '@angular/core';

import { ThemeService } from './services/theme.service';

@Component({
    selector: 'commud-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(private themeService: ThemeService) {
        this.themeService.initTheme();
    }
}
