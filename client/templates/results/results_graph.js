function replace_chars_with_dash(text){
  return text.replace(/\W+/g, "-");
}
Template.resultsGraph.helpers({
  id: function(){
    return this._id;
           },
  graph: function() {

  },
  question_formatted: function() {
    console.log(this);
    console.log(replace_chars_with_dash(this.question));
    return replace_chars_with_dash(this.question);
                      }

});

Template.resultsGraph.rendered = function () {
  function get_votes_for_question(question){
    console.log("question: " + question)
    console.log(_.map(question.data.options, function(option_pair){return [option_pair.option, option_pair.votes];}))
    return _.map(question.data.options, function(option_pair){return [option_pair.option, option_pair.votes];});
  }
  var id = this.data.question;
  var votes_object = this;
  console.log(this);
  var graph = c3.generate({
    bindto: "#" + replace_chars_with_dash(id),
    data: {
        columns: get_votes_for_question(votes_object)/*[
            ['data1', 30, 200],
            ['data2', 130, 100]
        ]*/,
        type: 'bar',
        groups: [
            ['data1', 'data2']
        ]
    },
    grid: {
        y: {
            lines: [{value:0}]
        }
    }
  });
}
