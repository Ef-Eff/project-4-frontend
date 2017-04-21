angular
  .module('forumApp')
  .controller('TopicsIndexCtrl', TopicsIndexCtrl)
  .controller('TopicsShowCtrl', TopicsShowCtrl);


TopicsIndexCtrl.$inject = ['Topic'];
function TopicsIndexCtrl(Topic) {
  const vm = this;

  vm.all = Topic.query();

}

TopicsShowCtrl.$inject = ['Topic', '$stateParams', 'Comment', 'Subtitle', 'Vote'];
function TopicsShowCtrl(Topic, $stateParams, Comment, Subtitle, Vote) {
  const vm = this;

  Topic.get($stateParams).$promise.then((topic) => {
    vm.topic = topic;
  });

  vm.postComment = postComment;

  function postComment() {
    vm.comment.topic_id = vm.topic.id;
    Comment
      .save({ id: vm.comment.id, comment: vm.comment })
      .$promise
      .then((response) => {
        vm.topic.comments.push(response);
        vm.comment = {};
      });
  }

  // vm.paginateComments = paginateComments;
  // function paginateComments() {
  //   vm.paginatedComments = vm.topic.comments.slice($stateParams.page - 1, $stateParams.page + 9);
  // }

  vm.postSubtitle = postSubtitle;

  function postSubtitle() {
    vm.subtitle.topic_id = vm.topic.id;
    Subtitle
      .save(vm.subtitle)
      .$promise
      .then((response) => console.log(response));
  }

  vm.upvote = upvote;
  function upvote(vote) {
    Vote
      .save(vote)
      .$promise
      .then((response) => console.log(response));
  }
}
