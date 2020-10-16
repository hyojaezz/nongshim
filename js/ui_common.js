front = {
  st: 0,
  _scrollTop: 0,
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
    front.idSave();
    front.allMenu();
    front.noticePopup();
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
      slidesPerView: 3,
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
  idSave: function() {
    var idCheckBox = $('.login_text_wrap label');
    var idCheckClose = $('.input_wrap .login_text_wrap .id_save_wrap .id_save_close');
    var idWarning = $('.input_wrap .login_text_wrap .id_save_wrap')
    var idCheckIn = $('.login_text_wrap input[id="id_check"]');
    var checkedImg = $('.login_text_wrap .check_zone .checked_img');

    idCheckIn.on('click', function() {
      if ($(this).prop('checked')) {
        idWarning.fadeIn(200);
        checkedImg.css('width','21px');
      } else {
        idWarning.fadeOut(200);
        checkedImg.css('width','0');
      }
    });

    idCheckClose.on('click',function(e) {
      e.preventDefault();
      idWarning.fadeOut(200);
    });
  },

  allMenu: function() {
    var sitemap = $('#header .sitemap_wrap')
    var sitemapBtn = $('#header .util .menu_btn a');
    var sitemapCloseBtn = $('#header .sitemap_wrap .close_btn');
    var imgNum = 3;  
    var randomImg = Math.round(Math.random()*(imgNum-1))+1;
    var imgPath=('./images/randombgimg_'+randomImg+'.jpg');

    
    sitemapBtn.on('click', function(e) {
      e.preventDefault();
      sitemap.fadeIn(300);
      $('body').addClass('on');
    });
    sitemapCloseBtn.on('click', function(e) {
      e.preventDefault();
      sitemap.fadeOut(300);
      $('body').removeClass('on');
    });

    // $('.sitemap_wrap_bg').css('background-image', ('url("'+imgPath+'")'));
  },

  noticePopup: function () {
    var labelBtn = $('.notice label'),
    closeBtn = $('.notice .close_btn'),
    noticeModal = $('.notice_popup');

    labelBtn.on('click',function () {
      noticeModal.fadeOut();
      $('.dimm').fadeOut()
    });

    closeBtn.on('click',function () {
      noticeModal.fadeOut();
      $('.dimm').fadeOut()
    });
  },

  scrollMain: function () {
    console.log(front._scrollTop);

    var prTitleY = $('.prcenter .inner .text_wrap').offset().top;
    var prcenterY = $('.prcenter .prcenter_list li').offset().top;
    var nliveY = $('.nlive_center .text_wrap').offset().top;
    var nliveSnsY = $('.nlive_center .sns_list').offset().top;
    // var nliveSnsFiveY = $('.nlive_center .sns_list .sns_fivelist').offset().top;
    var etcCenterX = $('.etc_center .txt_wrap').offset().top;


    if(front._scrollTop > prTitleY - 880) {
      $('.prcenter .inner .text_wrap').addClass('on');
    } if(front._scrollTop > prcenterY - 855) {
      $('.prcenter .prcenter_list li').addClass('on');
    } if(front._scrollTop > nliveY - 766) {
      $('.nlive_center .text_wrap').addClass('on');
    } if(front._scrollTop > nliveSnsY - 781) {
      $('.nlive_center .sns_list').addClass('on');
    } if(front._scrollTop > etcCenterX - 818) {
      $('.etc_center .txt_wrap').addClass('on');
      $('.etc_center .etc_list').addClass('on');
    } 
    
    // console.log('요소의 값: '+prTitleY);
    // console.log('요소의 값: '+ prcenterY);
    // console.log('요소의 값: '+ nliveY);
    // console.log('요소의 값: '+ nliveSnsY);
    console.log('요소의 값: '+ etcCenterX);


  },
};




$(document).ready(function() {
  front.init();

  
  $('.body').addClass('on');
  $('.dimm').show().css('z-index', '10000');
  $('.notice_popup').fadeIn(300);

  $(window).scroll(function() {
    front._scrollTop = $(document).scrollTop();  

    front.scrollMain();
  });
  
});

