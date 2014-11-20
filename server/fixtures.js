if (Questions.find().count() === 0) {
  Questions.insert({
    question: 'Introducing Telescope',
    options: [{option: 'http://sachagreif.com/introducing-telescope/', votes: 0},
    {option: 'www.facebook.com', votes: 0}]

  });

  Questions.insert({
    question: 'Meteor',
    options: [{option:'http://meteor.com',votes:0}, {option:'www.twitter.com',votes:0}]

  });

  Questions.insert({
   question: 'The Meteor Book',
    options: [{option:'http://themeteorbook.com',votes:0},{option:'www.instagram.com',votes:0}]
  });
}
