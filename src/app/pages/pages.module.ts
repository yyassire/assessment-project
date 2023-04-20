import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexComponent } from './flex/flex.component';
import { GridComponent } from './grid/grid.component';
import { LayoutComponent } from './layout/layout.component';
import { ComponentsModule } from '../components/components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PagesRoutingModule } from './pages-routing.module';
@NgModule({
  declarations: [FlexComponent, GridComponent, LayoutComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    ReactiveFormsModule,
    PagesRoutingModule,
  ],
  exports: [LayoutComponent],
})
export class PagesModule {}
