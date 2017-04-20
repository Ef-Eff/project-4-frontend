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
}
