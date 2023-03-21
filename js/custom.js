



document.addEventListener("DOMContentLoaded", function(){
		
		window.addEventListener('scroll', function() {
	       
			if (window.scrollY > 120) {
				document.getElementById('navbar_top').classList.add('fixed-top');
				// add padding top to show content behind navbar
				navbar_height = document.querySelector('.navbar').offsetHeight;
				document.body.style.paddingTop = navbar_height + 'px';
			} else {
			 	document.getElementById('navbar_top').classList.remove('fixed-top');
				 // remove padding top from body
				document.body.style.paddingTop = '0';
			} 
		});
	}); 



$('#logos-carousel').owlCarousel({
    loop: true,
    margin: 30,
    dots: false,
    nav: true,
    items: 5,
     responsive: {
        0:{
          items: 2
        },
        480:{
          items: 2
        },
        769:{
          items: 5
        }
    }
});



	$(document).ready(function () {
		$("#testimonial-slider").owlCarousel({
			items: 3,
			itemsDesktop: [1000, 3],
			itemsDesktopSmall: [980, 2],
			itemsTablet: [768, 2],
			itemsMobile: [650, 1],
			pagination: true,
			navigation: false,
			slideSpeed: 1000,
			autoPlay: true,
			dots: true,
    nav: true,
    responsive: {
        0:{
          items: 1
        },
        480:{
          items: 2
        },
        769:{
          items: 3
        }
    }
		});
	});



   class FileInputController extends Stimulus.Controller {
  static get targets() {
    return ['value', 'input']
  }
  
  display(evt) {
    const fileName = evt.target.value.split('\\').pop();
    
    if (this.valueTarget.nodeName == 'INPUT') {
      this.valueTarget.placeholder = fileName;
    } else {
      this.valueTarget.innerHTML = fileName;
    }
  }
}

const application = Stimulus.Application.start()
application.register('file-input', FileInputController)








