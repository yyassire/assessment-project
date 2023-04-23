import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { menuItem } from 'src/app/interface/color';
import { removeColor, setColor } from 'src/app/state/color.actions';
import { getColor } from 'src/app/state/color.selectors';
import { ColorState } from 'src/app/state/color.state';
import { menuItems } from 'src/app/utils/data';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  menuItems: menuItem[] = [];
  sudoForm: FormGroup;
  color$: Observable<string>;
  constructor(
    private store: Store<{ color: ColorState }>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.menuItems = menuItems;
    this.color$ = this.store.select(getColor);
    this.sudoForm = new FormGroup({
      firstText: new FormControl('', Validators.required),
      secondText: new FormControl('', Validators.required),
      thirdText: new FormControl('', Validators.required),
      FourthText: new FormControl('', Validators.required),
      FifthText: new FormControl('', Validators.required),
    });
  }
  onSubmit() {
    if (!this.sudoForm.valid) {
      return alert('data not valid');
    }
    this.router.navigate(['']);
  }

  // reset the color and form
  handleReset() {
    this.sudoForm.reset();
    this.store.dispatch(removeColor());
  }

  // change the color
  changeColor(color: string) {
    this.store.dispatch(setColor({ value: color }));
  }
}
