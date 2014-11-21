Template.resultsGraph.helpers({
  id: function(){
    return this._id;
           },
  graph: function() {

  }
});

Template.resultsGraph.rendered = function () {
  var id = this.data._id;
  var graph = c3.generate({
    bindto: "#" + id,
    data: {
        columns: [
            ['data1', 30, 200],
            ['data2', 130, 100]
        ],
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
