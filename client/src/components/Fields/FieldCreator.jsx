import React from 'react';

export const FieldCreator = Element => ({ input, meta: {touched, error}, placeholder, ...props }) => {
   const showError = touched && error;

   return (
      <div className="filed_group">
         <Element
            className={showError ? "field field-error filed-input" : "field filed-input"}
            {...input}
            {...props}
            placeholder={placeholder} />
         {showError && <span className="warning_alert">{error}</span>}
      </div>
   )
}