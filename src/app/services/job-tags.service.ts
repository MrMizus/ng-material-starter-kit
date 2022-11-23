import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobTagsModel } from '../models/job-tags.model';

@Injectable()
export class JobTagsService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<JobTagsModel[]> {
    return this._httpClient.get<JobTagsModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/job-tags');
  }
}
