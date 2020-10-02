$(document).ready(function(){
    // $(".pt-1 .noidung").hide();
    // $(".pt-1 .tieude").addClass("xuong");
    // $(".pt-1:nth-child(1) .noidung").show();
    // $(".pt-1:nth-child(1) .tieude").removeClass("xuong");
    // $(".pt-1 .tieude").click(function(){
    //   $(".pt-1 .noidung").hide();
    //   $(".pt-1 .tieude").addClass("xuong");
    //   $(this).removeClass("xuong");
    //   $(this).next().toggle();
    // });
    $(window).scroll(function(){
        if($(window).scrollTop()>150)
        {
            $("header .bao .tren").hide();
            $("header").addClass("dichuyen");
            $("header").height("60px");
            $("header .bao .duoi").css("margin-left","0px");
            $("header .bao .duoi ul").css("color","#fff");
            $("header .bao .duoi ul").css("font-weight","500");
            $("header .bao .duoi ul li").css("color","#fff");
            $("header .bao .duoi ul li").hover(function(){
                $(this).css("color","rgba(102,102,102,0.85)");
            },function(){
                $(this).css("color","#fff");
            });
        }
        else{
            $("header .bao .tren").show();
            $("header").removeClass("dichuyen");
            $("header").height("125px");
            $("header .bao .duoi").css("margin-left","auto");
            $("header .bao .duoi ul").css("color","rgba(102,102,102,0.85)");
            $("header .bao .duoi ul").css("font-weight","600");
            $("header .bao .duoi ul li").css("color","rgba(102,102,102,0.85)");
            $("header .bao .duoi ul li").hover(function(){
                $(this).css("color","var(--mauxanh)");
            },function(){
                $(this).css("color","rgba(102,102,102,0.85)");
            });
        }
    });
});
function scrollto(div)
{
 $('html,body').animate(
 {
  scrollTop: $("#"+div).offset().top
 },'slow');
}
function openMenu(){
    $("header .bao .duoi ul").addClass("menuRes");
    $("header .bao .duoi .menuRes").width("250px");
}
function closeMenu(){
    $("header .bao .duoi .menuRes").width("0px");
    $("header .bao .duoi ul").width("fit-content");
    $("header .bao .duoi ul").removeClass("menuRes");
}
