# NodeJS Mysql Key Value Store
 A mysql based key value store with a HTTP API we can query that from. The API would:
1. Accept a key(string) and value(some json blob/string) {"key" : "value"} and store them. If an              existing key is sent, the value should be updated
2. Accept a key and return the corresponding latest value
3. When given a key AND a timestamp, return whatever the value of the key at the time was.

## Build and Deploy instructions
* Clone/Download this git repository
* Modify configs for each environment setting under ```./config``` folder
* Modify .env file for node environment
* Run ``` npm install ``` in the cloned directory
* Install [forever package](https://www.npmjs.com/package/forever) and run ```forever start ./bin/www```
    * For development purpose you may use ```npm start```
* Unit test by setting node env variable to test under .env file and execute below command
    * ``` npm install -g mocha ``` (One time global install)
    * ``` npm test ```
* Refer attached **key-value-store.postman_collection.json** for native tests