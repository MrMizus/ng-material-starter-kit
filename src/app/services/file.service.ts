import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FileModel } from '../models/file.model';

@Injectable()
export class FileService {
  constructor(private _httpClient: HttpClient) {
  }

  upload(file: File): Observable<FileModel> {
    const formData = new FormData()
    formData.append('filename', file)

    return this._httpClient.post<FileModel>('https://v2.convertapi.com/upload', formData);
  }

  create(fileUrl: string): Observable<void> {
    return this._httpClient.post<void>('https://636ce2d8ab4814f2b2712854.mockapi.io/files', {url: fileUrl});
  }
}
