import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserClientRoutingModule } from './user-client-routing.module';
import { HomeComponent } from './home/home.component';
import { AllPropertyComponent } from './all-property/all-property.component';
import { AllRendezVousComponent } from './all-rendez-vous/all-rendez-vous.component';
import { AddRDVComponent } from './add-rdv/add-rdv.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    HomeComponent,
    AllPropertyComponent,
    AllRendezVousComponent,
    AddRDVComponent
  ],
  imports: [
    CommonModule,
    UserClientRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatDatepickerModule,
     MatNativeDateModule,
     MatTableModule,
     MatButtonModule,
     MatCardModule,
    MatIconModule
  ]
})
export class UserClientModule { }
