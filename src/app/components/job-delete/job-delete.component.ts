import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { JobPostModel } from '../../models/job-post.model';
import { JobPostsService } from '../../services/job-posts.service';

@Component({
  selector: 'app-job-delete',
  templateUrl: './job-delete.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobDeleteComponent {
  readonly jobs$: Observable<JobPostModel[]> = this._jobPostsService.getAll();

  constructor(private _jobPostsService: JobPostsService) {
  }

  remove(id: string): void {
    this._jobPostsService.delete(id).subscribe();
  }
}
