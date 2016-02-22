/// <reference path="./typings/angularjs/angular.d.ts" />

let app = angular.module("janekub", []);

class JaneController {
    constructor() {
    }

    mamai(): any {
        console.log("ma kub");
    }
}

app.controller("janeController", JaneController);
