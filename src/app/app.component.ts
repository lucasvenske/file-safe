import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SessionTimerService } from './service/session-timer.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  title = 'file-safe';

  constructor(private sessionTimerService: SessionTimerService) {}

  @HostListener('document:click', ['$event'])
  onDocumentClick() {
    this.sessionTimerService.onActivity();
  }
}
