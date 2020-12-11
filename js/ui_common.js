front = {
  st: 0,
  _scrollTop: 0,
  topBtn: null,
  contents: null,

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
    front.contents = $('#container section');
    front.agreePop();
    front.agreeCheckBox();
    front.history = $('.history_list .history_img');
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
      slidesPerView: '2.7',
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

      // console.log(brandList.index());
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
      // fsList.slideToggle();
      $('.family_site').toggleClass('on');
      fsList.toggle();
    });
    
  },
  idSave: function() {
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
      sitemap.addClass('on');
      $('body').addClass('on');
    });
    sitemapCloseBtn.on('click', function(e) {
      e.preventDefault();
      sitemap.removeClass('on');
      // sitemap.fadeOut(300);
      $('body').removeClass('on');
    });

    // $('.sitemap_wrap_bg').css('background-image', ('url("'+imgPath+'")'));
  },

  noticePopup: function () {
    var labelBtn = $('.notice label'),
        closeBtn = $('.notice .close_btn'),
        noticeModal = $('.notice_popup'),
        dimmPopup = $('.dimm');

    labelBtn.on('click',function () {
      noticeModal.fadeOut();
      dimmPopup.removeClass('on');
    });

    closeBtn.on('click',function () {
      noticeModal.fadeOut();
      dimmPopup.fadeOut()
    });
  },

  scrollMain: function () {
    console.log(front._scrollTop);

    var posArr = [];
    var idx = 0;

    while(idx < front.contents.length) {
      posArr.push(front.contents.eq(idx).offset().top - 600);
      idx++;
    }

    if(front._scrollTop >= posArr[1] && front._scrollTop < posArr[2]) {
      front.contents.eq(1).addClass('on');
    } else if (front._scrollTop >= posArr[2] && front._scrollTop < posArr[3]) {
      front.contents.eq(2).addClass('on');
    } else if (front._scrollTop >= posArr[4] - 1000 && front._scrollTop < posArr[5] - 200) {
      front.contents.eq(5).addClass('on');
    } else if (front._scrollTop === 0) {
      front.contents.removeClass('on');
    }

    // 연혁
    while(idx < front.history.length) {
      posArr.push(front.history.eq(idx).offset().top - 500);
      idx++;
    }
      //2790
      console.log(front._scrollTop + 400);

      if(front._scrollTop >= posArr[0] && front._scrollTop < posArr[1]) {
        front.history.eq(0).addClass('on');
      } else if (front._scrollTop >= posArr[1] && front._scrollTop < posArr[2]) {
        front.history.eq(1).addClass('on');
      } else if (front._scrollTop >= posArr[2]){
        front.history.eq(2).addClass('on');
      } 
  },

  // 약관 동의 팝업 레이어
  agreePop: function () {
    var agreePopup = $('.account_join_container .agree_pop .inner');
    var agreeBtn = $('.account_join_container .terms_btn');
    var closeBtn = $('.account_join_container .agree_pop .inner .close_btn');
    var dimm = $('.dimm');

    agreeBtn.on('click', function(e) {
      e.preventDefault();
      var idx = agreeBtn.index(this);

      agreePopup.eq(idx).fadeIn();
      dimm.addClass('on');
    });

    closeBtn.on('click', function(e) {
      e.preventDefault();
      agreePopup.fadeOut();
      dimm.removeClass('on');
    });
  },

  // 약관 동의 체크
  agreeCheckBox: function () {
    var agreeAllCheck = $('.agree .all_agree_btn input[id="allAgree"]');
    var agreeList = $('.agree .agree_list li');
    var agreeListCheckBtn = $('.agree_list li label');
    var agreeListCheck = $('.agree_list li label input[type="checkbox"]');

    // 모두 동의 버튼 클릭 시!
    $('.agree .all_agree_btn').on('click', function() {

      if(agreeAllCheck.prop('checked')) {
        $('.agree').addClass('on');
        agreeList.addClass('on');
        agreeListCheck.prop('checked', true);
      } else {
        $('.agree').removeClass('on');
        agreeList.removeClass('on');
        agreeListCheck.prop('checked', false);
      } 
    });


    agreeListCheckBtn.on('click', function(e) {
      e.preventDefault();
      var idx = agreeListCheckBtn.index(this);


      // console.log(idx);
      // console.log(agreeList.eq(idx));

      if(!!agreeListCheck.eq(idx).prop('checked')) {
        agreeListCheck.eq(idx).prop('checked',false);
        agreeList.eq(idx).removeClass('on');
      } else {
          agreeListCheck.eq(idx).prop('checked',true);
          agreeList.eq(idx).addClass('on');
      }
    });

      //  인증수단 체크 영역
      var labelTab = $('.certification .certification_wrap label');
      var labelTabCheck = $('.certification .certification_wrap label input[type="radio"]');
      var labelAgree = $('.account_join_container .certification .identification_wrap');


      // 내국인 외국인 체크
      labelTab.on('click', function(e) {
        e.preventDefault()
        var idx2 = labelTab.index(this);
        console.log(labelAgree.eq(idx2));

        labelTab.eq(idx2).addClass('on').siblings().removeClass('on');
        labelTabCheck.eq(idx2).prop('checked', true).siblings().prop('checked', false);
        labelAgree.eq(idx2).addClass('on').siblings().removeClass('on');
        $('.account_join_container .phone_identification_wrap label').removeClass('on');
      });

      // 휴대폰 아이핀 인증 체크 버튼
      var phoneBtn = $('.account_join_container .phone_identification_wrap label');
      var phonecheck = $('.account_join_container .phone_identification_wrap label input[type="radio"]');
      var phonecheckOn = $('.account_join_container .phone_identification_wrap');

      phoneBtn.on('click', function(e) {
        e.preventDefault()
        var idx3 = phoneBtn.index(this);
        // console.log(phoneBtn.eq(idx3));
        // console.log(idx3);

        phoneBtn.eq(idx3).addClass('on').siblings().removeClass('on');
        phonecheck.eq(idx3).prop('checked', true).siblings().prop('checked', false);
        // phonecheckOn.eq(idx3).addClass('on').siblings().removeClass('on');
      });

      // 회원가입 스텝2, 정보수신 동의 체크 영역
      var receCheckBtn = $('.receiving_consent .receiving_check');
      var receCheck = $('.receiving_consent .receiving_check input[type="checkbox"]');

      receCheckBtn.on('click', function() {
        var idx4 =  receCheckBtn.index(this);

        console.log(idx4)
        
        if(!!receCheck.eq(idx4).prop('checked')) {
          receCheckBtn.eq(idx4).removeClass('on');
          receCheck.eq(idx4).prop('checked', false);
        } else {
          receCheckBtn.eq(idx4).addClass('on');
          receCheck.eq(idx4).prop('checked', true);
        }

      });

  },


};




$(document).ready(function() {
  front.init();


  
  $(window).scroll(function() {
    front._scrollTop = $(document).scrollTop();  

    front.scrollMain();
  });
  
});

