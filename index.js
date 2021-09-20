// Off View Source
document.onkeydown = function(e) {
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
        $('.popup-warning').fadeIn();
        $('.popup-contex-text p').html("You don't have permission to click <span>Ctrl + Shift + I</span>");
        $('body').addClass('noScroll');
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
        $('.popup-warning').fadeIn();
        $('.popup-contex-text p').html("You don't have permission to click <span>Ctrl + Shift + J</span>");
        $('body').addClass('noScroll');
        return false;
    }

    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)){
        $('.popup-warning').fadeIn();
        $('.popup-contex-text p').html("You don't have permission to click <span>Ctrl + Shift + C</span>");
        $('body').addClass('noScroll');
        return false;
    }

    if (e.ctrlKey && (e.keyCode === 85)) {
        $('.popup-warning').fadeIn();
        $('.popup-contex-text p').html("You don't have permission to click <span>Ctrl + U</span>");
        $('body').addClass('noScroll');
        return false;
    } else {
        return true;
    }
};
$(document).keypress("u",function(e) {
      if(e.ctrlKey){
          $('.popup-warning').fadeIn();
          $('.popup-contex-text p').html("You don't have permission to click <span>Ctrl + U</span>");
    $('body').addClass('noScroll');
        return false;
    } else {
        return true;
    }
});

// Inspect Off 
if (document.addEventListener) {
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    $('.popup-warning').fadeIn();
      $('.popup-contex-text p').html("You don't have permission to <span>Right Click</span>");
    $('body').addClass('noScroll');
  }, false);
} else {
  document.attachEvent('oncontextmenu', function() {
    window.event.returnValue = false;
    $('.popup-contex-text p').html("You don't have permission to <span>Right Click</span>");
    $('body').addClass('noScroll');
  });
}

$('.popup-contex-text button').click(function(){
    $('.popup-warning').fadeOut();
    $('body').removeClass('noScroll');
});