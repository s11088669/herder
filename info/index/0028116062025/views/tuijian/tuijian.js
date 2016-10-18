/**
 * Created by Administrator on 2016/10/4.
 */
angular.module("myapp")
        myapp.controller("myCtrl",function($scope,$interval,$ionicTabsDelegate,$stateParams){
            var index = 1;
            $interval(function(){
                if(index == 2) index = 0;  //实现循环
                $ionicTabsDelegate.select(index);
                index++;
            },2500);
        })