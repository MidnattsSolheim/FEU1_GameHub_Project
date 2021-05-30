document.getElementById('search-button').addEventListener('click', function () {
  iconContainer.classList.add('icon-container-gone'),
  iconSearchContainer.classList.remove("icon-search-container-gone")
});

document.getElementById('search-button-2').addEventListener('click', function () {
  iconContainer.classList.remove('icon-container-gone'),
  iconSearchContainer.classList.add("icon-search-container-gone")
});

let iconContainer = document.getElementById("icon-container");

let iconSearchContainer = document.getElementById("icon-search-container");

