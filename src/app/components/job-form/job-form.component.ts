import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
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
  public array: number[]  = [];
  readonly tags$: Observable<JobTagsModel[]> = this._jobTagsService.getAll();
  readonly jobForm: FormGroup = new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
    tags: new FormControl()
  });

  constructor(private _jobTagsService: JobTagsService, private _jobPostsService: JobPostsService) {
  }

  onChange({event}: { event: any }) {
    if (event.checked){
      this.array.push(parseInt(event.source.value))
    } else {
      const i = this.array.findIndex(x => x === event.source.value);
      this.array.splice(i, 1)
    }
  }


  onJobFormSubmitted(jobForm: FormGroup): void {
    this._jobPostsService.create({
      title: jobForm.get("title")?.value,
      description: jobForm.get("description")?.value,
      jobTagIds: this.array
    }).subscribe();
  }
}
