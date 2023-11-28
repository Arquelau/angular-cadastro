import { NgModule } from '@angular/core'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { FormsModule } from '@angular/forms'
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core'
import { MatSelectModule } from '@angular/material/select'

const MaterialComponents = [
  MatInputModule,
  MatFormFieldModule,
  FormsModule,
  MatCardModule,
  MatIconModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule
]

@NgModule({
  imports: [
    MaterialComponents
  ],
  exports: [
    MaterialComponents
  ]
})
export class MaterialModule { }
