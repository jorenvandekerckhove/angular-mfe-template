import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  imports: [MatSidenavModule, MatButtonModule],
  exports: [MatSidenavModule, MatButtonModule],
})
export class MaterialModule {}
