Meteor.methods({
  vote: function (id, vote) {
    Questions.update({$and : [{_id: id}, {"options.option" : vote} ] }, {$inc: {"options.$.votes": 1}})
    },
  deleteQuestion: function(id) {
    Questions.remove({_id: id});
  }
});
