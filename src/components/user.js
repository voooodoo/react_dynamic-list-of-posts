import React from 'react';

const User = props => {
  const { name, email, address } = props.user;
  const { suite, street, city } = address;

  return (
    <span>
      {name} {email} {suite} {street} {city}
    </span>
  );
};

export default User;
