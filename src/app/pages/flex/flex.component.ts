import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { removeColor, setColor } from 'src/app/state/color.actions';
import { ColorState } from 'src/app/state/color.state';
import { menuItems } from 'src/app/utils/data';
@Component({
  selector: 'app-flex',
  templateUrl: './flex.component.html',
  styleUrls: ['./flex.component.scss'],
})
export class FlexComponent implements OnInit {
  menuItems: any = [];
  sudoForm: FormGroup;
  color$: Observable<{ color: string }>;
  constructor(
    private store: Store<{ color: ColorState }>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.menuItems = menuItems;
    this.color$ = this.store.select('color');
    this.sudoForm = new FormGroup({
      firstText: new FormControl('', Validators.required),
      secondText: new FormControl('', Validators.required),
      thirdText: new FormControl('', Validators.required),
      FourthText: new FormControl('', Validators.required),
      FifthText: new FormControl('', Validators.required),
    });
  }
  onSubmit() {
    console.log(this.sudoForm);
    this.router.navigate(['grid']);
  }
  handleReset() {
    this.sudoForm.reset();
    this.store.dispatch(removeColor());
  }
  changeColor(color: string) {
    this.store.dispatch(setColor({ value: color }));
  }
}
