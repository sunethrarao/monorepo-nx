/* eslint-disable @nx/enforce-module-boundaries */
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { BrowserModule } from '@angular/platform-browser';
import { GalleryAdminComponent } from './gallery-admin.component';
// import { SharedModule } from '@gallery-workspace/libs/shared/shared.module';
import { GalleryService } from 'libs/shared/services/gallery.service'
import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  declarations: [GalleryAdminComponent],
  imports: [
    CommonModule,
    // BrowserModule, 
    GalleryService,
    HttpClientModule
  ],
  providers: [GalleryService],
  exports: [GalleryAdminComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GalleryAdminModule { }
