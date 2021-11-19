# make-a-difference
Check which individual actions will make a difference and which won't..

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

`npm run app`