import create from 'zustand';
import {persist} from 'zustand/middleware';
import SessionMMKVStore from '../session/SessionStore';

export const subjectStore = create(
  persist(
    set => ({
      completeSubject: 0,
      ignoreSubject: 0,
      correctSubject: 0,
      wrongSubject: 0,
      examData: null,
      //commonValue
      completeSubjectFunc: () => {
        set(state => ({completeSubject: state.completeSubject + 1}));
      },

      ignoreSubjectFunc: () => {
        set(state => ({ignoreSubject: state.ignoreSubject + 1}));
      },

      correctSubjectFunc: () => {
        set(state => ({correctSubject: state.correctSubject + 1}));
      },

      wrongSubjecFunc: () => {
        set(state => ({wrongSubject: state.wrongSubject + 1}));
      },

      setExamData: (data: any) => {
        set({examData: data});
      },

      clearSubjectStore: () => {
        set({
          completeSubject: 0,
          ignoreSubject: 0,
          correctSubject: 0,
          wrongSubject: 0,
        });
      },
    }),
    {
      name: 'subject-store',
      getStorage: () => SessionMMKVStore,
      partialize: (state: any) => ({
        completeSubject: state.completeSubject,
        ignoreSubject: state.ignoreSubject,
        correctSubject: state.correctSubject,
        wrongSubject: state.wrongSubject,
        examData: state.examData,
      }),
    },
  ),
);
