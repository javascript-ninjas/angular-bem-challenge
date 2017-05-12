import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoComponent } from './components/todo/todo.component';
import { WithoutbemComponent } from './components/withoutbem/withoutbem.component';
import { WithbemComponent } from './components/withbem/withbem.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/default'
    },
    {
        path: 'default',
        component: TodoComponent
    },
    {
        path: 'withoutbem',
        component: WithoutbemComponent
    },
    {
        path: 'withbem',
        component: WithbemComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
