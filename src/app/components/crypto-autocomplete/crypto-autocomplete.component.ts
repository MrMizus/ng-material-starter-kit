import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable, combineLatest, debounceTime } from 'rxjs';
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
  public array: string[] = []
  readonly search: FormGroup = new FormGroup({ crypto: new FormControl() });
  readonly startsWith$: Observable<string> = this.search.valueChanges.pipe(
    map(form => {
      return form.crypto.toUpperCase()
    }),
    debounceTime(1000)
  );

  readonly crypto$: Observable<CryptoModel[]> = combineLatest([
    this._cryptoService.getAll(),
    this.startsWith$,
  ]).pipe(
    map(([crypto, startWith]) => crypto.filter(crypto => crypto.symbol.startsWith(startWith)))
  )
  private _chipSubject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  public chip$: Observable<string[]> = this._chipSubject.asObservable();

  addChip(crypto: string): void {
    this.array.push(crypto)
    this._chipSubject.next(this.array)
  }

  constructor(private _cryptoService: CryptoService) {
  }
}
