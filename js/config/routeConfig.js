
angular.module("listaTelefonica").config(function ($routeProvider) {
    
	$routeProvider.when("/contatos", {
        templateUl: "view/contatos.html"
    });
});

// angular.module("listaTelefonica").config(function ($routeProvider, $locationProvider) {
//     $locationProvider.hashPrefix('');
// 	$routeProvider.when("/contatos", {
//         templateUl: "./view/contatos.html"
//     });
// });

angular.module('listaTelefonica',['ngRoute']).
  config(['$routeProvider', '$locationProvider', 
    function config($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('');
	$routeProvider.when("/contatos", {

        templateUl: "./view/contatos.html",
        controller: "listaTelefonicaCtrl"
    })
    .otherwise( '/index', {
        templateUl: "./index.html"
    });
    $locationProvider.html5Mode(true);
    }
  ]);

// angular.
//   module('listaTelefonica',['ngRoute']).
//   config(['$routeProvider', '$locationProvider', 
//     function config($routeProvider, $locationProvider) {
//         $locationProvider.hashPrefix('');
// 	$routeProvider.when("/contatos", {

//         templateUl: "./view/contatos.html"
//     })
//     .otherwise( '/index', {
//         templateUl: "./index.html"
//     });
//     }
//   ]);

// angular.module('listaTelefonica', ['ngRoute', 'angular-md5']).config(($routeProvider) => {
//     $locationProvider.html5Mode({
//         enabled: true,
//         requireBase: false
//     });
//     $routeProvider
//     //Home
//     .when('/', {
//         templateUrl:'index.html'
//     })
//     .when('/contatos', {
//         templateUrl:'view/contatos.html'
//     })
//     .otherwise('/index',{
//         templateUrl: 'index.html'
//     });
// })