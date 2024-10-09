import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Titles } from '../../constantes/titles';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  
  
}
