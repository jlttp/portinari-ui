import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PoModule } from '@po-ui/ng-components';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputFieldComponent } from './shared/input-field/input-field.component';
import { MenuComponent } from './shared/menu/menu.component';
import { LoggedToolbarComponent } from './shared/logged-toolbar/logged-toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    InputFieldComponent,
    MenuComponent,
    LoggedToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
