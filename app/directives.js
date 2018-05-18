app.directive('focus', function() {
  return function(scope, element) {
      element[0].focus();
  }      
});

app.directive('passwordMatch', [function () {
  return {
    restrict: 'A',
    scope:true,
    require: 'ngModel',
    link: function (scope, elem , attrs,control) {
      var checker = function () {
        //get the value of the first password
        var e1 = scope.$eval(attrs.ngModel); 

        //get the value of the other password  
        var e2 = scope.$eval(attrs.passwordMatch);
        if(e2!=null)
        return e1 == e2;
      };
      scope.$watch(checker, function (n) {
        //set the form control to valid if both 
        //passwords are the same, else invalid
        control.$setValidity("passwordNoMatch", n);
      });
    }
  };
}]);

app.directive('textSizeSlider', ['$document', function ($document) {
  return {
    restrict: 'E',
    template: '<div class="text-size-slider"><span class="small-letter" ng-style="{ fontSize: min + unit }">A</span> <input type="range" min="{{ min }}" max="{{ max }}" step="{{ step || 0 }}" ng-model="textSize" class="slider" value="{{ value }}" /> <span class="big-letter" ng-style="{ fontSize: max + unit }">A</span></div>',
    scope: {
      min: '@',
      max: '@',
      unit: '@',
      value: '@',
      step: '@'
    },
    link: function (scope, element, attr) {
      scope.textSize = scope.value;
      scope.$watch('textSize', function (size) {
        $document[0].getElementById("fontchange").style.fontSize = size + scope.unit;
      });
    }
  }
}]);

app.directive('loading', function () {
  return {
    restrict: 'E',
    replace:true,
    template: '<div class="loading"><img src="http://www.nasa.gov/multimedia/videogallery/ajax-loader.gif" width="20" height="20" />LOADING...</div>',
    link: function (scope, element, attr) {
      scope.$watch('loading', function (val) {
        if (val)
            $(element).show();
        else
            $(element).hide();
      });
    }
  }
});