import * as helpers from '@/utils/helpers';
import request from '@/utils/request';
import * as constants from '@/constants';

export const doLogin = async (username: string, password: string) => {
  helpers.storeAuth(username, password);

  // https://github.com/minaz-io/obcs-demo/blob/master/REST/car-dealer-test-API.sh#L116
  const placeholder = {
    channel: constants.DEALER_A_CHANNEL,
    chaincode: constants.CC_NAME,
    method: 'queryVehiclePartByOwner',
    args: ['bra1238', constants.MANU_NAME, constants.DEALER_A_NAME],
    chaincodeVer: constants.CC_VERSION,
  };
  const url = '/bcsgw/rest/v1/transaction/invocation';

  return request.post(url, {
    data: placeholder,
  });
};
