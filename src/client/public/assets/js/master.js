var app = angular.module("ManaFlux", ['angular-clipboard']);
app.controller("MainCtrl", ['$scope', 'DataAccess', function($scope, DataAccess) {

  // initialize tags
  $('#newItemTags').tagsInput({width:'auto'});

  $scope.newItem = {};
  $scope.saveItem = function() {
    DataAccess.saveItem($scope.newItem).then(function(res) {
      $scope.newItem.saved = true;
    });
  }



  $scope.textToCopy = 'I can copy by clicking!';

  $scope.success = function() {
    console.log('Copied!');
  };

  $scope.fail = function(err) {
    console.error('Error!', err);
  };









  DataAccess.getItems().then(function(res) {
    DataAccess.parseItems(res.data).then(function(items){
      $scope.items = res.data;
    });
  });

  $scope.addToItem = function(toggle, item) {

    console.log('click detected', item);



    var payload = {};

    if (toggle === 'components') {
      payload.parentItemId = item.id;
      payload.componentItemId = item.input;
      DataAccess.addComponent(payload).then(function(res) {
        console.log('added', res);
        DataAccess.getItem(item.id).then(function(res){
          $scope.items[item.id] = res.data;
        });
      });
    }

  }
}]);

app.factory('DataAccess', ['$http', '$q', function($http, $q) {

  var urlBase = '/api';
  var DataAccess = {};
  DataAccess.parseItems = function(items){
    var defered = $q.defer();
    var aryOrganizedItems = [];
    for(var itemIndex in items){
      var item = items[itemIndex];
      aryOrganizedItems[item.id] = item;
    }
    defered.resolve(aryOrganizedItems)
    return defered.promise;
  };
  DataAccess.getItems = function() {
    return $http.get(urlBase + '/items');
  };

  DataAccess.getItem = function(payload) {
    return $http.get(urlBase + '/item/' + payload.id);
  };

  DataAccess.saveItem = function(payload) {
    return $http.put(urlBase + '/item', payload);
  };

  DataAccess.addComponent = function(payload) {
    return $http.put(urlBase + '/item/' + payload.parentItemId + '/component/' + payload.componentItemId);
  };
  return DataAccess;
}]);
