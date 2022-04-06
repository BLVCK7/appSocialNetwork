import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {required} from "../../utilities/validators/validators";
import {Input} from "../common/FormsControls/FormsControls";
import s from "./../common/FormsControls/FormsControls.module.css"

const LoginForm = (props) => {

    return (
        <div>
            <form onSubmit={props.handleSubmit} autocomplete="off">
                <div>
                    <Field placeholder={"Email"} name={"email"} component={Input}
                           validate={[required]}/>
                </div>
                <div>
                    <Field placeholder={"Password"} name={"password"} type={"password"} component={Input}
                           validate={[required]}/>
                </div>
                <div>
                    <Field component={"input"} name={"rememberMe"} type={"checkbox"}/>Remember me
                </div>
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
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect (mapStateToProps, {login} ) (Login);