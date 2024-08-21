# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

### Screenshot

#### Desktop

![](./desktop-screenshot.png)

#### Mobile

![](./mobile-screenshot.png)


### Links

- [Solution URL](https://github.com/vstm/fe-mentor/tree/main/product-preview-card-component-main)
- [Live Site URL](https://vstm.github.io/fe-mentor/product-preview-card-component-main/)

## My process

### Built with

- [Semantic HTML5 markup](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [tailwindcss](https://tailwindcss.com/)
- [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout)
- [VSCode](https://code.visualstudio.com/)
- [Prettier](https://prettier.io/)
- Mobile-first workflow

### What I learned

I have never used responsive images and it seemed to be necessary in this challenge.

At first i used just the `<img>` tag with `srcset` and `sizes` but it wouldn't behave as I was expecting (when resizing the larger image would stay but after a refresh it would display the correct image again).

So in the end I used the `<picture>` tag with `<source>`-tags and there you can use the media queries which I knew.

### Continued development

- Can you use the tailwind breakpoints/screen sizes for the responsive image?
- I'm still not sure about the `srcset` and `sizes` attributes of the `<img>`-tag, maybe I should study this more

### Useful resources

- [MDN page about responsive images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.

## Author

- Website - [Stefan Vetsch](https://svetsch.ch/)
- Frontend Mentor - [@vstm](https://www.frontendmentor.io/profile/vstm)
