// *Er ekki að kalla á þessa skrá í App.vue
//real-time listener
db.collection("collectionName").onSnapshot(snapshot => {
  snapshot.docChanges().forEach(change => {
    if (change.type === "added") {
      //Add document data to the web page
    }
    if (change.type === "removed") {
      //Remove document data to the web page
    }
  });
});
