
    var config = {
    apiKey: "AIzaSyBVmJeyQO64iq_QvPxqOrsIaExSDm8Y_iY",
    authDomain: "congthucgiadinh.firebaseapp.com",
    databaseURL: "https://congthucgiadinh-default-rtdb.firebaseio.com",
    projectId: "congthucgiadinh",
    storageBucket: "congthucgiadinh.appspot.com",
    messagingSenderId: "707721881681",
    appId: "1:707721881681:web:d8a8deeb5878c8d29ab070",
    measurementId: "G-8S649Y41WX"
  };

  firebase.initializeApp(config);
  function login(){
      var email=document.getElementById("email").value;
      var password=document.getElementById("password").value;
      if (email =="adminManager@gmail.com" && password=="sorry1234"){
        window.location.href = "admin.html";
      }
      else{
          alert("Dang nhap khong thanh cong....")
      }

  }
  function logout(){
    window.location.href = "index.html";
  }

     firebase.auth.Auth.Persistence.LOCAL; 

    // $("#btn-login").click(function(){
        
    //     var email = $("#email").val();
    //     var password = $("#password").val(); 

    //     var result = firebase.auth().signInWithEmailAndPassword(email, password);
    
    //     result.catch(function(error){
    //         var errorCode = error.code; 
    //         var errorMessage = error.message; 

    //         console.log(errorCode);
    //         console.log(errorMessage);
    //     });

    // });

    // $("#btn-logout").click(function(){
    //     firebase.auth().signOut();
    // });

    function switchView(view){
        $.get({
            url:view,
            cache: false,  
        }).then(function(data){
            $("#container").html(data);
        });
    }
