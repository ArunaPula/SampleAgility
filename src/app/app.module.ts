import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { GridModule } from '@progress/kendo-angular-grid';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
    
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(), GridModule
  ],
  providers: [],schemas: [ NO_ERRORS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
