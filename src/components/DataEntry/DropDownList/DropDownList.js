import React from 'react';
import styles from './dropdownlist.module.css';
import globalStyles from '../../../app.module.css';

export const DropDownList = ({
  type,
  name,
  isRequired,
  value,
  onChange,
  onBlur,
  hasError,
  options,
}) => {
  return (
    <div className={styles.container}>
      <div>
        <span className={`${globalStyles.textSmall}`}>{name}</span>
        {isRequired && (
          <span
            className={`${globalStyles.textSmaller} ${styles.requiredText}`}
          >
            Required
          </span>
        )}
      </div>
      <div className={styles.errorContainer}>
        <select
          className={styles.list}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        >
          {options.map((option, index) => {
            return (
              <option key={index} value={option.abbreviation}>
                {option.name}
              </option>
            );
          })}
        </select>
        {hasError && isRequired && (
          <svg
            className={styles.errorImg}
            xmlns='http://www.w3.org/2000/svg'
            height='24'
            viewBox='0 0 24 24'
            width='24'
          >
            <path d='M0 0h24v24H0V0z' fill='none' />
            <path d='M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z' />
          </svg>
        )}
      </div>
    </div>
  );
};
