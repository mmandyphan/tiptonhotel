const dbRef = firebase.database().ref();
const detailsRef = dbRef.child('details');
detailsRef.on("child_added", function(snapshot, prevChildKey) {
   var newPost = snapshot.val();
});
 
function send(){
   var stay = document.getElementById("stay").value;
   var reason = document.getElementById("reason").value;
   var staff = document.getElementById("staff").value;
   var value = document.getElementById("value").value;
   var improve = document.getElementById("improve").value;
   detailsRef.push().set({
       stay: stay,
       reason: reason,
       staff: staff,
       value: value,
       improve: improve
   });
}
