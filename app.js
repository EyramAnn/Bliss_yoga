// Function to toggle the visibility of the navigation menu on mobile screens
function toggleNav() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}

//Array function to define the images in my slideshow
let images = [
  "Assets/img/yoga1.jpg",
  "Assets/img/yoga2.jpg",
  "Assets/img/yoga3.avif",
  "Assets/img/yoga4.webp",
  "Assets/img/yoga5.webp",
];


//Tis would help declare a variable that will keep track of the current image on our herobox
let currentIndex = 0;
 
function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("slider-image").src = images[currentIndex];
}

function prevSlide() {
  currentIndex =(current )
}

