import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {delay, Observable} from 'rxjs';
import { HolidaysModel } from '../../models/holidays.model';
import { HolidaysLoadingService } from '../../services/holidays-loading.service';

@Component({
  selector: 'app-holidays-loading',
  templateUrl: './holidays-loading.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HolidaysLoadingComponent {
  readonly list$: Observable<HolidaysModel[]> = this._holidaysLoadingService.getAll().pipe(
    delay(2000)
  );

  constructor(private _holidaysLoadingService: HolidaysLoadingService) {
  }
}
