document.addEventListener('DOMContentLoaded', function() {
    var show = document.getElementById('show');
    // onClick's logic below:
    show.addEventListener('click', function() {
        console.log('hello');
        showDownloadPath();
    });
});

function showDownloadPath() {
  document.getElementById("path").innerHTML = "Hi";
  chrome.downloads.showDefaultFolder();
}

