import { Injectable } from "@angular/core";
import { AuditService } from "./audit.service";

@Injectable()
export class UsersService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(private auditService: AuditService){}

  addUser(name: string, status: string){
    if(status === "active"){
      this.activeUsers.push(name);
    }else{
      this.inactiveUsers.push(name);
    }
  }

  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.auditService.addDeactivateCall();
  }

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.auditService.addActivateCall();
  }
}
