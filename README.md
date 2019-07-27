# Project Greenfield - Vibranium

![Main Page](documentation/Logos.png)

> Project Greenfield comprises a complete redesign of an outdated client-facing retail web-portal. This redesign provides an item details page which includes an image gallery, styles, questions and answers, and ratings and reviews
>
> - Built entirely using React, React Hooks, and Redux
> - Client pages served through an Express server
> - Built using Webpack
> - Designed with Material UI, following Material Design standards set by Google

## Table of Contents

1. [Requirements](#Requirements)
2. [Build](#Building-and-Running)
3. [Notes](#Notes)

## Requirements

Beyond the npm modules in the package.json, you should have the following installed:

- Node v10.16.0 (LTS as of July 2019) or higher

API Key from Filestack

[Filestack](https://www.filestack.com/)

- Config file with API key (FileUploader_API_KEY) required in client/config folder to access the file uploader used to upload images you have for answers to questions and for reviews

## Building and Running

First install dependencies:

```sh
npm install
```

To create a development build:

```sh
npm run build
```

To create a production build:

```sh
npm run production
```

To start the server and continuously build webpack

```sh
npm run dev
```

Click this link to view the product

[Vibranium](http://localhost:3000/shop/1)

## Notes

> **Redux + React Hooks**
>
> - Overarching state management done with [Redux](https://redux.js.org)
> - Functional component state management done with [React Hooks](https://reactjs.org/docs/hooks-intro.html)

> **URL Routing**
>
> - Client side routing done with [React Router DOM](https://reacttraining.com/react-router/web/guides/quick-start)

> **Components Overview**
>
> 1. [Product Overview](documentation/overview/README.md)
> 2. [Questions and Answers](documentation/questions/README.md)
> 3. [Ratings and Reviews](documentation/reviews/README.md)

> **Design**
>
> - Designed with [Material UI](https://material-ui.com/) following Material Design standards

> **API and Images**
>
> - Information to populate the site provided by Hack Reactor
> - Images used in the API from [Unsplash](https://unsplash.com/)
