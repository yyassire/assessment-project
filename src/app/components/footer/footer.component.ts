import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ColorState } from 'src/app/state/color.state';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  color$: Observable<{ color: string }>;
  constructor(private store: Store<{ color: ColorState }>) {}

  ngOnInit(): void {
    this.color$ = this.store.select('color');
  }
}
