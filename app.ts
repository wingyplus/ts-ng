/// <reference path="./typings/angularjs/angular.d.ts" />

class JaneController {
    constructor() {
    }

    mamai(): any {
        console.log("ma kub");
    }
}

let app = angular.module("janekub", []);
app.controller("janeController", JaneController);
