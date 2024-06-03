// shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import any shared components, directives, or pipes
import {GalleryService} from './libs/shared/services/gallery.service.ts'
@NgModule({
  imports: [CommonModule, GalleryService],
  declarations: [],
  exports: [GalleryService]
})
export class SharedModule {}