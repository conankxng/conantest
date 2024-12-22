const text = "คู่มือเลี้ยงสุนัข (Dog Owner's Guide)"; // ข้อความที่ต้องการให้พิมพ์
const typingText = document.getElementById("typing-text");
let index = 0;

function typeEffect() {
    if (index < text.length) {
        typingText.textContent += text[index];
        index++;
        setTimeout(typeEffect, 100); // ความเร็วในการพิมพ์ (100ms)
    }
}

typeEffect();
