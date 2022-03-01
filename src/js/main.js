// import './helpers/postDate';
import burger from './modules/burger-menu';

function main() {

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
