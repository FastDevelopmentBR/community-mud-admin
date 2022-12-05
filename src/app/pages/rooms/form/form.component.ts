import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'commud-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent {
    hash: string

    constructor(private activatedRoute: ActivatedRoute) {
        this.hash = this.activatedRoute.snapshot.params['hash'];
    }
}
