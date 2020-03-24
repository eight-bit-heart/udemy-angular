export class AuditService {
  activateCalls: number = 0;
  deactivateCalls: number = 0;

  addActivateCall(){
    this.activateCalls++;
    console.log(this.activateCalls + " activate calls made");
  }

  addDeactivateCall(){
    this.deactivateCalls++;
    console.log(this.deactivateCalls + " deactivate calls made");
  }
}
