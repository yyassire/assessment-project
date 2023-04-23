import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlexComponent } from './pages/flex/flex.component';
import { GridComponent } from './pages/grid/grid.component';

const routes: Routes = [
  {
    path: '',
    component: FlexComponent,
    data: {
      title: 'flex',
    },
  },
  {
    path: 'grid',
    component: GridComponent,
    data: {
      title: 'grid',
    },
  },
  { path: '**', redirectTo: '' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
