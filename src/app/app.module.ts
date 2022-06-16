import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LeftComponentComponent } from './components/left-component/left-component.component';
import { RightComponentComponent } from './components/right-component/right-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftComponentComponent,
    RightComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
