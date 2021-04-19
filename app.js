$(function () {


})


function init() {

    /* 지도 생성 */
    map = new soda.Map('map');

    /* 배경지도 등록 */
    map.addBaseLayer({
        type: 'tms',
        id: '1',
        title: '브이월드 일반',
        projection: 'EPSG:3857',
        url: 'http://api.vworld.kr/req/tms/1.0.0/22BD2E28-F8A6-3452-8196-594FE444AC02/Base/{z}/{y}/{x}.png',
        tileSize: 256,
        maxResolution: 156543.03392804097,
        numZoomLevels: 14,
        maxZoom: 19,
        minZoom: 2,
        extent: [-20037508.34, -20037508.34, 20037508.34, 20037508.34],
        origin: [-20037508.34, -20037508.34]
    });

    /* 배경지도 활성화 */
    map.activeBaseLayer('1');

    map.zoomToExtentLonLat([126.8039377, 37.3123631, 126.8274553, 37.3294273]);

    trigger();
}

/* Trigger */
function trigger() {
    /* $(functuin(){ ~ }) 은 document.ready 와 동일함. 
    html을 다 읽고 ~ 코드를 실행해줘, 라는 의미임 */
    var mobileBtn = $('.trigger');
    var mobileBox = $('.mobileBox');

    mobileBtn.click(function () {
        $(this).toggleClass('active');
        mobileBox.toggleClass('active');
    })

    $('section, .menu a').click(function () {
        mobileBtn.removeClass('active');
        mobileBox.removeClass('active');
    })

    // /* Smooth Scrolling */
    // $('.menu a, .gototop').click(function (e) {
    //     /* 0.9 초 동안 이동하라, 는 의미임 */
    //     $.scrollTo(this.hash || 0, 900)
    // })

    // // Change CSS with Scroll
    // $(window).scroll(function () {

    //     if ($(window).scrollTop() > 50) {
    //         $('header, .gototop').addClass('active');
    //     } else {
    //         $('header, .gototop').removeClass('active');
    //     }
    // })
}