angular
  .module('forumApp')
  .controller('TopicsIndexCtrl', TopicsIndexCtrl)
  .controller('TopicsShowCtrl', TopicsShowCtrl);


TopicsIndexCtrl.$inject = ['Topic'];
function TopicsIndexCtrl(Topic) {
  const vm = this;

  vm.all = Topic.query();

}

TopicsShowCtrl.$inject = ['Topic', '$stateParams', 'Comment'];
function TopicsShowCtrl(Topic, $stateParams, Comment) {
  const vm = this;

  vm.topic = Topic.get($stateParams);

  vm.postComment = postComment;

  function postComment() {
    vm.comment.user_id = 1;
    vm.comment.topic_id = $stateParams.id;
    Comment
    .save(vm.comment)
    .$promise
    .then((response) => {
      vm.topic.comments.push(response);
      vm.comment = {};
    });
  }
}
