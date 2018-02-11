chrome.downloads.onCreated.addListener(function(downloadItem) {
    console.log('hello');
    chrome.downloads.showDefaultFolder();
    showDownloadPath();
});