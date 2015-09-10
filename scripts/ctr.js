
appInternal.controller('indexCtr', ['$scope', '$http', 'initTreeData', function ($scope, $http, initTreeData) {
    //the $http api have change
    $scope.url = 'data.json';
    $http.get($scope.url).then(function (response) {
        $scope.departmentData = initTreeData(response.data);
        $scope.mySelect = $scope.departmentData[1];
    }, function (response) { alert('error') })

} ]);

function findTheName (theArray,Id)//true will return vaule
{
   var i=0;
   var lenArray=theArray.length;
   
    while(i<lenArray)
    {
       if(theArray[i].Id==Id)
       {
           return theArray[i];
       }
       i = i + 1;
    }
    return "";
}