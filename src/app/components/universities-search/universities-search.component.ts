import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
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
  private _countrySubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public country$: Observable<string> = this._countrySubject.asObservable();
  readonly list$: Observable<UniversitiesModel[]> = this.country$.pipe(switchMap(data => this._universitiesSearchService.getAll(data)));

  constructor(private _universitiesSearchService: UniversitiesSearchService) {
  }

  onSearchSubmitted(search: FormGroup): void {
    this._countrySubject.next(search.get('country')?.value)
  }
}
