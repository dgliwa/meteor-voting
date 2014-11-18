Meteor.publish('questions', function() {
  return Posts.find();
});
