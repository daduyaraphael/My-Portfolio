 


window.onload = function() {
  const slides = document.querySelectorAll('.carousel img');
  let index = 0;

  setInterval(() => {
    slides[index].classList.remove('active');       // hide current
    index = (index + 1) % slides.length;           // next index
    slides[index].classList.add('active');         // show next
  }, 2000); // change every 2 seconds
};


const modal = document.getElementById('imgModal');
const modalImg = document.getElementById('modalImg');
const closeBtn = document.querySelector('.close');

// Select all images with class "opt"
document.querySelectorAll('.opt').forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImg.src = img.src;
    });
});

// Close modal when clicking the close button
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside the image
modal.addEventListener('click', e => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Select all down arrows
const downArrows = document.querySelectorAll('.down');

downArrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
        const container = arrow.parentElement;
        const details = container.querySelector('.project-details');

        if (details.style.maxHeight && details.style.maxHeight !== "0px") {
            details.style.maxHeight = "0"; // collapse
        } else {
            details.style.maxHeight = details.scrollHeight + "px"; // expand
        }
    });
});








