import React from 'react';
import {
    AlertOctagon,
    AlertTriangle,
    CheckCircle,
    Info,
    X,
} from 'react-feather';
import useTimeout from '../../hooks/useTimeout';
import { ToastContext } from '../ToastProvider';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
    notice: Info,
    warning: AlertTriangle,
    success: CheckCircle,
    error: AlertOctagon,
};

function Toast({ id, variant, children }) {
    const { deleteToast } = React.useContext(ToastContext);
    const Icon = ICONS_BY_VARIANT[variant];

    const timeoutCallback = React.useCallback(() => deleteToast(id), [id, deleteToast])
    useTimeout(timeoutCallback, 3000)

    return (
        <div className={`${styles.toast} ${styles[variant]}`}>
            <div className={styles.iconContainer}>
                <VisuallyHidden>{variant} &mdash;</VisuallyHidden>{' '}
                <Icon size={24} />
            </div>
            <p className={styles.content}>
                {children}
            </p>
            <button className={styles.closeButton}
                onClick={() => deleteToast(id)}
                aria-label="Dismiss message"
                aria-live="off">
                <X size={24} />
            </button>
        </div>
    );
}

export default Toast
