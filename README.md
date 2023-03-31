# CV-Site App
A website that you can use to create your own CV with an interactive tutorial, made entirely in React!

**Link to project:** 9amtech.github.io/cv-site/ <br>
**Project Requirements:** https://www.theodinproject.com/lessons/node-path-javascript-cv-application#assignment

![Thumbnail for the restaurant project.](https://github.com/9AMTech/cv-site/blob/main/thumbnail.png?raw=true)

## How It's Made:

**Tech used:** CSS (CSS Modules, Print Styles, Webkit Scroll), React (Create-React-App, React-to-Print, useState, useRef, forwardRef)

This app was such a challenge! Since it was definitely a larger scale application my hand was forced, and I had to divy up and slice up my code into different files and chunks. It was intimidating at first but I have to say, it looked SO clean afterwards. The important components like InputCV and OutputCV got their own CSS Modules, which helped keep each respective's styles clean, and allowed for the reuse of common names like "introduction" and "summary". On the initial page load, there's an interactive tutorial that shows you all of the buttons that are there to greet you on the toolbar. Each page gives a little description of what each button does or where it'll take you. The toolbar allows for easy navigation of the InputCV. <br/>

The print button was a different beast on its own. To get the user to even be able to print the page I had to find the React-to-Print package. It worked like a charm, but hooking it up made me get my hands dirty with learning about refs and forwardRefs. After wiring that up I then found out that the print page has it's own styles, and doesn't take after the styles of the component with the ref. In terms of the CSS side it was nicer to learn about being able to specifically target the print page's styles and also to be able to design individual scrollbars of anything on the screen with a scrollbar. I love front-end development. I'm learning something new every day!

## Lessons Learned:

-React is amazing, components divy up code into easily managable chunks. <br/>
-CSS is amazing, modules divy up code into easily managable chunks. <br/>
-There's almost a React package for everything. I don't know how I would've tackled only printing one component without it React-to-Print. <br/>
-Programming in React is really streamlined and easy to understand. React having a rule of being Unidirectional seems like a unorthodox restriction at first, but i feel as though it really makes it so that you know and understand what way data is going at all times. It's a great concept. <br/>
-Having a noted list of "things to do" is a great practice to pick up. It's like having a whiteboard of all your thoughts and keeps track of whats going on/what needs to be done.
