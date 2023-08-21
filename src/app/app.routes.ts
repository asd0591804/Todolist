import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CompletelistComponent } from './completelist/completelist.component';
import { DeletelistComponent } from './deletelist/deletelist.component';

export const routes: Routes = [
  {
    path:'list',
    component:ListComponent
  },
  {
    path:'completelist',
    component:CompletelistComponent
  },
  {
    path:'deletelist',
    component:DeletelistComponent
  }

];
