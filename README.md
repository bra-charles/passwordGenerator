
# Password Generator App 
This project is a password generator app built with React, TypeScript,Styled-Component and Tailwind CSS. Users can generate secure passwords by selecting desired character types (uppercase, lowercase, numbers, symbols) and customizing the password length. The app also displays the password strength visually. 

## Table Of Contents

  - [Overview](#overview)
  - [Challenge](#challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [Getting started](#getting-started)
  - [Project structure](#project-structure)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Author](#author)


 
### Overview
This password generator app provides users with a secure and convenient way to create strong passwords.

### The challenge

Users should be able to:

- Generate a password based on the selected inclusion options
- Copy the generated password to the computer's clipboard
- See a strength rating for their generated password
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

### Links
- [see live]()  

### Built with
- [React](https://react.dev/): A JavaScript library for building user interfaces.
- [TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html): A       superset of JavaScript that adds optional static typing.
- [Styled-Component](https://styled-components.com/docs): For styling component.
- [Tailwind CSS](https://tailwindcss.com/docs/guides/vite): A utility-first CSS framework for rapid UI development.

### Getting Started
- Clone this repository.
- Install dependencies:
    - npm install
- Start the development server:
    - npm run dev        
 This will start the development server and open the app in your browser, typically at http://localhost:5173/.


### Project Structure
- src/
   - App.tsx: Main application component.
   - Assets/images
     - icons-arrow-right.svg: Svg for a right arrow used in the GENERATE button.
     - icons-copy.svg: Svg for copy to clipboard.  
   - components/

     - ArrowRightSvg.tsx: Component for an icon-arrow-right svg file. 
     - CopyIconSvg.tsx: Component for an icons-copy svg file. 
     - IncludeLowercase.tsx: Component for including lowercase letters.
     - IncludeNumbers.tsx: Component for including numbers.
     - IncludeSymbols.tsx: Component for including symbols.
     - IncludeUppercase.tsx: Component for including uppercase letters.
     - PasswordLength.tsx: Component for changing password length.
     - MainPasswordStrength.tsx: Component for displaying password strength.    
     - PasswordStrengthColorBox.tsx: Component for color boxes to display password strength levels.
     - PasswordStrengthMeter.tsx: Component for   
   - utils/
     - generatePassword.ts: Utility functions.
     - passwordStrength.ts: Utility functioons.  
- tailwind.config.js: Tailwind CSS configuration.
- package.json: Project dependencies and scripts.
- README.md: This file (you're reading it now!)

### Author
  Charles Adu Nkansah
- GitHub: [@bra-charles]()
- LinkedIn: [@charles](https://www.linkedin.com/in/charles-adu-nkansah/)
