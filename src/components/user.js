import React from 'react';

const User = props => {
  const {
    name,
    email,
    address: { suite, street, city },
  } = props.user;

  return (
    <span>
      {name} {email} {suite} {street} {city}
    </span>
  );
};

export default User;
