import React from 'react';

const Message = props => {
  return (
    <div className='ui card'>
        <div className='content'>
        <h2>
         {props.header}
      </h2>

      <div>
         {props.headerBody}
      </div>

        </div>

    </div>
  );
}

export default Message;
