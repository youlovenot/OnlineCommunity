$(document).ready(function() {
    $("#main .board #tank").css({"color":"white", "background-color":"rgb(62, 90, 214)"});
    $("#main .board #tank_g").show();
    $("#main .board #heal_g").hide();
    $("#main .board #deal_g").hide();
    $("#main .board #tank").mouseenter(function() {
        $("#main .board #tank").css({"color":"white", "background-color":"rgb(62, 90, 214)"});
        $("#main .board #heal").css({"color":"black", "background-color":"rgba(0,0,0,0)"});
        $("#main .board #deal").css({"color":"black", "background-color":"rgba(0,0,0,0)"});
        $("#main .board #tank_g").show();
        $("#main .board #heal_g").hide();
        $("#main .board #deal_g").hide();
    });
    $("#main .board #heal").mouseenter(function() {
        $("#main .board #heal").css({"color":"white", "background-color":"rgb(62, 90, 214)"});
        $("#main .board #tank").css({"color":"black", "background-color":"rgba(0,0,0,0)"});
        $("#main .board #deal").css({"color":"black", "background-color":"rgba(0,0,0,0)"});
        $("#main .board #tank_g").hide();
        $("#main .board #heal_g").show();
        $("#main .board #deal_g").hide();
    });
    $("#main .board #deal").mouseenter(function() {
        $("#main .board #deal").css({"color":"white", "background-color":"rgb(62, 90, 214)"});
        $("#main .board #heal").css({"color":"black", "background-color":"rgba(0,0,0,0)"});
        $("#main .board #tank").css({"color":"black", "background-color":"rgba(0,0,0,0)"});
        $("#main .board #tank_g").hide();
        $("#main .board #heal_g").hide();
        $("#main .board #deal_g").show();
    });
});