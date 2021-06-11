const theElement = document.querySelector('#this-one img');
console.log(theElement);
// // GET request
// fetch('https://api.github.com/repos/leah1210/Image-Manipulator')
//   // parse the response into a real object
//   .then(response => response.json())
//   // data is the real response object
//   .then(data => {
//     //theElement.innerText = `Number of commits: ${data.length}`;
//     console.log(data.owner.login);
//   });

// // GET request
// fetch('https://api.github.com/repos/leah1210/Image-Manipulator/commits')
//   // parse the response into a real object
//   .then(response => response.json())
//   // data is the real response object
//   .then(data => {
//     theElement.innerText = `Number of commits: ${data.length}`;

//   });

// // ----------------- ASYNC AWAIT ---------------

const foodie = 'https://foodish-api.herokuapp.com';

(async () => {
  // GET request
  const response = await fetch(foodie + '/api/');
  // parse the JSON (string) response into a real object
  const data = await response.json(); //get the specific object or response within the respose. getting this image and placign it on the page with the code below
  // put the object data on the page
  //theElement.innerText = data;;
  console.log(data);
  console.log(data.image);
  console.log(typeof data.image);

  theElement.setAttribute('src', data.image);

})();

const theElement2 = document.querySelector('#this-one2 img');

const dog = 'https://dog.ceo';

(async () => {
  // GET request
  const response = await fetch(dog + '/api/breeds/image/random');
  // parse the JSON (string) response into a real object
  const data = await response.json(); //get the specific object or response within the respose. getting this image and placign it on the page with the code below
  // put the object data on the page
  //theElement.innerText = data;;
  console.log(data);
  console.log(data.message);
  console.log(typeof data.message);

  theElement2.setAttribute('src', data.message);

})();

const theElement3 = document.querySelector('#this-one3 img');

const cat = 'https://thatcopy.pw';

(async () => {
  // GET request
  const response = await fetch(cat + '/catapi/rest/');
  console.log(response);
  // parse the JSON (string) response into a real object
  const data = await response.json(); //get the specific object or response within the respose. getting this image and placign it on the page with the code below
  // put the object data on the page
  //theElement.innerText = data;;
  console.log(data);
  console.log(data.url);
  console.log(typeof data.webpurl);

  theElement3.setAttribute('src', data.webpurl);
})();

const theElement4 = document.querySelector('#this-one4 img');

const pizza = 'https://foodish-api.herokuapp.com';

(async () => {
  // GET request
  const response = await fetch(foodie + '/api/images/pizza');
  // parse the JSON (string) response into a real object
  const data = await response.json(); //get the specific object or response within the respose. getting this image and placign it on the page with the code below
  // put the object data on the page
  //theElement.innerText = data;;
  console.log(data);
  console.log(data.image);
  console.log(typeof data.image);

  theElement4.setAttribute('src', data.image);

})();

const theElement5 = document.querySelector('#this-one5 img');

(async () => {
  // GET request
  const response = await fetch(dog + '/api/breed/husky/images/random');
  // parse the JSON (string) response into a real object
  const data = await response.json(); //get the specific object or response within the respose. getting this image and placign it on the page with the code below
  // put the object data on the page
  //theElement.innerText = data;;
  console.log(data);
  console.log(data.message);
  console.log(typeof data.message);

  theElement5.setAttribute('src', data.message);

})();

const theElement6 = document.querySelector('#this-one6 img');

const cat2 = 'https://thatcopy.pw';

(async () => {
  // GET request
  const response = await fetch(cat + '/catapi/rest/');
  console.log(response);
  // parse the JSON (string) response into a real object
  const data = await response.json(); //get the specific object or response within the respose. getting this image and placign it on the page with the code below
  // put the object data on the page
  //theElement.innerText = data;;
  console.log(data);
  console.log(data.webpurl);
  console.log(typeof data.webpurl);

  theElement6.setAttribute('src', data.webpurl);
})();

/// -------------change pizza photo button--------------//

const button = document.getElementById('change-photo')

const theElement7 = document.querySelector('#this-one7 img');

const pizza2 = 'https://foodish-api.herokuapp.com';

(async () => {
  // GET request
  const response = await fetch(foodie + '/api/images/pizza');
  // parse the JSON (string) response into a real object
  const data = await response.json(); //get the specific object or response within the respose. getting this image and placign it on the page with the code below
  // put the object data on the page
  //theElement.innerText = data;;
  console.log(data);
  console.log(data.image);
  console.log(typeof data.image);

  theElement7.setAttribute('src', data.image);

})();

button.onclick = async () => {
  const response = await fetch(foodie + '/api/images/pizza');
  const data = await response.json();
  theElement7.setAttribute('src', data.image);
}

//---------------------------------- Breed Input --------------------------------//


const buttonBreed = document.getElementById('enter-breed')

buttonBreed.onclick = async () => {
  const breed = document.getElementById('breed-input').value
  console.log(typeof breed);
  //  huskyBreed.innerText = ((async () => {
  const response = await fetch(dog + `/api/breed/${breed}/images/random`);

  if (response.ok === false) {
    alert('incorrect input')
  } else {

    const data = await response.json();

    const randomBreed = document.querySelector('#random-breed img')
    randomBreed.setAttribute('src', data.message);
  }



  //  })(); // closing for async

}


//// try diff endpoints and more async
/// try putting button on page so when user clicks on button then makes a request and changes the image .onclick
// make input box with button next to it so when user inputs breed they're given an image of specified breed
// make select drop down box with all food categories and when select a new food the image changes directly .onchange
// change page to look nice