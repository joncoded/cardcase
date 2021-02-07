# cardCase

* a react library for displaying API-derived data in the form of "cards"
* this project was bootstrapped with [create-react-app](https://github.com/facebook/create-react-app)

## prerequisites

* be comfy with using the Terminal or command line
* have a JSON API endpoint ready 
* know how to extract data from the API into a React component JSX template
* optionally, know enough CSS to be dangerous

## startup

### download

from the command line:

```
$ git clone https://github.com/joncoded/cardcase.git .
```
### install

```
$ npm install
```
### start

```
$ npm start
```
### and then...

* open [http://localhost:3000](http://localhost:3000) to view it in the browser
* open up your `cardcase` folder in VS Code 
* enjoy development (localhost:3000 page will reload every time you save)

## development

1. configure project in `src/App.js`
  * enter your API endpoint URL
  * enter your title
2. configure the structure of the card in `src/components/SearchPanel/CardCase/Card.js`
3. optionally, configure the styling of the card in `src/index.css`

## build

```
$ npm run build
```

* builds the app for production to the `build` folder
* bundles react in production mode
* build is minified and the filenames include hashes
* app becomes ready for [deployment](https://facebook.github.io/create-react-app/docs/deployment) 

more in the [create-react-app documentation](https://facebook.github.io/create-react-app/docs/getting-started)

## changelog

* 2021-02-06 started basic list