/**
 * Carousel Controller
 */

angular
    .module('1E-Alex')
    .controller('CarouselCtrl', ['$scope', CarouselCtrl]);

function CarouselCtrl($scope) {

    $scope.myInterval = 10000;
    
    $scope.noWrapSlides = false;
    
    var slides = $scope.slides = [];
    
    $scope.addSlide = function() {        
        slides.push({
            image: 'img/carousel_1.jpg',
            title: ['Software Lifecycle Automation','Software Lifecycle Automation 2'][slides.length % 2],
            paragraph: [
                "1E empowers the world's largest and most distributed organizations to simplify and speed up the complete software lifecycle.",
                "1E empowers the world's largest and most distributed organizations to simplify and speed up the complete software lifecycle 2.",
            ][slides.length % 2]
        });
    };
    
    for (var i = 0; i < 2; i++) {
        $scope.addSlide();
    }
    
}