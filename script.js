// Get the banner element
const banner = document.querySelector('.banner');
const title = document.querySelector('.banner-title');
const description = document.querySelector('.banner-description');
const button = document.querySelector('.banner-button');
const dots = document.querySelectorAll('.banner-dots span');

// Define an array of image URLs
const images = [
  'banner-2.jpg',
  'banner-3.jpg',
  'banner-4.jpg',
];

const titles = [
  "PAE Volunteer's Portal.",
  'Everything in one place.',
  'Manage your hours.'
];
const descriptions = [
  "Welcome to the PAE Volunteer's Portal. Here you can clock in and out, view your hours, and see the schedule.",
  'All the tools you need to manage your volunteer hours. Sign in to get started.',
  'Track your hours and manage your schedule. Sign in to get started.'
];
const buttons = ['Clock-In', 'Sign-In', 'Check-out'];


// BANNER FUNCTIONALITIES


// Set initial image index
let currentImageIndex = 0;

// Function to change the banner content
function changeBannerContent() {
  title.textContent = titles[currentImageIndex];
  description.textContent = descriptions[currentImageIndex];
  button.textContent = buttons[currentImageIndex];

  dots.forEach((dot, index) => {
    if (index === currentImageIndex) {
      dot.classList.add('active-dot');
    } else {
      dot.classList.remove('active-dot');
    }
  });
}


// Function to change the background image
function changeBackgroundImage() {
  banner.style.backgroundImage = `url(./src/images/${images[currentImageIndex]})`;
  currentImageIndex = (currentImageIndex + 1) % images.length;

  changeBannerContent();

  setTimeout(() => {
    banner.style.transition = 'ease-in-out 0.5s';
  }, 1000);

}

// Call the function initially
changeBackgroundImage();

// Set interval to change the background image every 5 seconds
setInterval(changeBackgroundImage, 9000);



