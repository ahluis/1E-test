/**
 * Widget Footer Directive
 */

angular
    .module('1E-Alex')
    .directive('dashboardWidgetFooter', dashboardWidgetFooter);

function dashboardWidgetFooter() {
    var directive = {
        requires: '^dashboardWidget',
        transclude: true,
        template: '<div class="widget-footer" ng-transclude></div>',
        restrict: 'E'
    };
    return directive;
};