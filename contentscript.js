
// vim: tabstop=2
// vim: shiftwidth=2

(function() {
  'use strict';
  $(document).ready(function() {
    $(window.document.body).keypress(function (evt) {
      if (evt.target == window.document.body) {
        if (String.fromCharCode(evt.which) == '/') {
          chrome.storage.sync.get({enableSearchShortcut: true}, function(stored) {
            if (stored.enableSearchShortcut) {
              if ($("main").hasClass("readermode")) {
                $('button[data-action=readerexit]').click();
              }
              
              $('#searchTerms').focus();
              $('#searchTerms').select();
              evt.preventDefault();
              return false;
            }
          });
        }
      }
    });

    $(window).keydown(function (evt) {
      if (evt.target == window.document.body) {
        if (!evt.ctrlKey && !evt.shiftKey && !evt.metaKey && !evt.altKey) {
          if (evt.which == 82) { // r
            chrome.storage.sync.get({enableReaderShortcut: true}, function(stored) {
              if (stored.enableReaderShortcut) {
                if ($("main").hasClass("readermode")) {
                  $('button[data-action=readerexit]').click();
                }
                else {
                  $('button[data-action=readerenter]').click();
                }
                evt.preventDefault();
                return false;
              }
            });
          }
        }
      }
    });
  });
})();

