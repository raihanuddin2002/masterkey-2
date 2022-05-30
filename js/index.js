window.addEventListener("scroll", function () {
    if (this.scrollY > 300) {
        document.getElementById('main').classList.remove('marginTop');
    } else {
        document.getElementById('main').classList.add('marginTop');
    }
})

