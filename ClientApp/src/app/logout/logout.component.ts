import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';

@Component({ templateUrl: 'logout.component.html' })
export class LogoutComponent implements OnInit {    

    constructor(       
        private router: Router,
        private authenticationService: AuthenticationService
    ) { 
        
    }

    ngOnInit() {        
        
    }

    onLogout(event: Event) {
        event.preventDefault();        
        this.authenticationService.logout();
        this.router.navigate(['login']);
    }
}
