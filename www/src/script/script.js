$(function() {

        if (window.applicationCache!=undefined) {
            window.applicationCache.addEventListener('checking', function() {
                console.log("APPCACHE: Checking version");
            });
            window.applicationCache.addEventListener('downloading', function() {
                console.log("APPCACHE: Downloading application. Please wait...");
            });
            window.applicationCache.addEventListener('cached', function() {
                console.log("APPCACHE: Application downloaded");
            });
            window.applicationCache.addEventListener('updateready', function() {
                console.log("APPCACHE: Application downloaded");
                showInstall();
            });
            window.applicationCache.addEventListener('noupdate', function() {
                console.log("APPCACHE: Application downloaded");
            });
            window.applicationCache.addEventListener('error', function(e) {
                console.log("APPCACHE: There was an error downloading this app");
            });
            window.applicationCache.addEventListener('obsolete', function(e) {
                console.log("APPCACHE: There was an error downloading this app");
            });
        }

        function showInstall() {
            alert("Update update is installed. App will refresh to load latest changes");
            location.reload();
        }

});