$(function () {
    $('.file-manager').click(function (e) {
        e.preventDefault();
        var rel = $(this).attr('rel');
        window.open('/Admin/FileManager/?sourceInputId=' + rel, '', 'width=800,height=570,toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no');
    });
});