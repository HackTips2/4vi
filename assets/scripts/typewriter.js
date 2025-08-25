
document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("typewriter");
  if (!el) return;
  const text = el.textContent;
  let i = 0;
  let deleting = false;

  function type() {
    if (!deleting && i <= text.length) {
      el.textContent = text.substring(0, i) + "";
      i++;
      setTimeout(type, 200
      );
    } else if (deleting && i >= 0) {
      el.textContent = text.substring(0, i) + "";
      i--;
      setTimeout(type, 100);
    } else {
      deleting = !deleting;
      setTimeout(type, 100);
    }
  }
  type();
});
