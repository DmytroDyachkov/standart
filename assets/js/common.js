$(function(){
	// $.pixlayout({
	// 	src: "/app.png", 
	// 	opacity: 0.3,
    //     top: 0,
    //     center: true,
    //     left: 252,
    //     right: 258,
	// 	pervious: true,
	// 	clip: false,
	// 	show: true
    // }, "body");
    
    // Модальные окна
    function modal(){
        $('.js-modal_btn_close,.js-modal_close,.js-close_btn,.js-btnCloseModal').click(function(){
            $('.js-modal_window').fadeOut();
            $('.js-menu-item').removeClass('active');
            $('body,head,html').css('overflow-x','hidden')
            $('body,head,html').css('overflow-y','auto')
            $('.menu-item-close').removeClass('active')
            $('.menu-item-close').removeClass('menu-item-close--white')
        });
        $('.js-open_modal').click(function(){
            var id_btn = $(this).attr('data-monolit-modal');
            $('.js-modal_window').each(function(){
                if($(this).attr('data-monolit-modal') == id_btn){
                    $('body,head,html').css('overflow','hidden')
                    $(this).fadeIn();
                    $('.menu-item-close').addClass('active')
                    $('.menu-item-close').addClass('menu-item-close--white')
                }
            })
        })
    }
    modal()

    // Модальные окна menu
    function menu(){
        $('.js-close_menu').click(function(){
            $("[data-click-state='0']").attr('data-click-state','1')
            $(this).removeClass('active');
            $('.js-menu-item').removeClass('menu-active');
            $('.js-modal_window').fadeOut();
            $('.menu-item-close').removeClass('active')
            $('body,head,html').css('overflow-x','hidden')
            $('body,head,html').css('overflow-y','auto')
            $('.menu-item-close').removeClass('menu-item-close--white')
        })
        $('.js-open_menu').click(function(){
            if($(this).attr('data-click-state') == 1) {
                $(this).attr('data-click-state', 0)
                $(this).addClass('active');
                var id_btn = $(this).attr('data-monolit-menu');
                $('.js-menu-item').each(function(){
                    if($(this).attr('data-monolit-menu') == id_btn){
                        $(this).addClass('menu-active');
                        $('.menu-item-close').addClass('active')
                        $('body,head,html').css('overflow','hidden')
                        $('.menu-item-close').removeClass('menu-item-close--white')
                    }
                })
            } else {
                $(this).attr('data-click-state', 1)
                $(this).addClass('open-block');
                $(this).removeClass('active');
                $('.js-menu-item').removeClass('menu-active');
                $('.js-modal_window').fadeOut();
                $('.menu-item-close').removeClass('active')
                $('body,head,html').css('overflow-x','hidden')
                $('body,head,html').css('overflow-y','auto')
                $('.menu-item-close').removeClass('menu-item-close--white')
            }
        })
    }
    menu()


    function map_items(){
        $('.js-scale__open, .js-scale__if').click(function(){
                var el = $(this);
                var s = 0;
                if(el.hasClass('active')){
                }else{
                    $('.js-scale__open').removeClass('active');
                    el.addClass('active');
                    $('.js-scale__content').fadeOut(s)
                    var id_btn = $('.js-scale__open.active').attr('data-monolit-scale');
                    if(id_btn == 'all'){
                        $('.js-scale__content').fadeIn(s);
                        return;
                    }
                    $('.js-scale__content').each(function(){
                        if($(this).attr('data-monolit-scale') == id_btn){
                            $(this).fadeIn(s);
                        }
                    })
                }
        })
    }
    map_items()
    // function tab2sCatalog(){
    //     $('.js-tab__open-catalog').click(function(){
    //         var s = 0;
    //         if($(this).hasClass('active')){
    //             $('.js-tab__open-catalog').removeClass('active');
    //             $('.js-tab__content').slideUp(s)
    //         }else{
    //             $('.js-tab__open-catalog').removeClass('active');
    //             $(this).addClass('active');
    //             $('.js-tab__content-catalog').slideUp(s)
    //             var id_btn = $(this).attr('data-monolit-tabs-catalog');
    //             $('.js-tab__content-catalog').each(function(){
    //                 if($(this).attr('data-monolit-tabs-catalog') == id_btn){
    //                     $(this).slideDown(s);
    //                 }
    //             })
    //         }
    //     })
    // }
    // tab2sCatalog()

    // Скролл шапки
    var scrolled;
    window.onscroll = function() {
        scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if(scrolled > 1){
            $(".header").addClass('scroll')
        }
        if(1 > scrolled){
            $(".header").removeClass('scroll')
        }

    }

    // Увеличение картинок
    $('.fancybox-media,.content_wp a:has(img)').fancybox({
        openEffect  : 'none',
        closeEffect : 'none',
            maxWidth    : '100%',
            maxHeight   : 'auto',  
            padding     : 0,
            margin      : 0,           
        helpers : {
          media : {
              youtube : {
                   params : {
                       theme : 'light',
                             vq    : 'hd720',
                             css   : {
                                'body' : 'color: #fff'
                             } 
                   }
              } 
          }
        }
    });

    // скрытый текст
    $('.js-open-close').click(function(){
        if($(this).parents('.js-open-close-item').attr('data-click-state') == 1) {
            $(this).parents('.js-open-close-item').attr('data-click-state', 0)
            $(this).parents('.js-open-close-item').removeClass('active');
            $(this).parents('.js-open-close-item').find('.js-item__desc').slideUp();
            $(this).find('.btn-open-close__text').html($(this).attr('data-open-text'));
        } else {
            $(this).parents('.js-open-close-item').attr('data-click-state', 1)
            $(this).parents('.js-open-close-item').addClass('active');
            $(this).parents('.js-open-close-item').find('.js-item__desc').slideDown();
            $(this).find('.btn-open-close__text').html($(this).attr('data-close-text'));
        }
    })
  
    // swiper
    if ($('.carousel-init--hero').length > 0) {
        var sliderHero = new Swiper('.carousel-init--hero', { 
            spaceBetween: 0,
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            loop: true,
            fade: true,
            effect: "fade",
            fadeEffect: { crossFade: true },
            virtualTranslate: true,
            slidesPerGroup: 1,
            autoHeight: true,
            navigation: {
                nextEl: '.slick-m-next--hero',
                prevEl: '.slick-m-prev--hero',
            },
            pagination: {
              el: '.slick-dots--hero',
              type: 'bullets',
            },
        });
    }
    if ($('.carousel-init--services').length > 0) {
        var sliderServices = new Swiper('.carousel-init--services', {
        autoHeight: true,
        loop: false,
        spaceBetween: 10,
        slidesPerView: 'auto',
        centeredSlides: false,
        navigation: {
            nextEl: ".slick-m-next--services",
            prevEl: ".slick-m-prev--services",
        },
        pagination: {
          el: '.slick-dots--services',
          type: 'bullets',
        },
        breakpoints: {
            0: {
                spaceBetween: 20,
            },
            800: {
                spaceBetween: 10,
            },
        },
        });
    }
    // if ($('.carousel-init--services').length > 0) {
    //     var sliderServices = new Swiper('.carousel-init--services', {
    //     autoHeight: false,
    //     loop: false,
    //     spaceBetween: 10,
    //     slidesPerView: 'auto',
    //     centeredSlides: false,
    //     navigation: {
    //         nextEl: ".slick-m-next--services",
    //         prevEl: ".slick-m-prev--services",
    //     },
    //     });
    // }
    if ($('.carousel-init--discount').length > 0) {
        var sliderdiscount = new Swiper('.carousel-init--discount', {
        autoHeight: true,
        loop: false,
        spaceBetween: 40,
        slidesPerView: 2,
        centeredSlides: false,
        navigation: {
            nextEl: ".slick-m-next--discount",
            prevEl: ".slick-m-prev--discount",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            800: {
                slidesPerView: 2,
            },
        },
        pagination: {
          el: '.slick-dots--discount',
          type: 'bullets',
        },
        });
    }
    if ($('.carousel-init--reviews').length > 0) {
        var sliderreviews = new Swiper('.carousel-init--reviews', {
        autoHeight: true,
        loop: false,
        spaceBetween: 40,
        slidesPerView: 2,
        centeredSlides: false,
        navigation: {
            nextEl: ".slick-m-next--reviews",
            prevEl: ".slick-m-prev--reviews",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            1140: {
                slidesPerView: 2,
            },
        },
        pagination: {
          el: '.slick-dots--reviews',
          type: 'bullets',
        },
        });
    }

    // if ($('.carousel-init--product-nav').length > 0) {
    //     var sliderThumbs = new Swiper('.carousel-init--product-nav', { 
    //         direction: 'vertical', 
    //         slidesPerView: 3, 
    //         spaceBetween: 0, 
    //         freeMode: true, 
    //         loop: false,
    //         watchSlidesProgress: true,
    //     });
    // }
    // if ($('.carousel-init--product-main').length > 0) {
    //     var sliderImages = new Swiper('.carousel-init--product-main', { 
    //         direction: 'vertical',
    //         slidesPerView: 1,
    //         spaceBetween: 32,
    //         mousewheel: true,
    //         loop: false,
    //         grabCursor: true, 
    //         thumbs: { 
    //             autoScrollOffset: 1,
    //             swiper: sliderThumbs 
    //         },
    //     });
    // }
    function swiper_html(el,name){
        el.addClass('carousel-init carousel-init--'+name+' swiper-container')
        el.find('>*').each(function(){
            $(this).wrap('<div class="swiper-slide carousel-item"></div>');
        });
        el.wrapInner('<div class="swiper-wrapper"></div>');
    }

    if($(document).width() < 800 ? true : false){
        // перемещаем биг категории
        $('.cat-list__item--big').wrapAll('<div class="cat-list__item__group">');
        // Перемещаем фильтр
        $('.js-mob-cat-all__filter-item').appendTo( $('.cat-all__filter--mob'))
        // Перемещаем cart
        $('.cart-mini').insertBefore( $('.js-mob-cart-mini'))
        // Перемещаем элементы
        $('.hero__item').each(function(){
            $(this).find('.hero__item__right').appendTo( $(this).parent('.swiper-slide'))
    
        })
        swiper_html($('.cat-list__items'),'cart_list')
        if ($('.carousel-init--cart_list').length > 0) {
            var sliderreviews = new Swiper('.carousel-init--cart_list', {
            autoHeight: true,
            loop: true,
            spaceBetween: 10,
            slidesPerView: 'auto',
            centeredSlides: false,
            });
        }
        swiper_html($('.map__button__left--mob-slider'),'map__button__left')
        if ($('.carousel-init--map__button__left').length > 0) {
            var sliderreviews = new Swiper('.carousel-init--map__button__left', {
            autoHeight: false,
            loop: false,
            spaceBetween: 10,
            slidesPerView: 'auto',
            centeredSlides: false,
            });
        }
        // mob menu
        $('.menu li').each(function(){
            if ($(this).find('ul').length > 0) {
                $(this).find('a').first().addClass('parent parent__arrow');
                $(this).find('a').first().removeAttr('href');
                // $(this).find('a').first().append('<div class="parent__arrow"></div>');
            }
        })
        $('.menu li.menu__item--back').each(function(){
                $(this).find('a').first().addClass('parent__arrow');
                $(this).find('a').first().removeAttr('href');
        })
        $('.parent').click(function(){
            $(this).addClass('active__child');
        })
        $('.menu__item--back').click(function(){
            $(this).parent('ul').parent('li').find('.parent').removeClass('active__child')
        })
    };
    if($(document).width() > 801 ? true : false){
        $('.menu li').each(function(){
            if ($(this).find('ul').length > 0) {
                $(this).find('a').first().addClass('parent parent__arrow');
                // $(this).find('a').first().append('<div class="parent__arrow"></div>');
            }
        })
    }
    if($(document).width() < 1140 ? true : false){
        swiper_html($('.cat-all__tabs'),'cat-all__tabs')
        if ($('.carousel-init--cat-all__tabs').length > 0) {
            var sliderreviews = new Swiper('.carousel-init--cat-all__tabs', {
            autoHeight: true,
            loop: false,
            spaceBetween: 10,
            slidesPerView: 'auto',
            centeredSlides: false,
            });
        }
    };
    

    // a(rel="group", href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/1.jpg", data-fancybox="gallery").item.fancybox-media
    //     img(src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/1.jpg')
    
    // Указываем текущую ссылку
    var location_m = window.location.href;
    var cur_url_m = location_m;

    $('ul li').each(function () {
        var link_m = $(this).find('a').first().attr('href');
        if (cur_url_m == link_m) {
            $(this).addClass('active');
            $(this).find('a').first().removeAttr('href');
            $(this).parents('li').addClass('active');
        }
    });

    // Поиск
    // $('.search__btn__in').click(function(){
    //     $('.search__form,.search__btn__out').fadeIn(0);
    //     $('.search').addClass('active');
    //     $(this).attr('data-click-state', 0)
    //     $(this).parents('.header').removeClass('active');
    // })
    // $('.search__btn__out').click(function(){
    //     $('.search__btn__out').fadeOut(0);
    //     $('.search__form').fadeOut(0);
    //     $('.search').removeClass('active');
    // })

    // Меню бургер
    $('.burger').on('click',function(){
        if($(this).attr('data-click-state') == 1) {
            $(this).attr('data-click-state', 0)
            $(this).parents('.header').toggleClass('active');
            // $('.search__btn__out').fadeOut(0);
            // $('.search__form').fadeOut(0);
            // $('.search').removeClass('active');
        } else {
            $(this).attr('data-click-state', 1)
            $(this).parents('.header').toggleClass('active');
            // $('.search__btn__out').fadeOut(0);
            // $('.search__form').fadeOut(0);
            // $('.search').removeClass('active');
        }
    });

    // Открытие дочернего меню
    // $('a.parent').click(function(){
    //     $(this).parent('li').toggleClass('active');
    //     $(this).siblings('ul').slideToggle();
    // })

    // адаптив в js
    if($(document).width() > 800 ? true : false){
        // сайд бары
        $('.page__content-wrapper').theiaStickySidebar({
            additionalMarginTop: 120,
            additionalMarginBottom: 0,
        });
        $('.page__sidebar-wrapper').theiaStickySidebar({
            additionalMarginTop: 120,
            additionalMarginBottom: 0,
        });
    };
    

    // Скрол до пункта
    $('.scroll[href^="#"]').click(function() { 
        $("html, body").animate({
           scrollTop: $($(this).attr("href")).offset().top
        }, {
           duration: 600,
           easing: "swing"
        });
        return false;
    });

    $('input,textarea').on('input keyup', function () {
        var Value = $(this).val();
        if(Value == ''){
            $(this).removeClass('true');
            $(this).addClass('false'); 
        }else{ 
            $(this).removeClass('false'); 
            $(this).addClass('true'); 
        }
    });

    // Количество в корзине
    // Убавляем кол-во по клику
    $('.quantity_inner .bt_minus').click(function() {
        var el_input = $(this).parent().find('.quantity');
        var sep = el_input.attr('data-sep');
        var count = parseInt(el_input.val()) - 1;
        count = count < 1 ? 1 : count;
        el_input.val(count);
        el_input.attr('data-count',parseInt(count))
    });
    // Прибавляем кол-во по клику
    $('.quantity_inner .bt_plus').click(function() {
        var el_input = $(this).parent().find('.quantity');
        var sep = el_input.attr('data-sep');
        var count = parseInt(el_input.val()) + 1;
        count = count > parseInt(el_input.data('max-count')) ? parseInt(el_input.data('max-count')) : count;
        el_input.val(parseInt(count));
        el_input.attr('data-count',parseInt(count))
    }); 
    // Убираем все лишнее и невозможное при изменении поля
    $('.quantity_inner .quantity').bind("change keyupel_input click", function() {
        if (this.value.match(/[^0-9]/g)) {
            this.value = this.value.replace(/[^0-9]/g, '');
        }
        if (this.value == "") {
            this.value = 1;
        }
        if (this.value > parseInt($(this).data('max-count'))) {
            this.value = parseInt($(this).data('max-count'));
        }    
    });   

    // tippy
    tippy('.tippy-message', {
        animation: 'fade',
        theme: 'light',
        allowHTML: true,
        interactive: true,
        content: function(f){
            return $(f).find('.js-tippycont').html()
        },
    });

    // мокски
    $(".js-tel").inputmask({
        mask: "+7 (999) 999-99-99",
        greedy: true,
        clearMaskOnLostFocus: true,
        clearIncomplete: true
    });

    // Кастомный select
    $('.js-select').each(function() {
        var _this = $(this),
            selectOption = _this.find('option'),
            selectOptionLength = selectOption.length,
            selectedOption = selectOption.filter(':selected'),
            prevText = _this.attr('data-prev'),
            prevTextHtml = '<span class="select-prev">'+prevText+' </span>',
            duration = 50; // длительность анимации 
        _this.hide();
        _this.wrap('<div class="select"></div>');
        $('<div>', {
            class: 'new-select',
            text: _this.children('option:disabled').text()
        }).insertAfter(_this);
        $(prevTextHtml).prependTo(_this.next());


        var selectHead = _this.next('.new-select');
        $('<div>', {
            class: 'new-select__list'
        }).insertAfter(selectHead);
    
        var selectList = selectHead.next('.new-select__list');
        $('<div>', {
            class: 'new-select__item new-select__item--back js-closed-select parent__arrow',
            html: $('<span>', {
                text: selectOption.eq(0).html()
            })
        })
        .attr('data-value', selectOption.eq(0).val())
        .appendTo(selectList);
        $(selectList).find('.new-select__item--back').prepend(prevTextHtml)

        for (var i = 1; i < selectOptionLength; i++) {
            $('<div>', {
                class: 'new-select__item',
                html: $('<span>', {
                    text: selectOption.eq(i).text()
                })
            })
            .attr('data-value', selectOption.eq(i).val())
            .appendTo(selectList);
        }
    
        var selectItem = selectList.find('.new-select__item');
        selectHead.on('click', function() {
            if ( !$(this).hasClass('on') ) {
                var select_on = $(this);
                select_on.addClass('on');
                if($(document).width() < 800 ? true : false){
                    $('body,head,html').css('overflow-y','hidden')
                }
    
                selectItem.on('click', function() {
                    if($(document).width() < 800 ? true : false){
                        $('body,head,html').css('overflow-y','auto')
                    }
                    if ( !$(this).hasClass('new-select__item--back') ) {
                        var chooseItem = $(this).data('value');
                        $(this).parents('.new-select__list').find('.new-select__item').removeClass('active')
                        $(this).addClass('active');
                        $(this).parents('.select').find('.new-select').addClass('selected')
        
                        $('select').val(chooseItem).attr('selected', 'selected');
                        selectHead.html(prevTextHtml+ $(this).find('span').text() );
        
                        selectHead.removeClass('on');
                    }else {
                        select_on.removeClass('on');
                    }
                });
    
            } else {
                $(this).removeClass('on');
            }
        });
    });

    $('.js-mapdata').click(function(){
        $('.js-mapdata').removeClass('active');
        $(this).addClass('active')
    })
    $('body').on('click','.remove',function(){
        // boxVisible.innerHTML = "";
        $('.js-map-object .maploc').removeClass('is-active');
    })
  
});

