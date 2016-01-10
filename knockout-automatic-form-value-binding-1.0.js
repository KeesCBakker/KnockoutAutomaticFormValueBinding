/*
 knockout-automatic-form-value-binding v1.0
 (c) 2016 Kees C. BAkker, http://keestalkstech.com/
 GIT:  https://github.com/KeesCBakker/KnockoutAutomaticFormValueBinding
 License: MIT
*/

(function(ko) {

  var _x = ko.bindingHandlers.textInput.init;
  ko.bindingHandlers.textInput.init = function(element, valueAccessor, allBindings) {
    handleInit(element, valueAccessor, allBindings, _x);
  };

  var _y = ko.bindingHandlers.value.init;
  ko.bindingHandlers.value.init = function(element, valueAccessor, allBindings) {
    handleInit(element, valueAccessor, allBindings, _y);
  };

  var _z = ko.bindingHandlers.checked.init;
  ko.bindingHandlers.checked.init = function(element, valueAccessor, allBindings) {
    handleInit(element, valueAccessor, allBindings, _z);
  };

  function handleInit(element, valueAccessor, allBindings, reroute) {

    //check global
    var process = ko.autoInitWithElementValues;
    //check form
    process = process || element.form && element.form.getAttribute('data-auto-bind-values') != null;
    //check data-bind option
    process = process || allBindings.has('initWithElementValue');
    //check data-bind skip
    process = process && !allBindings.has('skipInitWithElementValue');

    if (process) {
      var value = valueAccessor();

      if (!ko.isWriteableObservable(value)) {
        throw new Error('Knockout "initWithElementValue" binding expects an observable.');
      }

      //honor elements with checked option (checkbox / radiobox)
      if (element.type && element.type === 'checkbox') {
        valueAccessor()(element.checked);
      } else {
        valueAccessor()(element.value);
      }
    }

    //execute default
    reroute.apply(this, arguments);
  }
}(ko));
