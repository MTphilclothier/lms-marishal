
$(function () {
    var courseId = location.href.match(/courseId=(\d+)/)[1];
    setInterval(function() {
        var timeStamp = (new Date().toUTCString()).replace(/[ ,:/]/g, '');
        var url = '/Course/UpdateTimeSpent?courseId=' + courseId + '&timeStamp=' + timeStamp;
        $.getJSON(url);
    }, 5000);
})