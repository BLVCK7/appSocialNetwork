import React from "react";
import styles from "./validators.module.css"

export const required = value => {
    if (value) return undefined;
    return (
        <div className={styles.error}>
            Обязательно к заполнению
        </div>

    )}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return (
        <div className={styles.error}>
            Максимальная длина превышает {maxLength} символов
        </div>
    )
    return undefined;
}
