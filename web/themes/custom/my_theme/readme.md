# Drupal 8 Theme

The files contained in this repo provide a starting point for developing a Drupal 8 theme. It is a subtheme of Classy.

Consider this a work in progress. There is much that needs to be added and finished. 

There are many concepts at play here to allow you to create a custom theme using tools for performance, accessibility, testing, and fast development.

This repo includes:
* [Gulp](http://gulpjs.com) for task-running
* [Sass](http://sass-lang.com) for pre-processing CSS, using Libsass so we don't get bogged down with Ruby

# Installation

Developing this Drupal 8 theme requires several components that are not provided natively by most operating systems. The following instructions presume no previous use of Node.js, NPM, Gulp and such, and presumes installation on a computer running MacOSX.

If you are certain you have used Node.js, Bower and Drush before, you can skip these instructions and continue with the information provided on the [README page](https://github.com/startinggravity/Drupal-8-Theme/blob/master/README.md#installation-instructions).

## Node.js

Node.js should be at least version v0.10.32. If you are unsure if you have installed it or are unsure of the version, you can check that by running from the command line:

```bash
node -v
```

To install it, download and install it from this page: https://nodejs.org, or if you are using a Mac and Homebrew, you can install node using: 

```bash
brew install node
```

## NPM

You should next make sure npm is installed. This can be done with: 

```bash 
npm -v
```

If you get an error indicating it's not installed, you can easily install it using the command: 

```bash
sudo npm install npm -g
```

## Gulp

We are using Gulp to automate many development steps. It's best to install it globally as well, so do that with:

```bash
npm install -g gulp
```

## Drush

Finally, you will need Drush. If you are a regular Drupal developer this may already be on your system, but make sure it is version 8, because that is the only version compatible with Drupal 8. To check, run:

```bash
drush version
```

If you are not running Drush 8, follow instalation instructions [provided here](http://www.drush.org/en/master/install/).


## Installation Instructions

We are assuming here you have already installed Drupal 8 and it is running on your development server. To begin installing this theme, navigate to the themes directory (`cd themes`). If you wish, you can add a new directory for your custom themes (`mkdir custom && cd custom`).

Where you see in these instructions `my_theme` you should substitute the name of your theme, using all lower case and with no spaces. Use underscores to separate words.


Change directories to where your put your theme.

```bash
cd my_theme
```


Edit my_theme.info.yml to reflect your theme's name and other details. Make sure you change the path under "# Locate files" to reflect your theme directory's name. See also "[Defining a theme with an .info.yml file](https://www.drupal.org/node/2349827)".

Create the libraries.yml file.

Editing may not be needed in my_theme.libraries.yml, or at least not right away. This is where you can add other CSS and JS files. You can find more information on the use of the libraries.yml file [here] (https://www.drupal.org/developing/api/8/assets).


Now install all of the Node.js modules we need. (This will take a while.)

```bash
npm install
```

Finally, set up Pattern Lab.

```bash
gulp generate-pattern-lab
```

You're now ready to visit your Drupal site and enable the new theme.

## Post-installation Notes

Running `npm install` and `gulp install` will add several files in directories called node_modules. The .gitignore file in your theme will prevent these files from being added to your repo. This is intentional because the files are only needed for development. 

If you are adding developers on a team who are editing the theme, after they have cloned your site's repo they will need to navigate to the theme directory and run these commands:

```bash
npm install
```
As well as either
```bash
gulp generate-pattern-lab
```
or
```bash
gulp build-dev
```


