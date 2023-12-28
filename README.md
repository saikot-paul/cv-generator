# Resume Builder Web Application

## Overview
I am developing a web application aimed at creating polished resumes, leveraging React, React Bootstrap, TypeScript, and CSS. My focus is on crafting a user-centric interface with controlled forms, dynamic components, and responsive design. Currently in development, the goal is to integrate AI, using the Cohere API, to suggest role-specific responsibilities and optimize resume formatting for specific job applications.

## Key Implementation Details
### Form Groups
- Developed a class to create form groups for text, date, and URL inputs, utilized across components like contact, education, experience, and projects.

### Validation Functions
- Implementing validation functions for text, URL, and email inputs, with ongoing development for date validation.

### Dynamic Components
- The application includes reusable components for education, experience, and projects, managed using a `useState` array approach.

### Resume Rendering
- Integrated react-pdf for resume rendering, ensuring automatic updates with state changes.

### Data Storage and User Interaction
- Developing a method to dynamically store user data and reflect changes in the main App.tsx.
- Future plans include user data storage in an external database with authentication and a structured schema.

## Technical Techniques
- Resolved button-related issues using lodash/debounce for smoother user interactions.
- Utilizing React's useState and mapping functionalities to dynamically render and manage form components.

## AI-Powered Experience Bullet Point Generation
### Challenges
1. **Initial Large Prompt Approach**: Initially tried using a single, extensive prompt for bullet point generation.
   
2. **STAR Component Splitting**: Experimented with breaking down prompts into STAR components for structured AI responses.

3. **Prompt with Examples**: Currently using prompts with examples, achieving around a 50% success rate.

## Future Plans
Working towards creating resumes based on user's current information and tailored to specific job descriptions. This aims to enhance the personalization aspect of the resume creation process, making the application a valuable tool for job seekers.
