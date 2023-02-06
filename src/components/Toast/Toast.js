import React from 'react';
import {
    AlertOctagon,
    AlertTriangle,
    CheckCircle,
    Info,
    X,
} from 'react-feather';
import { ToastContext } from '../ToastProvider';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
    notice: Info,
    warning: AlertTriangle,
    success: CheckCircle,
    error: AlertOctagon,
};

function Toast({ toast }) {
    const { variant, message } = toast
    const { deleteToast } = React.useContext(ToastContext);

    if (!Object.keys(ICONS_BY_VARIANT).find(key => key === variant)) {
        throw new Error(`Unrecognized toast variant: ${variant}`);
    }

    const Icon = ICONS_BY_VARIANT[variant];

    function handleDismiss(e) {
        e.preventDefault();

        deleteToast(toast)
    }

    return (
        <div className={`${styles.toast} ${styles[variant]}`}>
            <div className={styles.iconContainer}>
                <Icon size={24} />
            </div>
            <p className={styles.content}>
                {message}
            </p>
            <button className={styles.closeButton} onClick={handleDismiss}>
                <X size={24} />
                <VisuallyHidden>Dismiss message</VisuallyHidden>
            </button>
        </div>
    );
}

export default Toast;
