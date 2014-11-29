Template.question.helpers({
});

Template.question.events({
  "click .drop-question": function(){
    Meteor.call("deleteQuestion", this._id);
  },
  "submit .add-option": function(){
    var text = event.target.text.value;
    Meteor.call("addOption", this._id, text);
    event.target.text.value = "";
    return false;
  }
});
