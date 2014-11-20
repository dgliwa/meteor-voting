Template.questionItem.helpers({
  options: function(){
             console.log(this)
            var question1 = this.question;
            console.log("question " + question1);
            return _.map(this.options, function(option){return {option: option, question: question1}; });
           },
  option: function() {
    return this.option.option;
  },
  question: function(){
          return this.question;
            }
});
