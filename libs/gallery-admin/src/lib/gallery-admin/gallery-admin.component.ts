import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { GalleryService } from 'libs/shared/services/gallery.service'


@Component({
  selector: 'lib-gallery-admin',
  standalone: true,
  templateUrl: './gallery-admin.component.html',
  styleUrl: './gallery-admin.component.scss',
  providers: [GalleryService],
  imports: [HttpClientModule]
})
export class GalleryAdminComponent {
  countries!: any;

  constructor(private galleryService: GalleryService){}

  getAllCountriesImages(){
    this.galleryService.getCountries().subscribe((response:any) => {
      console.log(response);
      this.countries = response;
    });
  }

}
