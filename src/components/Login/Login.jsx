import React from "react";
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {required} from "../../utilities/validators/validators";
import {createField, Input} from "../common/FormsControls/FormsControls";
import s from "./../common/FormsControls/FormsControls.module.css"

const LoginForm = (props) => {

    return (
        <div>
            <form onSubmit={props.handleSubmit} autocomplete="off">
                    {createField("Email", "email", [required], Input)}
                    {createField("Password", "password", [required], Input, {type: "password"})}
                    {createField(null, "rememberMe", [], Input, {type: "checkbox"}, "Remember me")}

                { props.captchaUrl && <img src={props.captchaUrl} alt="" /> }
                { props.captchaUrl && createField("Введите символы с картинки", "captcha", [required], Input, {})}

                { props.error && <div className={s.formSummaryError}>
                    {props.error}
                </div> }
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
}

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect (mapStateToProps, {login} ) (Login);