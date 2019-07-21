import { NgModule } from '@angular/core';

import { ThemeModule } from '../../../@theme/theme.module';
import { HeroButtonComponent } from './hero-buttons/hero-buttons.component';
import { ShapeButtonsComponent } from './shape-buttons/shape-buttons.component';
import { SizeButtonsComponent } from './size-buttons/size-buttons.component';
import { ButtonsComponent } from './buttons.component';
import { DropdownButtonsComponent } from './dropdown-buttons/dropdown-button.component';
import { ButtonGroupsComponent } from './button-groups/button-groups.component';

const components = [
  ButtonsComponent,
  HeroButtonComponent,
  ShapeButtonsComponent,
  SizeButtonsComponent,
  DropdownButtonsComponent,
  ButtonGroupsComponent,
];

@NgModule({
  imports: [
    ThemeModule,
  ],
  exports: [
    ...components,
  ],
  declarations: [
    ...components,
  ],
  providers: [],
})
export class ButtonsModule { }
