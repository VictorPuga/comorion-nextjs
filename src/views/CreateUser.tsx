import React from 'react';
import PaginatedForm from '../components/PaginatedForm';
import { sections, initialUser } from './CreateUserFormConfigs';
import useNested from '../hooks/useNested';
import UserView from '../components/UserView';
// import withAdminProtection from '../hocs/withAdminProtection';
export default // withAdminProtection(
function SignIn(): JSX.Element {
  const [user, flatUser, setUser] = useNested(initialUser);
  return (
    <PaginatedForm
      sections={sections}
      data={flatUser}
      onSubmit={() => alert('OMG YESSS')}
      entity='usuario'
      updateData={setUser}
      viewer={() => <UserView user={user} />}
    />
  );
} //);
