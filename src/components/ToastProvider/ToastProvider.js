import React from "react";
import useKeyDown from "../../hooks/useKeyDown";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
    const [toasts, setToasts] = React.useState([]);

    const deleteToast = React.useCallback((id) => {
        setToasts(toasts.filter(item => item.id !== id))
    }, [toasts])

    const addToast = React.useCallback((toast) => {
        setToasts([...toasts, toast])
    }, [toasts])

    const clearToasts = React.useCallback(() => {
        setToasts([])
    }, []);

    useKeyDown('Escape', clearToasts)

    const value = React.useMemo(() => ({
        toasts, addToast, deleteToast, clearToasts
    }), [toasts, addToast, deleteToast, clearToasts])

    return (
        <ToastContext.Provider value={value}>
            {children}
        </ToastContext.Provider>
    )
}

export default ToastProvider;
