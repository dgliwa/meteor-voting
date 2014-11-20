Template.questionsList.helpers({
  questions: function() {
    return Questions.find();
  }
});

Template.questionsList.events({
  'submit form': function(e) {
    e.preventDefault();
    console.log(e.target);
    var votes = $(e.target).find('input:checked');
    console.log(votes);
    for(var i = 0; i < votes.length; i++){
      var id = votes[i].name;
      var vote = votes[i].value;
      Meteor.call("vote", id, vote);
            }
    Router.go('resultsList');
  }
});
