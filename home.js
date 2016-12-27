
function redirect() {
   window.location="word.html";
}

// The SDK loaded callback (see below)
window.fbAsyncInit = function() {
            // The SDK is loaded so let's init it.
            FB.init({
                        appId : '1130006373787712',
                        xfbml : true,
                        version : 'v2.8'
            });
            // We check the user's login status
            FB.getLoginStatus(function(response) {
                        if (response.status === 'connected') {
                                    // displayImage();
                                    redirect();
                        } else {
                                    // If the user is NOT already logged in, we ask him to do it first
                                    FB.login(function(response) {
                                                if (response.authResponse) {
                                                            // displayImage();
                                                            redirect();
                                                } else {
                                                            // User refused to give your site permissions, no friends list !
                                                }
                                    });
                        }
            });
};



// Here you will load Facebook's SDK asynchronously (it will not block your page loading)
// Once the SDK is loaded, it will call the window.fbAsyncInit function above
(function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s);
            js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));