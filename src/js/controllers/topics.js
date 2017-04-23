angular
  .module('forumApp')
  .controller('TopicsIndexCtrl', TopicsIndexCtrl)
  .controller('TopicsShowCtrl', TopicsShowCtrl);


TopicsIndexCtrl.$inject = ['Topic'];
function TopicsIndexCtrl(Topic) {
  const vm = this;

  vm.all = Topic.query();

  vm.tweets = [
	"RT @TiburcioJ18: Para responder la pregunta dividimos la carrera de LeBron en 3 partes. \nTemporadas: De la 1 a la 5, de la 6 a la 10 y las…",
	"RT @SportsCenter: LeBron has had his share of highs and lows in the playoffs. Take a look at the King's extensive postseason history. https…",
	"RT @JesseGladsaget: Lebron -\n\n117-45 (.722%) vs the pathetic East\n17-23 (.425%) vs the superior West\n\n#GOAT https://t.co/KEAhAs6138",
	"RT @MikeAndMike: Playoff games with 10 assists &amp; 10 rebounds: \n\nLeBron James       17\nMichael Jordan     2 https://t.co/BA2JHNxxsK",
	"NEW - NIKE Lebron XIII 13 \"On Court\" Men's Basketball Shoes 807219 060 - Sz 13 https://t.co/s6IDe1LXTr",
	"RT @DMightEatHer: At this point if you don't like LeBron James you just hatin",
	"RT @TheHerd: \"LeBron's floor in this league is the Finals. His ceiling is a parade.\" — @ColinCowherd reacts to his incredible 2nd half http…",
	"@SpitfireRap @varanasty I like him, he just cheers for a Chicago team. He doesn't want Lebron to win just because I like him.",
	"RT @BleacherReport: They want the throne #BRmag\n\nFull story ➡️ https://t.co/8oWkggAfbo https://t.co/0B7BcpoMCs",
	"RT @2KMTCentral: 1 new #Playoff card: LeBron James https://t.co/zSAqsyxU39 https://t.co/FrrOmwTFeR",
	"RT @TheHerd: LeBron's second half stat line was a reminder he's still the best player in the NBA https://t.co/gXpfy4ltFa",
	"RT @LegionHoops: With the win yesterday against the Pacers, LeBron continues to show his dominance in the playoffs. https://t.co/IBjxYAJCGC",
	"RT @BleacherReport: They want the throne #BRmag\n\nFull story ➡️ https://t.co/8oWkggAfbo https://t.co/0B7BcpoMCs",
	"RT @SN_Ohio: good morning, playoff LeBron https://t.co/kuI0r6VTaf",
	"RT @BalIersA: LeBron James travel or Nah? 😂😂😂 https://t.co/4yqCx2LVTJ"
];

}

TopicsShowCtrl.$inject = ['Topic', '$stateParams', 'Comment', 'Subtitle', 'Vote', '$state'];
function TopicsShowCtrl(Topic, $stateParams, Comment, Subtitle, Vote, $state) {
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
      .then(() => $state.reload());
  }

  vm.upvote = upvote;
  function upvote(vote) {
    Vote
      .save(vote)
      .$promise
      .then((response) => console.log(response));
  }
}
