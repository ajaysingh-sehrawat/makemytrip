import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { MatButtonModule, 
          MatToolbarModule,         
          MatInputModule ,
          MatDialogModule
            } from '@angular/material';
            import {MatFormFieldModule} from '@angular/material/form-field';
          import {MatMenuModule} from '@angular/material/menu'; 
          import {MatDatepickerModule, MatNativeDateModule } from '@angular/material'; 
          import {MatSelectModule} from '@angular/material/select'; 
          import {MatRadioModule} from '@angular/material/radio'; 
          import {MatTooltipModule} from '@angular/material/tooltip'; 
          
          import {MatCheckboxModule} from '@angular/material/checkbox';
          import {MatSnackBarModule} from '@angular/material/snack-bar'; 
          import {MatIconModule} from '@angular/material/icon';
          import {MatCardModule} from '@angular/material/card';
          
          
          const material = [
            MatFormFieldModule,
            MatButtonModule,
            MatToolbarModule,
            MatMenuModule,  
            MatInputModule,
            MatDatepickerModule,
            MatSelectModule,
            MatRadioModule,
            MatTooltipModule,
            MatCheckboxModule,
            MatNativeDateModule,
            MatDialogModule,
            MatSnackBarModule,
            MatIconModule,
            MatCardModule
          ];
          
          @NgModule({
            declarations: [],
            imports: [
              //CommonModule,
              material
            ],
            exports :
            [material],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
          })
          export class MaterialModule { }
          