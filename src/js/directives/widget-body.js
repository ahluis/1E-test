/**
 * Widget Body Directive
 */

angular
    .module('1E-Alex')
    .directive('dashboardWidgetBody', dashboardWidgetBody);

function dashboardWidgetBody() {
    var directive = {
        requires: '^dashboardWidget',
        scope: {
            loading: '@?',
            classes: '@?'
        },
        transclude: true,
        template: '<div class="widget-body" ng-class="classes"><widget-loading ng-show="loading"></widget-loading><div ng-hide="loading" class="widget-content" ng-transclude></div></div>',
        restrict: 'E'
    };
    return directive;
};