import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ticket } from '../../models/ticket';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  @Input() ticket: Ticket;
  @Input() counter: number;
  showDetail: boolean= false;
  @Output() delete = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  showDetails(){
    this.showDetail = true;
  }
  deleteTicket(ticket){
    this.delete.emit(ticket);
  }

}
