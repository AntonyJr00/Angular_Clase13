import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MipipePipe } from './mipipe.pipe';
import { PipesComponent } from './pipes/pipes.component';

@NgModule({
  declarations: [AppComponent, MipipePipe, PipesComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
