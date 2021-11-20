# make-a-difference
Check which individual actions will make a difference and which won't..

An excuse to build a full-stack JavaScript application and use some TypeScript.

## Setup
You'll need to add a `backend/config/default.json` file with content like the following. This
can be copied from within the mongodb project on the website:
```
{
    "mongoURI":
      "mongodb+srv://<user>:<password>@<address>.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
}
```

## Run
### Backend
Run the backend with:

`cd backend`

`npm install`

`npm run app`

### Frontend
Run the frontend with:

`cd frontend`

`npm install`

`npm start`
