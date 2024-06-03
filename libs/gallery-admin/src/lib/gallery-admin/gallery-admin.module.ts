/* eslint-disable @nx/enforce-module-boundaries */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryAdminComponent } from './gallery-admin.component';
import { SharedModule } from '../../../../shared/src/lib/shared.module';

@NgModule({
  declarations: [GalleryAdminComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [GalleryAdminComponent]
})
export class GalleryAdminModule { }
