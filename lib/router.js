Router.configure({
    layoutTemplate: 'layout'
});
Router.route('/', {name: 'questionsList'});
Router.route('/results', {name: 'resultsList'});
