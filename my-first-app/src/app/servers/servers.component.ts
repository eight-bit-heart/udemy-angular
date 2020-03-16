import { Component } from '@angular/core';

@Component({
    selector: 'app-servers',
    templateUrl: './servers.component.html'
})
export class ServersComponent {
    allowNewServer = false;
    serverCreationStatus = 'No server was created!';
    serverName = '';
    serverCreated = false;
    servers = ['Testserver', 'Testserver2'];

    constructor() {
        setTimeout(() => { this.allowNewServer = true; }, 2000);
    }

    ngOnInit(){

    }

    onCreateServer() {
        this.serverCreationStatus = 'Server was created.';
        this.serverCreated = true;
        this.servers.push(this.serverName);
    }

    onUpdateServerName(event: Event){
        this.serverName = (<HTMLInputElement>event.target).value;
    }
}