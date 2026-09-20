# Lochana Patil - Student Portfolio

## Run the project

1. Open this folder in VS Code.
2. Open the terminal and run `npm.cmd install`.
3. Run `npm.cmd run dev`.
4. Open the local address shown in the terminal.

## Add your photo

Put your photo at `src/assets/profile.jpg`. The site deliberately shows an `LP` placeholder until that file is available. Replace the example email, links, college details, and project text in `src/data/portfolioData.js` before submission.

## PDF concept audit

| Concept from syllabus | Page/section in supplied documents | Used? | Where |
| --- | --- | --- | --- |
| JSX | ReactJS basics | Yes | All `.jsx` components and pages |
| Components | ReactJS basics | Yes | Navbar, Footer, ProjectCard, SkillCard, pages |
| Props / one-way data flow | Components and props | Yes | `ProjectCard` and `SkillCard` receive data/functions from parents |
| `useState` | React hooks | Yes | About, Skills, Projects, Contact, ProfilePhoto |
| `useEffect` | React hooks | Yes | About updates the browser tab title |
| Event handling (`onClick`, `onSubmit`, `onChange`) | Event handling | Yes | Buttons and forms |
| Conditional rendering | Conditional rendering | Yes | Show More text, success message, empty states, photo placeholder |
| `map()` | JavaScript arrays | Yes | Skill, project, education, and navigation lists |
| `filter()` | JavaScript arrays | Yes | Project category filtering and removing a skill |
| `find()` | JavaScript arrays | Yes | Finds a selected project detail |
| `concat()` and `includes()` | JavaScript arrays | Yes | Adds a non-duplicate skill |
| React Router, `Routes`, `Route` | React Router | Yes | `App.jsx` routes |
| `Link`, `NavLink` | React Router | Yes | Navigation and detail links |
| `useNavigate` | React Router | Yes | Home Contact Me button |
| Dynamic routing and `useParams` | React Router dynamic routing | Yes | `/projects/:projectId` detail page |
| CSS | ReactJS styling / CSS | Yes | `src/index.css` |

## Feature-to-concept table

| Feature | Concept used |
| --- | --- |
| Multiple pages | React Router, `Routes`, `Route`, `NavLink` |
| Project cards | Components and props |
| Project list | `map()` |
| Project filter | `useState`, `filter()`, event handling |
| Add/remove skill | `useState`, `concat()`, `includes()`, `filter()` |
| Show More | `useState`, `onClick`, conditional rendering |
| Contact form | `onSubmit`, `onChange`, `useState`, conditional rendering |
| Page effect | `useEffect` |
| Project details | Dynamic route, `useParams`, `find()` |

## Simple viva explanation

### Concepts used and why

- **Components:** divide the page into small reusable parts, so the code stays organized.
- **Props:** send data from a parent to `ProjectCard` or `SkillCard` instead of repeating card JSX.
- **useState:** remembers changing data such as the selected filter, skill list, and form success state.
- **useEffect:** performs the side effect of changing the browser tab title when the About page opens.
- **map():** converts each array item into a visible card.
- **filter():** selects matching projects and removes a selected skill without changing the original array.
- **find():** locates the one project whose ID is in the URL.
- **Event handling:** reacts to a click, typing in an input, or submitting a form.
- **Conditional rendering:** displays content only when a condition is true.
- **React Router:** changes pages without reloading the browser.
- **useParams:** reads the project ID from a dynamic route.

### Important files

- `src/main.jsx`: starts React and provides `BrowserRouter`.
- `src/App.jsx`: contains the page routes and common Navbar/Footer.
- `src/data/portfolioData.js`: editable profile, skills, projects, and education data.
- `src/components/`: reusable UI pieces.
- `src/pages/`: one component per portfolio page.
- `src/index.css`: all normal CSS styling and responsive layout.

### Likely viva questions

1. What is a React component, and why did you use components here?
2. What are props? Which component receives props in this project?
3. What is the difference between `map()`, `filter()`, and `find()`?
4. Why is `useState` needed for the project filter?
5. How does the Show More button work?
6. What is conditional rendering? Give an example from your project.
7. What does `onSubmit` do in the contact form?
8. Why use `NavLink` instead of a normal anchor tag?
9. What is a dynamic route? Explain `/projects/:projectId`.
10. What does `useParams` return in `ProjectDetails.jsx`?
11. What is `useEffect` doing in this project?
12. How do you add your own profile photo?

### Practical demonstration order

1. Open Home and point out the profile overview and navigation.
2. Open About, click **Show more**, then **Show less**.
3. Open Skills, add a skill, then remove it.
4. Open Projects, choose each category filter, then open a project detail page.
5. Open Education & Experience and explain the array-generated timeline.
6. Open Contact, submit the form, and show the confirmation message.
7. Open `portfolioData.js` and show that content can be edited in one simple file.

## Syllabus boundary check

This project uses React, React DOM, React Router, and normal CSS only. It does not use Redux, TypeScript, Tailwind, Bootstrap, UI kits, animation libraries, backend services, authentication, APIs, or other packages.
