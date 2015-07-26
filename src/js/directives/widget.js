/**
 * Widget Directive
 */

angular
    .module('1E-Alex')
    .directive('dashboardWidget', dashboardWidget);

function dashboardWidget() {
    var directive = {
        transclude: true,
        template: '<div class="widget" ng-transclude></div>',
        restrict: 'EA'
    };
    return directive;

    function link(scope, element, attrs) {
        /* */
    }
};