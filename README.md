# umean
>A Semantic Search Engine

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
After forking and cloning this repository, run the following commands:

```
  cd umean-api
  npm install

```

# Documentation

## Endpoint:
`https://api.gavagai.se/v3`

## umean API endpoints:

**Get Available languages**
----
  Returns json data with all API available languages holded in the search engine.
  
  | URL | Method | Params | Success response | Error response|
  |--|--|--------------------|--|--|
  |`/`|GET|`{languages}?{apiKey}`|Status 200|Status 404|

**Get Word with semantically similar words**
----
  Returns json data about a single word and a list of semanthic similar words.
  
  | URL | Method | Params | Success response | Error response|
  |--|--|--------------------|--|--|
  |`/lexicon/`|GET|`{language}/{word}?{fields}&{apiKey}`|Status 200|Status 404|

**Get info about a Word**
----
  Returns json data about more info related to a single word.
  
  | URL | Method | Params | Success response | Error response|
  |--|--|--------------------|--|--|
  |`/lexicon/`|GET|`{language}/{word}/info?{apiKey}`|Status 200|Status 404|


## Available Scripts

In the project directory, you can run:

```
npm start

```

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

```
npm run build

```

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!


### URls for the project repo and deploy:
[Link Repo](https://github.com/annacv/umean-client) |
[Link Deploy](https://u-mean.firebaseapp.com/)

### URls for testing the API:
[Postman](https://www.getpostman.com/collections/e0712fdf1d2e4fc366d3) |
