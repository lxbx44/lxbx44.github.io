const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropdownMenu = document.querySelector(".dropdown_menu");

toggleBtn.onclick = () => {
    dropdownMenu.classList.toggle('open');
    const isOpen = dropdownMenu.classList.contains('open');
    
    toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
}




const openIconClass = 'fa-chevron-down';
const closeIconClass = 'fa-xmark';

const openID = 'prj-open';
const closeID = 'prj-closed';

const iBtns = document.querySelectorAll('.prjcont .fa-solid');

iBtns.forEach((appBtn) => {
    appBtn.addEventListener('click', () => {
        const parent = appBtn.closest('.prjcont');

        if (parent.id == openID) {
            parent.id = closeID;
            appBtn.classList.add(openIconClass);
            appBtn.classList.remove(closeIconClass);
        } else {
            parent.id = openID;
            appBtn.classList.add(closeIconClass);
            appBtn.classList.remove(openIconClass);
        }
    });
});

