import { Component, Input } from '@angular/core';

@Component({
    selector: 'commud-side-nav-menu-item',
    templateUrl: './side-nav-menu-item.component.html',
    styleUrls: ['./side-nav-menu-item.component.scss']
})
export class SideNavMenuItemComponent {
    @Input() icon: string = ""
    @Input() link: string = ""
    @Input() text: string = ""
    @Input() type: string = ""
}
