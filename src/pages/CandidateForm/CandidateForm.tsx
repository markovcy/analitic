import React, { memo, useMemo, useEffect, useCallback } from 'react';
import { addDays, differenceInSeconds } from 'date-fns';
import { useLocation } from 'react-router-dom';
import { camelCase } from 'lodash';

import * as types from '@upp/chrome/types';
import { FormFields } from '@upp/chrome/molecules';
import { storage, useAxios } from '@upp/chrome/utils';
import { useGetState, useGetAction } from '@upp/chrome/store';
import { FormContainer, formConstants } from '@upp/chrome/modules';
import {
  Spinner,
  NotFound,
  IconsType,
  PlaceholderError,
} from '@upp/chrome/components';

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

const OrderFields = [
  'avatar',
  'name',
  'platforms[]',
  'seniority_id',
  'vacancies[]',
  'tag_id',
  'salary',
  'language',
  'phone',
  'skype',
  'email',
  'linkedin',
  'cv',
  'comments',
];

const ConsistensSelectors: Record<string, string> = {
  name: 'h1',
  salary: '',
  email:
    '.ember-view .pv-profile-section__section-info.section-info .pv-contact-info__contact-type.ci-email .pv-contact-info__ci-container.t-14 .pv-contact-info__contact-link.link-without-visited-state.t-14',
  phone:
    '.pv-profile-section__section-info.section-info .pv-contact-info__contact-type.ci-phone .list-style-none .pv-contact-info__ci-container.t-14 .t-14.t-black.t-normal',
  skype:
    '.pv-profile-section__section-info.section-info .pv-contact-info__contact-type.ci-ims .list-style-none .pv-contact-info__ci-container.t-14 .pv-contact-info__contact-item.t-14.t-black.t-normal',
  link: '',
  linkedin: '',
  status: '',
  tag_id: '',
  comments:
    '.core-rail .profile-detail .pv-oc.ember-view .artdeco-container-card.pv-profile-section.pv-about-section.ember-view .pv-about__summary-text.mt4.t-14.ember-view',
  date: '',
  recruter_id: '',
  cv: '',
  experience: '',
  education: '',
  language:
    '.ember-view .pv-profile-section__section-info.section-info .pv-contact-info__contact-type.ci-email .pv-contact-info__ci-container.t-14 .pv-contact-info__contact-link.t-14.t-black.t-normal',
  file: '',
  avatar:
    '.display-flex .pv-top-card--photo.text-align-left .pv-top-card__photo-wrapper.ml0 .presence-entity.pv-top-card__image.presence-entity--size-9.ember-view .pv-top-card__photo.presence-entity__image.EntityPhoto-circle-9.lazy-image.ember-view',
  seniority_id: '',
  date_follow_up: '',
  'vacancies[]': '',
  'platforms[]':
    '.ph5.pb5 .display-flex.mt2 .flex-1.mr5  .mt1.t-18.t-black.t-normal.break-words',
};

// TODO: need to optimization on server
const SUFFIX_URL = 'https://www.linkedin.com/in';

const SUFFIX_PATHNAME = '/in/';

export const CandidateForm = memo(() => {
  const form = useGetState<'form'>('form');
  const formActions = useGetAction<'form'>('form');
  const toggleMenu = useGetAction<'toggleMenu'>('toggleMenu');

  const location = useLocation();

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

      if (parsedForm?.candidate) {
        formActions.init(parsedForm);
      } else {
        onGetForm();
      }
    } catch (e) {
      onGetForm();
    }
  }, [formActions, onGetForm]);

  const aliasCandidate = useMemo(() => {
    const macthes =
      location.pathname.startsWith(SUFFIX_PATHNAME) &&
      location.pathname.match(/\/([^/]+)\/?$/);

    if (macthes && macthes?.length === 2) {
      return macthes[0];
    }

    // Cannot update a component while rendering a different component
    setTimeout(() => {
      toggleMenu(false);
    }, 300);
    return undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const onGetCandidate = useCallback(async () => {
    formActions.update({
      key: 'candidate',
      values: undefined,
    });

    if (!aliasCandidate) {
      return;
    }

    const data = new FormData();
    data.append('url', `${SUFFIX_URL}${aliasCandidate}`);

    try {
      const response = await getCandidate({
        data,
      });

      if (response.status !== 204) {
        formActions.update({
          key: 'candidate',
          values: { ...response.data.data },
        });
      }

      // eslint-disable-next-line no-empty
    } catch {}
  }, [formActions, aliasCandidate, getCandidate]);

  const fields: FormFields.types.Field[] = useMemo(() => {
    const data = form.candidate?.values || {};
    const fieldsForm = form.candidate?.fields;

    return (
      (fieldsForm &&
        (OrderFields.map((n) => fieldsForm.find((f) => f.name === n)).filter(
          Boolean
        ) as FormFields.types.Field[]).map((f) => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          const value = data[f.name] || data[camelCase(f.name)];

          f.value = value;

          if (ConsistensSelectors[f.name]) {
            f.selector = f.selector || ConsistensSelectors[f.name];
          }

          return f;
        })) ||
      []
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.candidate?.fields, form.candidate?.values, aliasCandidate]);

  useEffect(() => {
    onGetCandidate();

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [aliasCandidate]);

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

  if (!aliasCandidate) {
    return <NotFound />;
  }

  return (
    <div>
      {candidate.data?.crmUrl && (
        <a
          target="_blank"
          rel="noreferrer"
          className={styles.link}
          href={candidate.data?.crmUrl}
        >
          Open {candidate.data?.data.name}
        </a>
      )}

      <FormContainer
        data={fields}
        loading={candidate.loading}
        theme={{ form: styles.form }}
        action={form.candidate?.action}
        titleSubmitButton={
          form.candidate?.values
            ? 'Update (do not work)'
            : 'Create (do not work)'
        }
      />
    </div>
  );
});
