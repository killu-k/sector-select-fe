# SectorSelectFe

The Sector Selector FE application with Angular.
A form where users enter their name, select sectors, and give consent.

## Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [Angular CLI](https://angular.dev/tools/cli)

  ```bash
  npm install -g @angular/cli
  ```

## How to run

1. Clone the repository:
   ```bash
    git clone https://github.com/YOUR_REPO/sector-select.git
    cd sector-select/frontend
    ```

2. Install the dependencies:

    ```bash
      npm install
      ```

3. Start the Angular server:

    ```bash
      ng serve
    ```
   
4. Open the app:

http://localhost:4200

**Make sure the backend is running.**


## Features 

**User form:**

 - First name, last name (required)

 - Sector select (required)

 - Consent checkbox (required)

**Session handling:**

 - Form is refilled if user has an active session

 - User can edit their data until session expires (Set to 1min)
