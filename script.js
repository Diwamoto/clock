function halftime() {
    var today = new Date();
    if ($('.clock').data('flag') == "0") {
        $('.clock').html(today.getHours() + ":" + ('0' + today.getMinutes()).slice(-2) + ":" + ('0' + today.getSeconds()).slice(-2));
        $('.clock').data('flag', "1");
    } else {
        $('.clock').html($('.clock').text().replaceAll(":", " "));
        $('.clock').data('flag', "0");
    }
}
setInterval(halftime, 500);