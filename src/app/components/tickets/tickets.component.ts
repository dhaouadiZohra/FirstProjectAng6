import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../models/ticket';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
  counter: number = 0;
  ticket: Ticket= new Ticket(this.counter,'','',0,'');
 // newTicket = new Ticket();
  listTickets: Ticket[];
  
  constructor() { }

  ngOnInit() {
    this.listTickets =[
      //{'id':1,'title':'Update','doing':10,'assignedTo':'toto','description':'done!' }
    ]
  }
 
  addTicket(){
    this.counter = this.counter+1;
  let newTicket = new Ticket(Number(this.counter)
    ,this.ticket.title,
    this.ticket.doing
    ,this.ticket.assignedTo
    ,this.ticket.description)
    this.listTickets.push(newTicket);
   console.log(this.listTickets);
   console.log(this.ticket) 
    this.ticket = new Ticket(0,'','',0,'');
  }
  onDelete(ticket){
    this.counter --;
    const index = this.listTickets.indexOf(ticket);
    this.listTickets.splice(index,1);
  }

}
