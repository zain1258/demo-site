var display = 0;
function slideShow()
{
	if(display === 0)
	{
		var ele = document.getElementById('barbtn-content');
		ele.style.maxHeight = "500px";
		display = 1;
	}
	else
	{
		var ele = document.getElementById('barbtn-content');
		ele.style.maxHeight = "0px";
		display = 0;
	}
}

if(screen.width > 500)
{
	var slideIndex = 1;
	showSlides(slideIndex);

	function currentSlide(n)
	{
		showSlides(slideIndex=n);
	}


	function showSlides(n)
	{
		var i;
		var slides = document.getElementsByClassName("slide-flex-1");
		var dots = document.getElementsByClassName('dot');
		if(n> slides.length)
		{
			slideIndex =1;
		}
		if(n<0)
		{
			slideIndex = slides.length;
		}
		for(i = 0; i<slides.length; i++)
		{
			slides[i].style.display = "none";
		}
		for(i = 0; i<dots.length; i++)
		{
			dots[i].style.backgroundColor = "transparent";
		}
		slides[slideIndex -1].style.display = "flex";
		dots[slideIndex -1].style.backgroundColor = "white";
	}
}
