Router.configure({
  layoutTemplate: 'layout', // Defines the layout template
  loadingTemplate: 'loading' // Defines the loading template
});

// Add the dataNotFound plugin, which is responsible for
// rendering the dataNotFound template if your RouteController
// data function returns a false value
Router.plugin('dataNotFound', {
  notFoundTemplate: 'dataNotFound'
});

Router.route('/', {
  name: 'home',
  template: 'home'
});

Router.route('/signup');
Router.route('/login');
Router.route('/recoverpassword');
Router.route('/resetpassword');

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
