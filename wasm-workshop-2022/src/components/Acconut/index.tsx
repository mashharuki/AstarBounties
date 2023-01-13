import './Account.css';

interface AccountProps {
  name: string | null | undefined;
  address: string | null | undefined;
}

/**
 * Account Component
 * @param param0 
 * @returns 
 */
const Account: React.FC<AccountProps> = (props) => {

  const {
    name,
    address
  } = props;

  return (
    <div className="container">
      <strong>Hello, {name}!!</strong>
      <p></p>
      <strong>Your adddress is {address}</strong>
    </div>
  );
};

export default Account;
