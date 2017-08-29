/**
 * Created by Tran Quang Khai on 8/14/2017.
 */

$(document).ready(function () {
    $("#hide").click(function () {
        $("p").hide();
    });

    $("#show").click(function () {
        $("p").show();
    });

    $("h2").click(function () {
        $("p").toggle(10000);
    });
});