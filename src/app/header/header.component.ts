import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(
    private authService: AuthService
  ){}

  singout(){
    this.authService.logout()
  }
}
