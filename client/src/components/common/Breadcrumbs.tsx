import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Breadcrumbs: React.FC<Props> = ({ items }) => {
   return (
      <div className="breadcrumbs">
         {items.map(item => {
            return (
               <Fragment key={item.id}>
                  <Link to={item.path ? item.path : ''}>{item.name}</Link>
                  <span>&#62;</span>
               </Fragment>
            )
         })}
      </div>
   );
};

export default Breadcrumbs;

// Types
type Props = {
   items: Array<{ path: string | null, id: number, name: string }>
}