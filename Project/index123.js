const dbRef = firebase.database().ref();
const detailsRef = dbRef.child('details');
detailsRef.on("child_added", function(snapshot, prevChildKey) {
   var newPost = snapshot.val();
});
 
function send(){
   var first = document.getElementById("firstname").value;
   var last = document.getElementById("lastname").value;
   var phone = document.getElementById("phone").value;
   var email = document.getElementById("email").value;
   var arrival = document.getElementById("arrive").value;
   var depart = document.getElementById("depart").value;
   var adult = document.getElementById("adult").value;
   var child = document.getElementById("child").value;
   var concern = document.getElementById("concern").value;
   detailsRef.push().set({
       first: first,
       last: last,
       phone: phone,
       email: email,
       arrive: arrive,
       depart: depart,
       adult: adult,
       child: child,
       concern: concern
   });
}
