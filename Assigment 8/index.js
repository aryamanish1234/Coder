$(document).ready(function() {
    $(".geeks2").click(function() {
        var demo = "Previous-height: " + $("#div1").height(); +
        "px";
        $("#p1").text(demo);

        var newHeight = $(".geeks1").val();
        $(".box").height(newHeight);

        demo = "New-height: " + $("#div1").height(); +
        "px";
        $("#p2").text(demo);
    });
});