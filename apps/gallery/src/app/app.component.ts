import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 

import { NxWelcomeComponent } from './nx-welcome.component';


@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, HttpClientModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'Gallery';
}
