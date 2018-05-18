app.controller('authCtrl', function ($scope, $rootScope, $routeParams, $location, $http, Data) {
   
        $scope.navigateToDashboard = function() {
            $location.path('dashboard'); 
        }
        
        $scope.formsubmit = function(isValid) {

             $scope.url = 'api/add_account.php';
            if (isValid) {
                $http.post($scope.url, {"name": $scope.name, "email": $scope.email, "balance": $scope.balance}).
                        success(function(data, status) {
                            $rootScope.userName = data.name;
                            $rootScope.userId = data.userId;
                            $rootScope.balance = data.balance;
                            $location.path('dashboard'); 
                        })
            }else{
                
                  alert('Form is not valid');
            }

        }    
});