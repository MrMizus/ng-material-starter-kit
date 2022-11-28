import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { CryptoModel } from '../../models/crypto.model';
import { CryptoService } from '../../services/crypto.service';

@Component({
  selector: 'app-crypto-autocomplete',
  templateUrl: './crypto-autocomplete.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CryptoAutocompleteComponent {
  readonly search: FormGroup = new FormGroup({ crypto: new FormControl() });
  readonly startsWith$: Observable<string> = this.search.valueChanges.pipe(
    map(form => {
      console.log(form.symbol)
      return form.symbol
    }),
  );

  readonly crypto$: Observable<CryptoModel[]> = combineLatest([
    this._cryptoService.getAll(),
    this.startsWith$,
  ]).pipe(
    map(([crypto, startWith]) => {
      return crypto.filter(crypto => crypto.symbol.startsWith(startWith))
    })
  )

  constructor(private _cryptoService: CryptoService) {
  }

}
