var app = angular.module('thetaApp', []);

app.controller('mainController', ['$scope', 'thetaService', function($scope, thetaService){
    $scope.school = thetaService.school;
    $scope.location = thetaService.location;
    $scope.cohort = thetaService.cohort;
    $scope.students = thetaService.students;
    $scope.instructors = thetaService.instructors;
    $scope.mascot = thetaService.mascot;
    $scope.motto = thetaService.motto;
}]);

app.factory('thetaService', function(){

    return {
        school: 'Prime Digital Academy',
        location: 'Bloomington, Minnesota',
        cohort: 'Theta Cohort',
        students: ["Altamir", "Anthony", "Brooks", "Charlie", "Chris", "Amber", "Gwen", "Kenzie", "Kyra", "Mark", "Joe", "Scott", "Matthew", "Natalie", "Eric", "Jeremy", "Nathan", "Robby", "Zach", "Sam", "Liz", "Paul"],
        instructors: ['Joel', 'Kristy'],
        mascot: "Wolverine",
        motto: "Transcendence Through Suffering"
    }
});