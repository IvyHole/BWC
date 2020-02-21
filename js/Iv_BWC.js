$(function () {
    $("div[name='bottle_here']")
        .append($(document.createElement("div"))
            .append($(document.createElement("span"))

                .attr("name","bottle_up_in")
                .addClass("bottle_up_in")
            )
            .addClass("Bwc bottle_up")
        )
        .append($(document.createElement("div"))
            .append($(document.createElement("span"))
                .attr("name","bottle_body_in")
                .addClass("bottle_body_in")
            )
            .addClass("Bwc bottle_body")
        )
        .addClass("bottle")


    var AddBottle = function(){
        var bottles = new Array();
        $("div[name='bottle_here']").each(function(key){
            bottles[key] = $(this);
        });
        for(var i=0;i<bottles.length;i++) {
            if(bottles[i].attr("class") !== "bottle"){
                bottles[i].append($(document.createElement("div"))
                    .append($(document.createElement("span"))

                        .attr("id","bottle_up_in")
                        .addClass("bottle_up_in")
                    )
                    .addClass("Bwc bottle_up")
                )
                    .append($(document.createElement("div"))
                        .append($(document.createElement("span"))
                            .attr("id","bottle_body_in")
                            .addClass("bottle_body_in")
                        )
                        .addClass("Bwc bottle_body")
                    )
                    .addClass("bottle")
            }
        }
    };

    var ChangeBorderColor = function (color) {
        $(".Bwc").css("border-color",color);
    }
    
    var ChangeBottleUpColor = function (deg,color) {
        if(deg !== "null"){
            $(".bottle_up").css({
                "background-image":"linear-gradient("+deg+"deg,"+color+")"
            })
        }else{
            $(".bottle_up").css("background-color",color);
        }
    };
    var ChangeBottleBodyColor = function (deg,color) {
        if(deg !== "null"){
            $(".bottle_body").css("background-image","linear-gradient("+deg+"deg,"+color+")")
        }else{
            $(".bottle_body").css("background-color",color);
        }
    };

    var ChangeBottleWAndH =function(Iv_width,Iv_height){
        $(".bottle").css({
            "width":Iv_width,
            "height":Iv_height
        });
        $(".bottle_up").css({
            "width":Iv_width-Iv_width*0.24,
            "height":Iv_height*0.25
        });
        $(".bottle_body").css({
            "width":Iv_width,
            "height":Iv_height*0.75
        })
    };

    var ChangeBottleFilled = function(number){

        if(number>75){
            $(".bottle_body_in").css("height","0%");
            $(".bottle_up_in").css("height",(100-number)*4+"%");
      }else if(number<75){
            $(".bottle_up_in").css("height","100%");
            $(".bottle_body_in").css("height",(75-number)*4/3+"%");
        }else if(number===75){
            $(".bottle_up_in").css("height","100%");
            $(".bottle_body_in").css("height","0%");
        }else if(number === 100){
            $(".bottle_body_in").css("height","0%");
            $(".bottle_up_in").css("height","0%");
        }else if(number===0) {
            $(".bottle_body_in").css("height","100%");
            $(".bottle_up_in").css("height","100%");

        }
    };

    var ChangeAll = function(border_color,up_deg,up_color,body_deg,body_color,Iv_width,Iv_height,number){
        ChangeBorderColor(border_color);
        ChangeBottleUpColor(up_deg,up_color);
        ChangeBottleBodyColor(body_deg,body_color);
        ChangeBottleWAndH(Iv_width,Iv_height);
        ChangeBottleFilled(number);
    }
});