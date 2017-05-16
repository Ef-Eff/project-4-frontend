angular
  .module('forumApp')
  .controller('TopicsIndexCtrl', TopicsIndexCtrl)
  .controller('TopicsShowCtrl', TopicsShowCtrl);


TopicsIndexCtrl.$inject = ['Topic'];
function TopicsIndexCtrl(Topic) {
  const vm = this;

  vm.all = Topic.query();

}

TopicsShowCtrl.$inject = ['Topic', '$stateParams', 'Comment', 'Subtitle', 'Vote', '$state', '$window'];
function TopicsShowCtrl(Topic, $stateParams, Comment, Subtitle, Vote, $state, $window) {
  const vm = this;

  Topic.get($stateParams).$promise.then((topic) => {
    vm.topic = topic;
  });

  vm.userIncluded = userIncluded;
  function userIncluded(subtitle, userId) {
    return subtitle.votes.find(vote => vote.voter_id === userId);
  }

  vm.voteOnSubtitle = voteOnSubtitle;
  function voteOnSubtitle() {
    vm.subtitleVote.subject_type = 'Subtitle';
    Vote
    .save({ vote: vm.subtitleVote })
    .$promise
    .then(() => vm.votingVisible = false);
  }

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

  vm.postSubtitle = postSubtitle;

  function postSubtitle() {
    vm.subtitle.topic_id = vm.topic.id;
    Subtitle
      .save(vm.subtitle)
      .$promise
      .then(() => $state.reload());
  }

  vm.upVote = upVote;
  function upVote(comment) {
    const vote = { subject_id: comment.id, subject_type: 'Comment', value: 1 };
    Vote
      .save(vote)
      .$promise
      .then(() => {
        const index = vm.topic.comments.indexOf(comment);
        vm.topic.comments[index].vote_score += 1;
      });
  }

  vm.downVote = downVote;
  function downVote(comment) {
    const vote = { subject_id: comment.id, subject_type: 'Comment', value: -1 };
    Vote
      .save(vote)
      .$promise
      .then(() => {
        const index = vm.topic.comments.indexOf(comment);
        vm.topic.comments[index].vote_score -= 1;
      });
  }
}