// Табы
function tab2s(){
    $('.js-tab__open').click(function(){
        var s = 300;
        if($(this).hasClass('active')){
            // $('.js-tab__open').removeClass('active');
            // $('.js-tab__content').slideUp(s)
        }else{
            $('.js-tab__open').removeClass('active');
            $(this).addClass('active');
            $('.js-tab__content').slideUp(s)
            var id_btn = $(this).attr('data-monolit-tabs');
            $('.js-tab__content').each(function(){
                if($(this).attr('data-monolit-tabs') == id_btn){
                    $(this).slideDown(s);
                }
            })
        }
    })
}
tab2s()
    
var myMap 
var boxVisible
function mapsInit() {
    // console.log('Запуск карты');
    var selector = document.querySelector('.js-map-frame');
    var coordsJS = [55.75399399999374,37.62209300000001];
    myMap = new ymaps.Map(selector, {
        center: coordsJS,
        controls: ['zoomControl'],
        zoom: 10,
        // behaviors: ['drag'],
    }, {
        yandexMapDisablePoiInteractivity: true,
        suppressMapOpenBlock: true,
    });
    // console.log(mapdata);
  
    var boxTemplate = document.getElementById('js-map-templates');
    boxVisible = document.querySelector('.js-map-object');
  
    var iconWidth = 20;
    var iconHeight = 20;
  
    // if(window.innerWidth < 992){
    //   iconWidth = 20;
    //   iconHeight = 20;
    // }
  
    var geoPolyGon = JSON.parse(window.deliveryZone);
    // console.log(geoPolyGon);
  
    var myPolygon = new ymaps.Polygon([geoPolyGon], {}, {
      fillColor: 'rgba(42, 45, 50, 0.1)',
      strokeWidth: 3,
      strokeColor: '#007BFB',
    });
  
    myMap.geoObjects.add(myPolygon);
  
    mapdata.forEach(function(coords){
      // console.log(coords);
      if ( document.querySelector(".js-mapdata") ) {
        if(document.querySelector('.js-mapdata-green').classList.contains('active')){
            if(coords.isViolet == true) return;
        }
        if(document.querySelector('.js-mapdata-purpur').classList.contains('active')){
            if(coords.isViolet == false) return;
        }
        if(document.querySelector('.js-mapdata-all').classList.contains('active')){
        }
      }

      // Наполняем баунтами
      var mark = new ymaps.Placemark([coords.lat, coords.lng], {
        balloonContent: null,
        iconCaption: null,
        blockId: coords.id,
      }, {
        iconLayout: 'default#image',
        iconImageHref: coords.isViolet ? mapmarkerActive : mapmarker,
        iconImageSize: [iconWidth, iconHeight],
        iconImageOffset: [-(iconWidth / 2), -iconHeight],
        hideIconOnBalloonOpen:false,
      });
  
      //Обработка клика на маркер
      mark.events.add('click', function(e){
  
        //делаем иконки всех макркеров по умолчанию.
        myMap.geoObjects.each(function(el){
          el.options.set({
            iconImageSize: [iconWidth, iconHeight],
            iconImageOffset: [-(iconWidth / 2), -iconHeight]
          });
        });
        boxVisible.innerHTML = "";
        var needId = e.get('target').properties.get('blockId');
        
        // e.get('target').options.set('visible', false);
  
        //Делаем иконку активного маркера красной
        e.get('target').options.set({
          iconImageSize: [iconWidth + 5, iconHeight + 5],
          iconImageOffset: [-((iconWidth + 5) / 2), -(iconHeight + 5)],
        });
        var newBox = boxTemplate.content.querySelector('.js-maploc-'+needId).cloneNode(true);
        boxVisible.append(newBox);
        setTimeout(function(){
          newBox.classList.add('is-active');
          // window.lightbox.reload();
        }, 0);
      });
      // ---Наполняем баунтами


      myMap.geoObjects.add(mark);
    });
  
    // myMap.setBounds(myMap.geoObjects.getBounds(),{checkZoomRange:true, zoomMargin:[120,0,0,0]});
  
  
  
    if(window.innerWidth > 1100){
      myMap.behaviors.disable(['rightMouseButtonMagnifier', 'scrollZoom']);
    } else {
      myMap.behaviors.disable(['rightMouseButtonMagnifier', 'scrollZoom']);
        // let newcoord = myMap.getGlobalPixelCenter();
        // newcoord[1] -= 20;
        // myMap.setGlobalPixelCenter(newcoord);
    }
};

function loadYamaps() {
  var selector = document.querySelector('.js-map-frame');
  if (!selector) return;
  var elem = document.createElement('script');
  window.mapsInit = mapsInit;
  elem.className = "js-reload-remove";
  elem.src = 'https://api-maps.yandex.ru/2.1/?load=package.map&lang=ru-RU&onload=mapsInit';
  document.getElementsByTagName('body')[0].appendChild(elem);
}
loadYamaps()

function reloadYamaps(){
    console.log(1);
    if(document.querySelector('.js-active-map_items').classList.contains('active')){
        console.log(2);
    }else{
        myMap.destroy();
        document.querySelector('.js-reload-remove').remove();
        loadYamaps();
        console.log(3);
    }
}

$('.js-active-map').click(function(){
    reloadYamaps()
})