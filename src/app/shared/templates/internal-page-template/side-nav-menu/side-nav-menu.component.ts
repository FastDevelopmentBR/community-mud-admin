import { Component } from '@angular/core';

@Component({
    selector: 'commud-side-nav-menu',
    templateUrl: './side-nav-menu.component.html',
    styleUrls: ['./side-nav-menu.component.scss']
})
export class SideNavMenuComponent {
    navItems: { icon: string, link: string, text: string }[] = [
        {
            icon: "dashboard",
            link: "/dashboard",
            text: "Dashboard"
        },
        {
            icon: "meeting_room",
            link: "/rooms",
            text: "Salas"
        },
        {
            icon: "people",
            link: "/players",
            text: "Jogadores"
        },
        {
            icon: "notifications_active",
            link: "/alerts",
            text: "Alertas"
        },
        {
            icon: "forum",
            link: "/chats",
            text: "Batepapos"
        },
    ]
}


