const $ = document.querySelector.bind(document);

const toggleDarkMode = $('.toggle-darkmode');
const toggleText = $('.toggle-text');

let darkMode = localStorage.getItem('darkMode');

// set darkMode
const enableDarkMode = function () {
    document.body.classList.add('darkmode');
    toggleText.textContent = 'LightMode';
    localStorage.setItem('darkMode', 'enabled');
}

// disable dark mode 
const disableDarkMode = function () {
    document.body.classList.remove('darkmode');
    toggleText.textContent = 'DarkMode';
    localStorage.setItem('darkMode', null);
}

// save dark mode history
if (darkMode === "enabled") {
    enableDarkMode();
}

// add even listener
toggleDarkMode.onclick = function (e) {
    let darkMode = localStorage.getItem('darkMode');
    if (darkMode !== "enabled") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
};


