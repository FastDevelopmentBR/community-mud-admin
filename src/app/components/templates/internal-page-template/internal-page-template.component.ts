import { Component, HostBinding, Inject, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
    selector: 'commud-internal-page-template',
    templateUrl: './internal-page-template.component.html',
    styleUrls: ['./internal-page-template.component.scss']
})
export class InternalPageTemplateComponent implements OnInit {
    isDarkMode: boolean = false;

    constructor(private themeService: ThemeService) { }

    ngOnInit(): void {
        this.isDarkMode = this.themeService.isDarkMode();
    }

    toggleColorScheme() {
        this.isDarkMode
            ? this.themeService.update('light-mode')
            : this.themeService.update('dark-mode');

        this.isDarkMode = this.themeService.isDarkMode();
    }
}
