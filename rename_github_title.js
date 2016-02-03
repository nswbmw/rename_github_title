
(function rename_github_title() {
  'use strict';
  
	var pathname = window.location.pathname;
  var matches = pathname.match(/^\/([^/]+)\/([^/]+)/);
  if (matches) {
    document.title = matches[2];
  }
})();