# FriendFinder

### First site created that is full stack - uses express and node and deployed live to Heroku

##### Requires and Utilizes the following NPM packages:
1. Express
2. body-parser
3. path

The Friend Finder Application is structured with the following:
- __server.js__ - contains requirements and sets up port listeners.  Also requires api and html routers
- __gitignore__ - ignores node modules when pushing and pulling from Github
- __package__ - All the NPM dependencies are in here

- __app folder__ - Contains 3 sub folders: data, public, and routing

1. _data_ - this contains a friends.js file that has a static array that we export to apiRoutes file

2. _public_ - these are our html pages that the user can navigate to and from on the frontend

3. _routing_ - We have api and html routes - these navigate to different url addresses and contain data that we GET and POST

__The logic behind Friend Finder is it takes the aggregate sum of all the scores the user submits, and takes the absolute value difference from each of the existing surveys that are stored in the data.  The smallest difference is deemed the best match and presented in a modal popup!__
