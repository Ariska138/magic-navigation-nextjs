const list = document.querySelectorAll('.item');
function activeLink() {
  list.forEach((item) => {
    item.addEventListener('click', function () {
      list.forEach((item) => {
        item.classList.remove('active');
      });
      this.classList.add('active');
    });
  });
}

activeLink();
