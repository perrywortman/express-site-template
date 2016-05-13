# Setup
```
# make sure you have some popular node tools installed
npm install -g nodemon
npm install -g node-inspector

# have nodemon run the app in one terminal tab
# nodemon will watch for file changes in the express app
# and restart the server
nodemon --debug src/app.js

# run the debugger in another terminal
# node-inspector will break the application when a break point
# or `debugger` statement is reached in the JavaScript
node-inspector
```
