angular.module("listaTelefonica").controller("novoContatoCtrl", function ($scope, contatosAPI, operadoras, serialGenerator, uppercaseFilter, $location) {
	$scope.app = "Contato";
	$scope.operadoras = operadoras.data;

	// var carregarOperadoras = function () {
	// 	operadorasAPI.getOperadoras().then((res) =>  {
	// 		$scope.operadoras = res.data;
	// 	});
	// };

	$scope.adicionarContato = function (contato) {
		contato.serial = serialGenerator.generate();
		contato.nome = uppercaseFilter(contato.nome);
		contato.data = new Date(Date.parse(contato.data));
		// console.log(contato.data);
		contatosAPI.saveContato(contato).then( (res) => {
			delete $scope.contato;
			$scope.contatoForm.$setPristine();
			$location.path("/contatos");
			// carregarContatos();
		});
	};

	// carregarOperadoras();
});