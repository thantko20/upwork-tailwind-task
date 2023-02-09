// Dropdowns
const dropdownMenus = document.querySelectorAll('.dropdown-menu');
const dropdowns = document.querySelectorAll('.dropdown-menu .dropdown');

dropdownMenus.forEach((dropdownMenu) => {
  dropdownMenu.addEventListener('click', (e) => onClickDropDown(dropdownMenu));
});

function onClickDropDown(dropdownMenu) {
  const dropdown = dropdownMenu.querySelector('.dropdown');
  dropdown.classList.toggle('hidden');
}

// Hamburger
const hamburgerBtn = document.querySelector('#hamburger');
const navBar = document.querySelector('.nav-bar');

hamburgerBtn.addEventListener('click', () => {
  navBar.classList.toggle('hidden');
});

// tabs
const tabContentMap = {
  overview: 'overview-content',
  products: 'products-content',
  'top-rated': 'top-rated-content',
  faq: 'faq-content',
};
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.content');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const isActiveTab = tab.getAttribute('data-active') === 'true';
    if (isActiveTab) {
      return;
    }

    const tabName = tab.getAttribute('data-tab');

    tabs.forEach((tab) => {
      tab.setAttribute('data-active', 'false');
    });

    tab.setAttribute('data-active', 'true');

    contents.forEach((content) => {
      if (content.id === tabContentMap[tabName]) {
        content.setAttribute('data-active', 'true');
      } else {
        content.setAttribute('data-active', 'false');
      }
    });
  });
});
