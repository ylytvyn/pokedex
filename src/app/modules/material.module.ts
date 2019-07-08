import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatChipsModule,
  MatListModule,
  MatSnackBarModule,
  MatDialogModule,
  MatFormFieldModule,
  MatSelectModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatChipsModule,
    MatListModule,
    MatSnackBarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatChipsModule,
    MatListModule,
    MatSnackBarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule
  ]
})
export class MaterialModule {}
