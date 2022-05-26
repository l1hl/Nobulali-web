import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdbBootstrapModule } from '../mdb-bootstrap.module';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../material.module';


import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    MaterialModule,
    MdbBootstrapModule,
    MdbFormsModule,
  ],
  exports: [
    LoginComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BackendModule { }
