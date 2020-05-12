import request from '@/utils/request';
import * as constants from '@/constants';

const url = '/bcsgw/rest/v1/transaction/invocation';

// creating vehicle parts for dealer
export function createVehiclesPart(params: any) {
  return request.post(url, {
    data: {
      method: 'initVehiclePart',
      ...params,
      chaincode: constants.CC_NAME,
      channel: constants.DEALER_A_CHANNEL,
      chaincodeVer: constants.CC_VERSION,
    },
  });
}

// querying created vehicle parts by owner
export function queryCreatedVehiclesPart(dealer: string) {
  return request.post(url, {
    data: {
      method: 'queryVehiclePartByOwner',
      args: [dealer],
      chaincode: constants.CC_NAME,
      channel: constants.DEALER_A_CHANNEL,
      chaincodeVer: constants.CC_VERSION,
    },
  });
}
