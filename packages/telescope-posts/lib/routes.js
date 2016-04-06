FlowRouter.route('/', {
  name: "postsDefault",
  action: function(params, queryParams) {
    BlazeLayout.render("layout", {main: "main_posts_list"});
  }
});

FlowRouter.route('/posts/:_id/edit', {
  name: "postEdit",
  action: function(params, queryParams) {
    BlazeLayout.render("layout", {main: "post_edit"});
  }
});

FlowRouter.route('/posts/:_id/:slug?', {
  name: "postPage",
  action: function(params, queryParams) {
    //trackRouteEntry(params._id);
    BlazeLayout.render("layout", {main: "post_page"});
  }
});

var trackRouteEntry = function (postId) {
  var sessionId = Meteor.default_connection && Meteor.default_connection._lastSessionId ? Meteor.default_connection._lastSessionId : null;
  Meteor.call('increasePostViews', postId, sessionId);
}

FlowRouter.route('/submit', {
  name: "postSubmit",
  action: function(params, queryParams) {
    BlazeLayout.render("layout", {main: "post_submit"});
  }
});