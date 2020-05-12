import { Effect, Reducer } from 'umi';
import { notification } from 'antd';
import descriptions from '@/constants/create.descriptions';
import * as tx from '@/services/transaction';

interface StepDesc {
  title: string;
  options: string[];
}

export interface CreatingState {
  currentStep: number;
  stepData: any;
  currentStepDesc: StepDesc;
}

export interface CreatingModelType {
  namespace: string;
  state: CreatingState;
  reducers: {
    setStep: Reducer<CreatingState>;
    setStepData: Reducer<CreatingState>;
  };
  effects: {
    createPart: Effect;
    getSavedStep: Effect;
    saveStep: Effect;
  };
}

const START_STEP = 3;
const ALL_STEPS = descriptions.length - 1;

const CreatingModel: CreatingModelType = {
  namespace: 'dealerSam',
  state: {
    currentStep: START_STEP,
    stepData: null,
    currentStepDesc: descriptions[START_STEP],
  },
  reducers: {
    setStep(state: CreatingModelType, action: any) {
      if (action.payload.step > ALL_STEPS || action.payload.step < 0) {
        return { ...state };
      }
      return {
        stepData: null,
        currentStep: action.payload.step,
        currentStepDesc: descriptions[action.payload.step],
      };
    },
    setStepData(state: CreatingModelType, action: any) {
      return {
        ...state,
        stepData: action.payload.stepData,
      };
    },
  },
  // https://dvajs.com/guide/introduce-class.html
  effects: {
    *createPart(action: any, { put, call }: any) {
      const data: any = yield call(tx.createVehiclesPart, action.payload);
      if (data.returnCode == 'Success') {
        notification.info({
          message: 'Success',
          description: 'Created a part for dealer Sam',
        });
      }
      if (data.returnCode == 'Failure') {
        notification.error({
          message: data.info.proxyError || 'Failure',
          description: data.info.peerErrors[0].errMsg,
        });
      }
      yield put({
        type: 'setStepData',
        payload: {
          stepData: data,
        },
      });
    },
    *getSavedStep(action: any, { put }: any) {
      const savedStep = sessionStorage.getItem('sam:step') || START_STEP;
      yield put({
        type: 'setStep',
        payload: {
          step: savedStep,
        },
      });
    },
    *saveStep(action: any, { put }: any) {
      sessionStorage.setItem('sam:step', action.payload.step);
    },
  },
};

export default CreatingModel;
