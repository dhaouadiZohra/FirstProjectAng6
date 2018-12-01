import { Component, OnInit } from '@angular/core';
import { ArchiveService } from '../../services/archive.service';
import { Ticket } from '../../models/ticket';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css'],
  providers: [ArchiveService]
})
export class ArchiveComponent implements OnInit {
  listArchives: Ticket[];
  constructor(private archive: ArchiveService) { }

  ngOnInit() {
    this.archive.getTickets().subscribe((data)=>{
      console.log(data);
      this.listArchives = data;
    })
  }

}
