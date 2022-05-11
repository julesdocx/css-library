# Temporary  project setup
```
.
├──/api                     # node.js app
│   ├──/lib 
│   │   └── ...             # /api/css/v0 (serving all css styles)
│   └── index.js            # serving frontend and all routes
│
├──/css/index.css           # compiled css library
│
├──/documentation           # React app as frontend documentation
│   ├──/src                 # ge kent da wel, een react app
│   │   └──...
│   └──...
│
├──/lib                     # SCSS styles
│   ├──/components          # specific components
│   └──...                  # global styles and utility classes
│
├──index.html               # simple list of all style classes in use
└──gulpfile.js              # compiling all scss files into css/index.html
```

## SCSS development run :
```
npm gulp
```

## React development run :
```
cd documentation
npm start
```
Local Node js or Heroku development:
```
npm run node
```
or
```
heroku local web
```