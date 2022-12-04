import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import {
    MatFormFieldModule,
    MAT_FORM_FIELD_DEFAULT_OPTIONS,
} from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import {
    MatPaginatorIntl,
    MatPaginatorModule,
    MAT_PAGINATOR_DEFAULT_OPTIONS,
} from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {
    MatSnackBarModule,
    MAT_SNACK_BAR_DEFAULT_OPTIONS,
} from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { CommudCustomPaginatorIntlComponent } from './components/commud-custom-paginator-intl/commud-custom-paginator-intl.component';

const materialAngularModules = [
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatRadioModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule,
]

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatNativeDateModule,
        materialAngularModules
    ],
    exports: materialAngularModules,
    providers: [
        {
            provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
            useValue: { appearance: 'fill' },
        },
        { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 2500 } },
        {
            provide: MAT_PAGINATOR_DEFAULT_OPTIONS,
            useValue: {
                pageSize: 10,
                pageSizeOptions: [10, 20, 50],
                showFirstLastButtons: true,
            },
        },
        { provide: MatPaginatorIntl, useClass: CommudCustomPaginatorIntlComponent },
        { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },

        MatDatepickerModule,
        MatNativeDateModule,
    ],
})
export class MaterialAngularModule { }
