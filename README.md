# backgroundify.js by Emile Duval

A jQuery plugin to change your image in background.
Create by [Emile Duval](http://www.emileduval.be)

## Basic Usage
First you have to include jQuery librairie with jquery.backgroundify.js in your document.


Then add your picture in your HTML this way
````html
<div class="container">
	<img class="backgroundify" src="you-image.jpg"/>
	...
</div>
````

And finally call the function like this:
````javascript
$('.backgroundify').backgroundify({
	container: '.container',
	position: 'center',
	size: 'cover',
	repeat: 'no-repeat'
});
````

All settings customizable:
````javascript
container	// The parent of image
position	// Can take all different value available for css background-position property (default value: center);
size		// Can take all different value available for css background-size property (default value: cover);
repeat		// Can take all different value available for css background-repeat property (default value: no-repeat);
attachment	// Can take all different value available for css background-attachment property (default value: fixed);
origin		// Can take all different value available for css background-origin property (default value: padding-box);
clip		// Can take all different value available for css background-clip property (default value: padding-box);
````

## More customization

If you want an image behaves differently from others, you can give it some attributes.

````html
<img class="backgroundify" src="your-image.jpg" data-position="" data-size="" data-repeat="" data-attachment="" data-origin="" data-clip="" />
````