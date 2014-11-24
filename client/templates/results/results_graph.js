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
    return _.map(question.options, function(option_pair){return [option_pair.option, option_pair.votes];});
  }
  console.log(this);
  var question = this.data.question;
  var id = this.data._id;
  var votes_object = this.data;
  var graph = c3.generate({
    bindto: "#" + replace_chars_with_dash(question),
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

  Deps.autorun(function () {
        var result = Questions.findOne({_id : id });
        console.log(result);
        graph.load({
          columns: get_votes_for_question(result)
        });
      });
}
