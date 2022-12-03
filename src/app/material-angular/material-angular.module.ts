import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';

import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import {
    MatLegacyFormFieldModule as MatFormFieldModule,
    MAT_LEGACY_FORM_FIELD_DEFAULT_OPTIONS as MAT_FORM_FIELD_DEFAULT_OPTIONS,
} from '@angular/material/legacy-form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import {
    MatLegacyPaginatorIntl as MatPaginatorIntl,
    MatLegacyPaginatorModule as MatPaginatorModule,
    MAT_LEGACY_PAGINATOR_DEFAULT_OPTIONS as MAT_PAGINATOR_DEFAULT_OPTIONS,
} from '@angular/material/legacy-paginator';
import { MatLegacyRadioModule as MatRadioModule } from '@angular/material/legacy-radio';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatLegacySlideToggleModule as MatSlideToggleModule } from '@angular/material/legacy-slide-toggle';
import {
    MatLegacySnackBarModule as MatSnackBarModule,
    MAT_LEGACY_SNACK_BAR_DEFAULT_OPTIONS as MAT_SNACK_BAR_DEFAULT_OPTIONS,
} from '@angular/material/legacy-snack-bar';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';

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
