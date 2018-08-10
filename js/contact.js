


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyApEI6fM93X6isxOGB16Z05IR2EY8EvCVg",
    authDomain: "fir-test-30af2.firebaseapp.com",
    databaseURL: "https://fir-test-30af2.firebaseio.com",
    projectId: "fir-test-30af2",
    storageBucket: "fir-test-30af2.appspot.com",
    messagingSenderId: "858239094175"
 	 };
 	 firebase.initializeApp(config);
	

document.getElementById('contactForm').addEventListener('submit', submitForm);

function getInputVal(id){
  return document.getElementById(id).value;
}
function submitForm(e){
    e.preventDefault();
    var name = getInputVal('name');
    var email = getInputVal('email');
    var message = getInputVal('message');
    document.getElementById('contactForm').reset();
    saveMessage(name, email, message);
    document.querySelector('.alert').style.display = 'block';
// Hide alert after 3 seconds
setTimeout(function(){
  document.querySelector('.alert').style.display = 'none';
},3000);
}

var messagesRef = firebase.database().ref('messages');

function saveMessage(name, email, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email:email,
    message:message
  });
}



// Get a database reference to our posts

var ref = firebase.database().ref("messages");

// Attach an asynchronous callback to read the data at our posts reference
ref.on("value", function(snapshot) {
  let db=snapshot.val()
  console.log("rghjk")
  let x = []
for (var i in db){
 	x.push(db[i]);
 }
let messages = [],names=[],emails=[]
for (var element in x){
	messages.push(x[element]["message"])
	names.push(x[element]["name"])
	emails.push(x[element]["email"])
}

console.log(names,emails,messages)
var i=0
for (index in emails){
	

	console.log("name: "+names[index]+" email: "+emails[index]+" message: "+emails[index]);
	var sayabni="<div class='col-md-12' data-aos='flip-up'><div class='ideas container' ><span id="+"'"+i+ "'"+" class='fa fa-star checked test' style='text-align:right'></span><h3 class='idea-author'>"+names[index]+"</h3><h4 class='idea-mail'>"+emails[index]+"</h4><p class='idea-description'>"+messages[index]+"</p></div></div>"
	$("#feed").append(sayabni);
	i++
}
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

