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
const closeIconClass = 'fa-chevron-up';

const openID = 'prj-open';
const closeID = 'prj-closed';

const iBtns = document.querySelectorAll('.prjcont .fa-solid');

iBtns.forEach((appBtn) => {
    appBtn.addEventListener('click', () => {
        const parent = appBtn.closest('.prjcont');
        const contentDiv = parent.querySelector('div');

        if (parent.id == openID) {
            appBtn.classList.add(openIconClass);
            appBtn.classList.remove(closeIconClass);
            contentDiv.style.maxHeight = '0px';
            setTimeout(() => {
                parent.id = closeID;
            }, 200);

        } else {
            contentDiv.style.maxHeight = contentDiv.scrollHeight + 'px';
            parent.id = openID;
            appBtn.classList.add(closeIconClass);
            appBtn.classList.remove(openIconClass);
        }
    });
});

