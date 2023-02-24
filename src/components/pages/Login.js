import Form from '../Form';
import Illustration from '../Illustration';
import classes from '../../styles/Login.module.css';
import Textinput from '../Textinput';
import Button from '../Button';
import {Link} from 'react-router-dom';
// import LoginForm from "../LoginForm";

export default function Login() {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration />
        <Form className={classes.login}>
            <Textinput type="text" placeholder="Enter email" icon="alternate_email"/>
            <Textinput type="password" placeholder="Enter password" icon="lock"/>
            <Button><span>Submit Now</span></Button>
            <div className="info">
                Don't have an account? <Link to="/signup">Signup</Link> instead.
            </div>
        </Form>
      </div>
    </>
  );
}