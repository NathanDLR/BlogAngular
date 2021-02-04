import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StyleSelectorComponent } from './components/style-selector/style-selector.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { BlogInputFormComponent } from './components/blog-input-form/blog-input-form.component';
import { InputListComponent } from './components/input-list/input-list.component';
import { ParentComponent } from './components/parent/parent.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './components/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    StyleSelectorComponent,
    LoginFormComponent,
    BlogInputFormComponent,
    InputListComponent,
    ParentComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
