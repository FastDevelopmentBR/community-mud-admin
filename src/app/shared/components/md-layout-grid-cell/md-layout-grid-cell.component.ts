import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { IntRange } from '../../enums/int-range.enum';

@Component({
    selector: '[commud-md-layout-grid-cell]',
    template: '<ng-content></ng-content>',
})
export class MdLayoutGridCellComponent implements OnInit {
    @HostBinding('class') sizeClass: string = '';
    @Input() desktopSize: IntRange<1, 13> = 12;
    @Input() tabletSize: IntRange<1, 9> = 8;
    @Input() phoneSize: IntRange<1, 5> = 4;

    maxDesktopSize: IntRange<1, 13> = 12;
    maxTabletSize: IntRange<1, 9> = 8;
    maxPhoneSize: IntRange<1, 5> = 4;

    constructor() { }

    ngOnInit(): void {
        this.getSizes();
    }

    getSizes() {
        let sizes = [];

        const prefix = 'mdc-layout-grid__cell--span-';
        const desktopSuffix = '-desktop';
        const tableSuffix = '-tablet';
        const phoneSuffix = '-phone';

        if (!this.desktopSize || this.desktopSize > this.maxDesktopSize)
            this.desktopSize = this.maxDesktopSize;

        if (!this.tabletSize || this.tabletSize > this.maxTabletSize)
            this.tabletSize = this.maxTabletSize;

        if (!this.phoneSize || this.phoneSize > this.maxPhoneSize)
            this.phoneSize = this.maxPhoneSize;

        sizes.push(prefix + this.desktopSize + desktopSuffix);
        sizes.push(prefix + this.tabletSize + tableSuffix);
        sizes.push(prefix + this.phoneSize + phoneSuffix);

        this.sizeClass = sizes.join(' ');
    }
}
