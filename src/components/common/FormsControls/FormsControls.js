import React from "react";
import styles from "./FormsControls.module.css";

const FormControl = ({input, meta, child, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                {props.children}
            </div>
            { hasError && <span>{meta.error}</span> }
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}

export const InputProfile = (props) => {
    const {input, meta, child, ...restProps} = props;
    return (
        <div className={styles.inputProfile}>
            <FormControl {...props}><input {...input} {...restProps} /></FormControl>
        </div>
        )
}

export const InputDialogs = (props) => {
    const {input, meta, child, ...restProps} = props;
    return (
        <div className={styles.inputDialogs}>
            <FormControl {...props}><input {...input} {...restProps} /></FormControl>
        </div>
    )
}
