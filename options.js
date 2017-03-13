
$(document).ready(function() {
    var allSaved = true;
    
    function updateSaved() {
        $('#save-button').prop('disabled', allSaved);
    }
    
    chrome.storage.sync.get({
        enableSearchShortcut: true,
        enableReaderShortcut: true,
        enableHighlightShortcut: true
    }, function(stored) {
        $('#enable-search-shortcut').prop('checked', stored.enableSearchShortcut);
        $('#enable-reader-shortcut').prop('checked', stored.enableReaderShortcut);
        $('#enable-highlight-shortcut').prop('checked', stored.enableHighlightShortcut);
        
        allSaved = true;
        updateSaved();

        $('#enable-search-shortcut').change(function() { allSaved = false; updateSaved(); });
        $('#enable-reader-shortcut').change(function() { allSaved = false; updateSaved(); });
        $('#enable-highlight-shortcut').change(function() { allSaved = false; updateSaved(); });
    });

    $('#save-button').click(function() {
        var enableSearchShortcut = $('#enable-search-shortcut').prop('checked');
        var enableReaderShortcut = $('#enable-reader-shortcut').prop('checked');
        var enableHighlightShortcut = $('#enable-highlight-shortcut').prop('checked');
        
        chrome.storage.sync.set({
            enableSearchShortcut: enableSearchShortcut,
            enableReaderShortcut: enableReaderShortcut,
            enableHighlightShortcut: enableHighlightShortcut,
        }, function() {
            allSaved = true;
            updateSaved();
        });
    });
});

