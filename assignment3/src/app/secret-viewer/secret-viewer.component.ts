import { Component } from '@angular/core';

@Component({
    selector: 'app-secret-viewer',
    templateUrl: './secret-viewer.component.html',
    styleUrls: [ './secret-viewer.component.css' ]
})
export class SecretViewerComponent {
    secretText = "ALL the tea in China!";
    secretVisible = false;
    clickLog = [];

    constructor() {
    }

    ngOnInit(){

    }

    toggleSecretVisibility() {
        this.secretVisible = !this.secretVisible;
        this.clickLog.push(new Date().toString());
        console.log("clickLog: " + this.clickLog);
    }

    getBackgroundColor(i: number){
        return i > 3 ? 'blue' : 'white';
    }

}