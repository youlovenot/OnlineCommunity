$(document).ready(function() {
    $(".board #select_category #all").css({"color":"white", "background-color":"#777"});
    $(".board #all_b").show();
    $(".board #chat_b").hide();
    $(".board #info_b").hide();
    $(".board #etc_b").hide();
    $(".board #select_category #all").click(function() {
        $(".board #select_category #all").css({"color":"white", "background-color":"#777"});
        $(".board #select_category #chat").css({"color":"black", "background-color":"rgba(0,0,0,0)"});
        $(".board #select_category #infomation").css({"color":"black", "background-color":"rgba(0,0,0,0)"});
        $(".board #select_category #etc").css({"color":"black", "background-color":"rgba(0,0,0,0)"});
        $(".board #all_b").show();
        $(".board #chat_b").hide();
        $(".board #info_b").hide();
        $(".board #etc_b").hide();
    });
    $(".board #select_category #chat").click(function() {
        $(".board #select_category #chat").css({"color":"white", "background-color":"#777"});
        $(".board #select_category #all").css({"color":"black", "background-color":"rgba(0,0,0,0)"});
        $(".board #select_category #infomation").css({"color":"black", "background-color":"rgba(0,0,0,0)"});
        $(".board #select_category #etc").css({"color":"black", "background-color":"rgba(0,0,0,0)"});
        $(".board #chat_b").show();
        $(".board #all_b").hide();
        $(".board #info_b").hide();
        $(".board #etc_b").hide();
    });
    $(".board #select_category #infomation").click(function() {
        $(".board #select_category #infomation").css({"color":"white", "background-color":"#777"});
        $(".board #select_category #chat").css({"color":"black", "background-color":"rgba(0,0,0,0)"});
        $(".board #select_category #all").css({"color":"black", "background-color":"rgba(0,0,0,0)"});
        $(".board #select_category #etc").css({"color":"black", "background-color":"rgba(0,0,0,0)"});
        $(".board #info_b").show();
        $(".board #chat_b").hide();
        $(".board #all_b").hide();
        $(".board #etc_b").hide();
    });
    $(".board #select_category #etc").click(function() {
        $(".board #select_category #etc").css({"color":"white", "background-color":"#777"});
        $(".board #select_category #chat").css({"color":"black", "background-color":"rgba(0,0,0,0)"});
        $(".board #select_category #infomation").css({"color":"black", "background-color":"rgba(0,0,0,0)"});
        $(".board #select_category #all").css({"color":"black", "background-color":"rgba(0,0,0,0)"});
        $(".board #etc_b").show();
        $(".board #chat_b").hide();
        $(".board #info_b").hide();
        $(".board #all_b").hide();
    });
});