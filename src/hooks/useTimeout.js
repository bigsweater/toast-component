import React from 'react';

export default function useTimeout(callback, ms) {
    React.useEffect(() => {
        const timer = window.setTimeout(callback, ms)

        return () => window.clearTimeout(timer)
    }, [callback, ms])
}
