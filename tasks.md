# Taks


- 1
```bash
#!/bin/bash

##Default setting
MANU_NAME="mazida"
DEALER_A_NAME="wheel"
DEALER_B_NAME="light"
DEALER_A_CHANNEL="default"
DEALER_B_CHANNEL="default"
CC_NAME="obcs-cardealer"
CC_VERSION="v0"
REST_ADDR="https://CB8FB876BD0841CF8622F8A8710CC790.blockchain.ocp.oraclecloud.com:443/restproxy1"
USER="test"
PASSWORD="galabGALAB2020"

RESPONSE=$(curl -H "Content-type:application/json" -X POST -u $USER:$PASSWORD \
-d '{"channel":"'"$DEALER_A_CHANNEL"'","chaincode":"'"$CC_NAME"'","method":"queryVehiclePartByOwner","args":["'"$DEALER_A_NAME"'"],"chaincodeVer":"'"$CC_VERSION"'"}' \
$REST_ADDR/bcsgw/rest/v1/transaction/invocation);
echo $RESPONSE
```
