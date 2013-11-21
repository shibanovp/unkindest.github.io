!function($) {
/*scrollspy*/
    $(function() {

        var $window = $(window)
        var $body = $(document.body)

        var navHeight = $('.navbar').outerHeight(true) + 100

        $body.scrollspy({
            target: '.bs-sidebar',
            offset: navHeight
        })

        $window.on('load', function() {
            $body.scrollspy('refresh')
        })

        $('.bs-docs-container [href=#]').click(function(e) {
            e.preventDefault()
        })

        // back to top
        setTimeout(function() {
            var $sideBar = $('.bs-sidebar')

            $sideBar.affix({
                offset: {
                    top: function() {
                        var offsetTop = $sideBar.offset().top
                        var sideBarMargin = parseInt($sideBar.children(0).css('margin-top'), 10)
                        var navOuterHeight = $('.bs-docs-nav').height()

                        return (this.top = offsetTop - navOuterHeight - sideBarMargin)
                    }
                    , bottom: function() {
                        return (this.bottom = $('.bs-footer').outerHeight(true))
                    }
                }
            })
        }, 100)

        setTimeout(function() {
            $('.bs-top').affix();

            setInterval(function() {
                $('ul.nav.navbar-nav li').removeClass('active');
                var a = $('ul.nav.bs-sidenav >li > ul > li.active a');
                if (!a.length)
                    a = $('ul.nav.bs-sidenav > li.active a');
                //alert(a.attr("href"));
                if (a.parent().has('ul').length)
                    return;                
                $('ul.nav.navbar-nav a[href=' + a.attr("href") + ']').parent().addClass("active");
                //alert(select);
            }, 100)
        }, 100)
        $('ul.nav.navbar-nav li').on('click',function(){
            $('ul.nav.navbar-nav li').removeClass('active');
            this.addClass('active');
        })

        // tooltip demo
        $('.tooltip-demo').tooltip({
            selector: "[data-toggle=tooltip]",
            container: "body"
        })

        $('.tooltip-test').tooltip()
        $('.popover-test').popover()

        $('.bs-docs-navbar').tooltip({
            selector: "a[data-toggle=tooltip]",
            container: ".bs-docs-navbar .nav"
        })


    })
}(window.jQuery)
