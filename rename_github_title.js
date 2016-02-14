
(function rename_github_title() {
  'use strict';

  var pathname = window.location.pathname.replace(/\/blob\/[^/]+/, '');
  var arr = pathname.split('/');
  if (arr.length > 2) {
    document.title = arr.slice(2).join('/');
  }
})();