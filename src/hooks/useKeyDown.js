import React from 'react';

export default function useKeyDown(key, callback) {
    React.useEffect(() => {
        const keyDownHandler = e => {
            if (e.code !== key) {
                return;
            }

            callback();
        }

        window.addEventListener('keydown', keyDownHandler)

        return () => window.removeEventListener('keydown', keyDownHandler)
    })
}
