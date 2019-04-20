# CV 2019

Haeseong han's CV made in 2019  
URL: https://han-cv-2019.herokuapp.com/

## 1. PURPOSE

I made this project to show my recent web skills and to made a scalable and resusable template.

## 2. TECH

1. REACT
2. CSS IN JS(STYLED COMPONENT, JSS)
3. REDUX, IMMUTABLE
4. WEBPACK, BABEL
5. SERVER SIDE RENDERING, ASYNC ROUTING
6. Express, node
7. AWS, HEROKU

## 3. TOPICS

### 1) SCALABLE REDUX MODULES

My redux structure is like below.

redux

/auth  
 ~/action-types.js  
 ~/actions.js  
 ~/initial.js  
 ~/reducer.js

/style  
 ~/action-types.js  
 ~/actions.js  
 ~/initial.js  
 ~/reducer.js

/admin  
 ~/action-types.js  
 ~/actions.js  
 ~/initial.js  
 ~/reducer.js

This makes to add new functional modules easy and also makes redux more easily editable and managable.

### 2) Server side rendering

I use `react-frontload` package to easily combine Create-react-app and server side rendering

Reference:

1. https://www.npmjs.com/package/react-frontload
2. https://medium.com/@cereallarceny/server-side-rendering-in-create-react-app-with-all-the-goodies-without-ejecting-4c889d7db25e

### 3) Styles

1. I added two css frameworks; `styled-components` and `jss` to this project.(Options for future projects using this project as a template)
2. Combine these two frameworks with server side rendering.
3. Add options for theme to jss
4. Redux will handle dynamic theme changes.(Not coded yet)

### 4) Deployment

I deployed this app to heroku because of cost, but I also added pm2 set-up for aws deployment.

### 5) RESTFUL API

I split a rendering server and a logic server for scalability.

## 4. ISSUES

### 1) Server side rendering and create react app and styled-component and jss(material ui)

1. create react app makes `NODE_ENV=production` when building bundles
2. When I develop, `NODE_ENV=development`(`yarn local:development`)
3. This makes classname mismatch in server rendering
4. `NODE_ENV=development` makes dev tool work.
5. I don't want to `eject` create-react-app.

#### SOLUTION

1. `NODE_ENV=production` (Always)
2. `REACT_CUSTOM_ENV`: Used in both server and client side for manage custom configuration
3. `DEPLOYMENT`: Used only in the server to distinguish deployment vs local

### 2) DEPLOY TO HEROKU

1. start: `yarn local:production`
2. start:local: `react-scripts start`,
3. build: `yarn build:production`,
4. build:react: `react-scripts build`,

HEROKU uses default `start` and `build` command for deployment. So I switch react(CRA) related scripts to `start:local` and `build:react`.

## 5. TO-DO(TL;DR)

### 1) Contents(TL;DR)

1. Fix contents on production db
2. Add OAuth2.0 with SQL
3. Change schemas to allow other users
4. Add Editor mode
5. i18n
6. animation
7. Add industry tags to db schema and show contents only about specific industry.

### 2) Others(Optimization, testing, deployment, ...)

1. DB: browser storage, redis&aws elastic cache , sql&aws RDB
2. SEO
3. Deployment: AWS(EC2, Cloudfront), pm2, nginx,
4. Testing
5. Service workers
6. Merge deployment scripts in package.json
