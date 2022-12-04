import { Component, OnInit } from '@angular/core';
import {
    UntypedFormBuilder,
    UntypedFormGroup,
    Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';

import { AuthService } from '../../security/auth.service';

@Component({
    selector: 'commud-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
    loginForm: UntypedFormGroup;
    submitted = false;

    hidePassword: boolean = true;

    constructor(
        private fb: UntypedFormBuilder,
        private snackBar: MatSnackBar,
        private authService: AuthService,
        private router: Router
    ) {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
        });
    }

    get email() {
        return this.loginForm.get('email');
    }
    get password() {
        return this.loginForm.get('password');
    }

    ngOnInit(): void {
        if (this.authService.isLoggedIn()) {
            this.router.navigateByUrl('/dashboard');
        }
    }

    onSubmit() {
        try {
            this.submitted = true;
            const { email, password } = this.loginForm.value;

            if (this.loginForm.valid) {
                this.authService
                    .login(email, password)
                    .subscribe({
                        next: () => this.router.navigateByUrl('/dashboard'),
                        error: (err: any) => { throw new Error(err.message) }
                    });
            }
        } catch (error: any) {
            this.submitted = false
            this.snackBar.open(error.message ? error.message : error.toString());
        }
    }

    forgotPassword() {
        const { email } = this.loginForm.value;

        if (!email) {
            this.snackBar.open('O preenchimento do e-mail é obrigatório.');
        }
    }
}
