# Knockout Automatic Form Value Binding
Ever used KnockoutJS on an excisting form? Tired of writing model initializer code so you form values are used as initial values by the model? Well that's where this plugin comes in! Never write initializer code again.

## Automatic form value binding
1. Include the plugin
2. Set `ko.automaticFormValueBinding = true;`
3. Bind `ko.applyBindings({yourmodel});`;

If you want to skip a certain element use:<br/>
`<input data-bind="value: name, skipInitWithElementValue" placeholder="Nothing here!" />` <br/>

## Automatic form value binding per form
1. Include the plugin
2. Set add `data-auto-bind-values` as an attribute to the form
3. Bind `ko.applyBindings({yourmodel});`;

Form example: <br/>
`<form action="{..}" data-auto-bind-values >`

If you want to skip a certain element use: <br/>
`<input data-bind="value: name, skipInitWithElementValue" placeholder="Nothing here!" />` <br/>

## Form value binding per element
1. Include the plugin
2. Add `initWithElementValue` to the form elements
3. Bind `ko.applyBindings({yourmodel});`

Examples:<br/>
`<input data-bind="value: name, initWithElementValue" placeholder="Nothing here!" />` <br/>
`<input data-bind="textInput: title, initWithElementValue" value="MyTitle" placeholder="Nothing here!" />` <br/>
`<input type="checkbox" data-bind="checked: active, initWithElementValue" checked />` <br/>

## Examples ASP.Net MVC
Form<br/>
`@using (Html.BeginForm(null, null, FormMethod.Post, new { data_auto_bind_values = true }))` 

Individual element:<br/>
`@Html.TextBoxFor(x => x.Title, new {  data_bind = "textInput: title, initWithElementValue" })`

Any questions? Ask on Twitter: https://twitter.com/KeesTalksTech
