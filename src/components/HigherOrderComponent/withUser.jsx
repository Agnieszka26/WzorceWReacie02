import { useContext } from 'react';
import { ContextUserDetails } from '../Context/ContextUserDetails';
const withUser = (WrappedComponent ) => {
  const WithUser = () => {
    const context = useContext(ContextUserDetails);
    const { userDetails } = context;
    const { name, email, isAdmin } = userDetails;
    return <WrappedComponent name={name} email={email} isAdmin={isAdmin} />;
  };

  return WithUser;
};
export default withUser;

