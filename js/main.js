//Submit email
$(".updates").on('click',function() {
  var email = $("#emailField").val();
  if(!validateEmail(email)) {
    //Show a hidden error label
    $(".suberror").removeClass('hidden');
    $(".subconfirm").addClass('hidden');
    return;
  }
  sendRequest($("#emailField").val(),{
    success: function(request) {
      $(".subconfirm").removeClass('hidden');
      $(".suberror").addClass('hidden');
    },
    failure: function(request) {
      console.log("Yikes, something went wrong!");
    }
  });
});

function validateEmail(email) {
  var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
}

$(document).ready(function () {
  var menuVisible = false;
  console.log('etst');
  $('#mobile-menu').click(function() {
    if (menuVisible) {
      $('#mobile-nav-content').css({'display':'none'});
      menuVisible = false;
      return;
    }
    $('#mobile-nav-content').css({'display':'block'});
    menuVisible = true;
  });
  $('#mobile-nav-content').click(function() {
    $(this).css({'display':'none'});
    menuVisible = false;
  });
});


function sendRequest(email,callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://api.helloworld.purduehackers.com/api/user/interest', true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.onload = function () {
    if(this.status == 200) {
      callback.success(this);
    } else {
      callback.failure(this);
    }
  };
  xhr.onerror = function () {
      // do something to response
      callback.failure(this);
  };
  xhr.send('email='+email);
}
