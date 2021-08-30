const Btn = document.getElementById('login');
        Btn.addEventListener('click', function () {
            const loginArea = document.getElementById('login-area');
            loginArea.style.display = "none";
            const transfarArea = document.getElementById('transfar_Area');
            transfarArea.style.display=('block');
})