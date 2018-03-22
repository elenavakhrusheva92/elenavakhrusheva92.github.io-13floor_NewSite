jQuery(function($) {
        var open = false;
        $('.footerSlideButton').click(function () {
            if(open === false) {
                $('.footerSlideContent').animate({ height: '100%', padding: '130px 0 54px 0;' });
                $(this).css('backgroundPosition', 'bottom center');
                open = true;
            } else {
                $('.footerSlideContent').animate({ height: '0px', padding: '0' });
                $(this).css('backgroundPosition', 'top center');
                open = false;
            }
        });
    });
