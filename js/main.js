window.onload = () => {
  const buttonEl = document.getElementById('toggle-btn');
  buttonEl.addEventListener('click', toggle);
};

function toggle(event) {
  event.target.classList.toggle('vertical');
  document.querySelector('.slider').classList.toggle('vertical');
}
