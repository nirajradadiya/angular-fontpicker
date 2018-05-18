app.controller('accountCtrl', function ($scope, $rootScope, $routeParams, $location, $http, Data) {
        
  $scope.url = 'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBBro2AR7dxYC6vD0JCkN7QlkL7dwX0mBQ';
  $http.get($scope.url).
  success(function(data, status) {
    $scope.fonts = data['items'];
    //console.log(data['items']);
  })

  $scope.getFontType = function(fonttype){
    if(fonttype == 'google')
    {
      $scope.url = 'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBBro2AR7dxYC6vD0JCkN7QlkL7dwX0mBQ';
      $http.get($scope.url).
      success(function(data, status) {
        $scope.fonts = data['items'];
      })
    }
    else{
      console.log('no');
      $scope.fonts = [
        {
          "family":"Georgia",
          "category":"serif"
        },
        {
          "family":"Arial",
          "category":"sans-serif"
        },
        {
          "family":"Verdana",
          "category":"sans-serif"
        },
        {
          "family":"Courier",
          "category":"monospace"
        },
        {
          "family":"Papyrus",
          "category":"fantasy"
        },
        {
          "family":"Impact",
          "category":"fantasy"
        },
        {
          "family":"Comic Sans MS",
          "category":"cursive"
        },
        {
          "family":"Charcoal",
          "category":"sans-serif"
        },
        {
          "family":"Geneva",
          "category":"sans-serif"
        },
        {
          "family":"Courier New",
          "category":"Monospaced"
        },
        {
          "family":"Perpetua",
          "category":"Serif"
        },
        {
          "family":"Didot",
          "category":"serif"
        }
      ];
    }
    
  }

  $scope.getFontFamily = function(fontfamily,fontcategory) {
      console.log(fontfamily);
      $scope.fontFamily = fontfamily; 
      $scope.fontCategory = fontcategory;
  }
    
});