(function () {
    'use strict';

    var shopping1=[
        "milk","orange","chocolate","butter milk"
    ];

     var shopping2 =[
       {
        name : "milk" ,
        quantity :"2"
       },
       {
        name : "chockie" ,
        quantity :"20"
       },
  
       {
        name : "butter milk" ,
        quantity :"2"
       }
     

     ];

    angular.module('ngrepeat',[])
    .controller('repeat',repeat);

    repeat.$inject=['$scope'];

  function repeat($scope){
    $scope.shopping1=shopping1;
    $scope.shopping2=shopping2;


    $scope.addlist=function(){
      var newitem={
        name :$scope.newitemname,
        quantity:$scope.newitemquantity

      };
      $scope.shopping2.push(newitem);
    };
  }

    


})();