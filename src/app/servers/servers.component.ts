import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'TestServer';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created! The server name is' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }
}
