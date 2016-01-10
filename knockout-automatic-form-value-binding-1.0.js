/*
 knockout-automatic-form-value-binding v1.0
 (c) 2016 Kees C. BAkker, http://keestalkstech.com/
 GIT:  https://github.com/KeesCBakker/KnockoutAutomaticFormValueBinding
 License: MIT
*/

(function() {
  
  'use strict';

  var z = ko.bindingHandlers.textInput.init;
  ko.bindingHandlers.textInput.init = function(element, valueAccessor, allBindings) {
    handleInit(element, valueAccessor, allBindings, z);
  };

  var y = ko.bindingHandlers.value.init;
  ko.bindingHandlers.value.init = function(element, valueAccessor, allBindings) {
    handleInit(element, valueAccessor, allBindings, y);
  };

  var z = ko.bindingHandlers.value.init;
  ko.bindingHandlers.checked.init = function(element, valueAccessor, allBindings) {
    handleInit(element, valueAccessor, allBindings, z);
  };

  function handleInit(element, valueAccessor, allBindings, x) {

    if (allBindings.has('initWithElementValue')) {

      var value = valueAccessor();

      if (!ko.isWriteableObservable(value)) {
        throw new Error('Knockout "initWithElementValue" binding expects an observable.');
      }

      if (element.type && element.type === 'checkbox') {
        valueAccessor()(element.checked);
      } else {
        valueAccessor()(element.value);
      }
    }

    x.apply(this, arguments);
  }
}());
