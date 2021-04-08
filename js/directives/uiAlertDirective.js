angular.module("listaTelefonica").directive("uiAlert", function (){
    return {        
        // template: "<div>uiAlert</div>"
        templateUrl: "view/alert.html", 
        replace: true,
     //   restrict: "A", //funciona pra atributo, <div ui-alert></div>, não <ui-alert></ui-alert>
       // restrict: "E", //funciona pra elemento, <ui-alert></ui-alert>, não <div ui-alert></div>
       restrict: "AE", //combinaço para que ambos funcionem
       //C para restriçaõ de class
       //M para restriço de comentário
       scope: {
           //se o nome da propriedade da diretiva e do atributo são iguais, basta pôr o @ ou =
        //    topic: "@title"
        title: "@",
        //= two way data binding
        message: "="

       }
    }
});