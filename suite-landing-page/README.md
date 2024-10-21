# Frontend Mentor - Suite landing page solution

This is a solution to the [Suite landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/suite-landing-page-tj_eaU-Ra). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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
- See hover states for interactive elements

### Screenshot

#### Desktop 

![](./screenshot_desktop.png)

#### Mobile

![](./screenshot_mobile.png)

### Links

- [Solution URL](https://github.com/vstm/fe-mentor/tree/main/suite-landing-page)
- [Live Site URL](https://vstm.github.io/fe-mentor/suite-landing-page/)
j

## My process

### Built with

- [Vite](https://vitejs.dev/)
- [modern-normalize](https://www.npmjs.com/package/modern-normalize)
- [Sass](https://sass-lang.com/)
- [Semantic HTML5 markup](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout)
- [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout)
- [Neovim](https://neovim.io/)
- Mobile-first workflow

### What I learned

I thought this was a simple challenge so I triet to do it in Neovim, but it turned
out to be more complex than I anticipated so it took longer than expected. Still
I only used nvim, until the bitter end. So part of the time was invested in
getting neovim configured as I liked it, but there's still some improvements I
can make to my neovim setup.

For the background I used linear-gradient (which is not something I used
before), because it seemed better than just create an image or just make the
footer element artificially larger.

Also the blur image "backdrop" I solved by using a wrapper element around the image
and then setting the blur image as background image to that wrapper. The sizes
of the blur in Figma only accounted for the base circle without the blur so I
just played around with the numbers of the background size until it looked
okayish (i.e. until I lost my patience :D).

### Continued development

- I'm still not confident in using responsive images, I have to play around with
  it more
- I read the original README.md of the challenge after I finished everything and it said to think in advance how to structure the styles, which is actually a good idea for the future.

### Useful resources

- [Responsive images doc on MDN](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) - I had to revisit that again for this challenge. I'm still not confident in using responsive images, altough it seems to work here.
- [linear-gradient on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient) - The linear-gradient doc

## Author

- Website - [Stefan Vetsch](https://svetsch.ch/)
- Frontend Mentor - [@vstm](https://www.frontendmentor.io/profile/vstm)
