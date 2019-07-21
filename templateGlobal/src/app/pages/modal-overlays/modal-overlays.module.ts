import { NgModule } from '@angular/core';

// modules
import { ThemeModule } from '../../@theme/theme.module';
import { ModalOverlaysRoutingModule } from './modal-overlays-routing.module';

// components
import { ModalOverlaysComponent } from './modal-overlays.component';
import { NbDialogModule, NbWindowModule } from '@nebular/theme';
import { WindowComponent } from './window/window.component';
import { WindowFormComponent } from './window/window-form/window-form.component';
import { ToastrComponent } from './toastr/toastr.component';

const COMPONENTS = [
  ModalOverlaysComponent,
  ToastrComponent,
  WindowComponent,
  WindowFormComponent,
];

const ENTRY_COMPONENTS = [
  WindowFormComponent,
];

const MODULES = [
  ThemeModule,
  ModalOverlaysRoutingModule,
  NbWindowModule.forChild(),
];

const SERVICES = [
];

@NgModule({
  imports: [
    ...MODULES,
  ],
  declarations: [
    ...COMPONENTS,
  ],
  providers: [
    ...SERVICES,
  ],
  entryComponents: [
    ...ENTRY_COMPONENTS,
  ],
})
export class ModalOverlaysModule {
}
