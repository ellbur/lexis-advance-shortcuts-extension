
$(document).ready(function() {
    var allSaved = true;
    
    function updateSaved() {
        $('#save-button').prop('disabled', allSaved);
    }
    
    chrome.storage.sync.get({
        enableSearchShortcut: true,
        enableReaderShortcut: true
    }, function(stored) {
        $('#enable-search-shortcut').prop('checked', stored.enableSearchShortcut);
        $('#enable-reader-shortcut').prop('checked', stored.enableReaderShortcut);
        
        allSaved = true;
        updateSaved();

        $('#enable-search-shortcut').change(function() { allSaved = false; updateSaved(); });
        $('#enable-reader-shortcut').change(function() { allSaved = false; updateSaved(); });
    });

    $('#save-button').click(function() {
        var enableSearchShortcut = $('#enable-search-shortcut').prop('checked');
        var enableReaderShortcut = $('#enable-reader-shortcut').prop('checked');
        
        chrome.storage.sync.set({
            enableSearchShortcut: enableSearchShortcut,
            enableReaderShortcut: enableReaderShortcut
        }, function() {
            allSaved = true;
            updateSaved();
        });
    });
});

