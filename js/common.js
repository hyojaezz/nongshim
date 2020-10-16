front = {
  st: 0,
  scroll: 0,
  topBtn: null,

  init: function() {
    front.headerUi();
    front.langUi();
    front.searchZone();
    front.mainSlider();
    front.nongSlider();
    front.topBrandList();
    front.brandListOpen();
    front.videoPopUp();
    front.familySite();
  },

  headerUi: function() {
    var headerOn = $('#header');
    var gnbList = $('#header .gnb>li');
    var depth2 = $('#header .gnb>li .depth2');

    gnbList.on('mouseenter', function() {
      headerOn.addClass('on');
      depth2.show();
    });
    gnbList.on('mouseleave', function() {
      headerOn.removeClass('on');
      depth2.hide();
    });

  },

  langUi: function(e) {
    var langBtn = $('.lang_btn>a');
    var lang = $('.lang');

    langBtn.on('click', function() {
      $('.lang').fadeToggle();
    });

    $('#container, #footer').click(function() {
      lang.fadeOut();
      // $('#header').css('top','0');
    });

  },

  searchZone: function() {
    var searchOpen = $('#header .search_zone');
    var searchClick = $('#header .util .search_btn');
    var searchClose = $('#header .search_zone .search_close_btn');

    searchClick.on('click', function() {
      searchOpen.css('top','0');
      $('#header').css('top','200px');
    });
    searchClose.on('click', function() {
      searchOpen.css('top','-200px');
      $('#header').css('top','0');
    });

    $('#container, #footer').click(function() {
      searchOpen.css('top','-200px');
      $('#header').css('top','0');
    });
  },

  mainSlider: function() {
    var mainSlider = new Swiper('.main_banner_container', {
      speed: 500,
      autoplay: {
        delay: 5000
      },
      loop: true,
      pagination: {
        el: '.main_banner_pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },
    });
  },

  nongSlider: function() {   
    var nongSwiper = new Swiper('.nong_tv_slider', {
      slidesPerView: 2.7,
      // initialSlide: 1,
      spaceBetween: 80,
      centeredSlides: true,
      runCallbacksOnInit: false,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },    
      on : {
        slideChange :function() {
        },
        slideChangeTransitionEnd : function() {
          $(".nong_tv_slider .video_grp .text_wrap[data-text-index='"+this.realIndex+"']").fadeIn(500).siblings().hide();
        },
        init: function(){
          var i = this.realIndex;
          $(".nong_tv_slider .video_grp .text_wrap").each(function(){
            $(this).attr('data-text-index', i);
            i++;
          });
          $(".nong_tv_slider .video_grp .text_wrap[data-text-index="+this.realIndex+"]").show();
        },
      },
    }); 
  },

  topBrandList: function() {
    var brandList = $('.brand_center .brand_list_top li');
    // var brandListBtn = $('.brand_center .brand_list_top li a');

    brandList.each(function() {
      $(this).click(function(e) {
        e.preventDefault();
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
      });
    });
  },

  brandListOpen: function() {
    var listClick = $('.brand_center .brand_list_top>li');
    var brandList = $('.brand_center .brand_list_bottom');

    $('.brand_center .brand_list_bottom:gt(0)').hide();

    listClick.click(function(e) {
      e.preventDefault();

      var idx = $(this).index();

      console.log(brandList.index());
      brandList.eq(idx).show().siblings('.brand_list_bottom').hide();
    });

  },

  videoPopUp: function() {
    var btnClick = $('#container .nong_tv_slider .swiper-wrapper .swiper-slide .play_btn');
    var videoWrap = $('#container .nong_tv .popup_video_wrap');
    var videoDim = $('#container .nong_tv .video_dim');
    var videoPopup1 = $('#container .nong_tv .popup_video_wrap .inner.one');
    var videoPopup2 = $('#container .nong_tv .popup_video_wrap .inner.two');
    var videoPopup3 = $('#container .nong_tv .popup_video_wrap .inner.three');
    var videoPopup4 = $('#container .nong_tv .popup_video_wrap .inner.four');
    var closeBtn = $('#container .popup_video_wrap .inner .video_close')
    var OnePlayBtn = $('#container .nong_tv_slider .swiper-wrapper .swiper-slide .one_btn');
    var twoPlayBtn = $('#container .nong_tv_slider .swiper-wrapper .swiper-slide .two_btn');
    var threePlayBtn = $('#container .nong_tv_slider .swiper-wrapper .swiper-slide .three_btn');
    var fourPlayBtn = $('#container .nong_tv_slider .swiper-wrapper .swiper-slide .four_btn');

    btnClick.on('click', function(e) {
      e.preventDefault();
    });

    OnePlayBtn.on('click', function(e) {
      e.preventDefault();
      videoWrap.fadeIn();
      videoDim.fadeIn();
      videoPopup1.fadeIn();
      videoPopup1.siblings('.inner').hide();
      $('.video1').attr('src','https://www.youtube.com/embed/iCS3HSrIZGA');
    });


    twoPlayBtn.click(function (e) {
      e.preventDefault();
      videoWrap.fadeIn();
      videoDim.fadeIn();
      videoPopup2.fadeIn();
      videoPopup2.siblings('.inner').hide();
      $('.video2').attr('src','https://www.youtube.com/embed/7G15-AcQYpM');
    });

    threePlayBtn.click(function (e) {
      e.preventDefault();
      videoWrap.fadeIn();
      videoDim.fadeIn();
      videoPopup3.fadeIn();
      videoPopup3.siblings('.inner').hide();
      $('.video3').attr('src','https://www.youtube.com/embed/5Qz0IYG8kvA');
    });

    fourPlayBtn.click(function (e) {
      e.preventDefault();
      videoWrap.fadeIn();
      videoDim.fadeIn();
      videoPopup4.fadeIn();
      videoPopup4.siblings('.inner').hide();
      $('.video4').attr('src','https://www.youtube.com/embed/flntDMsmFX0');
    });



    closeBtn.on('click', function(e) {
      videoWrap.fadeOut();
      $(videoDim).fadeOut(300);
      $('iframe').attr('src','');
    });

    videoDim.on('click', function() {
      videoWrap.fadeOut();
      videoDim.fadeOut(300);
      $('iframe').attr('src','');
    });
  },

  familySite: function() {
    var fsListBtn = $('.family_site .fs_btn');
    var fsList = $('.family_site .fs_list');

    fsListBtn.on('click', function(e) {
      e.preventDefault();
      fsList.slideToggle();
    });
    
  },


};




$(document).ready(function() {
  front.init();  

});

