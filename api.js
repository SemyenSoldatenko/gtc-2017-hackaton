angular.module('HackApi', [])
    .controller('MainCtrl', MainCtrl);


function MainCtrl($scope, $http) {

    $scope.getCategories = function() {
        var categories = [];

        ($scope.products || []).forEach(function(product) {
            categories = _.union(categories, product.categories);
        });
        return _.sortBy(_.uniq(categories));
    };

    $scope.getProductsInCategory = function(cat) {
        return _.filter($scope.products, {categories: [cat]});
    };

    $http.get('products/products.json')
        .then(function(response) {
            $scope.products = response.data.products;
            $scope.lastResponse = response;
            lastResponse = response;
        }, console.error);
}