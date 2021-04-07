angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, contatosAPI, operadorasAPI, serialGenerator) {
	console.log(serialGenerator.generate());
	$scope.app = "Lista Telefonica";
	$scope.contatos = [];
	$scope.operadoras = [];

	var carregarContatos = function () {
		contatosAPI.getContatos().then( (res) => {
			$scope.contatos = res.data;
		}).catch( (err) => {
			$scope.message = "Aconteceu um problema: " + err;
		});
	};

	var carregarOperadoras = function () {
		operadorasAPI.getOperadoras().then((res) =>  {
			$scope.operadoras = res.data;
		});
	};

	$scope.adicionarContato = function (contato) {
		contato.serial = serialGenerator.generate();
		contato.data = new Date();
		contatosAPI.saveContato(contato).then( (res) => {
			delete $scope.contato;
			$scope.contatoForm.$setPristine();
			carregarContatos();
		});
	};
	$scope.apagarContatos = function (contatos) {
		$scope.contatos = contatos.filter(function (contato) {
			if (!contato.selecionado) return contato;
		});
	};
	$scope.isContatoSelecionado = function (contatos) {
		return contatos.some(function (contato) {
			return contato.selecionado;
		});
	};
	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};

	carregarContatos();
	carregarOperadoras();
});