import Button from "./Button";
import style from "./ErrorModule.module.css";
const ErrorModule = (props) => {

  return (
    <div id="errorParent">
      <div onClick={props.OnConfirm} className={style.backDrop}></div>

      <div className={style.module}>
        <header>
          {props.errorMessage.error}
        </header>
        <section>
          <p>
          {props.errorMessage.message}
          </p>
          <Button onClick={props.OnConfirm}>ok</Button>
        </section>
      </div>
    </div>
  );
};

export default ErrorModule;
