angular
  .module('forumApp')
  .factory('Topic', Topic)
  .factory('Comment', Comment)
  .factory('Subtitle', Subtitle)
  .factory('User', User)
  .factory('Vote', Vote);

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

Subtitle.$inject = ['API_URL', '$resource'];
function Subtitle(API_URL, $resource) {
  return new $resource(`${API_URL}/subtitles/:id`, { id: '@id' }, {
    update: { method: 'PUT' }
  });
}

User.$inject = ['API_URL', '$resource'];
function User(API_URL, $resource) {
  return new $resource(`${API_URL}/users/:id`, { id: '@id' }, {
    update: { method: 'PUT' }
  });
}

Vote.$inject = ['API_URL', '$resource'];
function Vote(API_URL, $resource) {
  return new $resource(`${API_URL}/votes/:id`, { id: '@id' }, {
    update: { method: 'PUT' }
  });
}
