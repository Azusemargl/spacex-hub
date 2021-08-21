import React from 'react';
import { WrappedFieldMetaProps } from 'redux-form/lib/Field'

export const FieldCreator = (Element: any): React.FC<Props> => ({
   input, meta: { touched, error }, ...props
}) => {
   const showError = touched && error;

   return (
      <div className="filed_group">
         <div className={showError ? "field field-error filed-input" : "field filed-input"}>
            <Element
               {...input}
               {...props}
            />
            {showError && <span className="warning_alert">{error}</span>}
         </div>
      </div>
   )
}

// Types
type Props = {
   input: React.ReactChild
   meta: WrappedFieldMetaProps
}