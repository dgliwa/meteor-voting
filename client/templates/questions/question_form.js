Template.questionForm.helpers({
  options: function(){
            var id = this._id;
            return _.map(this.options, function(option){return {option: option, question: id}; });
           },
  option: function() {
    return this.option.option;
  },
  votes: function(){
    return this.option.votes;
         },
  question: function(){
          return this.question;
            }
});
