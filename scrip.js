document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttrebute('href')).scroll
        intoview({
            Behavior:'smooth'
    });
    });
});