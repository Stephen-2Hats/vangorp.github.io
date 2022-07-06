/**
 * Mobile - Menu dropdown
 * 
 */
$(".sidenav ul li").click(function () {
  $(this).children('.sidenav ul li ul').toggleClass('aa');
  $(this).toggleClass('bb');
});

/**
 * Mobile - Off canvas menu
 * 
 */
function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

/**
 * Mobile - Search field trigger
 * 
 */
$('.toggle').click(function () {
  $('#target').toggle('s');
});


/**
 * Back to top
 * 
 */
var btn = $('#bktop');
$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});
btn.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: 0
  }, '300');
});

/**
 * Sticky header
 * 
 */
var lastScrollTop = 0;
$(window).scroll(function (event) {
  var st = $(this).scrollTop();
  if (st > 200 && st > lastScrollTop) {
    $('.page-wrap').addClass('scrolling_down');
    $('.page-wrap').removeClass('scrolling_up')
  } else {
    $('.page-wrap').addClass('scrolling_up');
    $('.page-wrap').removeClass('scrolling_down')
  }
  lastScrollTop = st;
  if (st == 0) {
    $('.page-wrap').removeClass('scrolling_up')
  }
});


/**
 * Sticky product block
 * 
 */
var bttn = $('#prodblk');
$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    bttn.addClass('stky');
  } else {
    bttn.removeClass('stky');
  }
});

// bttn.on('click', function (e) {
//   e.preventDefault();
//   $('html, body').animate({
//     scrollTop: 0
//   }, '300');
// });

/**
 * Custom quantity input
 * 
 */
const minus = $('.quantity__minus');
const plus = $('.quantity__plus');
const input = $('.quantity__input');
minus.click(function (e) {
  e.preventDefault();
  var value = input.val();
  if (value > 1) {
    value--;
  }
  input.val(value);
});

plus.click(function (e) {
  e.preventDefault();
  var value = input.val();
  value++;
  input.val(value);
})

/**
 * Readmore/ Readless
 * 
 */
$('.moreless-button').click(function (e) {
  e.preventDefault()
  $('.moretext').slideToggle();
  if ($('.moreless-button').text() == "Less meer") {
    $(this).text("Less minder")
  } else {
    $(this).text("Less meer")
  }
});

/**
 * Video poster
 * 
 */

var playButton = document.getElementById("play_button");
// Event listener for the play/pause button
playButton.addEventListener("click", function () {
  if (video.paused == true) {
    // Play the video
    video.play();
    $('.playBtn').addClass('active');
    // Update the button text to 'Pause'
    // playButton.innerHTML = "Pause";
  } else {
    // Pause the video
    video.pause();
    $(".playBtn").removeClass("active");
    // Update the button text to 'Play'
    // playButton.innerHTML = "Play";
  }
});


/**
 * Product slider
 * 
 */
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  arrows: true,
  centerMode: true,
  focusOnSelect: true
});

/**
 * Remove expand icon from parent li not have dropdown ul.
 * 
 */
$(".sidenav ul li").has("ul").addClass('cc');