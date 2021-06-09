import React, { memo, useEffect } from 'react';
import Create from '@upp/crm/components/Candidate/Create/Form';

import { axios } from '@upp/chrome/utils';
import * as types from '@upp/chrome/types';

import styles from './CandidateForm.module.scss';

interface Platform {
  id: number;
  label: string;
  value: string;
}

interface Seniority {
  id: number;
  label: string;
  value: string;
}

interface createProps {
  platforms: Platform[];
  seniorities: Seniority[];
  onUploadAvatar: () => void;
  onCreateCandidate: () => void;
  defaultSelectedTag: () => void;
}

export const CandidateForm = memo(() => {
  const create = {
    platforms: [
      {
        id: 1,
        label: '1',
        value: '1',
      },
      {
        id: 2,
        label: '2',
        value: '2',
      },
    ],
    seniorities: [
      {
        id: 1,
        label: '1',
        value: '1',
      },
      {
        id: 2,
        label: '2',
        value: '2',
      },
    ],
    onUploadAvatar: () => {
      console.log('onUploadAvatar');
    },
    onCreateCandidate: () => {
      console.log('onCreateCandidate');
    },
    defaultSelectedTag: () => {
      console.log('defaultSelectedTag');
    },
  };

  const userSignIn = () => {
    const user = {
      email: 'natalischuk17@gmail.com',
      password: '1111',
    };
    axios
      .post(`/auth/login`, user)
      .then(function (response) {
        console.log(response);
        // localStorage.setItem(types.USER_LOCAL_STORAGE, );
      })
      .catch(function (error) {
        console.log(error);
      });

    // return fetch(`${URL}/auth/login`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(user),
    // })
    //   .then((response) => {
    //     console.log(response);
    //     if (response.ok) {
    //       return response.json();
    //     }
    //     return `${response.statusText}`;
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     return data;
    //   })
    //   .catch((error) => console.log('[userSignIn error]: ', error));
  };

  return (
    <div className={styles.candidateForm}>
      <Create {...create} />
      <button type="submit" onClick={userSignIn}>
        Authorize
      </button>
    </div>
  );
});
