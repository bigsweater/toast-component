import React from 'react';

import Toast from '../Toast';
import { ToastContext } from '../ToastProvider';
import styles from './ToastShelf.module.css';

function ToastShelf() {
    const {toasts} = React.useContext(ToastContext);

    return (
        <ol className={styles.wrapper}
            role="region"
            aria-live="assertive"
            aria-label="Notification"
        >
            {toasts.map(toast => {
                return (
                    <li className={styles.toastWrapper} key={toast.id}>
                        <Toast toast={toast} />
                    </li>
                )
            })}
        </ol>
    );
}

export default React.memo(ToastShelf);
