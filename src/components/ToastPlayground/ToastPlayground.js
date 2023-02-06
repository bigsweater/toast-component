import React from 'react';

import Button from '../Button';
import Radio from '../Radio';
import ToastShelf from '../ToastShelf';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
    const [selectedVariant, setSelectedVariant] = React.useState(VARIANT_OPTIONS[0]);
    const [message, setMessage] = React.useState('');
    const [toasts, setToasts] = React.useState([]);


    function handleSubmit(e) {
        e.preventDefault();

        const nextToasts = [...toasts];
        nextToasts.push({ variant: selectedVariant,
            message: message,
            id: crypto.randomUUID(),
        });

        setMessage('')
        setSelectedVariant(VARIANT_OPTIONS[0])

        setToasts(nextToasts);
    }

    return (
        <div className={styles.wrapper}>
            <header>
                <img alt="Cute toast mascot" src="/toast.png" />
                <h1>Toast Playground</h1>
            </header>

            <ToastShelf toasts={toasts} setToasts={setToasts} />

            <form className={styles.controlsWrapper} onSubmit={handleSubmit}>
                <div className={styles.row}>
                    <label
                        htmlFor="message"
                        className={styles.label}
                        style={{ alignSelf: 'baseline' }}
                    >
                        Message
                    </label>
                    <div className={styles.inputWrapper}>
                        <textarea id="message" className={styles.messageInput} value={message} onChange={(e) => setMessage(e.target.value)} />
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.label}>Variant</div>
                    <div
                        className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                    >
                        {VARIANT_OPTIONS.map((variant, index) => (
                            <Radio
                                key={index}
                                id={`variant-${variant}`}
                                name={'variant'}
                                value={variant}
                                checked={variant === selectedVariant}
                                onChange={(event) => setSelectedVariant(event.target.value)}
                            >
                                {variant}
                            </Radio>
                        )
                        )}

                        {/* TODO Other Variant radio buttons here */}
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.label} />
                    <div
                        className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                    >
                        <Button>Pop Toast!</Button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ToastPlayground;
