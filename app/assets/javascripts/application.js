
      
        /*reveal script*/
        $('.revealHeader a').click(function() {
        $('#revealContent').slideToggle("slow");
        $('span.icon').toggleClass("active");
        $('span.textLink').toggleClass("active");
        $('#reveal').removeClass("sticky");
        $('html,body').animate({
        scrollTop: $("#reveal").offset().top},
        'slow');
        });
        
        /*reveal script*/
        $('.revealClose').click(function() {
        $('#revealContent').slideToggle("slow");
        $('span.icon').toggleClass("active");
        $('span.textLink').toggleClass("active");
        $('html,body').animate({
        scrollTop: $("#reveal").offset().top},
        'slow');
        }); 
        
