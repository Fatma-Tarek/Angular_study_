import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';



// will hold all my routes in my appplication
// not to add / before routes ex: /users
const appRoutes: Routes= [
    {path:'', component: HomeComponent },
    {path:'users', component: UsersComponent, 
          children:[{path: ':id/:name', component: UserComponent}] 
    },
    {path:'servers',canActivateChild:[AuthGuard], component: ServersComponent,
          children:[ {path: ':id', component: ServerComponent},
                     {path:':id/edit', component: EditServerComponent,  canDeactivate: [CanDeactivateGuard]}]
    },
    //page not found so use redirect and match all path
    //{path:'not-found', component:PageNotFoundComponent},
    {path:'not-found', component:ErrorPageComponent, data: {message: 'Page Not Found'}},
    {path:'**', redirectTo:'/not-found', pathMatch: 'full' }
  ];

  
@NgModule({
    imports:[  
       RouterModule.forRoot(appRoutes)
    ],
    exports:[RouterModule]

})
export class AppRountingModule {

}
