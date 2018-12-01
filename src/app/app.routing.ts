import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { TicketsComponent } from './components/tickets/tickets.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
    {
        path: 'listTickets',
        component: TicketsComponent
    },
    {
        path: 'archive',
        component: ArchiveComponent
    }
    ,
   
    { 
        path: '',   
        redirectTo: '/listTickets', 
        pathMatch: 'full' 
    },   
    {   path: '**', 
        component: PageNotFoundComponent 
    },
    
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);