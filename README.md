# Recetorium front-end

This is a cooking recipes CRUD hands-on web development consisting of two code bases, a front-end made with React Redux Toolkit and the back-end is a REST API made with Express.  
Working example: [https://recetorium.vercel.app](https://recetorium.vercel.app)

You can access the back-end code at: [https://github.com/vspevc/recetorium-back](https://github.com/vspevc/recetorium-back)

## Technologies

Project build with:
- Typescript: 4.8.4
- React: 18.2
- React Redux: 8.0.4
- Redux Toolkit: 1.8.6
- axios: 0.27.2
- joi: 17.7

Testing with Jest and testing library:
- msw: 0.49
- faker-js/faker: 7.6
- fishery: 2.2.2

## Setup

To run this project, install it locally at repository root directory:

```
$ npm install
```

You need to add the API url at .env file:

```
REACT_APP_API_URL=https://your.api.url
```

Then you can run the app:

```
$ npm start
```
