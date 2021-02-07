# cardCase

* a react library for displaying API-derived data in the form of "cards"
* this project was bootstrapped with [create-react-app](https://github.com/facebook/create-react-app)

## prerequisites

you should: 

* be comfy with using the Terminal or command line
* have a JSON API endpoint ready 
* know how to extract data from the API into a React component JSX template
* know enough HTML (and optionally, CSS) to make a decent design

you do not: 

* actually need to know React to enjoy using this and playing around with displaying data from APIs!

## startup

### download

from the command line, run this command:

```
$ git clone https://github.com/joncoded/cardcase.git
```

(a new folder will be created)

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
4. modify the `homepage` property in `package.json` for deployment to gh-pages

## build

```
$ npm run build
```

* builds the app for production to the `build` folder
* bundles react in production mode
* build is minified and the filenames include hashes
* app becomes ready for [deployment](https://facebook.github.io/create-react-app/docs/deployment) 

more in the [create-react-app documentation](https://facebook.github.io/create-react-app/docs/getting-started)

## deploy

```
$ npm run deploy
```

* get it published on `yourname.github.io/cardcase` (or `yourname.github.io/reponame`)
