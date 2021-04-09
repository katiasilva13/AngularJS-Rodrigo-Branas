angular
  .module("listaTelefonica")
  .config(function config($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix("");
    $routeProvider
      .when("/contatos", {
        templateUrl: "./view/contatos.html",
        controller: "listaTelefonicaCtrl",
        // resolve: {
        //     contatos: function (contatosAPI) {
        //         return contatosAPI.getContatos();
        //       },
        //     operadoras: function (operadorasAPI) {
        //     return operadorasAPI.getOperadoras();
        //   }
        // },
      })
      .when("/novoContato", {
        templateUrl: "./view/novoContato.html",
        controller: "novoContatoCtrl",
        // resolve: {
        //   operadoras: function (operadorasAPI) {
        //     return operadorasAPI.getOperadoras();
        //   }
        // },
      })
      .otherwise("/", {
        redirectTo: "./index.html",
      });
  });
