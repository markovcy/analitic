import React, { memo, useMemo, useEffect, useState, useCallback } from 'react';
import { addDays, differenceInSeconds } from 'date-fns';

import * as types from '@upp/chrome/types';
import { FormFields } from '@upp/chrome/molecules';
import { storage, useAxios } from '@upp/chrome/utils';
import { useGetState, useGetAction } from '@upp/chrome/store';
import { FormContainer, formConstants } from '@upp/chrome/modules';
import { Spinner, PlaceholderError, IconsType } from '@upp/chrome/components';

import styles from './CandidateForm.module.scss';

type FormData = {
  action: string;
  blocks: { fields: FormFields.types.Field[] }[];
};

interface Candidate {
  crmUrl: string;
  status: string;
  data: types.Candidate;
}

const ConsistensIcons: Record<string, IconsType> = {
  file: 'cv',
  name: 'user',
  email: 'mail',
  skype: 'skype',
  salary: 'salary',
  linkedin: 'linkedin',
};

export const CandidateForm = memo(() => {
  const form = useGetState<'form'>('form');
  const formActions = useGetAction<'form'>('form');

  const [formAxios, getForm] = useAxios<FormData>(
    {
      method: 'POST',
      url: '/v1/table/candidates/form',
    },
    { manual: true }
  );

  const [candidate, getCandidate] = useAxios<Candidate>(
    {
      method: 'POST',
      url: '/get_candidate_info',
    },
    { manual: true }
  );

  const onGetForm = useCallback(async () => {
    try {
      const { data } = await getForm();

      const fields = data.blocks.reduce((acc, b) => {
        acc.push(
          ...b.fields.map((f) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            if (ConsistensIcons[f.name as typeof ConsistensIcons]) {
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              f.iconName = ConsistensIcons[f.name as typeof ConsistensIcons];
            }

            if (f.type === FormFields.types.TypeField.Select && f.suggestions) {
              f.suggestions = {
                ...f.suggestions,
                url: f.suggestions.url.replace('/api', ''),
              };
            }

            return f;
          })
        );
        return acc;
      }, [] as FormFields.types.Field[]);

      formActions.save({
        candidate: {
          fields,
          action: data.action,
          expirationDate: addDays(new Date(), 1).toISOString(),
        },
      });
      // eslint-disable-next-line no-empty
    } catch {}
  }, [formActions, getForm]);

  const getInitForm = useCallback(async () => {
    try {
      const initForm = await storage.get(formConstants.FORM.id);
      const parsedForm = initForm && JSON.parse(initForm);

      if (parsedForm) {
        formActions.init(parsedForm);
      } else {
        onGetForm();
      }
    } catch (e) {
      onGetForm();
    }
  }, [formActions, onGetForm]);

  const fields: FormFields.types.Field[] = useMemo(() => {
    const data = candidate.data?.data;

    if (data && form.candidate?.fields) {
      return form.candidate?.fields.map((f) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (data[f.name]) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          f.value = data[f.name];
        }

        return f;
      });
    }

    return form.candidate?.fields || [];
  }, [candidate, form.candidate?.fields]);

  useEffect(() => {
    if (!form.candidate) {
      return;
    }

    const expirationDate = form.candidate?.expirationDate;

    if (
      expirationDate &&
      (differenceInSeconds(new Date(), new Date(expirationDate)) > 0 || false)
    ) {
      onGetForm();
    }

    const data = new FormData();
    data.append(
      'url',
      'https://www.linkedin.com/in/alexandr-tretiakov-ba831051/'
    );
    data.append('name', 'Alexandr Tretiakov');

    getCandidate({
      data,
    });

    // setTimeout(() => {
    //   onGetForm();
    // }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.candidate]);

  useEffect(() => {
    if (!form.candidate) {
      getInitForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (formAxios.error) {
    return (
      <PlaceholderError
        title="Get form"
        description={formAxios.error.message}
      />
    );
  }

  if (formAxios.loading) {
    return <Spinner theme={{ circle: styles.spinner }} />;
  }

  return (
    <FormContainer
      data={fields}
      titleSubmitButton="Update"
      loading={candidate.loading}
      action={form.candidate?.action}
      theme={{ form: styles.form }}
    />
  );
});
