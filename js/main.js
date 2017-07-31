//Submit email
$(".updates").on('click',function() {
  var email = $("#emailField").val();
  if(!validateEmail(email)) {
    //Show a hidden error label
    $(".suberror").removeClass('hidden');
    $(".subconfirm").addClass('hidden');
    return;
  }
  $.post( "http://api.helloworld.purduehackers.com/api/user/interest", {
     email: $("#emailField").val()
   }).done(function(result) {
    //Show a confirmation label
    $(".subconfirm").removeClass('hidden');
    $(".suberror").addClass('hidden');
  }).fail(function(error) {
   console.log("error: " + JSON.stringify(error));
 });
});

function validateEmail(email) {
  var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
}
