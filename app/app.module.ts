import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { KegListComponent } from './keg-list.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent,
                  KegListComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }
