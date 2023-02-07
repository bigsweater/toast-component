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

function Toast({ toast, duration = 3000}) {
    const { variant, message, id } = toast;
    const [show, setShow] = React.useState(true);
    const clearAllTimerRef = React.useRef(1)
    const { deleteToast, clearToasts } = React.useContext(ToastContext);

    if (!Object.keys(ICONS_BY_VARIANT).find(key => key === variant)) {
        throw new Error(`Unrecognized toast variant: ${variant}`);
    }

    const Icon = ICONS_BY_VARIANT[variant];

    const hideToast = React.useCallback(() => setShow(false), [])

    React.useEffect(() => {
        clearAllTimerRef.current > 1 && window.clearTimeout(clearAllTimerRef.current)
        clearAllTimerRef.current = window.setTimeout(clearToasts, duration * 2)

        return () => window.clearTimeout(clearAllTimerRef.current)
    })

    React.useEffect(() => {
        const timer = window.setTimeout(hideToast, duration)

        return () => window.clearTimeout(timer)
    }, [hideToast, duration])

    function handleDismiss(e) {
        e.preventDefault();

        deleteToast(id)
    }

    return (
        <div className={`${styles.toast} ${styles[variant]} ${show || styles.hide}`}>
            <div className={styles.iconContainer}>
                <VisuallyHidden>{variant} &mdash;</VisuallyHidden>{' '}
                <Icon size={24} />
            </div>
            <h2>{show ? 'show' : 'hide'}</h2>
            <p className={styles.content}>
                {message}
            </p>
            <button className={styles.closeButton} onClick={handleDismiss}
                aria-label="Dismiss message"
                aria-live="off">
                <X size={24} />
            </button>
        </div>
    );
}

export default React.memo(Toast);
