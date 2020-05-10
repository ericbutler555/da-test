# Front-end Development Test Project

Single-page app to test my front-end web development and critical thinking skills, based on a static mobile wireframe provided by Doe-Anderson.

## Tech Used

- Axios for API calls,
- Vue.js for data rendering and interactivity,
- Sass for writing CSS,
- Autoprefixer for handling CSS vendor prefixes,
- Gulp.js for running builds,
- Font Awesome for SVG icons, and
- Google Fonts for a web font.

## To Run

The only thing preventing you from just opening `index.html` in a browser is that the SVG sprite gets blocked. So you just need to run it through a local server on your computer.

`cd` into the directory and then:

- if you have PHP, run `php -S localhost:8000`.
- if you have Python, run `python -m SimpleHTTPServer` (for v2) or `python3 -m http.server` (for v3).
- if you have Node, install the `http-server` npm package and run `http-server -p 8000`.

The port doesn't matter. Then go to `http://localhost:8000` in your browser and it should show up.

## Test Requirements

- **Responsive layout:** The page should look and perform well on any screen size.
- **Webfont:** The page should use an external web font.
- **API usage:** The page should pull and use data from `randomuser.me/api`.
- **Info toggling:** The page should display different personal info as different icons are clicked.
- **Social links:** The page should link to social media accounts that open in a new tab.
- **Form validation:** The form fields should be checked for validity before the form can be submitted.
- **Form submission:** Successful form submission should display a success message to the user.

## Project Timeline

I took some extra time with this in order to think through a strong UI for the tablet and desktop experience; it didn't make sense for each little bit of personal info to display one at a time if enough screen area was available, and the social media links would've been lost if they stayed at the bottom of the page. I'm also still new to Vue.js so it took a while to read the relevant docs and get everything working there.

**Day 1:**

- Review wireframe and requirements and interactivity to account for
- Determine tech needs: in this case just HTML, SCSS, and JS (no backend language)
- Access API to review what data is returned and how it's structured
- Sketch layout on paper for tablet and desktop screens
- Wireframe layout in Adobe XD to confirm sketch ideas, catch inconsistencies
- Scaffold project folder, files, and build process
- Acquire and prep assets (icons, web font, JS libraries)

**Day 2:**

- Create pseudo-code HTML outline: mobile is exceptional so base HTML on tablet, with mobile nuances in mind
- Write HTML
- Begin JS
- Refactor JS into Vue (my original thought was to just use plain JS)
- Write SCSS for mobile view

**Day 3:**

- Update HTML form for Vue interactivity
- Finish and clean up JS
- Finish SCSS for tablet and desktop views
- Add error handling and UI message if API call fails
- Review, test and clean up
- Confirm all requirements are met
- Validate HTML on W3C validator tool
- Push to GitHub
