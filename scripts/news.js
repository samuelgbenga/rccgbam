var slideIndex = 0;
showSlider();
function showSlider(){
    var i;
    var slides = document.getElementsByClassName("carousel-item");
    for( i = 0; i < slides.length; i++)
    {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if(slideIndex > slides.length) slideIndex = 1;
    
    slides[slideIndex -1].style.display = 'grid';
    setTimeout (showSlider, 3000);
    
}