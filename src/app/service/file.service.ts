import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private filesSubject = new BehaviorSubject<File[]>([]);
  files$ = this.filesSubject.asObservable();

  addFile(file: File) {
    const currentFiles = this.filesSubject.value;
    this.filesSubject.next([...currentFiles, file]);
  }

  removeFile(index: number): void {
    const currentFiles = this.filesSubject.value;
    if (index !== null) {
      const updatedFiles = [...currentFiles.slice(0, index), ...currentFiles.slice(index + 1)];
      this.filesSubject.next(updatedFiles);
    } else {
      console.error('Invalid index for file removal');
    }
  }

  reset(){
    this.filesSubject.next([]);
  }
}
