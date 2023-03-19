

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
			autoPlay: true
		});
	});







	let items = document.querySelectorAll('.carouselArea .carousel-item')

	items.forEach((el) => {
		const minPerSlide = 5
		let next = el.nextElementSibling
		for (var i = 1; i < minPerSlide; i++) {
			if (!next) {
				// wrap carousel by using first child
				next = items[0]
			}
			let cloneChild = next.cloneNode(true)
			el.appendChild(cloneChild.children[0])
			next = next.nextElementSibling
		}
	})


   $("#mobile_code").intlTelInput({
	initialCountry: "ae",
	separateDialCode: true,
	// utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.4/js/utils.js"
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









