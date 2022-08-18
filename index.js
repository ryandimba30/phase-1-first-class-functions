const { spy } = require("chai");
const { returns } = require("chai-spies");

function receivesAFunction(callback) {
    return callback();
}
receivesAFunction(function (){return spy });


function returnsANamedFunction (fn) {

    var fn;

    return function returnsANamedFunction () {

        return fn.name;
    }
}

function returnsAnAnonymousFunction() {

    var fn;

    return function  () {
        return fn;
    }
}
