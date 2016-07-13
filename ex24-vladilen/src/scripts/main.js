(function ($) {

    var directionsItemWidth;

    //$('.selectize').selectize({
    //    sortField: 'text'
    //});
    //
    //$('.selectize-tag').selectize({
    //    plugins: ['remove_button'],
    //    delimiter: ',',
    //    persist: false,
    //    create: function(input) {
    //        return {
    //            value: input,
    //            text: input
    //        }
    //    }
    //});

        $('.navbar').find('.active-link').removeClass('active-link');
        var path = window.location.pathname,
            entireLocationArray = path.split("/"),
            entireLocation = entireLocationArray[entireLocationArray.length-2];
        if(entireLocation=='about'){
            $('.about-head-link').addClass('active-link')
        }else if(entireLocation=='contacts'){
        $('.contacts-head-link').addClass('active-link')
        }else if(entireLocation=='help'){
        $('.help-head-link').addClass('active-link')
        }else if(entireLocation=='partners'){
            $('.partners-head-link').addClass('active-link')
        } else if(entireLocation=='service'){
        $('.main-head-link').addClass('active-link')
        }

    $(window).on('load', function () {
        var $preloader = $('.css-load-bg'),
            $spinner   = $preloader.find('.cssload-speeding-wheel');
        $spinner.fadeOut();
        $preloader.delay(350).fadeOut('slow');
    });



    $('.navbar').on('click','a', function(){
        $self = $(this);
        $self.parent().find('.active-link').removeClass('active-link');
        $self.addClass('active-link');
    });

        $('.all-directions-tab li').on('transitionend webkitTransitionEnd',function(e){
            e.stopPropagation();
        });
        $('.most-popular-tab li').on('transitionend webkitTransitionEnd',function(e){
            e.stopPropagation();
        });
    $('.all-directions-tab div').on('transitionend webkitTransitionEnd',function(e){
        e.stopPropagation();
    });
    $('.most-popular-tab div').on('transitionend webkitTransitionEnd',function(e){
        e.stopPropagation();
    });
///GLOBAL_VARIABLES
   var currencyName = {
       from:null,
       to:null
   };
    Number.prototype.padLeft = function(base,chr){
        var  len = (String(base || 10).length - String(this).length)+1;
        return len > 0? new Array(len).join(chr || '0')+this : this;
    };




///GLOBAL_VARIABLES_END
///INITIALIZATIONS

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });
    $('.main-tabs-real a').click(function (e) {
        e.preventDefault();
        $('.main-tabs').find('.active').removeClass('active');
        $(this).addClass('active');
        $(this).tab('show');
    });
    $('.login-tab-controls a').click(function (e) {
        e.preventDefault();
        $('.login-tab-controls').find('.active').removeClass('active');
        $(this).addClass('active');
        $(this).tab('show');
    });
    $('.register-btn').on('click',function(){
        $('#register-tab-control').trigger('click');
    });
    $('.enter').on('click',function(){
        $('#login-tab-control').trigger('click');
    });
    $('.notif-drop-menu').on('click',function(e){
        e.stopPropagation();
    });
    $('.calendar-dropdown').on('click',function(e){
        e.stopPropagation();
    });
    // ADD SLIDEDOWN ANIMATION TO DROPDOWN //
    $('.dropdown-cont').on('show.bs.dropdown', function(e){
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
        $(this).find('#calendar-drop-link').addClass('active');
    });

    // ADD SLIDEUP ANIMATION TO DROPDOWN //
    $('.dropdown-cont').on('hide.bs.dropdown', function(e){
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
    });
    $('.statistics-option-dropdown-menu li a').on('click',function(e){
        e.preventDefault();
        $('.statistics-option-dropdown-menu').find('.active-chart-type').removeClass('active-chart-type');
        $(this).addClass('active-chart-type');
        $('#statistics-option-drop-link').text($(this).text());
    });
    $('.period-changes').on('click','a',function(e){
        e.preventDefault();
        $('.period-changes').find('.active').removeClass('active');
        $(this).addClass('active');
    });
    $('.edit-exchanger-link').on('click',function(e){
        e.preventDefault();
        $('.my-exchanger').addClass('fade-cabin');
        $('.my-exchanger').on('transitionend webkitTransitionEnd', function(e) {
            $('.my-exchanger').hide();
            $('.exchanger-edit').show();
            });
    });
