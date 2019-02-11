$(function() {

    loadSlides();

    //configuration
    var width = 720;
    var animationSpeed = 1000;
    var pause = 3000;
    var currentSlide = 1;
    var interval;

    //cache DOM
    var $slider = $('#slider');
    var $slideContainer = $slider.find('#slides');
    var $slides = $slideContainer.find('.slide');

    function startSlider() {
        //set interval
        interval = setInterval(function() {
            //animate margin-left
            $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
                //if it's last slide go to position 1
                currentSlide++;
                if(currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                }
            });
        }, pause);
    }

    function pauseSlider() {
        clearInterval(interval);
    }

    $slider.on('mouseenter', pauseSlider).on('mouseleave', startSlider);

    startSlider();

});

var SLIDES = (function () {
    var name = 'slide'
    var num = ['1', '2', '3'];

    return {
        getName: function () {
            return name;
        },
        getNum: function() {
            return num;
        }
    };
})();

function loadSlides() {
    var name = SLIDES.getName();
    var num = SLIDES.getNum();

    for(i = 0; i < num.length; i++) {
        var slideName = name + num[i];
        createSlide(slideName);
    }

    var endSlide = name+'0';
    createSlide(endSlide);
}

function createSlide(slideName) {
    var newImg = document.createElement('img');
    newImg.setAttribute('src', '/../photos/slides/'+slideName+'.png');

    var newLi = document.createElement('li');
    newLi.setAttribute('class', 'slide ' + slideName);
    newLi.appendChild(newImg);

    var parent = document.getElementById('slides');
    parent.appendChild(newLi);
}