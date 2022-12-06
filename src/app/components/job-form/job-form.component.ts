import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable, tap} from 'rxjs';
import {JobTagsModel} from '../../models/job-tags.model';
import {JobTagsService} from '../../services/job-tags.service';
import {JobPostsService} from '../../services/job-posts.service';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobFormComponent {
  readonly tags$: Observable<JobTagsModel[]> = this._jobTagsService.getAll().pipe(
    tap(data => this.setControls(data))
  )
  readonly jobTagsIdForm: FormGroup = new FormGroup({})
  readonly jobForm: FormGroup = new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
    jobTagsIdForm: this.jobTagsIdForm
  });


  constructor(private _jobTagsService: JobTagsService, private _jobPostsService: JobPostsService) {
  }

  setControls(jobTagIds: JobTagsModel[]): void {
    jobTagIds.forEach(
      tag => this.jobTagsIdForm.addControl(
        tag.id, new FormControl(false)
      )
    )
  }


  onJobFormSubmitted(jobForm: FormGroup): void {
    console.log(this.jobTagsIdForm)
    this._jobPostsService.create({
      title: jobForm.get("title")?.value,
      description: jobForm.get("description")?.value,
      jobTagIds: Object.keys(this.jobTagsIdForm.value).filter((key) => {
        return this.jobTagsIdForm.value[key] === true
      }).map(tag => +tag)
    }).subscribe();
  }
}
