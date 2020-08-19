import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminAddTestComponent } from './admin/admin-add-test/admin-add-test.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AdminAddTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
