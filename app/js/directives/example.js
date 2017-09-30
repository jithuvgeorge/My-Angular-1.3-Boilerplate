'use strict';

/**
 * @ngInject
 */
function exampleDirective() {

  return {
    restrict: 'EA',
    link: function(scope, element) {
      element.on('click', function() {
        alert('element clicked');
      });
    }
  };

}

module.exports= exampleDirective;