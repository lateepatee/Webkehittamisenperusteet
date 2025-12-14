# Kulmakaappi Oy - Web Development Project

This is a responsive website for a fictional design shop "Kulmakaappi Oy", created for the *Web-kehittämisen perusteet* course. The site includes a landing page, a product showcase, and a contact form.

**Published Site:** [Insert your GitHub Pages link here]

## 🚀 Features
- **Responsive Design:** Works on Mobile, Tablet, and Desktop using CSS Grid and Flexbox.
- **Consistent Visual Identity:** Uses CSS variables for colors, fonts, and spacing.
- **Interactive Elements:**
  - Google Maps Modal integration.
  - Image Lightbox (Zoom) for products.
  - JavaScript form validation simulation.
- **Accessibility:** Semantic HTML tags and ARIA attributes.

## 📝 Changes & Self-Reflection (Task L Updates)

Based on the feedback received from the teacher and my own testing, I made the following improvements to polish the project to a professional level:

### 1. Response to Feedback
- **Added New Form Inputs:** The assignment required more variety in input types. I updated `lomake.html` to include:
  - A `<select>` dropdown for choosing the "Subject" of the message.
  - A `<input type="checkbox">` for newsletter subscription.
- **Fixed Validation Errors:** I addressed the W3C Validator error in `tuotteet.html` where the Lightbox image had an empty `src` attribute. I added a transparent placeholder image to fix this.

### 2. Design & Code Quality
- **Unified CSS:** I refactored the code to ensure all pages share the exact same `style.css`.
- **Navigation:** I ensured the navigation bar is identical across all files and added an `.active` class to highlight the current page.
- **Clean Code:** I removed commented-out code (old video tags) and moved inline styles into the CSS file for better maintainability.

### 3. Responsiveness
- I tested the site on mobile and desktop views. The product grid automatically adjusts columns, and the contact form stacks vertically on smaller screens for better usability.

## 🛠️ Technologies Used
- HTML5
- CSS3 (Custom properties/variables)
- Vanilla JavaScript (No frameworks)