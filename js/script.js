$(document).ready(function() {
    $(".navInner").hide();          // 처음엔 숨김상태
    $(".navInner #close").hide();
    
    $('nav #menuIcon').click(function() {
        $('.navInner').fadeToggle(300);
        $('.navInner #close').fadeToggle(300);
    });
    $('.navInner #close').click(function() {
        $('.navInner').fadeToggle(300);
        $(this).fadeToggle(300);
    });


    if (sessionStorage.getItem($('h2').text().split('*')[1]) != "true") {
        $('#찜1').attr("src", "../media/heart1.png");
    } else {
        $('#찜1').attr("src", "../media/heart3.png");
    };

    if (sessionStorage.getItem($('h2').text().split('*')[2]) != "true") {
        $('#찜2').attr("src", "../media/heart1.png");
    } else {
        $('#찜2').attr("src", "../media/heart3.png");
    };

    if (sessionStorage.getItem($('h2').text().split('*')[3]) != "true") {
        $('#찜3').attr("src", "../media/heart1.png");
    } else {
        $('#찜3').attr("src", "../media/heart3.png");
    };

    $('#heartList').click(function() {
        var array = [];
        var a;
        for (var i = 0; i < sessionStorage.length; i++) {
            var key = sessionStorage.key(i);
            var val = sessionStorage.getItem(key);
            if (val == 'true') {
                array[i] = key;
            }
        };
        for (var i = 0; i < sessionStorage.length; i++) {
            var key = sessionStorage.key(i);
            var val = sessionStorage.getItem(key);
            if (key != 'undefined') {
                if (key != 'darkLight') {
                    if (val == 'true'){
                        a += array[i];
                    }
                }
            }
        };
        
        result = a.replace('undefined', '');

        if (result.length != 0 ) {
            for (var i = 0; i < result.length; i++) {
                result = a.replace('undefined', '');
                result = a.replace('undefined ', '');
                result = a.replace('NaN ', '');
                result = a.replace('NaN', '');
                result = a.replace(' NaN', '');
                result = a.replace(' undefined ', '');
                result = a.replace(' undefined', '');
                result = a.replace('undefined ', '');
            }
            if (result.replace('undefined'));
            alert("찜 목록 : " + result);
        } else {
            alert('찜한 장소가 없습니다.');
        }
    });

});

$(document).ready(function() {
    
    $('.heart').mouseover(function() {
        $(this).attr("src", $(this).attr("src").replace("1","2"))
    });
    $('.heart').mouseout(function() {
        $(this).attr("src", $(this).attr("src").replace("2","1"))
    });

    
    $('.heart').click(function() {
        if ($(this).attr("src").indexOf("3") != -1) {
            $(this).attr("src", $(this).attr("src").replace("3","1"))
        } else {
            $(this).attr("src", $(this).attr("src").replace("2","3"))
        }

        if (($(this).attr("alt").indexOf("1") == true)){
            if (sessionStorage.getItem($('h2').text().split('*')[1], "true") != 'true') {
                alert($('h2').text().split('*')[1] + '을(를) 찜했습니다.');
                sessionStorage.setItem($('h2').text().split('*')[1], "true");
            } else if (sessionStorage.getItem($('h2').text().split('*')[1], "true") == 'true') {
                alert($('h2').text().split('*')[1] + '의 찜을 해제했습니다.');
                sessionStorage.setItem($('h2').text().split('*')[1], "false");
            } 
        };

        if (($(this).attr("alt").indexOf("2") == true)){
            if (sessionStorage.getItem($('h2').text().split('*')[2], "true") != 'true') {
                alert($('h2').text().split('*')[2] + '을(를) 찜했습니다.');
                sessionStorage.setItem($('h2').text().split('*')[2], "true");
            } else if (sessionStorage.getItem($('h2').text().split('*')[2], "true") == 'true') {
                alert($('h2').text().split('*')[2] + '의 찜을 해제했습니다.');
                sessionStorage.setItem($('h2').text().split('*')[2], "false");
            } 
        };

        if (($(this).attr("alt").indexOf("3") == true)){
            if (sessionStorage.getItem($('h2').text().split('*')[3], "true") != 'true') {
                alert($('h2').text().split('*')[3] + '을(를) 찜했습니다.');
                sessionStorage.setItem($('h2').text().split('*')[3], "true");
            } else if (sessionStorage.getItem($('h2').text().split('*')[3], "true") == 'true') {
                alert($('h2').text().split('*')[3] + '의 찜을 해제했습니다.');
                sessionStorage.setItem($('h2').text().split('*')[3], "false");
            } 
        };


    });
});


