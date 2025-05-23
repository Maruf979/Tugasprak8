
const carouselImages = document.getElementById("carousel-images");
const totalImages = carouselImages.children.length;
let index = 0;
const imageWidth = 600; // Lebar setiap gambar dalam pixel

function updateCarousel() {
  const offset = -index * imageWidth;
  carouselImages.style.transform = `translateX(${offset}px)`;
}

function nextImage() {
  index++;
  //Menggunakan ekspresi if untuk kembali ke awal atau akhir
  if (index >= totalImages) {
    index = 0;
  }
  updateCarousel();
}

function prevImage() {
  index--;
  //Menggunakan ekspresi if untuk kembali ke awal atau akhir
  if (index < 0) {
    index = totalImages - 1;
  }
  updateCarousel();
}

document.getElementById("prevBtn").addEventListener("click", prevImage);
document.getElementById("nextBtn").addEventListener("click", nextImage);

// Tugas Bonus

