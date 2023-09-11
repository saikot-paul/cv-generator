This web app, built with React, React Bootstrap, TypeScript, and CSS, empowers users to create polished resumes. Skillfully integrating controlled forms, dynamic components, and responsive design. I wanted to create an engaging and user-centric interfaces that seamlessly manage and present personalized data. It's still not finished yet. but the goal is to use AI to provide suggestions on responsibilities to format it better and fit the roles that they are applying for. 

- Current Tasks 
   - [ ] create class to create form groups:
      - [x] text
      - [x] date
      - [x] url
  - [x] create components that utilize the form creation class:
      - [x] contact 
      - [x] education
      - [x] experience
      - [x] projects
      - [x] website
  - [ ] create validation functions for all above
     - [x] text
     - [x] url
     - [x] email 
     - [ ] date - have to cross reference between the past and the present 
  - [ ] create radio box for present: Education. Experience, Project
  - [x] create function that allows for duplicates of itself (projects, education, experience) - each component is now reusable instead of a function
     - Thinking of creating useState array for each of the additional entries (ex key : "educationData", value : [ key : "experience_0", value : [{key: key, value: value}, etc], experience_2: [{key: key, value: value}, etc]]
     - [x] create buttons for the addition/deletion
     - [x] create useState for each comp
     - [x] on render, map out the useState correctly such that each comp is given the correct itemKey 
     - [x] in formClass make sure that if itemKey doesn't exist then to push the itemKey
     - [x] ensure that add/remove keys work properly 
  - ~~[x] create temporary boilerplate for resume render~~
  - [x] reformat resume render to fit react-pdf (good thing is that it automatically re-renders anytime there is a state change) 
  - [ ] find way to dynamically store user data
     - [x] propagate those changes into the main App.tsx
     - [ ] use the formData and render the resume
  - ~~[x] use user data to provide suggestion API (I want to send this user data to cohere api and provide suggestions to the user)~~
     - [x] get user data
     - [x] send user data to cohere api with prompt
     - [x] receive the results
     - [x] format it
     - [x] render it
 - [ ] store user data in external db
    - [ ] login
       - [ ] username
       - [ ] password
       - [ ] authorization
    - [ ] store information in the db
    - Schema:
       - Tables:
         - User
            - Username
            - Password
         - Contact
            - Primary key : username + hash or some auth
            - Name, etc
         - rest of the parts will follow the same pattern      

Here's what the front end currently looks like :) 
<img width="808" alt="image" src="https://github.com/saikot-paul/cv-generator/assets/79386282/4d65dd24-5dd5-4ad8-99be-83c52bbf67ac">


