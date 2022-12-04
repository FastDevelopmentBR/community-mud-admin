import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private renderer: Renderer2;
    private colorTheme: string = 'light-mode';

    constructor(@Inject(DOCUMENT) private document: Document,
        rendererFactory: RendererFactory2) {
        this.renderer = rendererFactory.createRenderer(null, null);
    }

    initTheme() {
        this.getColorTheme();
        this.renderer.addClass(this.document.body, this.colorTheme);
    }

    update(theme: 'dark-mode' | 'light-mode') {
        const previousColorTheme = this.colorTheme;
        this.setColorTheme(theme);
        this.renderer.removeClass(document.body, previousColorTheme);
        this.renderer.addClass(document.body, theme);
    }

    isDarkMode() {
        return this.colorTheme === 'dark-mode';
    }

    private setColorTheme(theme: string) {
        this.colorTheme = theme;
        localStorage.setItem('user-theme', theme);
    }

    private getColorTheme() {
        const userTheme = localStorage.getItem('user-theme')
        this.colorTheme = (userTheme) ? userTheme : 'light-mode';
    }
}
