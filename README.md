# Unhandled Promise Rejection in Node.js HTTP Server

This repository demonstrates a common error in Node.js applications: unhandled promise rejections.  The `bug.js` file contains a simple HTTP server that uses a promise to fetch data.  There's a 50% chance the promise will reject, simulating a network error or other failure.  Because the rejection is not handled, the server will crash without proper logging or error handling.  The `bugSolution.js` file shows how to properly handle this using `.catch()`.

## How to Reproduce

1. Clone the repository.
2. Run `node bug.js`.
3. Refresh several times.  Eventually, you'll see the server crash due to the unhandled rejection.
4. Run `node bugSolution.js`. You will see the server handling the rejection gracefully.