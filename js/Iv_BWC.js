
function bwc_AddBottle(){
    $(function () {
        var bottles = new Array();
        $("div[name='bottle_here']").each(function(key){
            bottles[key] = $(this);
        });
        for(var i=0;i<bottles.length;i++) {
            if(bottles[i].attr("class") !== "bwc_bottle"){
                bottles[i].append($(document.createElement("div"))
                    .append($(document.createElement("span"))

                        .attr("name","bwc_bottle_up_in")
                        .addClass("bwc_bottle_up_in")
                    )
                    .addClass("Bwc bwc_bottle_up")
                )
                    .append($(document.createElement("div"))
                        .append($(document.createElement("span"))
                            .attr("name","bwc_bottle_body_in")
                            .addClass("bwc_bottle_body_in")
                        )
                        .addClass("Bwc bwc_bottle_body")
                    )
                    .addClass("bwc_bottle")
                    .attr("id","bottle"+i);
            }
        }
    })
}

$(function () {
    $("div[name='bottle_here']")
        .append($(document.createElement("div"))
            .append($(document.createElement("span"))

                .attr("name","bwc_bottle_up_in")
                .addClass("bwc_bottle_up_in")
            )
            .addClass("Bwc bwc_bottle_up")
        )
        .append($(document.createElement("div"))
            .append($(document.createElement("span"))
                .attr("name","bwc_bottle_body_in")
                .addClass("bwc_bottle_body_in")
            )
            .addClass("Bwc bwc_bottle_body")
        )
        .addClass("bwc_bottle");


    $.fn.bwc_AddBottleTo = function(id){
            if(this.attr("class") !== "bwc_bottle"){
                this.append($(document.createElement("div"))
                    .append($(document.createElement("span"))

                        .attr("name","bwc_bottle_up_in")
                        .addClass("bwc_bottle_up_in")
                    )
                    .addClass("Bwc bwc_bottle_up")
                )
                    .append($(document.createElement("div"))
                        .append($(document.createElement("span"))
                            .attr("name","bwc_bottle_body_in")
                            .addClass("bwc_bottle_body_in")
                        )
                        .addClass("Bwc bwc_bottle_body")
                    )
                    .addClass("bwc_bottle")
                    .attr("id",id);
            }

    };

    $.fn.bwc_ChangeBorderColor = function (color) {
        $(this).children(".Bwc").css("border-color",color);
    }

    $.fn.bwc_ChangeBottleUpColor = function (deg,color) {
        var bwc_up = $(this).children(".bwc_bottle_up");
        if(deg !== "null"){
            bwc_up.css({
                "background-image":"linear-gradient("+deg+"deg,"+color+")"
            })
        }else{
            bwc_up.css("background-color",color);
        }
    };
    $.fn.bwc_ChangeBottleBodyColor = function (deg,color) {
        var bwc_body = $(this).children(".bwc_bottle_body");
        if(deg !== "null"){
            bwc_body.css("background-image","linear-gradient("+deg+"deg,"+color+")")
        }else{
            bwc_body.css("background-color",color);
        }
    };

    $.fn.bwc_ChangeBottleWAndH =function(Iv_width,Iv_height){
        $(this).css({
            "width":Iv_width,
            "height":Iv_height
        });
        $(this).children(".bwc_bottle_up").css({
            "width":Iv_width-Iv_width*0.24,
            "height":Iv_height*0.25
        });
        $(this).children(".bwc_bottle_body").css({
            "width":Iv_width,
            "height":Iv_height*0.75
        });
        $(this).find($(".bwc_bottle_body_in")).css("border-radius", "0 0 "+Iv_height*0.19+"px "+Iv_height*0.06+"px")
    };

    $.fn.bwc_ChangeBottleFilled = function(number){

        if(number>75){
            $(this).find($(".bwc_bottle_body_in")).css("height","0%");
            $(this).find($(".bwc_bottle_up_in")).css("height",(100-number)*4+"%");
      }else if(number<75){
            $(this).find($(".bwc_bottle_up_in")).css("height","100%");
            $(this).find($(".bwc_bottle_body_in")).css("height",(75-number)*4/3+"%");
        }else if(number===75){
            $(this).find($(".bwc_bottle_up_in")).css("height","100%");
            $(this).find($(".bwc_bottle_body_in")).css("height","0%");
        }else if(number === 100){
            $(this).find($(".bwc_bottle_body_in")).css("height","0%");
            $(this).find($(".bwc_bottle_up_in")).css("height","0%");
        }else if(number===0) {
            $(this).find($(".bwc_bottle_body_in")).css("height","100%");
            $(this).find($(".bwc_bottle_up_in")).css("height","100%");

        }
    };

    $.fn.bwc_ChangeAll = function(border_color,up_deg,up_color,body_deg,body_color,Iv_width,Iv_height,number){
        $(this).bwc_ChangeBorderColor(border_color);
        $(this).bwc_ChangeBottleUpColor(up_deg,up_color);
        $(this).bwc_ChangeBottleBodyColor(body_deg,body_color);
        $(this).bwc_ChangeBottleWAndH(Iv_width,Iv_height);
        $(this).bwc_ChangeBottleFilled(number);
    }

});
/*
$(function () {*/
//  var rule = /\d*/;
/*    var switcher;
    $(".bwc_bottle").dblclick(function () {
        switcher=$(this);
        var this_id = $(this).attr("id");
        var Y = $(this).offset().top;
        var X = $(this).offset().left;

        var AX=$(document).height();
        console.log(rule.exec($(this).css("width"))[0]);
        $(this).append($(document.createElement("div"))
            .addClass("bwc_change")
            .css({
                "left" : X +rule.exec($(this).css("width"))[0] ,
                "top" : Y
            })
            .append($(document.createElement("label"))
                .text("改变填充多少：")
                .css({
                    "position" : "relative",
                    "top":"10px"
                })
            )
            .append($(document.createElement("input"))
                    .addClass("bwc_change_F")
                    .attr({
                        "type":"range",
                        "max":"100",
                        "min":"0",
                        "step":"1",
                        "value":(100-rule.exec($(this).find($(".bwc_bottle_up_in")).css("height"))[0])+(100-rule.exec($(this).find($(".bwc_bottle_body_in")).css("height"))[0])
                    })
                )

        )

    });
    $(".bwc_change_F").change(function () {
        switcher.bwc_ChangeBottleFilled(rule.exec((this).value)[0]);
    })
});
 */
