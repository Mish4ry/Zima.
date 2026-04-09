const btn = document.querySelector(".toggle-pw");
const pw = document.getElementById("password");
btn.addEventListener("click", () => {
  pw.type = pw.type === "password" ? "text" : "password";
});