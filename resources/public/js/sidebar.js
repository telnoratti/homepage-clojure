var navdown = false;

function sidebar() {
    if (!navdown) {
        $("div#top div#navdrop nav").animate({opacity: 1.0});

        $('div#top div#navdrop img#uparrow').animate({opacity: 1.0});
        $('div#top div#navdrop img#downarrow').animate({opacity: 0.0});

        $('div#top div#navdrop img#uparrow').css({'z-index': 1});
        $('div#top div#navdrop img#downarrow').css({'z-index': -1});

        for (i = 4; i >= 1; i--) {
            $("div#top div#navdrop nav li:nth-child("+i+") ").animate({
                top: 130 + (i - 1) * 60
            });
            $("div#top div#navdrop nav li:nth-child("+i+") a").attr('href', 'javascript:content('+i+')');
        };
        $("div#top div#navdrop nav li").animate({'z-index': 2});
        navdown = true;
    }
    else {
        $("div#top div#navdrop nav").animate({opacity: 0.0});

        $('div#top div#navdrop img#uparrow').animate({opacity: 0.0}, 400);
        $('div#top div#navdrop img#downarrow').animate({opacity: 1.0}, 400);

        $('div#top div#navdrop img#uparrow').css({'z-index': -1});
        $('div#top div#navdrop img#downarrow').css({'z-index': 1});

        $("div#top div#navdrop nav li").animate({top: 60});
        $("div#top div#navdrop nav li").animate({'z-index': -2});

        $("div#top div#navdrop nav li a").removeAttr('href');
        navdown = false;
    }
}

var contentindex = 1;

function content(index) {
    if (index != contentindex) {

        $("div#content div#c"+contentindex).animate({opacity: 0.0}, 800);
        $("div#content div#c"+contentindex).css({'z-index': -1});

        $("div#content div#c"+index).animate({opacity: 1.0}, 800);
        $("div#content div#c"+index).css({'z-index': 1});

        contentindex = index;
    }
}