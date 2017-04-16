# Build a Portfolio Using Bootstrap

Welcome to the Bootstrap Portfolio Project! For this project, you'll be creating a personal web page to show off your work. We will test your HTML knowledge and then it will be up to you to use CSS to style your own page and make it unique.

You’ll build a personal web page using Bootstrap, which should look similar to this one:

![Bootstrap Portfolio](http://courseware.codeschool.com.s3.amazonaws.com/projects/build-a-portfolio-using-bootstrap.png)

## What You’ll Use

- HTML
- Bootstrap

We'll start you off with a few CSS styles that you can build on that should help get things started.

## What You’ll Learn

You will further your Bootstrap skills, feel more comfortable writing Bootstrap code in a real-world scenario, and have the option of using this project as your real portfolio page.

## Live Demo

[Check out this link](https://codeschool-project-demos.github.io/BootstrapPortfolioProject/) to see a working version of this project. Feel free to customize your project even further by adding more custom CSS styles to it once you've completed the steps.

## Setup

Open this project’s directory in a text editor to complete this project. A text editor like [Atom](https://atom.io/) or [Sublime Text](https://www.sublimetext.com/) will do the job. You will make changes to the `src/index.html` file to satisfy the requirements.

## Tasks

Complete the following tasks to finish this project.

### Create the Navigation Bar

At the top of our page, we'll want to create a `navbar`. Here is a [sample navbar](https://github.com/codeschool/BootstrapPortfolioProject/wiki/Sample-Navigation-Bar) to help you get set up. Also feel free to check out Twitter Bootstrap's [documentation on navbars](http://getbootstrap.com/components/#navbar).	MENU

### Name in Navbar

Change the contents of the `<a>` tag that has the `navbar-brand` CSS class to include your name instead of "Brand".	MENU

### Menu in Navbar

Change the contents of the `<a>` tags that are within the `<li>` menu elements. One tag should read "Home", and the other "About".	MENU

### Create the Carousel

Let's place a Bootstrap Carousel under our navbar. Here is a [sample carousel](https://github.com/codeschool/BootstrapPortfolioProject/wiki/Sample-Carousel) to help you get set up. You can always learn more about Bootstrap's Carousel in their [official documentation](http://getbootstrap.com/javascript/#carousel).	MENU

### Carousel Items

Change the three `<h1>` and `<p>` tags that are found under each `.item` element within our carousel to include three tag-lines. You can either use similar content that was already available in the page _(under "Who I am", "What I do", etc)_ or come up with original content for yourself.	MENU

### Using Bootstrap's Grid System

Let's display some elements side-by-side using the Grid System. To do so, under our carousel, let's create three nested `<div>` tags. One should have the `marketing` CSS class, the next should have the `container` CSS class, and the third should have the `row` CSS class.	MENU

### Creating the Marketing Columns

Inside of `.row`, add three `div` elements with the `col-md-4` CSS class. Each of these elements should have a: - `span` tag with the `glyphicon` class, plus another class indicating [which icon you'd like to use](http://getbootstrap.com/components/#glyphicons-glyphs) _(ie. "glyphicon-music", or "glyphicon-camera", etc)_. - `h2` tag with a skill in it _(ie. "HTML & CSS", or "JavaScript", or "Design", etc)_. - `p` tag describing why you enjoy using each skill _(ie. "I enjoy making the web come to life with Angular", etc)_.	MENU

### Create the Footer

Under `.marketing`, let's create a `footer` element. Our footer needs to have a `div` inside it with the `container` CSS class. _You'll see the footer stick to the bottom of the page, which happens because of some styling code we made available._	MENU

### The Elements Inside our Footer

Inside our footer container, let's create two elements: an `h3` tag with a title inviting your visitors to get in touch with you, and a `p` tag describing how your visitors can get in touch.	MENU

### Cleaning Things Up

Let's remove the `.header`, `.tagline`, `.skills` and `.contact` elements as the same information should all be part of the carousel, marketing and footer elements now.

## Next Steps

Now that you’re done, we highly encourage you to open the `src/main.css` file and customize things as much as you’d like!

You should also make your completed project available online so you can share your progress with others! One way of doing this is by using GitHub Pages.

To deploy your `/src` directory to GitHub Pages, be sure to commit all of your changes and make a new branch called `gh-pages`. Once you are checked into the `gh-pages` branch, run the following command:

```
git subtree push --prefix src origin gh-pages
```

This will push the `src` folder up to GitHub on the `gh-pages` branch. After that, you should be able to open up `http://username.github.io/BootstrapPortfolioProject`, where `username` is your GitHub username.
