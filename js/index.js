$(function () {
    $('.stop').click(function () {
        $('.stop').toggleClass('start')
        if ($(this).hasClass('start') == true) {
            $('audio')[0].play()
        } else {
            $('audio')[0].pause()
        }
    })
    $($('audio')[0]).on('loadedmetadata', function () {
        const duration = formatTime($('audio')[0].duration);
        $('.num2').text(duration);
    });

    $($('audio')[0]).on('timeupdate', function () {
        const current = $('audio')[0].currentTime;
        const duration = $('audio')[0].duration;

        $('.num1').text(formatTime(current));

        const percentage = (current / duration) * 100;
        $('.musicline').css('background', `linear-gradient(to right, #77F6A4 ${percentage}%, #ccc ${percentage}%)`);
    });

    function formatTime(sec) {
        const minutes = Math.floor(sec / 60);
        const seconds = Math.floor(sec % 60);
        return (
            (minutes < 10 ? '0' + minutes : minutes) +
            ':' +
            (seconds < 10 ? '0' + seconds : seconds)
        );
    }

    $('.togglebar').hide()
    $('.togglebutton').click(function () {
        $('.togglebar').fadeToggle();
    })

    $(function () {
        // 메인3에 더보기 버튼
        $('.main3 button').click(function () {
            $('.chatbox').toggleClass('click')
        })
        $('icon1').hover(function () {
            $('.overlay')
        })
    })


});
function toggleDarkMode() {
    // 다크모드 토글
    document.body.classList.toggle('dark-mode');

    const pTexts = document.querySelectorAll('.main5 .newmusic li p'); // <- 여러 개
    const leftImg = document.querySelector('.onoff img:nth-child(1)');
    const rightImg = document.querySelector('.onoff img:nth-child(2)');
    const icon2El = document.querySelector('.main2 .title img')
    const icon3El = document.querySelector('.main3 .title img')
    const icon4El = document.querySelector('.main4 .title img')
    const icon5El = document.querySelector('.main5 .title img')
    const icon6El = document.querySelector('.main6 .title img')
    

    if (document.body.classList.contains('dark-mode')) {
        leftImg.style.display = 'none';
        rightImg.style.display = 'inline';

        pTexts.forEach(p => p.style.color = '#ffffff'); // 여러 개에 적용
        icon2El.setAttribute('src', 'img/arrow_back_ios_new.png')
        icon3El.setAttribute('src', 'img/arrow_back_ios_new.png')
        icon4El.setAttribute('src', 'img/arrow_back_ios_new.png')
        icon5El.setAttribute('src', 'img/arrow_back_ios_new.png')
        icon6El.setAttribute('src', 'img/arrow_back_ios_new.png')
        
    } else {
        leftImg.style.display = 'inline';
        rightImg.style.display = 'none';

        pTexts.forEach(p => p.style.color = '#000000'); // 기본 색으로 복원
        icon2El.setAttribute('src', 'img/top100/icon0.png')
        icon3El.setAttribute('src', 'img/top100/icon0.png')
        icon4El.setAttribute('src', 'img/top100/icon0.png')
        icon5El.setAttribute('src', 'img/top100/icon0.png')
        icon6El.setAttribute('src', 'img/top100/icon0.png')
    }
}

