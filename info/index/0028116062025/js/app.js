/**
 * Created by hxsd on 2016/9/30.
 */

var myapp = angular.module("myapp",["ionic"]);
myapp.controller("myCtrl",function($scope,$interval,$ionicTabsDelegate){
    var index = 1;
    $interval(function(){
        if(index == 4) index = 0;  //实现循环
        $ionicTabsDelegate.select(index);
        index++;
    },2500);
})
myapp.config(function($stateProvider,$urlRouterProvider) {
    $stateProvider.state("tabs",{
        url:"/tabs",
        abstract:true,
        templateUrl:"views/tabs/tabs.html"
    }).state("tabs.banner", {
        url: "/banner",
        views:{"tab-banner": {
            templateUrl: "views/banner/banner.html"
        }}
    }).state("tabs.tuijian",{
        url:"/tuijian",
        abstract:true,
        views:{"tab-tuijian": {
            templateUrl: "views/zhuti/zhutiTbs.html"
        }}
    }).state("tabs.tuijian.home",{
        url:"/home",
        views:{"tab-tuijian-home": {
            templateUrl: "views/tuijian/tuijian.html"
        }}
    }).state("tabs.tuijian.zhuti",{
        url:"/zhuti",
        views:{"tab-zhuti-zhuti": {
            templateUrl: "views/zhuti/zhuti.html"
        }}
    }).state("tabs.like",{
        url:"/like",
        views:{"tab-like": {
            templateUrl: "views/like/like.html",
            controller:"likeCtrl"
        }}
    }).state("tabs.this", {
        url: "/this",
        views: {
            "tab-this": {
                templateUrl: "views/this/this.html",
                controller: "thisCtrl"
            }
        }
    })
    $urlRouterProvider.otherwise("/tabs/banner")
})