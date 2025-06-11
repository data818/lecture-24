// function getUser(pizzaId) {
//   return new Promise(function (resolve, reject) {
//     if (pizzaId > 0) {
//       resolve("რეცეპტების კრებული");
//     } else {
//       reject("პიცა ამ id ით არ მოიძებნა");
//     }
//   });
// }

// getUser(1)
//   .then(function (rame) {
//     console.log(rame);
//     return "hello";
//   })
//   .then(function (rameori) {
//     console.log(rameori);
//   });

let postApi = "https://jsonplaceholder.typicode.com/posts";

fetch(postApi)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    data.foreach(function (eachElement) {
      console.log(eachElement);
    });
  })
  .catch(function (err) {
    console.log(err.message);
  });

// fetch("https://jsonplaceholder.typicode.com/posts");
