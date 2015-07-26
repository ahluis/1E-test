/**
 * Widget Header Directive
 */

angular
    .module('1E-Alex')
    .directive('dashboardWidgetHeader', dashboardWidgetTitle);

function dashboardWidgetTitle() {
    var directive = {
        requires: '^dashboardWidget',
        scope: {
            title: '@',
            icon: '@'
        },
        transclude: true,
        template: '<div class="widget-header"><div class="row"><div class="pull-left"><i class="fa" ng-class="icon"></i> {{title}} </div><div class="pull-right col-xs-6 col-sm-4" ng-transclude></div></div></div>',
        restrict: 'E'
    };
    return directive;
};