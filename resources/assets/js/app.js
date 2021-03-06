var blogApp = angular.module('blogApp', [
	'ngRoute', 'ngSanitize',
	'chieffancypants.loadingBar',
	'angularMoment'
])

.config(['$routeProvider', '$locationProvider', '$httpProvider', 'cfpLoadingBarProvider',
	function($routeProvider, $locationProvider, $httpProvider, cfpLoadingBarProvider) {
		// Adding the XMLHttpRequest header to every request
		$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

		// configuring the loading bar
		cfpLoadingBarProvider.includeSpinner = true;

		// The blog application routes
		$routeProvider
			.when('/', {
				controller: 'HomeController',
				templateUrl: 'templates/home.html'
			})
			.when('/posts/:page?', {
				controller: 'PostsController',
				templateUrl: 'templates/posts.html'
			})
			.when('/post/:name', {
				controller: 'SinglePostController',
				templateUrl: 'templates/posts/single.html'
			})
			.when('/category/:category/:page?', {
				controller: 'CategoryController',
				templateUrl: 'templates/posts/category.html'
			})
			.when('/tag/:tag/:page?', {
				controller: 'TagController',
				templateUrl: 'templates/posts/tag.html'
			})
			.otherwise({
				controller: '404Controller',
				templateUrl: 'templates/404.html'
			});

		$locationProvider.html5Mode(true);
	}
])

.run(['blog', '$rootScope', function(blog, $rootScope) {
	blog.setCategoriesAndTags();

	// $rootScope.$on('$routeChangeSuccess', function() {
	// 	$('body').animate({ scrollTop: 50 }, 'slow');
	// });
}]);