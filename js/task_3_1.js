
const userName = document.getElementById("user_name");
const userPass = document.getElementById("user_pass");     
const userEmail = document.getElementById("user_email");     
const userPassConfirm = document.getElementById("user_pass_confirm");     
const buttonSend = document.getElementById("send_button");     


    function passConfirmation() {
        if (userPass.value == userPassConfirm.value) {
            return true;
        } else {
            return false;
        }
    }
        function dataStoring() {

        if (passConfirmation() == true) {
            localStorage.setItem("name", userName.value);
            localStorage.setItem("pass", userPass.value);
            localStorage.setItem("email", userEmail.value);
            console.log(localStorage);
            document.getElementById("login_confirm").style.display = "block";
        } else {
            document.getElementById("login_error").style.display = "block";
            return false;
        }
    }

    buttonSend.addEventListener("click", dataStoring);
    buttonSend.addEventListener("click", passConfirmation);
    buttonSend.onclick = function() {
        setTimeout(function(){location.reload()}, 1000);
    }

    // facebook


    window.fbAsyncInit = function() {
        FB.init({
          appId      : '332064888243605',
          cookie     : true,
          xfbml      : true,
          version    : 'v8.0'

        });
        FB.getLoginStatus(function(response) {
            statusChangeCallback(response);
        });
    };

    
    
    (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    function statusChangeCallback(response){
        if(response.status === 'connected'){
          console.log('Logged in and authenticated');
          setElements(true);
          testAPI();
          sessionStorage.setItem('accessToken' ,response.authResponse.accessToken);
        } else {
          console.log('Not authenticated');
          setElements(false);
        }
    }
    function checkLoginState() {
        FB.getLoginStatus(function(response) {
          statusChangeCallback(response);
        });
    }
      