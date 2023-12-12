import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SessionTimerService {

  private inactivityTimeout = 5 * 60 * 1000; // 5 minutes in milliseconds
  private activityTimeoutId: any;

  constructor(private authService: AuthService) {}

  resetTimer() {
    clearTimeout(this.activityTimeoutId);
    this.activityTimeoutId = setTimeout(() => this.authService.logout(), this.inactivityTimeout);
  }

  onActivity() {
    this.resetTimer();
  }
}
