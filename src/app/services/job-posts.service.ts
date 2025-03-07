import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobPostModel } from '../models/job-post.model';

@Injectable()
export class JobPostsService {
  constructor(private _httpClient: HttpClient) {
  }

  create(job: Omit<JobPostModel, 'id'>): Observable<void> {
    return this._httpClient.post<void>('https://636ce2d8ab4814f2b2712854.mockapi.io/job-posts', job);
  }

  getAll(): Observable<JobPostModel[]> {
    return this._httpClient.get<JobPostModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/job-posts');
  }

  delete(id: string): Observable<JobPostModel> {
    return this._httpClient.delete<JobPostModel>(`https://636ce2d8ab4814f2b2712854.mockapi.io/job-posts/${id}`);
  }
}
