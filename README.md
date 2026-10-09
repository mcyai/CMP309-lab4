# Assignment 4 - Task Dashboard

This is my task dashboard for assignment 4. I used only vanilla JavaScript, no frameworks.
To run it just open `assignment4/index.html` in the browser and click "Load Tasks". The tasks come after 1.5 seconds.

## Files

- `index.html` - the page itself (title, Load Tasks button, status message and the task list div)
- `styles.css` - some simple styles, completed tasks are shown with a line through them
- `taskManager.js` - has the `Task` class and the `TaskManager` class
- `api.js` - has `fetchTasks()`, it acts like a fake server and returns the tasks after 1500ms
- `main.js` - connects everything, loads the tasks when the button is clicked, shows them on the page and handles the Toggle/Delete buttons

I added the scripts at the bottom of index.html in this order: api.js, taskManager.js, main.js. main.js has to be last because it uses the other two.

## Challenges

- At first I didn't understand how to change `completed` when the id is read-only. Then I saw that `toggle()` should just return a new Task instead of changing the old one.
- Not mutating the array was a bit confusing. I'm used to `push` and `splice`, so I had to use spread, `filter` and `map` instead.
- When I clicked Toggle the tasks were added again under the old ones. I fixed it by clearing the list before rendering again.
- I couldn't test the catch block because the fake fetch never fails. So I added a `shouldFail` parameter to `fetchTasks`. If you write `fetchTasks(true)` in main.js you can see the error message.
