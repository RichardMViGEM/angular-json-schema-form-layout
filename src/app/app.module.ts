import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {
  JsonSchemaFormModule,
  Bootstrap3FrameworkModule,
  // Bootstrap4FrameworkModule,
  FrameworkLibraryService
} from 'angular2-json-schema-form';
import { ChangeInformationComponent } from './change-information/change-information.component';


@NgModule({
  declarations: [
    AppComponent,
    ChangeInformationComponent
  ],
  imports: [
    BrowserModule,
    // Bootstrap4FrameworkModule,
    Bootstrap3FrameworkModule,
    // JsonSchemaFormModule.forRoot(Bootstrap4FrameworkModule),
    JsonSchemaFormModule.forRoot(Bootstrap3FrameworkModule)
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
 }
