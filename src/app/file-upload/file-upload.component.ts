import { CommonModule } from '@angular/common';
import { Component, OnDestroy, Output } from '@angular/core';
import { NgxFileDropEntry, NgxFileDropModule } from 'ngx-file-drop';
import { NgxFilesizeModule } from 'ngx-filesize';
import { FileService } from '../service/file.service';
import { ModalService } from '../service/modal.service';
import { SessionTimerService } from '../service/session-timer.service';

@Component({
  standalone: true,
  imports: [NgxFileDropModule, NgxFilesizeModule, CommonModule],
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html'
})
export class FileUploadComponent {
  public files: NgxFileDropEntry[] = [];
  public file: any;

  constructor(
    private fileService: FileService,
    private sessionTimer: SessionTimerService,
    private modalService: ModalService
  ){}

  // Method to handle file drops
  public dropped(files: NgxFileDropEntry[]): void {
    //Reset inactivity timer every 5 secs while file is uploading
    let intervalReset = setInterval(this.sessionTimer.onActivity, 5000);
    this.files = files;
    for (const droppedFile of files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {

          // Here you can access the real file
          this.file = file;
          clearInterval(intervalReset);

        });
      }
    }
  }

  // Method to handle file uploads
  public fileOver(event: any): void {
    // Handle file over events (e.g., change styles)
  }

  // Method to handle file drag leave events
  public fileLeave(event: any): void {
    // Handle file leave events (e.g., revert styles)
  }

  reset() {
    this.files = [];
    this.file = null;
  } 
  
  close() {
    this.reset()
    this.modalService.close();
  }

  save(){
    this.fileService.addFile(this.file);
    this.reset()
    this.modalService.close();
  }
}