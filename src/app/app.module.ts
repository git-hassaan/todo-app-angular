import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Add this import

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';

@NgModule({
    declarations: [
        AppComponent,
        TodoComponent
    ],
    imports: [
        BrowserModule,
        FormsModule // Add this to imports array
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }