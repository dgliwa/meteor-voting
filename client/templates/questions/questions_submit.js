Template.questionsSubmit.helpers({
  questions: function() {
    return Questions.find();
  }
});

Template.questionsSubmit.events({
  'submit form': function(e) {
    e.preventDefault();
    var votes = $(e.target).find('input:checked');
    for(var i = 0; i < votes.length; i++){
      var id = votes[i].name;
      var vote = votes[i].value;
      Meteor.call("vote", id, vote);
            }
    Router.go('resultsList');
  }
});
