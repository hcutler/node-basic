node-basic
==========

Basic Node app for app development class. Type in your name, hit the button, and see a personalized message on the second page.

To run, type "node app.js" from the main folder in a command prompt.

==========

Components:

node_modules: Contains external modules, which are snippets of code written by others that perform very specific functions within your code. These are really what make Node so powerful and flexible—you can easily import functionality written by other people. You can look through Node modules on http://www.npmjs.org, or just Google functionality you want and look for modules that perform that function. To add a new Node module to your program, type "npm install [[module name]]" in the main directory of your program.

We have three Node modules. The first, body-parser, lets us send information from the webpage (EJS file) to the router easily.

The second, ejs, allows us to use the .ejs file type.

The last, express, provides a lot of the framework to make our app work over the Internet.

public: Holds CSS, Javascript, image, and video files used to render web pages. Right now this just contains the basic Bootstrap CSS.

routes: Contains the routing files. The routing files tell your app what to do and where to go when deliniated functions are performed. For example, our routing file tells the application when to render the different web pages, and how to send your name from one web page to the next.

views: Contains files that are actually rendered. This folder contains EJS, or Embedded JavaScript, files. EJS is essentially HTML, but you can very cleanly insert Javascript in the middle of HTML lines. 

There are two files: index.ejs and secondpage.ejs. Index is generally the name of the first page of a website, like the homepage or landing page. In our case, it's the first page you see where you type in your name.

The other file, secondpage.ejs, provides the HTML for the second page you see, which displays your name.

app.js: The main file, and the first one to be read. At the beginning, this file initializes the functionality described in the Node modules. Then "get" and "post" requests are set up that tell the app which router methods to use. The last section tells the app to run on a particular port (5000 in this case).

package.json: A standardized JSON file containing information about this app. It's fairly readable, but there's info about the authors, version, repository, and versions of Node modules.
