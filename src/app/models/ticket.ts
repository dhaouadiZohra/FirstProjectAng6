export class Ticket{
    id: number;
    title: string;
    assignedTo: string;
    doing: number;   
    description: string;
    constructor(id,title,assignedTo,doing,description){
        this.id=id;
        this.title=title;
        this.assignedTo=assignedTo;
        this.doing=doing;
        this.description=description;
  
      }
}