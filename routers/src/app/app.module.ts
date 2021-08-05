import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServersService } from 'src/app/servers/servers.service'
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// will hold all my routes in my appplication
// not to add / before routes ex: /users
const appRoutes: Routes= [
  {path:'', component: HomeComponent },
  {path:'users', component: UsersComponent, 
        children:[{path: ':id/:name', component: UserComponent}] 
  },
  {path:'servers', component: ServersComponent,
        children:[ {path: ':id', component: ServerComponent},
        {path:':id/edit', component: EditServerComponent}]
  },
  //page not found so use redirect and match all path
  {path:'not-found', component:PageNotFoundComponent},
  {path:'**', redirectTo:'/not-found', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    HomeComponent,
    ServersComponent,
    ServerComponent,
    EditServerComponent,
    PageNotFoundComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
