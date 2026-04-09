const toggleBtn = document.querySelector(".toggle-pw");
const pw = document.getElementById("password");
toggleBtn.addEventListener("click", () => {
  pw.type = pw.type === "password" ? "text" : "password";
});

document.querySelectorAll(".level-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".level-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});