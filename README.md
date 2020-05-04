# Car-Dealer-Dashboard

## Getting Started

Install dependencies,

```bash
$ yarn
```

Start the dev server,

```bash
$ yarn start
```

## About the frontend stuff

This project is built from [template](https://github.com/katesroad/ant-design-umi-dva-template). Under the hood, the UI framework is ant design, the frontend routing is umi.js and the model management is using dva.js.

## About the API endpoint

API endpoint document is at https://github.com/minaz-io/obcs-demo/blob/master/REST/car-dealer-test-API.sh.

## About what happens when you test the app

* After clicking on execute you will see an unique identifier of the blockchain transaction as the result.

* Every time a Pull Request is merged after accepted review, the frontend is automatically built from sources shared on GitHub and the build is deployed on Netlify Content Delivery Network (CDN).

* This frontend accept Oracle Cloud Identity credentials to query the Oracle Cloud Blockchain Platform by invocating HyperLedger Fabric chaincode through the REST API provided.

* The frontend receives a response containing the unique identifier of this blockchain transaction and that's what is displayed in the result box.
