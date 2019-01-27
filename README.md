# CV 2019

Haeseong han's CV made in 2019

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
