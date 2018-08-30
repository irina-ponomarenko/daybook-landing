$(document).ready(function () {

    //------------------------модальні вікна------------------//


    $('.teacher_open').on('click', function () {
        $('#teacher').popup({
            transition: 'all 0.3s',
            scrolllock: true,
            onclose: function () {
            }
        });
    });
    $('.parents_open').on('click', function () {
        $('#parents').popup({
            transition: 'all 0.3s',
            scrolllock: true,
            onclose: function () {
            }
        });
    });

    $('.student_open').on('click', function () {
        $('#student').popup({
            transition: 'all 0.3s',
            scrolllock: true,
            onclose: function () {
            }
        });
    });

    $('.user_open').on('click', function () {
        $('#user').popup({
            transition: 'all 0.3s',
            scrolllock: true,
            onclose: function () {
            }
        });
    });

    $('.login_open').on('click', function () {
        $('#login').popup({
            transition: 'all 0.3s',
            scrolllock: true,
            onclose: function () {
            }
        });
    });

    $('.schools_open').on('click', function () {
        $('#schools').popup({
            transition: 'all 0.3s',
            scrolllock: true,
            onclose: function () {
            }
        });
    });
    $('.schools15_open').on('click', function () {
        $('#schools15').popup({
            transition: 'all 0.3s',
            scrolllock: true,
            onclose: function () {
            }
        });
    });
    $('.schools20_open').on('click', function () {
        $('#schools20').popup({
            transition: 'all 0.3s',
            scrolllock: true,
            onclose: function () {
            }
        });
    });
    $('.schools69_open').on('click', function () {
        $('#schools69').popup({
            transition: 'all 0.3s',
            scrolllock: true,
            onclose: function () {
            }
        });
    });
    $('.schools50_open').on('click', function () {
        $('#schools50').popup({
            transition: 'all 0.3s',
            scrolllock: true,
            onclose: function () {
            }
        });
    });
    $('.schools57_open').on('click', function () {
        $('#schools57').popup({
            transition: 'all 0.3s',
            scrolllock: true,
            onclose: function () {
            }
        });
    });
    $('.schools25_open').on('click', function () {
        $('#schools25').popup({
            transition: 'all 0.3s',
            scrolllock: true,
            onclose: function () {
            }
        });
    });
    $('.schools1_open').on('click', function () {
        $('#schools1').popup({
            transition: 'all 0.3s',
            scrolllock: true,
            onclose: function () {
            }
        });
    });

    $('.true_open').on('click', function () {
        $('#true').popup({
            transition: 'all 0.3s',
            scrolllock: true,
            onclose: function () {
            }
        });
    });
    $('.true1_open').on('click', function () {
        $('#true1').popup({
            transition: 'all 0.3s',
            scrolllock: true,
            onclose: function () {
            }
        });
    });

    $('.true_open-trigger').on('click', function() {
        $('.true_open').trigger('click');
    });
    $('.true1_open-trigger').on('click', function() {
        $('.true1_open').trigger('click');
    });

    $('.schools2_open').on('click', function () {
        $('#schools2').popup({
            transition: 'all 0.3s',
            scrolllock: true,
            onclose: function () {
            }
        });
    });

    $(function () {
        var _gaq = _gaq || [];
        _gaq.push(['_setAccount', 'UA-36251023-1']);
        _gaq.push(['_setDomainName', 'jqueryscript.net']);
        _gaq.push(['_trackPageview']);

        (function () {
            var ga = document.createElement('script');
            ga.type = 'text/javascript';
            ga.async = true;
            ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(ga, s);
        })();
    });

    $('.question-form').hover(function () {
            $('.hint').show();
        },
        function () {
            $('.hint').hide();
        });

    $('.male').hover(function () {
            $(this)
                .parent()
                .find('.hint-male')
                .addClass('open-hint-male');
        },
        function () {
            $('.hint-male').removeClass('open-hint-male');
        });
    $('.female').hover(function () {
            $(this)
                .parent()
                .find('.hint-male')
                .addClass('open-hint-male');
        },
        function () {
            $('.hint-male').removeClass('open-hint-male');
        });


    $('.tree-dots').click(function () {
        $(this).addClass('class-delete-active')
            .parent()
            .find('.class-delete')
            .addClass('class-delete-active');
    });

    $('.class-delete').on('click', function () {
        $(this).removeClass('class-delete-active');
        $('.tree-dots').removeClass('class-delete-active');
    });
    $(document).mouseup(function (e) {
        if (jQuery(e.target).closest(".class-delete").length > 0) {
            return false;
        }

        else $(".class-delete").removeClass('class-delete-active');
        $('.tree-dots').removeClass('class-delete-active');
        clickCount = 1;
    });


    $('.add-class').click(function () {
        $(this)
            .parent()
            .find('.add-class-modal')
            .addClass('add-class-active');
    });

    $('.cancel').on('click', function () {
        $('.add-class-modal').removeClass('add-class-active');
    });

    $(document).mouseup(function (e) {
        if (jQuery(e.target).closest(".add-class-modal").length > 0) {
            return false;
        }

        else $(".add-class-modal").removeClass('add-class-active');
        clickCount = 1;
    });


    $('.new-student').click(function () {
        $(this)
            .parent()
            .find('.add-student-modal')
            .addClass('add-student-active');
    });

    $('.cancel').on('click', function () {
        $('.add-student-modal').removeClass('add-student-active');
    });

    $(document).mouseup(function (e) {
        if (jQuery(e.target).closest(".add-student-modal").length > 0) {
            return false;
        }

        else $(".add-student-modal").removeClass('add-student-active');
        clickCount = 1;
    });



    $('.some-class').click(function () {
        $(this).toggleClass('active-some');
    });

    $(document).mouseup(function (e) {
        if ($(e.target).closest(".active-some").length > 0) {
            return false;
        }
        else {
            $('.some-class').removeClass('active-some');
        }
    });
    $('.add-some-modal').click(function (e) {
        e.stopPropagation();
    });


    $('.sortable-new').click(function () {
        $(this)
            .parent()
            .find('.add-class-modal-sort')
            .addClass('add-sort-active');
    });

    $('.cancel').on('click', function () {
        $('.add-class-modal-sort').removeClass('add-sort-active');
    });

    $(document).mouseup(function (e) {
        if (jQuery(e.target).closest(".add-class-modal-sort").length > 0) {
            return false;
        }

        else $(".add-class-modal-sort").removeClass('add-sort-active');
        clickCount = 1;
    });


    $('.exit').click(function () {
        $(this)
            .parent()
            .find('.add-school-drop-down')
            .addClass('active-school');
    });

    $('.cancel').on('click', function () {
        $('.add-school-drop-down').removeClass('active-school');
    });

    $(document).mouseup(function (e) {
        if (jQuery(e.target).closest(".add-school-drop-down").length > 0) {
            return false;
        }

        else $(".add-school-drop-down").removeClass('active-school');
        clickCount = 1;
    });


    $('.user-registered').click(function () {
        $(this).toggleClass('active-user-cabinet');
    });

    $(document).mouseup(function (e) {
        if ($(e.target).closest(".active-user-cabinet").length > 0) {
            return false;
        }
        else {
            $('.user-registered').removeClass('active-user-cabinet');
            $('.background-search').removeClass('active-background-search');
        }
    });

    $('.add-new-class').click(function () {
        $(this)
            .parent()
            .find('.drop-down-add-new-class')
            .toggleClass('active-class-block');
    });

    $(document).mouseup(function (e) {
        if ($(e.target).closest(".active-class-block").length > 0) {
            return false;
        }
        else {
            $('.drop-down-add-new-class').removeClass('active-class-block');
        }
    });
    $('.drop-down-add-new-class').click(function (e) {
        e.stopPropagation();
    });



    $('.add-new-column').click(function (event) {
        const currentOffset = $(this).offset().left;
        const parentOffset = $('#wrapper').offset().left;
        $('#drop-down')
            .css({ left: currentOffset - parentOffset + $(this).width() / 2 - 5  })
            .toggleClass('active-column');
    });

    $(document).mouseup(function (e) {
        if ($(e.target).closest("#drop-down").length > 0) {
            return false;
        }
        else {
            $('.wrapper-drop-down').removeClass('active-column');
        }
    });
    $('.drop-down-redactor').click(function (e) {
        e.stopPropagation();
    });



    $('.add-note-active').click(function (event) {
        const currentOffset = $(this).offset().left;
        const parentOffset = $('#wrapper').offset().left;

        $(this).addClass('visible');

        $('#drop-down-note')
            .css({ left: currentOffset - parentOffset + $(this).width() / 2 - 5  })
            .toggleClass('active-note');
    });

    $(document).mouseup(function (e) {
        if ($(e.target).closest(".active-note").length > 0) {
            return false;
        }
        else {
            $('.drop-down-note').removeClass('active-note');
            $('.add-note-active').removeClass('visible');
        }
    });
    $('.drop-down-note').click(function (e) {
        e.stopPropagation();
    });

    $('.btn-setting').click(function () {
        $(this)
            .parent()
            .find('.drop-down-setting')
            .toggleClass('active-setting');
    });

    $(document).mouseup(function (e) {
        if ($(e.target).closest(".active-setting").length > 0) {
            return false;
        }
        else {
            $('.drop-down-setting').removeClass('active-setting');
        }
    });
    $('.drop-down-setting').click(function (e) {
        e.stopPropagation();
    });

    $('.btn-redactor').click(function () {
        $(this)
            .addClass('btn-redactor-active')
            .parent()
            .find('.drop-down-redactor')
            .toggleClass('active-redactor');
    });

    $(document).mouseup(function (e) {
        if ($(e.target).closest(".active-redactor").length > 0) {
            return false;
        }
        else {
            $('.drop-down-redactor').removeClass('active-redactor');
            $('.btn-redactor').removeClass('btn-redactor-active');
        }
    });
    $('.drop-down-redactor').click(function (e) {
        e.stopPropagation();
    });

    $('.wrapper-question').click(function () {
        $(this)
            .parent()
            .find('.wrapper-modal')
            .toggleClass('active-question-modal');
    });

    $(document).mouseup(function (e) {
        if ($(e.target).closest(".active-question-modal").length > 0) {
            return false;
        }
        else {
            $('.wrapper-modal').removeClass('active-question-modal');
        }
    });
    $('.wrapper-modal').click(function (e) {
        e.stopPropagation();
    });


    $('.search-btn').on('click', function () {
        $('.search-header').toggleClass('open-search');
    });
    $('.close-search').on('click', function () {
        $('.search-header').removeClass('open-search');
    });
    $(document).mouseup(function (e) {
        if ($(e.target).closest(".open-search").length > 0) {
            return false;
        }
        else {
            $('.search-header').removeClass('open-search');
        }

    });
    if ($(window).width() <= 768) {
        $('.search-btn').attr('disabled',true);
    }


    $('.drop-down-content').on('click', function () {
        $(this).toggleClass('scale-content');
    });
    let data = [
        'Історія україни',
        'Історія мистецтва',
        'Приклад три',
        'Приклад чотири',
        'Приклад П’ять'
    ];

    $('#autocomplete').autocomplete({
        lookup: data
    });


    $('.class-delete').click(function () {
        $().toastmessage('showSuccessToast', "Клас видалено.");
    });

    $('.copy-text').click(function (){
        $('').toastmessage('showToast', { type: 'notice', text: "Pre-код скопійовано.", closeText: '' });
    });


    $('.leader-title').hover(function () {
            $(this)
                .parent()
                .find('.hint-male')
                .addClass('open-hint-male');
        },
        function () {
            $('.hint-male').removeClass('open-hint-male');
        });

    if ($(window).width() > 922) {
            $('.navigation').hover(function () {
                    $(this).addClass('active-hover-menu');
                },
                function () {
                    $(this).removeClass('active-hover-menu');
                });
    }


     if ($(window).width() <= 922) {
        $('.search-btn-responsive').on('click', function () {
            $('.search-header').addClass('search-open-responsive');
            $('.background-search').css('display', 'block');
        });
        $('.close-search').on('click', function () {
            $('.search-header').removeClass('search-open-responsive');
            $('.background-search').css('display', 'none');
        });
    }

    $(function() {
        $('#wrapper').jScrollPane({
            verticalGutter: 0
        });
    });


    $('.name-student-table').hover( function() {
        $(this).parent()
            .find('.btn-book')
            .addClass('btn-book-active');
    }, function() {
        $(this).parent()
            .find('.btn-book')
            .removeClass('btn-book-active');
    });

    $(".chosen-select").chosen({disable_search_threshold: 10});

    $("body").addClass("nohover");

    $('.close-block').click(function () {
        $('.got-it-info').css('display', 'none');
    });

    $('.active-row-label').click(function () {
        $(".toast-message").fadeIn(300);
        $('.toast-message').fadeOut(2000);
    });



    $('.nav-menu-btn').click(function () {
        $(this).toggleClass('menu-close-btn');
       $('.container-nav').toggleClass('open-menu');
    });
    $(document).mouseup(function (e) {
        if ($(e.target).closest(".open-menu").length > 0 || $(e.target).hasClass('nav-menu-btn')) {
            return false;
        }
        else {
            $('.container-nav').removeClass('open-menu');
            $('.background-search').removeClass('active-background-search2');
            $('.nav-menu-btn').removeClass('menu-close-btn');

        }

    });
    if ($(window).width() <= 768) {
        $('.nav-menu-btn').click(function () {
                $('.background-search').toggleClass('active-background-search2');
        });
        $('.user-registered').click(function () {
            $('.background-search').toggleClass('active-background-search');
        });
    }
});