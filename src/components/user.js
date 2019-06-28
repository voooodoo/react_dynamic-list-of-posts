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

User.defaultProps = {
  user: {
    address: {
      suit: null,
      street: null,
      city: null,
    },
    name: null,
    email: null,
  },
};
