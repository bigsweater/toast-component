import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toasts, setToasts }) {
    return (
        <ol className={styles.wrapper}>
            {toasts.map(toast => {
                return (
                    <li className={styles.toastWrapper} key={toast.id}>
                        <Toast toast={toast} allToasts={toasts} setToasts={setToasts} />
                    </li>
                )
            })}
        </ol>
    );
}

export default ToastShelf;
