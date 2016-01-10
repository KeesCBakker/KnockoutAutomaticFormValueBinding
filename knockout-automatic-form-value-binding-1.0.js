/**
* knockout-automatic-form-value-binding v1.0.0 by Kees C. Bakker
* Copyright (c) 2016 by Kees C. Bakker
*
* LICENSE: MIT / GIT: https://github.com/KeesCBakker/KnockoutAutomaticFormValueBinding
*
**/

(function() {

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
