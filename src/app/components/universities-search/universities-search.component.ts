import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {BehaviorSubject, debounceTime, Observable} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import { UniversitiesModel } from '../../models/universities.model';
import { UniversitiesSearchService } from '../../services/universities-search.service';

@Component({
  selector: 'app-universities-search',
  templateUrl: './universities-search.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UniversitiesSearchComponent {
  readonly search: FormGroup = new FormGroup({ country: new FormControl() });
  readonly startsWith$: Observable<string> = this.search.valueChanges.pipe(
    map(form =>  form.country),
    debounceTime(1000),
  );


  readonly list$: Observable<UniversitiesModel[]> = this.startsWith$.pipe(
    switchMap(data => this._universitiesSearchService.getAll(data)));

  constructor(private _universitiesSearchService: UniversitiesSearchService) {
  }

}
