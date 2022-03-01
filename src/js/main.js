import './helpers/postDate';
import burger from './modules/burger-menu';

function main() {
    if (document.documentElement.clientWidth > 1220) {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 375) {
                $(".item-template-1-share-panel-content").addClass("sticky");
            } else {
                $(".item-template-1-share-panel-content").removeClass("sticky");
            }
        });
    }

    if (document.documentElement.clientWidth < 1220) {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 305) {
                $(".item-template-1-share-panel-content").addClass("sticky");
            } else {
                $(".item-template-1-share-panel-content").removeClass("sticky");
            }
        });
    }
}

burger();

if (document.documentElement.clientWidth < 480) {
    window.addEventListener('scroll',
        function () {
            return setTimeout(main, 1000);
        }, {
            once: true
        });
} else {
    main();
}

