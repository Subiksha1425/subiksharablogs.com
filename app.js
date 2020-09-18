var firebaseConfig = {
    apiKey: "AIzaSyCQdiWlxQXfkgIDNfYjzAw2ZlJy2kTNjII",
    authDomain: "blogcomment-dba19.firebaseapp.com",
    databaseURL: "https://blogcomment-dba19.firebaseio.com",
    projectId: "blogcomment-dba19",
    storageBucket: "blogcomment-dba19.appspot.com",
    messagingSenderId: "563661812527",
    appId: "1:563661812527:web:602836a9ed2a83d631e7da",
    measurementId: "G-4MWN4T81LS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  let formMessage = firebase.database().ref('blog');

  document
    .getElementById('contact-form')
    .addEventListener('submit', formSubmit);
    function formSubmit(e) {
        e.preventDefault();
        // Get Values from the DOM
        let name = document.querySelector('#name').value;
        let email = document.querySelector('#email').value;
        let message = document.querySelector('#message').value;
      
        //send message values
        sendMessage(name, email, message);
      
        //Show Alert Message(5)
        document.querySelector('.alert').style.display = 'block';
      
        //Hide Alert Message After Seven Seconds(6)
        setTimeout(function() {
          document.querySelector('.alert').style.display = 'none';
        }, 7000);

        document.getElementById('contact-form').reset();
    }


  function sendMessage(name,email,message) {
    let newFormMessage = formMessage.push();
    newFormMessage.set({
      name:name,
      email:email,
      message:message
    });
  }