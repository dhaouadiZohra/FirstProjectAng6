import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent, TicketsComponent,TicketComponent, ArchiveComponent, PageNotFoundComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
