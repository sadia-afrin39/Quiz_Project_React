import classes from '../styles/Textinput.module.css';
const Textinput = ({icon,...rest}) => {
    return ( 
      <div className={classes.textInput}>
        <input {...rest} />
        <span className="material-icons-outlined"> {icon} </span>
      </div>
     );
}
 
export default Textinput;