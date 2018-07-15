# gas-develop-template

A repository template for Google Apps Script (GAS) development.

## Features

* babel (coding)
* webpack (bundler)
* clasp (deploy)

## Setup

Copy this repository for your new GAS project.

```
$ git clone git@github.com:kumatch/gas-develop-template.git your-gas-project-name
$ cd your-gas-project-name
$ npm install
```

### For first setting

Visit https://script.google.com/home/usersettings and enable Google Apps Script API, then login by @google/clasp. (Once for your google account.)

```
$ npx clasp login
```

### Create GAS project

Create a new GAS project on Google drive, then check the GAS project ID. (Open `File` -> `Poject properties` and see `Script ID`)

And clone the GAS project to local machine using clasp.

```
$ mkdir dist && cd dist
$ npx clasp clone your-GAS-poject-id
```

## Development

Write GAS codes into `src` directory and deploy it.

```
$ npm run build
$ npm run push
```

## License

MIT