$(document).ready(function() {
    if (sessionStorage.getItem("darkLight")== "true") {
        $('body').css('background-color', 'white');
        $('#seoul').css('background-image', 'linear-gradient(rgba(0,0,0,0.0), rgba(0,0,0,0.0)), url("../media/seoul/Seoul_main.png")');
        $('#busan').css('background-image', 'linear-gradient(rgba(0,0,0,0.0), rgba(0,0,0,0.0)), url("../media/busan/Busan_main.png")');
        $('#gyeongju').css('background-image', 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("../media/gyeongju/Gyeongju_main.png")');
        $('#incheon').css('background-image', 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("../media/incheon/Incheon_main.png")');

        $('.nav').css('background-color', '');
        $('.storeBox').css('background-color', '');
        $('.navInner').css('background-color', '');
        $('.navInner li li').css('background-color', '');
        $('#scrollMenuForRegion').css('background-color', '');
        $('#scrollMenu').css('background-color', '');
        $('#scrollMenuForRegion > ul > li').css('background-color', '');
        $('#scrollMenuForRegion > ul > li').css('background-color', '');
        $('#left').css('background-color', '');
        $('#right').css('background-color', '');
        $('#only').css('background-color', '');
        $('#onlyTwo').css('background-color', '');
        $('.reviewBox').css('background-color', '');
        $('#bottom').css('background-color', '');
        $('.bestBoxBottom').css('background-color', '');
        $('section').css('color', '');
        $('aside').css('color', '');
        $('footer').css('color', '');
        $('section').css('color', '');
        $('.keyword p').css('background-color', '');
          
        $("#darkOrLight").text("다크 모드 전환");
        
    } else {
        $('body').css('background-color', '#4b4e55');
        $('#seoul').css('background-image', 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("../media/seoul/Seoul_main.png")');
        $('#busan').css('background-image', 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("../media/busan/Busan_main.png")');
        $('#gyeongju').css('background-image', 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("../media/gyeongju/Gyeongju_main.png")');
        $('#incheon').css('background-image', 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("../media/incheon/Incheon_main.png")');
        
        $('.nav').css('background-color', 'rgba(60, 60, 60, 0.7)');
        $('.storeBox').css('background-color', '#45474e');
        $('.navInner').css('background-color', '#45474e');
        $('.navInner li li').css('background-color', '#525767');
        $('#scrollMenuForRegion').css('background-color', 'rgba(76,78,83,0.7)');
        $('#scrollMenu').css('background-color', 'rgba(76,78,83,0.7)');
        $('#scrollMenuForRegion > ul > li').css('background-color', '#53575f');
        $('#scrollMenu > ul > li').css('background-color', '#53575f');
        $('#left').css('background-color', '#45474e');
        $('#right').css('background-color', '#45474e');
        $('#only').css('background-color', '#525767');
        $('#onlyTwo').css('background-color', '#525767');
        $('.reviewBox').css('background-color', '#53575f');
        $('#bottom').css('background-color', '#45474e');
        $('.bestBoxBottom').css('background-color', '#53575f');
        $('section').css('color', 'white');
        $('aside').css('color', 'white');
        $('footer').css('color', 'white');
        $('section').css('color', 'white');
        $('nav').css('color', 'white');
        $('.keyword p').css('background-color', '#586585');

        $("#darkOrLight").text("라이트 모드 전환");
    }
});

$(document).ready(function() {

    $('#darkOrLight').click(function() {
        if (sessionStorage.getItem("darkLight") == "true") {
            sessionStorage.setItem("darkLight", "false");
            alert("다크 모드를 사용합니다.");
            
            $('body').css('background-color', '#4b4e55');
            $('#seoul').css('background-image', 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("../media/seoul/Seoul_main.png")');
            $('#busan').css('background-image', 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("../media/busan/Busan_main.png")');
            $('#gyeongju').css('background-image', 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("../media/gyeongju/Gyeongju_main.png")');
            $('#incheon').css('background-image', 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("../media/incheon/Incheon_main.png")');

            $('.nav').css('background-color', 'rgba(60, 60, 60, 0.7)');
            $('.storeBox').css('background-color', '#45474e');
            $('.navInner').css('background-color', '#45474e');
            $('.navInner li li').css('background-color', '#525767');
            $('#scrollMenuForRegion').css('background-color', 'rgba(76,78,83,0.7)');
            $('#scrollMenu').css('background-color', 'rgba(76,78,83,0.7)');
            $('#scrollMenuForRegion > ul > li').css('background-color', '#53575f');
            $('#scrollMenu > ul > li').css('background-color', '#53575f');
            $('#left').css('background-color', '#45474e');
            $('#right').css('background-color', '#45474e');
            $('#only').css('background-color', '#525767');
            $('#onlyTwo').css('background-color', '#525767');
            $('.reviewBox').css('background-color', '#53575f');
            $('#bottom').css('background-color', '#45474e');
            $('.bestBoxBottom').css('background-color', '#53575f');
            $('section').css('color', 'white');
            $('aside').css('color', 'white');
            $('footer').css('color', 'white');
            $('section').css('color', 'white');
            $('nav').css('color', 'white');
            $('.keyword p').css('background-color', '#586585');
              
            $("#darkOrLight").text("라이트 모드 전환");

        } else {
            sessionStorage.setItem("darkLight", "true");
            alert("라이트 모드를 사용합니다.")
            $('body').css('background-color', 'white');
            $('#seoul').css('background-image', 'linear-gradient(rgba(0,0,0,0.0), rgba(0,0,0,0.0)), url("../media/seoul/Seoul_main.png")');
            $('#busan').css('background-image', 'linear-gradient(rgba(0,0,0,0.0), rgba(0,0,0,0.0)), url("../media/busan/Busan_main.png")');
            $('#gyeongju').css('background-image', 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("../media/gyeongju/Gyeongju_main.png")');
            $('#incheon').css('background-image', 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("../media/incheon/Incheon_main.png")');

            $('.nav').css('background-color', '');
            $('.storeBox').css('background-color', '');
            $('.navInner').css('background-color', '');
            $('.navInner li li').css('background-color', '');
            $('#scrollMenuForRegion').css('background-color', '');
            $('#scrollMenu').css('background-color', '');
            $('#scrollMenuForRegion > ul > li').css('background-color', '');
            $('#scrollMenu > ul > li').css('background-color', '');
            $('#left').css('background-color', '');
            $('#right').css('background-color', '');
            $('#only').css('background-color', '');
            $('#onlyTwo').css('background-color', '');
            $('.reviewBox').css('background-color', '');
            $('#bottom').css('background-color', '');
            $('.bestBoxBottom').css('background-color', '');
            $('section').css('color', '');
            $('aside').css('color', '');
            $('footer').css('color', '');
            $('section').css('color', '');
            $('nav').css('color', '');
            $('.keyword p').css('background-color', '');
            $("#darkOrLight").text("다크 모드 전환");
        }

    })
});



$(document).ready(function() {
    $('#rightArrow').click(function() {
        $('#firstPage').css('display', 'none');
        $('#secondPage').css('display', 'inline-block');
    });
    $('#leftArrow').click(function() {
        $('#secondPage').css('display', 'none');
        $('#firstPage').css('display', 'inline-block');
    });
});