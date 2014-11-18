if (Posts.find().count() === 0) {
  Posts.insert({
    question: 'Introducing Telescope',
    options: ['http://sachagreif.com/introducing-telescope/',
          'http://sachagreif.com/introducing-telescope/']

  });

  Posts.insert({
    question: 'Meteor',
    options: ['http://meteor.com', 'http://meteor.com']

  });

  Posts.insert({
   question: 'The Meteor Book',
    options: ['http://themeteorbook.com',
    'http://themeteorbook.com',
    'http://themeteorbook.com']
  });
}
