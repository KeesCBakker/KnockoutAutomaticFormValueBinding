# Knockout Automatic Form Value Binding
Ever used KnockoutJS on an excisting form? Tired writing model initializer code so you form values are used by the model? Well that's where this plugin comes in! Never write initializer code again.

## Automatic form value binding
1. Include the plugin
2. Set `ko.automaticFormValueBinding = true;`
3. Bind `ko.applyBindings({yourmodel});`;

If you want to skip a certain element use:
`<input data-bind="value: name, skipInitWithElementValue" plcaeholder="Nothing here!" />` <br/>

## Form value binding per element
1. Include the plugin
2. Add `initWithElementValue` to the form elements
3. Bind `ko.applyBindings({yourmodel});`

`<input data-bind="value: name, initWithElementValue" plcaeholder="Nothing here!" />` <br/>
`<input data-bind="textInput: title, initWithElementValue" value="MyTitle" placeholder="Nothing here!" />` <br/>
`<input type="checkbox" data-bind="checked: active, initWithElementValue" checked />` <br/>

## Example ASP.Net MVC - form binding per element
`@Html.TextBoxFor(x => x.Title, new { @class = "form-control", placeholder = "Enter a title", required = true, autofocus = true, data_bind = "textInput: title, initWithElementValue" })`


