/* eslint-disable @nx/enforce-module-boundaries */
import { Component, type OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { GalleryService } from 'libs/shared/services/gallery.service'
import { CommonModule } from '@angular/common';


@Component({
  selector: 'lib-gallery-admin',
  standalone: true,
  templateUrl: './gallery-admin.component.html',
  styleUrl: './gallery-admin.component.scss',
  providers: [GalleryService],
  imports: [HttpClientModule, CommonModule]
})
export class GalleryAdminComponent implements OnInit{
  countries!: any;

  constructor(private galleryService: GalleryService){}

  ngOnInit(){
    this.getAllCountriesImages()
  }

  getAllCountriesImages(){
    this.galleryService.getCountries().subscribe((response:any) => {
      console.log(response);
      this.countries = response;
      
    });
  }

  // getPhotoUrl(){
  //   this.gallerService
  // }



}
