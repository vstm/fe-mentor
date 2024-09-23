# Frontend Mentor - Bento grid solution

This is a solution to the [Bento grid challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/bento-grid-RMydElrlOj). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- View the optimal layout for the interface depending on their device's screen size

### Screenshot

#### Desktop

![](./screenshot-desktop.png)

#### 

![](./screenshot-mobile.png)

### Links

- [Solution URL](https://github.com/vstm/fe-mentor/tree/main/bento-grid-main)
- [Live Site URL](https://vstm.github.io/fe-mentor/bento-grid-main/)


## My process

### Built with

- [Vite](https://vitejs.dev/)
- [modern-normalize](https://www.npmjs.com/package/modern-normalize)
- [Sass](https://sass-lang.com/)
- [Semantic HTML5 markup](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout)
- [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout)
- [VSCode](https://code.visualstudio.com/)


### What I learned

This was a very fun challenge, and I had to almost force myself to stop optimizing for every little detail.

There were a lot of things I tried but then later abandoned for a more simpler approach:

- I was trying to use [`grid-template-areas`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas) and [`grid-area`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area) to position the grid in the desktop layout but it quickly became clear that it would be very cumbersome (12 colums x 4 rows = 48 cells, so a lot to type/handle). So I ended up position the cards with `grid-column` and `grid-row` using spans. It wourked out quite nicely
- I tried to make generic BEM-modifiers to style the individual cards, but it also quickly became clear that it was easier to just define one modifier per card. I still kept the generic modifiers for the colors since they did not change at all in the desktop/tablet/mobile versions. Still the `bento-box-card` CSS ended up being somewhat large in size.
- I missed the CSS reset that comes with tailwind, but the `modern-normalize` npm package seemed to be just as good.
- In Figma the letter spacing for the text styles `text-preset-1`, `text-preset-2` and `text-preset-3` is given in % and this does not seem to translate directly to `letter-spacing: x%`, so I found [this discussion on the Figma forum](https://forum.figma.com/t/letter-spacing-should-not-be-percentage-based/3062/7). Apparently it's directly translated to `em` units, so 1% letter spacing is `0.01em`, and this seems to look correctly.

### Continued development

- I implemented the title text styles inside of the `bento-box-card` (e.g. `bento-box-card__title-large`), maybe those can be move to a different typography/title block entirely.
- It's not truly responsive (the widths of the cards are fixed for each breakpoint), it would be cool to make the widths more dynamic but still align with the design at the defined breakpoints.

### Useful resources

- [grid-column](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column) and [grid-row](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row) - I relied heavily on those for the positioning


## Author

- Website - [Stefan Vetsch](https://svetsch.ch/)
- Frontend Mentor - [@vstm](https://www.frontendmentor.io/profile/vstm)
