import create from 'zustand';
import {persist} from 'zustand/middleware';
import SessionMMKVStore from '../session/SessionStore';

export const questionStore = create(
  persist(
    (set, get) => ({
      listAnswer: {},
      subject: null,
      completedExam: 0,
      ignoreRate: 0,
      correctRate: 0,
      wrongRate: 0,

      setAns: (questionKey: any, answerKey: any) => {
        const answer = {[questionKey]: {answerKey}};
        const oldData = get().listAnswer;
        const mergeData = {...oldData, ...answer};
        set({
          listAnswer: mergeData,
        });
      },

      getSubject: (subject: string) => {
        set({subject: subject});
      },
      //commonValue
      increaseCompletedExam: () => {
        set(state => ({completedExam: state.completedExam + 1}));
      },

      increaseIgnoreRate: () => {
        set(state => ({ignoreRate: state.ignoreRate + 1}));
      },

      increaseCorrectRate: () => {
        set(state => ({correctRate: state.correctRate + 1}));
      },

      increaseWrongRate: () => {
        set(state => ({wrongRate: state.wrongRate + 1}));
      },

      clearStore: () =>
        set({
          listAnswer: {},
        }),
    }),
    {
      name: 'listAns-store',
      getStorage: () => SessionMMKVStore,
      partialize: (state: any) => ({
        listAns: state.listAnswer,
        subject: state.subject,
        completedExam: state.completedExam,
        ignoreRate: state.ignoreRate,
        correctRate: state.correctRate,
        wrongRate: state.wrongRate,
      }),
    },
  ),
);
