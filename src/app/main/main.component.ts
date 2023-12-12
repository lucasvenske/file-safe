import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FileUploadComponent } from '../file-upload/file-upload.component';
import { ModalComponent } from '../modal/modal.component';
import { ModalService } from '../service/modal.service';
import { FileService } from '../service/file.service';
import { NgxFilesizeModule } from 'ngx-filesize';
import { CommonModule } from '@angular/common';
import { saveAs } from 'file-saver';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderComponent, FileUploadComponent, ModalComponent, NgxFilesizeModule, CommonModule, FormsModule],
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit, OnDestroy {

  files: File[] = [];
  filesSubscription: Subscription = new Subscription;

  constructor(
    private modalService: ModalService,
    private fileService: FileService
  ){}

  ngOnInit(): void {
    this.filesSubscription = this.fileService.files$.subscribe((files) => {
      this.files = files;
    });
  }

  addFile(){
    this.modalService.open('file-upload');
  }

  download(file: File){
    saveAs(file, file.name);
  }

  removeFile(indexFile: number){
    this.fileService.removeFile(indexFile);
  }

  ngOnDestroy(): void {
    this.files = [];
    this.fileService.reset();
    this.filesSubscription.unsubscribe();
  }
}
