import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { HighlightDirective } from './highlight/highlight.directive';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { JwtInterceptor, ErrorInterceptor, fakeBackendProvider } from './auth';

import { AuthGuard } from './auth';
import { Role } from './models/role';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,        
    },
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
    },
    {
        path: 'login',
        component: LoginComponent
    },
    { 
      path: 'counter', 
    component: CounterComponent,
    canActivate: [AuthGuard] 
  },
      { path: 'fetch-data', component: FetchDataComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);