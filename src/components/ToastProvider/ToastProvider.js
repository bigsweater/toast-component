import React from "react";
import useKeyDown from "../../hooks/useKeyDown";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
    const [toasts, setToasts] = React.useState([]);

    const addToast = React.useCallback((toast) => {
        const nextToasts = [...toasts]
        nextToasts.push(toast)

        setToasts(nextToasts)
    }, [toasts])

    const deleteToast = React.useCallback((toast) => {
        setToasts(toasts.filter(item => item.id !== toast.id))
    }, [toasts])

    useKeyDown('Escape', () => setToasts([]))

    const value = React.useMemo(() => ({
        toasts, addToast, deleteToast
    }), [toasts, addToast, deleteToast])

    return (
        <ToastContext.Provider value={value}>
            {children}
        </ToastContext.Provider>
    )
}

export default ToastProvider;
