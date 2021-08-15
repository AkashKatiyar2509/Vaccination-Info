
$(document).ready(function(){
    $("nav-item dropdown").click(function(){
            $("ul").slideDown();


            $("ul ul").css("display", "none");
        });
        $("nav-item dropdown").click(function(){
                $("ul").slideUp();


                $("ul ul").css("display", "none");
            });

        // $("ul li").click(function(){
        //     $("ul ul").slideUp();
        //     $(this).find('ul').slideToggle();
        // });
        $('ul li').click(function () {
            $(this).siblings().find('ul').slideUp();
            $(this).find('ul').slideToggle();
        });

        $(window).resize(function(){
            if($(window).width() > 768){
                $("ul").removeAttr('style');
            }
        });
 });
