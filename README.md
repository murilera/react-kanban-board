## Kanban Board using React

- The test is about implementing a simple kanban board using React.
- You can click the `Program output` tab above. The Server should start automatically.
- In the src folder, you have a very simple initial structure of a React app with a couple of pre-made components. They have some basic styling implemented in the global css stylesheet. If you have time, you can make the app look nicer. You can check the page and your changes in the `browser's view` at the right.
- You can make your changes in the `src` folder, but feel free to make whatever changes you want to the rest of the project. You don't need to be concerned about the `mock` folder, it's a basic mock API that we're going to provide you, so you can implement the UI.
- You can install whatever dependencies you find necessary using the `Shell` tab below the `browser's view`.
- You can also use the `Server` tab to see the errors thrown by the code and the `Console` tab to check for logs.

### Instructions

#### When the server is started, we run a simple API with mock endpoints for you to use.

**The available endpoints are:**

```bash
GET /api/swimlanes/
GET /api/tickets/
GET /api/persons/
```

#### The mockup of the UI that you are going to implement can be found here:

https://excalidraw.com/#json=5Gs7jBQRx8b4KO2YEROH1,IltSlQq5Q6lxfZlYU8NGSA

#### As described in the mockup, we're looking for a simple kanban project with the following functionalities:

- Display the Swimlanes available in the `/swimlanes` endpoint.
- Display the Tickets available in the `/tickets` endpoint as Cards in the Swimlanes.
- Implement the move functionality for the tickets, so you can move tickets between Swimlanes.
- The `Header` should display the amount of Tickets that are in each one of the Swimlanes.
- Implement the assign functionality into the Cards. You should have a `Select` listing the persons available in the `/persons` endpoint, and you should be able to assign a person to the ticket by selecting one.
- When you click the Ticket's card title, you need to redirect to another page where you are going to display the details of the Ticket.
- The details page should show the details of the ticket as described in the UI mockup, as well as a back button. The `Header` should remain in the page when you navigate to the details page.
- Finally, the board should have a filter by person. The select should also list the persons from the `/persons` endpoint. When you select someone from the list, the board should show only the tickets assigned to that person.

### Notes:

- You don't need to persist anything, so it's not expected that the state of the cards will be retained if you restart the server.
- Make sure to check for additional details or requirements in the UI mockup.

### Happy coding! 🚀
