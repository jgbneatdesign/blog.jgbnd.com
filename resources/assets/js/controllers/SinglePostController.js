blogApp
.controller('SinglePostController', ['$scope', '$routeParams', 'wp', 'blog', '$location',
	function($scope, $routeParams, wp, blog, $location) {
		wp.getPost($routeParams.name)
			.then(function( response ) {
				$scope.title = (response.data.title);
				blog.setTitle($scope.title);
				$scope.post = response.data;
			}, function( error ) {
				// on error
				console.log(error);
				$location.url('404');
			});
}]);