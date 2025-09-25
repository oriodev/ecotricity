# Ecotricity Resource Download Component

### Wireframe
Initial wireframe designed with Figma. Includes basic features such as rendering and downloading resources. Also includes stretch features such as multiple download and pagination.

<img width="1632" height="1116" alt="Wireframe" src="https://github.com/user-attachments/assets/00ba5f8e-0505-41d2-b0e5-254a8baba9d9" />


### Design
Full component designed with Figma. Adds correct colour scheme, a more comprehensive mock up of what the top bar might look like on a customer portal (sans navigation), and a font that closer mimics the one to be used on the website.

<img width="1632" height="1116" alt="Design(2)" src="https://github.com/user-attachments/assets/29705998-f9bc-44b2-bbad-d4404c0e7af7" />


### Final Component

The final component has been built with Next.JS app router, TypeScript, Tailwind CSS, and React Icons. 

- It fetches the necessary resources from the NESO API and formats the results to return only the necessary data to the client.
- It then renders these resources in a formatted table, displaying the title and description so that the user understands what data each resource holds.
- Each resource has a checkbox and a download button. The download button uses a simple Link component to download the data on click. The checkbox uses useState to add the resource to an array of 'selected resources' that allows the user to mass download multiiple files at once.
- Above the resource table, the component renders a 'select all' and 'download all' button. These allow the user to download all of the data in one click, or to download multiple files with ease. Conditional formatting on these buttons gives the user a clear idea of what options are available to them.
- The Header and Footer components are very simple renders of a broader web page to give the component some context. They are by no means fully fleshed out designs as that was outside of the scope of the project. I feel fairly certain that 'Ecolibrium' is not a good title for this page, but I wanted to use a logo here, so fill in a better title with your imagination.
- The SVG design, favicon, font, colours, and button animations have all been taken from the public facing website, as indicated in the instructions.


- Multiple downloads was a surprisingly complex feature to implement. Multiple options were considered, but using Window.open() was ultimately the most feasible option, despite not being the most elegant user experience. It requires the user to allow popups for the web page, and opens multiple tabs on their browser. A more elegant solution should be implemented if it was decided that multiple downloads was a necessary feature.
- Pagination was a considered additional feature. The API did not provide an obvious way of implementing pagination, and as there are only 9 resources, it was deemed unnecessary. If there were to be more than 9 resources rendered on the page, it would be in the best interest to implement pagination.
- Finally, the Greycliff font is a demo font and therefore does not render certain characters. This is due to it being an Adobe font and would not be a problem in real life, as Ecotricity uses the font on the public facing website so therefore must own it.

<img width="1920" height="934" alt="image" src="https://github.com/user-attachments/assets/71185a68-61c6-4616-9b4c-a31c26727fcc" />
<img width="1920" height="934" alt="image" src="https://github.com/user-attachments/assets/70e71344-771b-40d9-898e-b3dbba45a94b" />
