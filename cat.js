let currentIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

function moveSlide(step) {
  currentIndex += step;

  // หากถึงภาพสุดท้ายแล้ว ให้กลับไปที่ภาพแรก
  if (currentIndex < 0) {
    currentIndex = totalSlides - 3;  // เลื่อนกลับไปที่ภาพก่อนหน้า
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0;  // กลับไปที่ภาพแรก
  }

  // เลื่อนภาพตามตำแหน่งที่เลือก
  slides.style.transform = `translateX(-${currentIndex * 33.33}%)`;
}

// เพิ่มการเลื่อนอัตโนมัติทุกๆ 6 วินาที
setInterval(() => {
  moveSlide(1);  // เลื่อนภาพอัตโนมัติทุกๆ 6 วินาที
}, 6000);
