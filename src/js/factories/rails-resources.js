angular
  .module('forumApp')
  .factory('Topic', Topic)
  .factory('Comment', Comment);

Topic.$inject = ['API_URL', '$resource'];
function Topic(API_URL, $resource) {
  return new $resource(`${API_URL}/topics/:id`, { id: '@id' });
}

Comment.$inject = ['API_URL', '$resource'];
function Comment(API_URL, $resource) {
  return new $resource(`${API_URL}/comments/:id`, { id: '@id' }, {
    update: { method: 'PUT' }
  });
}
