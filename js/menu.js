(() => {
    const menuBtnRef = document.querySelector("[bata-menu-button]");

    menuBtnRef.addEventListener("click", () => {

    menuBtnRef.classList.toggle("is-open");

    });
})();