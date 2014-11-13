Posts = new Mongo.Collection('posts');

Posts.allow({
  insert: function(userId, doc) {
  //only allow posting is user is logged in
  return !!userId;
  }

});
