angular.module("listaTelefonica").controller("detalhesContatoCtrl", function ($scope, $routeParams, contato) {
	$scope.app = "Detalhes";
	console.log($routeParams);

	$scope.contato = contato.data;
	
});