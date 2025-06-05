// Auto-scroll all image sliders
document.querySelectorAll('.image-slider').forEach(slider => {
  let scrollAmount = 0;
  const speed = 2; // Increased speed from 1 to 2

  setInterval(() => {
    scrollAmount += speed;
    if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
      scrollAmount = 0;
    }
    slider.scrollLeft = scrollAmount;
  }, 30); // Fast scroll loop
});
// Back to Top button logic
const topBtn = document.getElementById("topBtn");

window.onscroll = () => {
  topBtn.style.display = window.scrollY > 200 ? "block" : "none";
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
