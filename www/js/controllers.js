angular.module('starter.controllers', [])


// A simple controller that fetches a list of data from a service
.controller('ContactsCtrl', function($scope, ContactsService) {
  $scope.contacts = ContactsService.all();
})


// A simple controller that shows a tapped item's data
.controller('ContactDetailCtrl', function($scope, $stateParams, ContactsService) {

  $scope.contact = ContactsService.get($stateParams.Id);
})

.controller('ContactInsertCtrl', function($scope, $stateParams, ContactsService) {
  console.log($stateParams);
  $scope.contact = ContactsService.add($stateParams);
});
