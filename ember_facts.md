# Stuff to know about Ember.js

### Components
- At the moment, components cannot be routed to (see below), but when this changes, it will be recommended to replace all controllers with components.
- Components are discrete reusable blocks of code that produce things (components) that users can interact with.
- Our component consists of two parts, a template, app/templates/components/todo-item.hbs, for displaying it and a javascript file, app/components/todo-item.js, for calculating any variables and handling user events.
- The {{yield}} helper is similar to {{outlet}}. It will allow us to inject other components and markup into this one.
- The {{outlet}} will be rendered in the {{yield}} location of our todo-list component. In this todoMVC app, the {{outlet}} appeared in the template and the {{yield}} was in the component. We yield back to the code that was nested inside the component that was called in the template, which was just the {{outlet}} line of code.

### Routes
- Perhaps the most important thing to remember about Ember is that the URL drives the state of the application. The URL determines what route to load, which in turn determines what model, controller, and template to load.
- The default behaviour of a route is to render the template with the same name. (This implies the route is loaded first.)
- We have an application route and underneath this is our todos route. Application route you get for free, it's at the top of all route trees in Ember. The application route its a good place to put anything you want to be on every route in your app, for example a header and footer.
- The index route is not listed, but in Ember a nested set of routes will automatically have an index route.
- The application is entered when your app first boots up. Just like any other route, it will load an application template by default. You should put your header, footer, and any other decorative content here. All other routes will render their templates into the application.hbs templates's {{outlet}}.
This route is part of every application, so you don't need to specify it in your app/router.js.

### Template
- Remember we use an {{outlet}} in the parent template to indicate where the child template should be loaded.

### CLI-generators
- ember generate route todos/index


### Computed properties
-  Observers are used heavily within the Ember framework itself, but for most problems Ember app developers face, computed properties are the appropriate solution.

### Observers
- Observers in Ember are currently synchronous. This means that they will fire as soon as one of the properties they observe changes. Observers in Ember are currently synchronous. This means that they will fire as soon as one of the properties they observe changes. This synchronous behavior can also lead to observers being fired multiple times when observing multiple properties:
