import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from '@angular/material/input';
import { MatFormField } from '@angular/material/form-field';
import { MatCard } from '@angular/material/card';


@NgModule({
    exports: [
        MatToolbarModule,
        MatButtonModule,
        MatInputModule,
        // MatFormField,
        // MatCard,

    ]
})
export class MaterialModule{}