///INITIALIZATIONS END
    $('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})

   $( ".directions-second" ).click(function(e) {
       directionsItemWidth = $(".directions-second").css('width')+20;
       $(".directions-first").removeClass('animated');
       if(!$('.directions-second').hasClass('animated')){
       $( ".purple-line" ).animate({
            left: "+=128",
            }, 300);
       $(".directions-second").addClass('animated');
       }

   });

    $( ".directions-first" ).click(function(e) {

       if(!$('.directions-first').hasClass('animated')){
             $( ".purple-line" ).animate({
             left: "-=128",
            }, 300);
       $(".directions-first").addClass('animated');
       $(".directions-second").removeClass('animated');
       }

   });
   //   $('.register-btn').on('click', function(){
   //       $('.enter-tooltip-tab').hide();
   //       $('.register-tooltip-tab').show();
   //
   //   });
   // $('.enter').on('click',function(){
   //     $('.enter-tooltip-tab').show();
   //     $('.register-tooltip-tab').hide();
   // });
   //$( ".register-second" ).click(function(e) {
   //    directionsItemWidth = $(".directions-second").css('width')+20;
   //    $('.enter-tooltip-tab').hide();
   //    $('.register-tooltip-tab').show();
   //    $(".register-first").removeClass('animated');
   //    if(!$('.register-second').hasClass('animated')){
   //    $( ".blue-line" ).animate({
   //         left: "+=104",
   //         width: "+=107"
   //         }, 100);
   //     $('.register-second').css({
   //         color:"#fff"
   //     });
   //     $('.register-first').css({
   //         color: "#7ab0db"
   //     });
   //    $(".register-second").addClass('animated');
   //    }
   //});
   //
   // $( ".register-first" ).click(function(e) {
   //    $('.register-tooltip-tab').hide();
   //     $('.enter-tooltip-tab').show();
   //    if(!$('.register-first').hasClass('animated')){
   //          $( ".blue-line" ).animate({
   //          left: "-=104",
   //          width: "-=107"
   //
   //         }, 100);
   //        $('.register-first').css({
   //             color: "#fff"
   //        });
   //        $('.register-second').css({
   //         color: "#7ab0db"
   //     });
   //    $(".register-first").addClass('animated');
   //    $(".register-second").removeClass('animated');
   //    }
   //});

////DIRECTIONS_TABS
    $('.all-directions-tab .left-part').on('click','li', function(){
        var $self = $(this),
            $ulLeft = $('.all-directions-tab .left-part'),
            $decorLine = $('.all-directions-tab .connecter-line-all');

        $self.parent().find(' .selected-left-part').removeClass('selected-left-part');
		$self.addClass('selected-left-part');


    });
    $('.all-directions-tab .right-part').on('click','li', function(){
        var $self = $(this),
            $ulRight = $('.all-directions-tab .right-part'),
            $decorLine = $('.all-directions-tab .connecter-line-all');

        $self.parent().find('.selected-right-part').removeClass('selected-right-part');

		$self.addClass('selected-right-part');


    });
    $('.sidebar-choice .all-directions-tab').on('click', 'li', function(){
            var $self = $(this),
                $decorLine = $('.connecter-line-all'),
                $left = $('.all-directions-tab .left-part').find('.selected-left-part'),
                $right = $('.all-directions-tab .right-part').find('.selected-right-part'),
                $parentScrolled = $('.sidebar-choice .simplebar-scroll-content').scrollTop(),
                $ulLeftHeight = 81,
                $leftLinkHeight = $left.height(),
                $rightLinkHeight = $right.height();

        if($('.all-directions-tab .left-part .selected-left-part').length>0 && $('.all-directions-tab .right-part .selected-right-part').length>0){
            $decorLine.css({
                visibility:"visible"
            });
        }
              if($left.index()>$right.index()){
              $decorLine.css({
                  top: $right.position().top + $parentScrolled - 20,
                  height: $left.position().top - $right.position().top+1
                });
                  if($leftLinkHeight>31 || $rightLinkHeight>31){
                      if($leftLinkHeight>$rightLinkHeight){
                          $decorLine.css({
                              height: $left.position().top - $right.position().top+1 +($leftLinkHeight-$rightLinkHeight)
                          });
                      }
                      if($leftLinkHeight<$rightLinkHeight){
                          $decorLine.css({
                              height: $left.position().top - $right.position().top+1 -($rightLinkHeight-$leftLinkHeight),
                              top: $right.position().top+8 + $parentScrolled
                          });
                      }
                      if($leftLinkHeight==$rightLinkHeight){
                          $decorLine.css({
                              height: $left.position().top - $right.position().top ,
                              top: $right.position().top+8 + $parentScrolled
                          });
                      }
                  }

      }
        if($left.index()<$right.index()){
        $decorLine.css({
            top: $left.position().top + $parentScrolled - 20,
            height:$right.position().top - $left.position().top
        });
            if($leftLinkHeight>31 || $rightLinkHeight>31){
                if($leftLinkHeight>$rightLinkHeight){
                    $decorLine.css({
                        height: $right.position().top - $left.position().top + 1 + ($rightLinkHeight-$leftLinkHeight),
                        top:$left.position().top + $parentScrolled + 8
                    });
                }
                if($leftLinkHeight<$rightLinkHeight){
                    $decorLine.css({
                        height:$right.position().top - $left.position().top + 1 + ($rightLinkHeight-$leftLinkHeight)
                    });
                }
                if($leftLinkHeight==$rightLinkHeight){
                    $decorLine.css({
                        height:$right.position().top - $left.position().top,
                        top: $left.position().top + $parentScrolled + 8
                    });
                }
            }
      }
         if($left.index() == $right.index()){
        $decorLine.css({
            height: 0
        });
      }

    });
    $('.all-directions-tab .left-part').on('click','a', function(){
        var $self = $(this);
        $('.left-part a').removeClass('active');
        $self.addClass('active');


    })
     $('.all-directions-tab .right-part').on('click','a', function(){
        var $self = $(this);
        $('.all-directions-tab .right-part a').removeClass('active');
        $self.addClass('active');
    });

    $('.all-directions-tab .left-part li').on('click', function(){
        var $self = $(this);
        $('.all-directions-tab .left-part').find('.icon-select-ul-bg').removeClass('icon-select-ul-bg');
       $self.find('.icon-select').addClass('icon-select-ul-bg');
    });
      $('.all-directions-tab .right-part li').on('click', function(){
        var $self = $(this);
        $('.all-directions-tab .right-part').find('.icon-select-ul-bg').removeClass('icon-select-ul-bg');
       $self.find('span').addClass('icon-select-ul-bg');
    });

    ///MOST_POPULAR_BLOCK

    $('.most-popular-tab .left-part').on('click','li', function(){
        var $self = $(this),
            $ulLeft = $('.most-popular-tab .left-part'),
            $decorLine = $('.most-popular-tab .connecter-line-most');

        $self.parent().find('.selected-left-part').removeClass('selected-left-part');
        $self.addClass('selected-left-part');


    });
    $('.most-popular-tab .right-part').on('click','li', function(){
        var $self = $(this),
            $ulRight = $('.most-popular-tab .right-part'),
            $decorLine = $('.most-popular-tab .connecter-line-most');

        $self.parent().find('.selected-right-part').removeClass('selected-right-part');

        $self.addClass('selected-right-part');
    });
    $('.sidebar-choice .most-popular-tab').on('click', 'li', function(){
        var $self = $(this),
            $decorLine = $('.connecter-line-most'),
            $left = $('.most-popular-tab .left-part').find('.selected-left-part'),
            $right = $('.most-popular-tab .right-part').find('.selected-right-part'),
            $ulLeftHeight = 81,
            $leftLinkHeight = $left.height(),
            $rightLinkHeight = $right.height();
        console.log($leftLinkHeight,$rightLinkHeight);

        if($('.most-popular-tab .left-part .selected-left-part').length>0 && $('.most-popular-tab .right-part .selected-right-part').length>0){
            $decorLine.css({
                visibility:"visible"
            });
        }
        if($left.index()>$right.index()){
            $decorLine.css({
                top: $right.position().top - 20,
                height: $left.position().top - $right.position().top+1
            });
            if($leftLinkHeight>31 || $rightLinkHeight>31){
                if($leftLinkHeight>$rightLinkHeight){
                    $decorLine.css({
                        height: $left.position().top - $right.position().top+1 +($leftLinkHeight-$rightLinkHeight)
                    });
                }
                if($leftLinkHeight<$rightLinkHeight){
                    $decorLine.css({
                        height: $left.position().top - $right.position().top+1 -($rightLinkHeight-$leftLinkHeight),
                        top: $right.position().top+8
                    });
                }
                if($leftLinkHeight==$rightLinkHeight){
                    $decorLine.css({
                        height: $left.position().top - $right.position().top ,
                        top: $right.position().top+8
                    });
                }
            }

        }
        if($left.index()<$right.index()){
            $decorLine.css({
                top: $left.position().top - 20,
                height:$right.position().top - $left.position().top
            });
            if($leftLinkHeight>31 || $rightLinkHeight>31){
                if($leftLinkHeight>$rightLinkHeight){
                    $decorLine.css({
                        height: $right.position().top - $left.position().top + 1 + ($rightLinkHeight-$leftLinkHeight),
                        top:$left.position().top+8
                    });
                }
                if($leftLinkHeight<$rightLinkHeight){
                    $decorLine.css({
                        height:$right.position().top - $left.position().top + 1 + ($rightLinkHeight-$leftLinkHeight)
                    });
                }
                if($leftLinkHeight==$rightLinkHeight){
                    $decorLine.css({
                        height:$right.position().top - $left.position().top,
                        top: $left.position().top+8
                    });
                }
            }
        }
        if($left.index() == $right.index()){
            $decorLine.css({
                height: 0
            });
        }

    });
    $('.most-popular-tab').on('click','a', function(){
        var $self = $(this);
        $('.most-popular-tab  a').removeClass('active');
        $self.addClass('active');


    });

    $('.most-popular-tab .left-part li').on('click', function(){
        var $self = $(this);
        $('.most-popular-tab .left-part').find('.icon-select-ul-bg').removeClass('icon-select-ul-bg');
        $self.find('.icon-select').addClass('icon-select-ul-bg');
    });
    $('.most-popular-tab .right-part li').on('click', function(){
        var $self = $(this);
        $('.most-popular-tab .right-part').find('.icon-select-ul-bg').removeClass('icon-select-ul-bg');
        $self.find('span').addClass('icon-select-ul-bg');
    });


///DIRECTIONS_TABS_END

/// RATE_CALCULATOR

    $.extend($.expr[':'], {
        'containsi': function(elem, i, match, array)
        {
            return (elem.textContent || elem.innerText || '').toLowerCase()
                    .indexOf((match[3] || "").toLowerCase()) >= 0;
        }
    });

    //$(document).on('keyup', ".first-input", function(){
    //    var value = $(this).val(),
    //        elementChecked = $('.left-part li');
    //    elementChecked.show();
    //    $('.left-part > li:not(:containsi(' + value + '))').hide();
    //    $('.left-part > li:containsi(' + value + ')').show();
    //
    //    //
    //    //$(".left-part li a").not("[data-name*=" + value +"]").parent().hide();
    //    //$(".left-part ").find(" a:contains(" + value+ ")").parent().show();
    //
    //});
    $(document).on('keyup', ".second-input", function(){
        var value = $(this).val(),
            elementChecked = $('.right-part li');
        elementChecked.show();
        $('.right-part > li:not(:containsi(' + value + '))').hide();
        $('.right-part > li:containsi(' + value + ')').show();
        //$.each(elementChecked,function(index,elem){
        //
        //    console.log(elementChecked.is(':containsi(' + value + ')').length>1);
        //   //if(elementChecked.is(':containsi(' + value + ')').length>0 || elementChecked.is("[data-name*=" + value.toUpperCase() +"]").length>0){
        //   //   console.log(elementChecked);
        //   //}
        //});
        //
        //$(".left-part li a").not("[data-name*=" + value +"]").parent().hide();
        //$(".left-part ").find(" a:contains(" + value+ ")").parent().show();

    });

    $(document).on('keyup', ".first-input", function(){
        var $selected =  $(this).find('a.active');
        if($selected.length>1){
            var value = $(this).val(),
                valParsed = parseInt(value),
                currencies = $('.all-directions-tab').find('a.active'),
                from = $(currencies[0]).attr("data-name"),
                to = $(currencies[1]).attr("data-name"),
                formData = {
                    from: from,
                    to: to,
                    in: valParsed
                };
            console.log(from,to);
            ajaxRequestRates(formData);
        }else{
            var value = $(this).val(),
                elementChecked = $('.left-part li');
            elementChecked.show();
            $('.left-part > li:not(:containsi(' + value + '))').hide();
            $('.left-part > li:containsi(' + value + ')').show();
        }
    });

    function ajaxRequestRates (formData){
        $.ajax({
            url: "http://ex24.popel.com.ua/ru/service/rates-calculator/",
            type: "POST",
            dataType: "json",
            data: formData,
            success: function(data){
                console.log(data);
            },
            error: function(errorThrown){
                console.log(errorThrown);
            }
        });
    }


    $(document).on('click', '.all-directions-tab', function(){
        var $selected =  $(this).find('a.active'),
            from = $($selected[0]).attr("data-name"),
            to = $($selected[1]).attr("data-name"),
            directionsResult = {
                from: from,
                to: to
            };
        var rightUlList = $('.right-part a'),
            valueSupported;

        $.each(ex24_directions, function(index,value){
            if(from == index){
                valueSupported = value;

            }
        });
        $.each(rightUlList,function(index,value){
           var dataName = $(value).attr("data-name");
            $(value).parent().addClass('inactive');
            $.each(valueSupported, function(ind,val){
                if(dataName == val){
                    $(value).parent().removeClass('inactive');
                    $(value).addClass('right-direction');
                }
            });
        });
        if($selected.length>1){
            $.ajax({
                url: "http://ex24.popel.com.ua/ru/service/rates-by-direction/",
                type: "POST",
                dataType: "json",
                data: directionsResult,
                success: function(data){
                    if(data.result === true){
                        currencyName.from = data.from.name;
                        currencyName.to = data.to.name;
                        var ratesFromTitle = data.from.title,
                            ratesToTitle = data.to.title,
                            headerTemplate = '<tr><th>Обменник</th><th colspan="2">Лучший курс</th><th>Резерв</th></tr>';
                        $('.rates-table').empty();
                        $('.rates-table').append(headerTemplate);
                        $.each(data.rates,function(rate,value){
                            var ratesIn = value.in,
                                ratesOut = value.out,
                                ratesReserve = value.reserve,
                                serviceName = value.service.name,
                                cliclLink = value.link,
                                tableHtml = '<tr><td class="td-highlighted"><span class="icon-green-dot"></span><span><a class="name-of-merchant" href="'+ cliclLink +'">'+ serviceName +'<br></a></span></td><td><span class="rates-in">'+ratesIn+'</span><br><h5 class="descr-table rates-from-title">'+ratesFromTitle+'</h5></td><td class="course-differents-td"><span class="icon-table-arrow rates-out"></span>'+ratesOut+'<br><h5 class="descr-table rates-to-title">'+ratesToTitle+'</h5></td><td><span class="rates-reserve">'+ratesReserve+'</span><br><h5 class="descr-table rates-to-title">'+ratesToTitle+'</h5></td></tr>';
                            $('.rates-table').append(tableHtml);
                        });
                        $('#notif-form-btn').prop('disabled',false);
                        $('.directions-header').text('Обмен '+ ratesFromTitle +' на ' +ratesToTitle);
                        $('.notif-from-sp').text(ratesFromTitle);
                        $('.notif-to-sp').text(ratesToTitle);
                        ///chart-part

                        chartTypeCheck(currencyName.from,currencyName.to,formatDateStart(),formatDateEnd(),'1h');
                        $('.for-day').addClass('active');
                        ///chart-part

                    }else{
                        alert("Wrong direction!");
                    }


                },
                error: function(errorThrown){
                    console.log("This exchange is unavailable!");
                }
            });
        }
    });
    $(document).on('click', '.most-popular-tab', function(){
        var $selected =  $(this).find('a.active .most-popular-span'),
            from = $($selected[0]).attr("data-name"),
            to = $($selected[1]).attr("data-name"),
            directionsResult = {
                from: from,
                to: to
            };
        if($selected.length>0){
            $.ajax({
                url: "http://ex24.popel.com.ua/ru/service/rates-by-direction/",
                type: "POST",
                dataType: "json",
                data: directionsResult,
                success: function(data){
                    if(data.result === true){
                        var ratesFromTitle = data.from.title,
                            ratesToTitle = data.to.title,
                            headerTemplate = '<tr><th>Обменник</th><th colspan="2">Лучший курс</th><th>Резерв</th></tr>';
                        $('.rates-table').empty();
                        $('.rates-table').append(headerTemplate);
                        $.each(data.rates,function(rate,value){
                            var ratesIn = value.in,
                                ratesOut = value.out,
                                ratesReserve = value.reserve,
                                serviceName = value.service.name,
                                cliclLink = value.service.link,
                                tableHtml = '<tr><td class="td-highlighted"><span class="icon-green-dot"></span><span><a class="name-of-merchant" href="'+ cliclLink +'">'+ serviceName +'<br></a></span></td><td><span class="rates-in">'+ratesIn+'</span><br><h5 class="descr-table rates-from-title">'+ratesFromTitle+'</h5></td><td class="course-differents-td"><span class="icon-table-arrow rates-out"></span>'+ratesOut+'<br><h5 class="descr-table rates-to-title">'+ratesToTitle+'</h5></td><td><span class="rates-reserve">'+ratesReserve+'</span><br><h5 class="descr-table rates-to-title">'+ratesToTitle+'</h5></td></tr>';
                            $('.rates-table').append(tableHtml);
                        });
                        $('#notif-form-btn').prop('disabled',false);
                        $('.notif-from-sp').text(ratesFromTitle);
                        $('.notif-to-sp').text(ratesToTitle);
                        ///chart-part
                        chartTypeCheck(currencyName.from,currencyName.to,formatDateStart(),formatDateEnd(),'1h');
                        $('.for-day').addClass('active');
                        ///chart-part
                    }else{
                        alert("Wrong direction!");
                    }
                },
                error: function(errorThrown){
                    alert("This exchange is unavailable!");
                }
            });
        }
    });


/// RATE_CALCULATOR_END


///RATE_FILTER


///Rate_FILTER_END


/// NOTIFICATIONS_START
    $(document).on('currency-selected',function(){
        $('#notif-form-btn').prop('disabled',false);
    });
    $('#notif-form-btn').on('click',function(e){
        e.preventDefault();
        var inVal = $('#notif-in').val(),
            outVal = 1,
            outReserve = $('#notif-reserve').val(),
            radioGroup = $('input[name=period]'),
            durationSet = radioGroup.filter(':checked').val(),
            notifEmail = $('#notif-email').val(),
            notifObj = {
                from:currencyName.from,
                to:currencyName.to,
                in:inVal,
                out:outVal,
                reserve:outReserve,
                email:notifEmail,
                expires:durationSet
            };
        $.ajax({
            url: "http://ex24.popel.com.ua/ru/rate-notification/create/ ",
            type: "POST",
            dataType: "json",
            data: notifObj,
            success: function(data){
                $('.notif-head').prepend('<p class="succes-notif-pr">Подписка оформлена!</p>');
                $('.notif-head-pr').text('Еще одно уведомление');
            },
            error:function(errorThrown){
                console.log(errorThrown);
            },
            beforeSend:function(){
                alert('before send');
            }
        });
    });

///NOTIFICATIONS_END


    //chart-start!!
    //
    //
    //
    //
    //


    function formatDateStart() {
        var d = new Date,
            dformatStart = [d.getFullYear().padLeft(),
                    (d.getMonth()+1).padLeft(),
                    (d.getDate()-1).padLeft()].join('-') +' ' +
                    [d.getHours().padLeft(),
                    d.getMinutes().padLeft(),
                    d.getSeconds().padLeft()].join(':');
        console.log(dformatStart);
        return dformatStart
    }
    function formatDateEnd(){
        var d = new Date,
            dformatEnd = [d.getFullYear().padLeft(),
                    (d.getMonth()+1).padLeft(),
                    d.getDate().padLeft()].join('-') +' ' +
                    [d.getHours().padLeft(),
                    d.getMinutes().padLeft(),
                    d.getSeconds().padLeft()].join(':');
        console.log(dformatEnd);
        return dformatEnd

    }




    function chartAjaxPrimary(from, to, start,end,step){
        var chartSendObj = {
            from:from,
            to:to,
            start:start,
            end:end,
            step:step
        };
        console.log(chartSendObj);
        $.ajax({
            url:'http://ex24.popel.com.ua/ru/stats/rate-change/',
            type:'POST',
            dataType:'json',
            data:chartSendObj,
            success:function(data){
                console.log(data);
                if(data.result==true){
                    var xAxisArray = [],
                        yAxisArray =[];
                    $.each(data.stats, function (index, value) {
                        xAxisArray.push(value.x);
                        yAxisArray.push(value.y);
                    });
                    lineChartData.labels = xAxisArray;
                    lineChartData.datasets[0].data = yAxisArray;
                    console.log(lineChartData.labels ,lineChartData.datasets[0].data );
                    if(chartLine==null){
                        chartLine = new Chart(ctx).Line(lineChartData, {
                            responsive: true,
                            scaleShowVerticalLines: false,
                            scaleGridLineColor : "rgba(255,255,255,.08)",
                        });
                        $('.warning-direction').remove();
                        return
                    }
                    chartLine.destroy();
                    chartLine = new Chart(ctx).Line(lineChartData, {
                        responsive: true,
                        scaleShowVerticalLines: false,
                        scaleGridLineColor : "rgba(255,255,255,.08)"
                    });
                }else{
                    alert("error");
                }

            }
        });

    };

    //
    //
    //
    //
    //CHART END!!!!!







 $('#calendar').daterangepicker({

 });
    $('.input-mini').trigger('click');


     $('.directions-second').on('click',function(e){
         e.preventDefault();
         $('.all-directions-tab').addClass('hidden-tab');
         $('.all-directions-tab').on('transitionend webkitTransitionEnd', function(e){
             $('.all-directions-tab').hide();
             $('.most-popular-tab').show();
             $('.most-popular-tab').removeClass('hidden-tab');
         })

     });
    $('.directions-first').on('click',function(e){
        e.preventDefault();
        $('.most-popular-tab').addClass('hidden-tab');
        $('.most-popular-tab').on('transitionend webkitTransitionEnd', function(e){
            $('.most-popular-tab').hide();
            $('.all-directions-tab').show();
            $('.all-directions-tab').removeClass('hidden-tab');
        })

    });
 ///CHART

    //var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
    function runChart (){
        chartLine.destroy();
        chartLine = new Chart(ctx).Line(lineChartData, {
            responsive: true,
            scaleShowVerticalLines: false,
            scaleGridLineColor : "rgba(255,255,255,.08)",
            scaleFontColor: "rgba(255,255,255,.3)"
        });
    };
    $(document).on('shown.bs.tab',function(){
        if(currencyName.from == null || currencyName.to == null){
           return
        }else{
            chartLine.destroy();
            $('.warning-direction').remove();
            runChart();
        }
    });


    function chartTypeCheck(from,to,start,end,step){
        if($('#course-changes-type').hasClass('active-chart-type')){
            chartAjaxPrimaryDay(from,to,start,end,step);
        }else if($('#reserve-changes-type').hasClass('active-chart-type')) {
            chartAjaxReserve(to,start,end,step);
        }else if($('#popularity-type').hasClass('active-chart-type')) {
            chartAjaxPopularity(currencyName.from,currencyName.to,formatDateStart(),formatDateEnd(),'1h');
            }else if($('#click-type').hasClass('active-chart-type')){
                chartAjaxClick(from,to,start,end,step);
            }
    }



    $('#calendar').on('apply.daterangepicker', function(ev, picker) {
        var startDate = picker.startDate.format('YYYY-MM-DD')+" "+"00:00:00",
            endDate = picker.endDate.format('YYYY-MM-DD')+" "+"00:00:00";
        chartTypeCheck(currencyName.from, currencyName.to, startDate,endDate,'1d');
        $('#calendar-drop-link').dropdown('toggle');
    });
    $('.for-hour').on('click',function(){
        var d = new Date,
            startDate = [d.getFullYear().padLeft(),
                    (d.getMonth()+1).padLeft(),
                    (d.getDate()).padLeft()].join('-') +' ' +
                [(d.getHours().padLeft()-1),
                    d.getMinutes().padLeft(),
                    d.getSeconds().padLeft()].join(':'),
            endDate = [d.getFullYear().padLeft(),
                    (d.getMonth()+1).padLeft(),
                    (d.getDate()).padLeft()].join('-') +' ' +
                [d.getHours().padLeft(),
                    d.getMinutes().padLeft(),
                    d.getSeconds().padLeft()].join(':');

        chartTypeCheck(currencyName.from,currencyName.to,startDate,endDate,'10m');
    });
    $('.for-day').on('click',function(){
        chartTypeCheck(currencyName.from,currencyName.to,formatDateStart(),formatDateEnd(),'1h');
    });
    function chartAjaxPrimaryDay(from, to, start,end,step){
        var chartSendObj = {
            from:from,
            to:to,
            start:start,
            end:end,
            step:step
        };
        console.log(chartSendObj);
        $.ajax({
            url:'http://ex24.popel.com.ua/ru/stats/rate-change/',
            type:'POST',
            dataType:'json',
            data:chartSendObj,
            success:function(data){
                console.log(data);
                if(data.result==true){
                    var xAxisArray = [],
                        yAxisArray =[];
                    $.each(data.stats, function (index, value) {
                        var date = new Date(value.x);
                        var display =  [date.getHours().padLeft(),
                            date.getMinutes().padLeft(),
                            date.getSeconds().padLeft()].join(':');
                        xAxisArray.push(display);
                        yAxisArray.push(value.y);
                    });
                    lineChartData.labels = xAxisArray;
                    lineChartData.datasets[0]={
                        data:yAxisArray,
                        fillColor : "rgba(172,4,146,0.2)",
                        strokeColor : "rgba(215,96,78,1)",
                        pointColor : "rgba(172,4,146,1)",
                        pointStrokeColor : "rgba(215,96,78,1)",
                        pointHighlightFill : "rgba(172,4,146,1)",
                        pointHighlightStroke : "rgba(172,4,146,1)"
                    };
                    console.log(lineChartData.labels ,lineChartData.datasets[0].data );
                    if(chartLine==null){
                        chartLine = new Chart(ctx).Line(lineChartData, {
                            responsive: true,
                            scaleShowVerticalLines: false,
                            scaleGridLineColor : "rgba(255,255,255,.08)",
                            scaleFontColor: "rgba(255,255,255,.3)"
                        });
                        $('.warning-direction').remove();
                        return
                    }
                    chartLine.destroy();
                    chartLine = new Chart(ctx).Line(lineChartData, {
                        responsive: true,
                        scaleShowVerticalLines: false,
                        scaleGridLineColor : "rgba(255,255,255,.08)",
                        scaleFontColor: "rgba(255,255,255,.3)"
                    });
                }else{
                    alert("error");
                }

            }
        });
    };
    function chartAjaxPrimaryPeriod(from, to, start,end,step){
        var chartSendObj = {
            from:from,
            to:to,
            start:start,
            end:end,
            step:step
        };
        console.log(chartSendObj);
        $.ajax({
            url:'http://ex24.popel.com.ua/ru/stats/rate-change/',
            type:'POST',
            dataType:'json',
            data:chartSendObj,
            success:function(data){
                console.log(data);
                if(data.result==true){
                    var xAxisArray = [],
                        yAxisArray =[];
                    $.each(data.stats, function (index, value) {
                        var date = new Date(value.x);
                        var display =  [date.getFullYear().padLeft(),
                            (date.getMonth()+1).padLeft(),
                            (date.getDate()).padLeft()].join('-');
                        xAxisArray.push(display);
                        yAxisArray.push(value.y);
                    });
                    lineChartData.labels = xAxisArray;
                    lineChartData.datasets[0]={
                        data:yAxisArray,
                        fillColor : "rgba(172,4,146,0.2)",
                        strokeColor : "rgba(215,96,78,1)",
                        pointColor : "rgba(172,4,146,1)",
                        pointStrokeColor : "rgba(215,96,78,1)",
                        pointHighlightFill : "rgba(172,4,146,1)",
                        pointHighlightStroke : "rgba(172,4,146,1)"
                    };
                    console.log(lineChartData.labels ,lineChartData.datasets[0].data );
                    if(chartLine==null){
                        chartLine = new Chart(ctx).Line(lineChartData, {
                            responsive: true,
                            scaleShowVerticalLines: false,
                            scaleGridLineColor : "rgba(255,255,255,.08)",
                            scaleFontColor: "rgba(255,255,255,.3)"
                        });
                        $('.warning-direction').remove();
                        return
                    }
                    chartLine.destroy();
                    chartLine = new Chart(ctx).Line(lineChartData, {
                        responsive: true,
                        scaleShowVerticalLines: false,
                        scaleGridLineColor : "rgba(255,255,255,.08)",
                        scaleFontColor: "rgba(255,255,255,.3)"
                    });
                }else{
                    alert("error");
                }

            }
        });

    };

    $('#reserve-changes-type').on('click',function(){
        chartAjaxReserve(currencyName.to,formatDateStart(),formatDateEnd(),'1h');
        $('.period-changes').find('.active').removeClass('active');
        $('.for-day').addClass('active');
    });
    $('#course-changes-type').on('click',function(){
        chartAjaxPrimaryDay(currencyName.from,currencyName.to,formatDateStart(),formatDateEnd(),'1h');
        $('.period-changes').find('.active').removeClass('active');
        $('.for-day').addClass('active');
    });
    $('#popularity-type').on('click',function(){
        chartAjaxPopularity(currencyName.from,currencyName.to,formatDateStart(),formatDateEnd(),'1h');
        $('.period-changes').find('.active').removeClass('active');
        $('.for-day').addClass('active');
    });
    $('#click-type').on('click',function(){
        chartAjaxClick(currencyName.from,currencyName.to,formatDateStart(),formatDateEnd(),'2h');
        $('.period-changes').find('.active').removeClass('active');
        $('.for-day').addClass('active');
    });
    function chartAjaxPopularity(from, to, start,end,step){
        var chartSendObj = {
            from:from,
            to:to,
            start:start,
            end:end,
            step:step
        };
        console.log(chartSendObj);
        $.ajax({
            url:'http://ex24.popel.com.ua/ru/stats/direction-popularity/',
            type:'POST',
            dataType:'json',
            data:chartSendObj,
            success:function(data){
                console.log(data);
                if(data.result==true){
                    var xAxisArray = [],
                        yAxisArray =[];
                    $.each(data.stats, function (index, value) {
                        var date = new Date(value.x);
                        var display =  [date.getHours().padLeft(),
                            date.getMinutes().padLeft(),
                            date.getSeconds().padLeft()].join(':');
                        xAxisArray.push(display);
                        yAxisArray.push(value.y);
                    });
                    lineChartData.labels = xAxisArray;
                    lineChartData.datasets[0]={
                        data:yAxisArray,
                        fillColor : "rgba(172,4,146,0.2)",
                        strokeColor : "rgba(215,96,78,1)",
                        pointColor : "rgba(172,4,146,1)",
                        pointStrokeColor : "rgba(215,96,78,1)",
                        pointHighlightFill : "rgba(172,4,146,1)",
                        pointHighlightStroke : "rgba(172,4,146,1)"
                    };
                    console.log(lineChartData.labels ,lineChartData.datasets[0].data );
                    if(chartLine==null){
                        chartLine = new Chart(ctx).Line(lineChartData, {
                            responsive: true,
                            scaleShowVerticalLines: false,
                            scaleGridLineColor : "rgba(255,255,255,.08)",
                            scaleFontColor: "rgba(255,255,255,.3)"
                        });
                        $('.warning-direction').remove();
                        return
                    }
                    chartLine.destroy();
                    chartLine = new Chart(ctx).Line(lineChartData, {
                        responsive: true,
                        scaleShowVerticalLines: false,
                        scaleGridLineColor : "rgba(255,255,255,.08)",
                        scaleFontColor: "rgba(255,255,255,.3)"
                    });
                }else{
                    alert("error");
                }

            }
        });

    };



    function chartAjaxReserve(to, start,end,step){
        var chartSendObj = {
            name:to,
            start:start,
            end:end,
            step:step
        };
        console.log(chartSendObj);
        $.ajax({
            url:'http://ex24.popel.com.ua/ru/stats/currency-reserve/',
            type:'POST',
            dataType:'json',
            data:chartSendObj,
            success:function(data){
                console.log(data);
                if(data.result==true){
                    var xAxisArray = [],
                        yAxisArray =[];
                    $.each(data.stats, function (index, value) {
                        var date = new Date(value.x);
                        var display =  [date.getHours().padLeft(),
                            date.getMinutes().padLeft(),
                            date.getSeconds().padLeft()].join(':');
                        xAxisArray.push(display);
                        yAxisArray.push(value.y);
                    });
                    lineChartData.labels = xAxisArray;
                    lineChartData.datasets[0]={
                        data:yAxisArray,
                        fillColor : "rgba(172,4,146,0.2)",
                        strokeColor : "rgba(215,96,78,1)",
                        pointColor : "rgba(172,4,146,1)",
                        pointStrokeColor : "rgba(215,96,78,1)",
                        pointHighlightFill : "rgba(172,4,146,1)",
                        pointHighlightStroke : "rgba(172,4,146,1)"
                    };
                    console.log(lineChartData.labels ,lineChartData.datasets[0].data );
                    if(chartLine==null){
                        chartLine = new Chart(ctx).Line(lineChartData, {
                            responsive: true,
                            scaleShowVerticalLines: false,
                            scaleGridLineColor : "rgba(255,255,255,.08)",
                            scaleFontColor: "rgba(255,255,255,.3)"
                        });
                        $('.warning-direction').remove();
                        return
                    }
                    chartLine.destroy();
                    chartLine = new Chart(ctx).Line(lineChartData, {
                        responsive: true,
                        scaleShowVerticalLines: false,
                        scaleGridLineColor : "rgba(255,255,255,.08)",
                        scaleFontColor: "rgba(255,255,255,.3)"
                    });
                }else{
                    alert("error");
                }

            }
        });

    };


    function chartAjaxClick(from, to, start,end,step){
        var chartSendObj = {
            from:from,
            to:to,
            start:start,
            end:end,
            step:step
        };
        console.log(chartSendObj);
        $.ajax({
            url:'http://ex24.popel.com.ua/ru/stats/click-volume/',
            type:'POST',
            dataType:'json',
            data:chartSendObj,
            success:function(data){
                console.log(data);
                if(data.result==true){
                    var xAxisArray = [],
                        yAxisArray =[];
                    $.each(data.stats, function (index, value) {
                        var date = new Date(value.x);
                        var display =  [date.getHours().padLeft(),
                            date.getMinutes().padLeft(),
                            date.getSeconds().padLeft()].join(':');
                        yAxisArray.push(value.rate);
                        xAxisArray.push(value.service.name);
                    });
                    lineChartData.labels = xAxisArray;
                    lineChartData.datasets[0]= {
                        data:yAxisArray,
                        label: "My First dataset",
                        fillColor : "rgba(25,205,238,1)",
                        strokeColor : "rgba(25,205,238,1)",
                        highlightFill: "rgba(25,205,238,.8)",
                        highlightStroke: "rgba(25,205,238,.8)"
                    };
                    console.log(lineChartData.labels ,lineChartData.datasets[0].data );
                    if(chartLine==null){
                        chartLine = new Chart(ctx).Bar(lineChartData, {
                            responsive: true,
                            scaleShowVerticalLines: false,
                            scaleGridLineColor : "rgba(255,255,255,.08)",
                            scaleFontColor: "rgba(255,255,255,.3)"

                        });
                        $('.warning-direction').remove();
                        return
                    }
                    chartLine.destroy();
                    chartLine = new Chart(ctx).Bar(lineChartData, {
                        responsive: true,
                        scaleShowVerticalLines: false,
                        scaleGridLineColor : "rgba(255,255,255,.08)",
                        scaleFontColor: "rgba(255,255,255,.3)"
                    });
                }else{
                    alert("error");
                }

            }
        });

    };





 ///CHART
})(window.jQuery);
