Template.question.helpers({
});

Template.question.events({
  "click .drop-question": function(){
    Meteor.call("deleteQuestion", this._id);
  }
});
