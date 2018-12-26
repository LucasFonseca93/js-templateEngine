# js-templateEngine

Extremely simple component for working with pure javascript and html templates.

To use just include the script on your page:
```
<script src="YOUR_PATH/js.template_engine.js"></script>
```

If you want to load the component dynamically you can use this other component:<br/>
https://github.com/LucasFonseca93/js-scriptInjector <br/>

### Basic sample usage

```
_templateEngine.init(); // init the component

var template = `
    <h1>Hello {{name}}</h1>
    <h2>Welcome to {{appName}}</h2>
`;

var formatted = _templateEngine.format(template, {
    name   : 'Lucas Fonseca',
    appName: 'Template Engine'
});

document.body.innerHTML = formatted;
```

### Custom prefix sample usage

```
_templateEngine.init('-$s-'); // init the component with new prefix "-%s-"

var template = `
    <h1>Hello -name-</h1>
    <h2>Welcome to -appName-</h2>
`;

var formatted = _templateEngine.format(template, {
    name   : 'Lucas Fonseca',
    appName: 'Template Engine'
});

document.body.innerHTML = formatted;
```

### Custom tag sample usage

```
_templateEngine.init(); // init the component

var template = `
    <h1>Hello {{name}}</h1>
    <h2>Welcome to {{appName}}</h2>
`;

var customTag = _templateEngine.generate('welcome-message', template, {
    name   : 'Lucas Fonseca',
    appName: 'Template Engine'
});

document.body.appendChild(customTag);
```
