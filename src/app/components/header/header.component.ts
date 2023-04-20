import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ColorState } from 'src/app/state/color.state';
import { navigationLinks } from 'src/app/utils/data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  navigationLinks: string[] = [];
  color$: Observable<{ color: string }>;
  constructor(private store: Store<{ color: ColorState }>) {}

  ngOnInit(): void {
    this.navigationLinks = navigationLinks;
    this.color$ = this.store.select('color');
  }
}
