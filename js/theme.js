const savedTheme = localStorage.getItem('zima-theme');
if (savedTheme) {
  document.documentElement.setAttribute('data-theme', savedTheme);
}