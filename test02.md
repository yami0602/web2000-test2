1. What are three things you can do in order to speed up a website's load time? (Enumere tres cosas que se pueden hacer para aumentarle la velocidad a una pagina web) **(20pts)**
  1.Minify your JS and CSS files.
    <!-- 2.Optimize images(make images smaller) -->
    <!-- 3.Remove render-blocking -->
    <!-- 4.Optimize CSS Delivery --> -->

2. Go to the Google PageSpeed insights page and analyze ncl.com
Choose three of the shortcomings this website has and explain the specific tools and workflows we discussed in class which could help this website address these shortcomings. (Dirijase a la herramienta Google PageSpeed Insights y analice el sitio ncl.com. Basado en lo que dice la herramienta, enumere tres medidas especificas que discutimos en clase para corregir tres de los problemas senalados por la herramienta PageSpeed Insights)**(20pts)**

<!-- 1.Minify CSS- Minification refers to the process of removing unnecessary or redundant data without affecting how the resource is processed by the browser - e.g. code comments and formatting, removing unused code, using shorter variable and function names, and so on. -->

<!-- 2.Optimize images-optimizing images can often yield some of the largest byte savings and performance improvements -->

<!-- 3.Eliminate render-blocking JavaScript and CSS in above-the-fold content-Enabling gzip compression can reduce the size of the transferred response by up to 90%, which can significantly reduce the amount of time to download the resource, reduce data usage for the client, and improve the time to first render of your pages. -->



3. What is the render tree?**(20pts)**

    <!-- The combination of the DOM and CSSOM. The CSSOM and DOM trees are combined into a render tree, which is then used to compute the layout of each visible element and serves as an input to the paint process that renders the pixels to screen. Optimizing each of these steps is critical to achieving optimal rendering performance.  -->

4. Explain the process of a how a website loads in terms of the internal data structures built and used by the browser (DOM, CSSOM, etc).**(20pts)**

    <!-- 1.Process HTML markup and build the DOM tree. 
    <!-- 2.Process CSS markup and build the CSSOM tree.  -->
    <!-- 3.Combine the DOM and CSSOM into a render tree.  -->
    <!-- 4.Run layout on the render tree to compute geometry of each node.  -->
    <!-- 5.Paint the individual nodes to the screen.  --> -->

5. Clone the repository named "Asteroids" from www.github.com/fvitech. Once you do this, complete the following steps:  
    <!-- 1. Fork the github repo so you have your own fork  **(5pts)**  
    <!-- 2. Clone your fork of the Asteroids repository  **(5pts)**  
    <!-- 3. Re-organize the files so image files are inside an img folder and js files are inside a js folder. **(5pt)** -->
    <!-- 4. Initialize your local version of the project as a node project **(5pts)**    -->
    <!-- 5. Install webpack, webpack dev server, and all the required loaders so that you can have a single code bundle output to a file named prod.js **(10pts)**   -->
    <!-- 6. The code is a bit messy, with many things in the same file. Modularize it by doing the following:   --> --> -->
        <!-- 1. Start by copying the contents of the codingIsFun.js file to a new file called main.js -->
        <!-- 2. Make this new file your webpack entry point -->
        <!-- 3. Create an npm script to bundle your js code and fire the webpack dev server.**(10pts)**   -->
        <!-- 3. The Asteroids initialization code (which is marked by the comment which says GENERATE ASTEROIDS IN HTML DOCUMENT) should be in a separate file named createAsteroids.js. You will need to wrap this code in a function, export the function, then import this function and call it from within main.js **(10pts)**   -->
        <!-- 4. The auxiliary functions keyDown and keyUp should be moved to a separate file named controls.js.   -->
        <!-- 5. The binding of the keyDown and keyUp events is currently being done in an attribute to the body tag. Change this by using JavaScript's document.addEventListener function.   -->
        <!-- 6. Your controls.js file should export a single function that configures the controls when called. Import and call this function from your main.js file. **(10pts)**   -->
        <!-- 7. The controls file binds key handlers that modify variables that are no longer present in the new file. You can fix this by making said variables global or by moving them from main.js into controls.js and then exporting them from there. -->
        <!-- 8. No more than one script link is allowed in the main index.html. The only script that should be linked from index.html is prod.js   -->
        <!-- 9. Use a webpack uglify plugin to minify the code **(20 point bonus)**   -->
    <!-- 9. Upload your code to fvi-grad.com under your username **(10pts)** -->
  <!-- 7. In the end, all your JavaScript code should be inside a file named prod.js, which was created by using webpack. Nothing else should be linked to your html.   -->
  8. Notice that whenever there is a collision, the audio is being loaded and played. This slows down performance. Modify the code so that it loads the audio only once, stores it as a global variable, and whenever there is a collision, you use this global variable to reset the audio's currentTime to zero and then play it. **(20pts)**
