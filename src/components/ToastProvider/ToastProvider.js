import React from "react";
import useKeyDown from "../../hooks/useKeyDown";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
    const [toasts, setToasts] = React.useState([]);

    const deleteToast = React.useCallback((id) => {
        setToasts((currentToasts) => {
            return currentToasts.filter(item => item.id !== id)
        })
    }, [])

    const addToast = React.useCallback((message, variant) => {
        const id = crypto.randomUUID();

        setToasts(currentToasts => [
            ...currentToasts,
            {
                id,
                variant,
                message
            }
        ])
    }, [])

    const clearToasts = React.useCallback(() => {
        setToasts([])
    }, [])

    useKeyDown('Escape', clearToasts)

    return (
        <ToastContext.Provider value={{ toasts, deleteToast, addToast, clearToasts }}>
            {children}
        </ToastContext.Provider>
    )
}

export default ToastProvider;
