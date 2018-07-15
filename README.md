# gas-develop-template

A repository template for Google Apps Script (GAS) development.

## Features

* babel (coding)
* webpack (bundler)
* clasp (deploy)

## Setup

```
$ npm install
```

### For first setting

Visit https://script.google.com/home/usersettings and enable Google Apps Script API, and login by @google/clasp. (Once for your google account.)

```
$ npx clasp login
```

### Create GAS project

Create a new GAS project on Google drive, then check the GAS project ID. (Open `File` -> `Poject properties` and see `Script ID`)

And clone the GAS project to local machine using clasp.

```
$ cd dist
$ npm clasp clone `your-GAS-poject-id`
```

## Development

Write GAS codes into `src` directory and deploy it.

```
$ npm run build
$ npm run push
```

## License

MIT
