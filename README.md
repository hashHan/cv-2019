# CV 2019

Haeseong han's CV made in 2019

## TECH

1. REACT
2. CSS IN JS(STYLED COMPONENT, JSS)
3. REDUX, IMMUTABLE
4. WEBPACK, BABEL
5. SERVER SIDE RENDERING, ASYNC ROUTING
6. express, node

### TO-DO

db: browser storage, redis&aws elastic cache , sql&aws RDB, mongoDB  
deployment: AWS(EC2, Cloudfront), pm2, nginx,  
testing,  
service workers,

Split a server to two servers (rendering server and logic server),

Oauth2.0,

post patch,

i18n,

animation,

## Server side rendering and create react app and styled-component and jss(material ui)

1. create react app makes NODE_ENV production when building bundles
2. When I develop, NODE_ENV is development(yarn local:development)
3. This makes classname mismatch in server rendering
4. NODE_ENV development makes dev tool working.
5. I don't want to eject create-react-app.

### SOLUTION

1. NODE_ENV: production (Always)
2. REACT_CUSTOM_ENV: Used in both server and client side for manage custom configuration
3. DEPLOYMENT: Used only in the server to distinguish deployment vs local

### HEROKU

1. "start": "yarn local:production" FOR HEROKU
