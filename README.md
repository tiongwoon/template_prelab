This repository contains the template code to create a learning object for lab preparation. 

 The ‘src’ folder contains all the code to be edited. One who intends to create a new learning object for lab preparation can simply clone the repository from the link above and make the necessary changes to each section as below. The person should have some basic knowledge of HTML, CSS, and JavaScript and with this, he or she will be able to grasp the concept of React.JS and can thus work with this set of code.

 run git clone 'URL' to clone the repository to a local server. 

Recommended changes to make for each section. In brackets are the sub-components found in the elements folder.:
1.	Home 

I.	Edit the main description

II.	Edit the text in the ‘Your Tasks’ and ‘After the Lab’ sections as desired using the pre-set format 

III.	Remove any redundant sections 

2.	Motivation

I.	(Video Wrapper) Edit the embedded links of the YouTube videos. Refer to this link: https://support.google.com/youtube/answer/171780?hl=en-GB

II.	(Video Wrapper) Fill in the alternative text for the videos.

III.	Edit the main description 

3.	Theory

I.	Edit the main description. For example, to include explanations.

II.	(Theory Quiz Box) Duplicate or remove the code blocks to add quiz questions as desired

4.	Lab 

I.	Add or remove images in the gallery by duplicating the code snippets

II.	(Image Lab) For the image map, edit the main image

III.	For the image map (image with clickable spots which will open a content box with image and descriptions of the object), edit equipment name, image, description, the associated coordinates

IV.	(Lab Quiz) Duplicate or remove the code blocks to add quiz questions as desired

5.	Simulation

I.	Edit the main description

II.	As mentioned above, the simulation will need to be created specific to the lab. It is recommended to use the P5.js library (https://p5js.org/).

III.	Duplicate or remove the code blocks to add quiz questions as desired

6.	Safety

I.	Edit the main description

II.	(Image Safety) For the image map, edit the main image

III.	For the image map, edit precaution details and the associated coordinates of each precaution, determined by the location of the hazard in the image

Additional notes:
The steps above will create a learning object with identical layout to the Drag Lab’s website. If one would like to change the layout, several general components with no position constraints are provided in the elements folder:
•	General Quiz Box
•	Text
Wrap these components around a container and position it using CSS and class name selectors build new layouts. 



The content below are irrelevant to the learning object.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
