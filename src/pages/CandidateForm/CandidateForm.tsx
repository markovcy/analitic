import React, { memo, useMemo, useState, useEffect, useCallback } from 'react';
import { addDays, differenceInSeconds, format } from 'date-fns';
import { useLocation } from 'react-router-dom';
import { camelCase } from 'lodash';

import * as types from '@upp/chrome/types';
import { FormFields } from '@upp/chrome/molecules';
import { storage, useAxios } from '@upp/chrome/utils';
import { useGetState, useGetAction } from '@upp/chrome/store';
import { FormContainer, formConstants, FormUtils } from '@upp/chrome/modules';
import {
  Icon,
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
  // eslint-disable-next-line camelcase
  reqruter_id: string | number;
  date: string;
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
  // 'recruter_id',
  // 'date_follow_up',
  'platforms[]',
  'seniority_id',
  'vacancies[]',
  'tag_id',
  'salary',
  'id_languages',
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
  linkedin: FormUtils.GET_PATH_BY_SELECTOR,
  status: '',
  tag_id: '',
  comments:
    '.core-rail .profile-detail .pv-oc.ember-view .artdeco-container-card.pv-profile-section.pv-about-section.ember-view .pv-about__summary-text.mt4.t-14.ember-view',
  date: '',
  recruter_id: '',
  cv: '',
  experience: '',
  education: '',
  id_languages:
    '.ember-view .pv-profile-section__section-info.section-info .pv-contact-info__contact-type.ci-email .pv-contact-info__ci-container.t-14 .pv-contact-info__contact-link.t-14.t-black.t-normal',
  file: '',
  avatar:
    '.pv-top-card__photo-wrapper .presence-entity .presence-entity__image',
  seniority_id: '',
  date_follow_up: '',
  'vacancies[]': '',
  'platforms[]':
    '.ph5.pb5 .display-flex.mt2 .flex-1.mr5  .mt1.t-18.t-black.t-normal.break-words',
};

type OptionsForSelects<T = unknown> = Record<
  string,
  (FormFields.types.Option & T)[]
>;

// TODO: need to optimization on server
const SUFFIX_URL = 'https://www.linkedin.com/in';

const SUFFIX_PATHNAME = '/in/';
const vacanciesSelectsUrl = '/get_recruiter_vacancies';
const returnOptionsForSelectsUrl = '/main/returnOptionsForSelects';

export const CandidateForm = memo(() => {
  const form = useGetState<'form'>('form');
  const formActions = useGetAction<'form'>('form');
  const toggleMenu = useGetAction<'toggleMenu'>('toggleMenu');

  const location = useLocation();

  const [selectedPlatform, setSelectedPlatform] = useState<number[]>([]);

  const [selectAxios] = useAxios<OptionsForSelects>(returnOptionsForSelectsUrl);
  const [vacanciesAxios] = useAxios<OptionsForSelects<{ platformId: number }>>(
    vacanciesSelectsUrl
  );

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

  const onChangeField = useCallback((value, name) => {
    if (name === 'platforms[]') {
      setSelectedPlatform(value);
    }
  }, []);

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
          action: data.action.replace('/api', ''),
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
        ) as FormFields.types.Field[]).map((field) => {
          const f = { ...field };
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          const value = data[f.name] || data[camelCase(f.name)];

          f.value = value;

          if (
            f.type === FormFields.types.TypeField.Select &&
            f.suggestions &&
            f.suggestions?.name &&
            [vacanciesSelectsUrl, returnOptionsForSelectsUrl].includes(
              f.suggestions.url
            )
          ) {
            f.data = selectAxios.data?.[f.suggestions.name] || [];

            if (f.name === 'vacancies[]') {
              f.data = (
                vacanciesAxios.data?.[f.suggestions.name] || []
              ).filter((o) => selectedPlatform?.includes(o.platformId));
            }

            f.suggestions = undefined;
          }

          if (ConsistensSelectors[f.name]) {
            f.selector = f.selector || ConsistensSelectors[f.name];
            // console.log(f.selector);
          }

          return f;
        })) ||
      []
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    aliasCandidate,
    selectedPlatform,
    selectAxios.data,
    vacanciesAxios.data,
    form.candidate?.fields,
    form.candidate?.values,
  ]);

  const recruiter = useMemo(
    () =>
      form.candidate?.values &&
      selectAxios.data?.recruiters.find(
        (r) => r.id === form.candidate?.values?.recruterId
      ),
    [form.candidate?.values, selectAxios.data?.recruiters]
  );

  const dateCreated = useMemo(() => {
    const date = form.candidate?.values?.date;

    if (!date) {
      return undefined;
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return isNaN(Date.parse(date))
      ? undefined
      : format(new Date(date), 'dd MMM yyyy');
  }, [form.candidate?.values?.date]);

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

  if (formAxios.loading || selectAxios.loading || vacanciesAxios.loading) {
    return <Spinner theme={{ circle: styles.spinner }} />;
  }

  if (!aliasCandidate) {
    return <NotFound />;
  }

  const hasCandidate = Boolean(form.candidate?.values);
  const avatar = document.querySelector(
    '.pv-top-card__photo-wrapper .presence-entity .presence-entity__image'
  ) as HTMLImageElement;

  return (
    <div>
      <div className={styles.candidate}>
        {avatar && (
          <div className={styles.avatar}>
            <img src={avatar.src} alt="avatar" />
          </div>
        )}

        {candidate.data?.crmUrl ? (
          <div className={styles.infoField}>
            <div className={styles.linkContainer}>
              <Icon name="check" />
              presented in database
              <a
                target="_blank"
                rel="noreferrer"
                className={styles.link}
                href={candidate.data?.crmUrl}
              >
                Show
              </a>
            </div>
            {recruiter && (
              <div className={styles.text}>
                Reqruiter name: {recruiter.label}
              </div>
            )}

            {dateCreated && (
              <div className={styles.text}> Date modified: {dateCreated}</div>
            )}
          </div>
        ) : (
          <div className={styles.linkContainer}>
            <Icon name="error" theme={{ icon: styles.notCandidateIcon }} />
            Not in database
          </div>
        )}
      </div>

      <FormContainer
        data={fields}
        loading={candidate.loading}
        theme={{ form: styles.form }}
        action={form.candidate?.action}
        disabledSubmitButton={hasCandidate}
        titleSubmitButton={hasCandidate ? 'Update' : 'Create'}
        onChange={onChangeField}
        onSubmit={onGetCandidate}
      />
    </div>
  );
});
