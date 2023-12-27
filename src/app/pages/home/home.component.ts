import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { BannerCursoComponent } from '../../components/banner-curso/banner-curso.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, BannerCursoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
