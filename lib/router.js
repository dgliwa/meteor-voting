Router.configure({
    layoutTemplate: 'layout'
});
Router.route('/', {name: 'questionsSubmit'});
Router.route('/results', {name: 'resultsList'});
Router.route('/questions', {name: 'questions'});
