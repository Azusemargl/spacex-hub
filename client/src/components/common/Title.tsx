import React from 'react';

const Title: React.FC<Props> = ({ children }) => {
   return (
      <h1 className="section_title">{children}</h1>
   );
};

export default Title;

// Types
type Props = {
   children: string
}