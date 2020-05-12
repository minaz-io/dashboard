# Car-Dealer-Dashboard

## About project

This is a chaincode sample project(Car Dealership Samples) for Oracle Blockchain Platform. The purposes of this project are
- to demostrate how the traceability works, 
- to help engineers to understand the fundamental terminology of Oracle Blockchain Platform,
- and how chaincode invoke and query works.


## How to start the project

This is a frontend work build with `dva.js`, `umi.js` and `ant.design` UI framework. You can find a template at [here]((https://github.com/katesroad/ant-design-umi-dva-template)).

To playaround, you need to install the project dependencies by

```bash
$ yarn install
```

Start the dev server, by 

```bash
$ yarn start
```

Build project for production.

```
$ yarn build
```

## About chaincode and API endpoints

- API endpoints: https://github.com/minaz-io/obcs-demo/blob/master/REST/car-dealer-test-API.sh.
- Chaincode in Node.js: https://github.com/minaz-io/obcs-demo/tree/master/node

## About what happens when you test the app

* After clicking on execute you will see an unique identifier of the blockchain transaction as the result.

* Every time a Pull Request is merged after accepted review, the frontend is automatically built from sources shared on GitHub and the build is deployed on Netlify Content Delivery Network (CDN).

* This frontend accept Oracle Cloud Identity credentials to query the Oracle Cloud Blockchain Platform by invocating HyperLedger Fabric chaincode through the REST API provided.

* The frontend receives a response containing the unique identifier of this blockchain transaction and that's what is displayed in the result box.
