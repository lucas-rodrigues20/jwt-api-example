# Node API With JWT Authorization and Authentication Example

* Run `npm install` to get the dependencies;
* Create and fill a `.env` file in the root directory with this structure:
  ```
    JWT_SECRET=""
    JWT_EXPIRATION=""
  ```
  * **OBS**: `JWT_EXPIRATION` should follow the [zeit/ms](https://github.com/zeit/ms) pattern.
* Run `npm start` to start the server on port 3000. 