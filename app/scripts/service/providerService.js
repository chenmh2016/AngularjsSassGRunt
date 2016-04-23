
'use strict';
var app = angular.module('angularSassGruntApp');

app.provider('foo', function() {
    return {
        $get: function() {
            var thisIsPrivate = "Private";
            function getPrivate() {
                return thisIsPrivate;
            }
            return {
                variable: "I am from provider.",
                getPrivate: getPrivate
            };
        }
    };
});