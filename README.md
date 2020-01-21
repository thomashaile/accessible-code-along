# Accessible Code-Along

Practice reverse-engineering an accessible web page using semantic layout and incremental development.

### Index

* [Learning Objectives](#learning-objectives)
* [Instructions](#instructions)
* [Target Page](#target-page)
* [Study Links](#study-links)
* [For Coaches](#for-coaches)

---

## Learning Objectives

* Start from an empty project
* Reverse-engineer a design from an existing site
* Create a wireframe
* Plan steps, develop each on one branch
* Use semantic HTML5 elements & ARIA
* Use Accessibility DevTools to inspect and audit

[TOP](#responsive-code-along)

---

## Instructions

1. Fork this repository, turn on GitHub pages, and clone
1. Study the [target page](#target-page)
1. Create a [wireframe](https://wireframe.cc) for the page
1. Plan your user stories in [./development-strategy.md](./development-strategy.md)
1. Develop one story at a time
    1. Create a new branch before beginning each story
    1. Code the story _entirely_. Make sure the code is pretty and everything works
    1. Push the new branch to GitHub
    1. Merge the completed story into `master`
    1. Push `master` to GitHub
    1. Repeat!
1. have a nice day!

[TOP](#responsive-code-along)

---

## Target Page

You've all seen it before, and you'll probably have it memorized after a few more months ...

... [Google!](https://google.com)

[TOP](#responsive-code-along)

---

## Study Links

### Reverse-Engineering

* [Finding which colors a website uses](https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector/How_to/Inspect_and_select_colors)
* [Which fonts a website uses](https://wpshout.com/quick-guides/how-to-see-what-fonts-a-website-is-using/)
* [Which images a website uses](https://www.lifewire.com/copy-image-web-address-url-1174175)
* [Copy the styles from a site](https://stackoverflow.com/questions/20438102/how-can-i-easily-copy-the-whole-css-file-from-a-website)

### ARIA

* What is Accessibility? [short video](https://www.youtube.com/watch?v=3w7imFuXD8k), [MDN article](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/What_is_accessibility)
* What is the Accessibility Tree? [quickly](https://www.youtube.com/watch?v=rvYXa2nGE04), [in depth](https://www.youtube.com/watch?v=7mqqgIxX_NU)
* [What is ARIA?](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)
* [Clean, Semantic HTML is the key](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML)
* [Programming for Screen Readers](https://www.youtube.com/watch?v=Lktz1KXbTOU)
* [w3c Complete Introduction](https://w3c.github.io/using-aria/#intro)
* [FireFox Accessibility DevTools](https://hacks.mozilla.org/2019/10/auditing-for-accessibility-problems-with-firefox-developer-tools/)

### Wireframes

* [What are they?](https://careerfoundry.com/en/blog/ux-design/what-is-a-wireframe-guide/)
* [wireframe.cc](https://wireframe.cc) (a site for making and sharing basic wireframes)

### Branching & Incremental Development

* [Demo project to study](https://github.com/hackyourfuturebelgium/built-with-branches)

### Semantic Layout

* [Why, How and When? (css-tricks)](https://css-tricks.com/why-how-and-when-to-use-semantic-html-and-aria/)
* [What is "semantics"? (MDN)](https://developer.mozilla.org/en-US/docs/Glossary/semantics)
* [Using Sections and Outlines (MDN)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines)
* [Semantic Elements (FreeCodeCamp)](https://guide.freecodecamp.org/html/html5-semantic-elements/)
* [Semantic Elements (w3schools)](https://www.w3schools.com/html/html5_semantic_elements.asp)
* [HTML5 Semantic Elements vs. CSS](https://stackoverflow.com/questions/16767617/semantic-html5-structure-versus-css-layout-needs)

### Responsive Web Design

* [What is it?](https://en.wikipedia.org/wiki/Responsive_web_design)
* [Using Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
* [Simulating Devices](https://developers.google.com/web/tools/chrome-devtools/device-mode/)

### CSS & Styling

* [cascade & inheritance](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
* [CSS Specificity](https://css-tricks.com/specifics-on-css-specificity/)
* [CSS Positioning](https://css-tricks.com/almanac/properties/p/position/)

### Inspecting the DOM

* [How to inspect an element](https://www.lifewire.com/get-inspect-element-tool-for-browser-756549)
* [Inspecting the DOM?](https://hackyourfuture.be/inspecting-the-dom)
* [Live DOM Viewer](https://software.hixie.ch/utilities/js/live-dom-viewer/?%3C!DOCTYPE%20html%3E%0A%3Chtml%3E%0A%0A%3Chead%3E%0A%20%20%3Cmeta%20charset%3D%27utf-8%27%3E%0A%20%20%3Cstyle%3E%0A%20%20%20%20.container%20%7B%0A%20%20%20%20%20%20display%3A%20flex%3B%0A%20%20%20%20%20%20flex-direction%3A%20column%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20.above%20%7B%0A%20%20%20%20%20%20order%3A%201%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20.below%20%7B%0A%20%20%20%20%20%20order%3A%202%3B%0A%20%20%20%20%7D%0A%20%20%3C%2Fstyle%3E%0A%3C%2Fhead%3E%0A%0A%3Cbody%3E%0A%20%20%3Cdiv%20class%3D%22container%22%3E%0A%20%20%20%20%3Cp%20id%3D%22p-1%22%20class%3D%22below%22%3E%0A%20%20%20%20%20%20first%20p%0A%20%20%20%20%3C%2Fp%3E%0A%20%20%20%20%3Cp%20id%3D%22p-2%22%20class%3D%22above%22%3E%0A%20%20%20%20%20%20second%20p%0A%20%20%20%20%3C%2Fp%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Fbody%3E%0A%0A%3C%2Fhtml%3E%0A)
* [DOM Tutor](https://janke-learning.org/dom-tutor)
* [Modify the DOM](https://zapier.com/blog/inspect-element-tutorial/) - does the source change?

[TOP](#responsive-code-along)

---

## For Coaches

Any tips, resources or examples that will help lead this code-along.  PR's are more than welcome!

* [Leading great code-alongs](https://teachtogether.tech/#s:performance-live)

[TOP](#responsive-code-along)

---
---

### <a href="https://hackyourfuture.be" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/63941625-4c7c3d00-ca6c-11e9-9a76-8d5e3632fe70.jpg" width="100" height="100" alt="Hack Your Future: Belgium"></a>
