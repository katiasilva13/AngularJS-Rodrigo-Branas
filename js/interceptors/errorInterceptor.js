angular.module("listaTelefonica").factory("errorInterceptor", function ($q, $location) {
	return {
		responseError: function (rejection) {
			// var url = config.url;
			// if (url.indexOf('view') > -1) return config;
			// var timestamp = new Date().getTime();
			// config.url = url + "?timestamp=" + timestamp;
            if (rejection.status === 404) {
                $location.path("/error");
            }
			return $q.reject(rejection);
		}
	};
});