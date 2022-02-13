# This is the third sample project of mine for the portfolio

## Short description 
This is a refactoring of the Loan application to React, which I previously automated in native JS.
(https://github.com/RustamNossov/LOAN)

## Used technologies

The application was created using the JavaScript library - React.

I used: 
* functional components
* React Redux
* Formic + Yup
* DatePicker
* responsive design, using flexbox, relative units and media queries
* HOC for reusing slides functionality
* FetchAPI interface in bundle with JASON server fake REST API 
* custom Hook's for http requests, dynamic importing images and for reuse touchscreen events
* React Router for routing between pseudo-pages
* Helmet component
* SCSS

## Functionality

The application contains three slides, two forms, an accordion.


The transition between pages is made using React Router. Each page contains a React Helmet component.
I used React Redux to manage the states.
The animation is partly implemented in native JS, and partly using animate.css.

I used HOC to automate slides. To manage the slide events of the Touch group, I created a custom hook. I wrote two more hooks to dynamically import images and load data from the slide content database.

Forms are managed and validated using Formik + Yup. Ids are generated using uuid. The datepicker component is implemented using react-datepicker.
