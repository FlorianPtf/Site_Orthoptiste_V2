$(function() {
    /**
    * Smooth scrolling to page anchor on click
    **/
    $("a[href*='#']:not([href='#'])").click(function() {
        if (
            location.hostname == this.hostname
            && this.pathname.replace(/^\//,"") == location.pathname.replace(/^\//,"")
        ) {
            var anchor = $(this.hash);
            anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) +"]");
            if ( anchor.length ) {
                $("html, body").animate( { scrollTop: anchor.offset().top }, 2000);
            }
        }
    });
});


// $(function() {
//     /**
//     * Smooth scrolling to the top of page !
//     **/
//     $("html, body").animate({scrollTop : 0}, 1500);
// });