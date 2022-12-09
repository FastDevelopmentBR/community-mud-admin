import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { AbstractControl, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { RoomsDataService } from 'src/app/services/rooms-data.service';

@Component({
    selector: 'commud-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent {
    hash: string

    form: UntypedFormGroup
    submitted: boolean = false

    constructor(private activatedRoute: ActivatedRoute,
        private fb: UntypedFormBuilder,
        private location: Location,
        private snackBar: MatSnackBar,
        private roomsDataService: RoomsDataService) {

        this.hash = this.activatedRoute.snapshot.params['hash'];

        this.form = this.fb.group({
            title: ['', [Validators.required, Validators.maxLength(120)]],
            description: ['', Validators.required]
        });
    }

    ngOnInit() {
        if (this.hash) {
            this.roomsDataService.getRoom(this.hash)
                .subscribe(data => this.form.setValue({
                    title: data.title,
                    description: data.description
                }))
        }
    }

    hasError(control: AbstractControl): boolean {
        return control.invalid && (control?.dirty || control?.touched);
    }

    getErrorMessage(control: AbstractControl): string {
        if (control?.errors) {
            let errors = Object.keys(control.errors);

            switch (errors[0]) {
                case 'required':
                    return 'Preenchimento obrigatório.';
                    break;
                default:
                    return errors[0];
            }
        }
        return '';
    }

    back() {
        this.location.back();
    }

    onSubmit() {
        this.submitted = true;
        let formValue = this.form.value;

        this.form.markAllAsTouched();

        if (this.form.valid) {
            if (this.hash) {
                this.roomsDataService.update(this.hash, formValue).subscribe({
                    next: this.onSubmitSuccessFn,
                    error: this.onSubmitErrorFn,
                    complete: this.onSubmitCompleteFn
                });
            } else {
                this.roomsDataService.add(formValue).subscribe({
                    next: this.onSubmitSuccessFn,
                    error: this.onSubmitErrorFn,
                    complete: this.onSubmitCompleteFn
                });
            }
        } else {
            this.submitted = false
        }
    }

    onSubmitSuccessFn = (res: any) => this.snackBar.open(`Sala ${this.hash ? 'atualizada' : 'criada'} com sucesso`)
    onSubmitErrorFn = (err: any) => this.snackBar.open(err.error)
    onSubmitCompleteFn = () => { this.submitted = false; this.location.back(); }
}
