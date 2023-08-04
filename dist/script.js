$(document).ready(function () {
    const desktop_links = document.querySelectorAll('#navbar ul li a');
    const mobile_links = document.querySelectorAll('#sidebar ul li a');
    const sections = document.querySelectorAll('.sections');

    $('#back-to-top').hide();

    $(window).scroll(function () {
        if (window.pageYOffset > 70) {
            $('#navbg').addClass('bg-custom-navbar');
            $('.logo').each(function() {
                $(this).addClass('custom-width');
            });            
            $('#navbar').addClass('py-custom');
        } else {
            $('#navbg').removeClass('bg-custom-navbar');
            $('.logo').each(function() {
                $(this).removeClass('custom-width');
            });
            $('#navbar').removeClass('py-custom');
        }

        if (window.pageYOffset > 300) {
            $('#back-to-top').show();
        } else {
            $('#back-to-top').hide();
        }
    });

    function closeMenu() {
        $('#sidebar').addClass('close-sidebar');
        $('#sidebar').removeClass('open-sidebar');
        $('.mobile-nav-item').each(function () {
            $(this).addClass('first-position');
        });
    }

    $('#back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });

    $('#open').click(function () {
        setTimeout(function () {
            $('#sidebar').addClass('open-sidebar');
            $('#sidebar').removeClass('close-sidebar');
            $('.mobile-nav-item').each(function () {
                $(this).removeClass('first-position');
            });
        }, 500);
    });

    $('#close').click(function () {
        closeMenu();
    });

    $('#theme').click(function () {
        $('html').toggleClass('dark');
    });

    $(mobile_links).click(function () {
        closeMenu();
        smoothscroll(event);
    });

    $(desktop_links).click(function () {
        closeMenu();
        smoothscroll(event);
    });

    window.addEventListener('scroll', () => {
        let x = sections.length;

        while (x-- && window.scrollY + 100 < sections[x].offsetTop) { }

        for (let i = 0; i < desktop_links.length; i++) {
            desktop_links[i].classList.remove('blue');
            mobile_links[i].classList.remove('blue');
        }

        desktop_links[x].classList.add('blue');
        mobile_links[x].classList.add('blue');
    });

    function smoothscroll(event) {
        event.preventDefault();
        const target = event.currentTarget.getAttribute('href');
        const targetposition = document.querySelector(target).offsetTop;
        const startposition = window.pageYOffset;
        const distance = targetposition - startposition;
        const duration = 1000;
        let start = null;

        window.requestAnimationFrame(step);

        function step(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            window.scrollTo(0, easeInOutCubic(progress, startposition, distance, duration));
            if (progress < duration) window.requestAnimationFrame(step);
        }
    }

    function easeInOutCubic(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
    };

});

