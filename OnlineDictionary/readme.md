For this project, the page can be served by called the dict.html directly or going to localhost:3000 after the server is running.

To access this project running online: https://github.com/msjose276/OnlineDictionary

Online Dictionary Project

The purpose of this project is to review and integrate all of the tools and techniques you have learned in
this course. In this project, you will create a website that uses all of the following technologies: HTML,
CSS, JavaScript, jQuery, Node.js, AJAX, SQL, and JSON.
Your goal is to create a simple website that functions as an Online English Dictionary. The Dictionary is
stored on the web server as a SQL table with three fields: word, word type, and definition. Your website
is created using the following files:
dict.html displays the webpage containing the User Interface
dict.css styling for dict.html
dict.js JavaScript event handlers for dict.html
jQuery.js Standard jQuery library
Dictionary.js Node.js web server for this web site
word.js Node.js program to lookup the term in the database, collect the meanings,
 and send JSON to Browser

 The main webpage (User Interface) has a text field for the User to enter a word and a Lookup Button to
request the definition of the word. When the User clicks the Lookup Button, a JavaScript event handler
(in file dict.js) is invoked that contains a jQuery Ajax call. The Ajax call picks up the word from the text
field and sends it to the Web Server (Dictionary.js). Then the Server calls word.js to find the definition(s)
of the word in the SQL Dictionary, and then converts the definition(s) into JSON format and transmits it
back to the JavaScript in dict.js, where jQuery is used to display the definition(s) on the website. If there
are multiple definitions, then all should be displayed. The above picture is a simple example of a display.
You can style it to make it more visually appealing. 