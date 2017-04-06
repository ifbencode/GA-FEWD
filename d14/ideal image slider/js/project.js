var slider = new IdealImageSlider.Slider({
	selector: '#slider',
	height: 400, // Required but can be set by CSS
	interval: 3000,
  keyboardNav: true,
  transitionDuration: 1000,
});
slider.start();
