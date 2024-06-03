import { Route } from '@angular/router';
import { AppComponent } from './app.component';
import { GalleryAdminComponent } from '@gallery-workspace/gallery-admin';

export const appRoutes: Route[] = [
  {
    path: '',
    component: AppComponent
  },
  
  {
    path: 'view-gallery',
    component: GalleryAdminComponent
  }
  

];
