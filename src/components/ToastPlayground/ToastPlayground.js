import React from 'react';

import Button from '../Button';
import Radio from '../Radio';
import Toast from '../Toast';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
    const [selectedVariant, setSelectedVariant] = React.useState(VARIANT_OPTIONS[0]);
    const [message, setMessage] = React.useState('');
    const [showToast, setShowToast] = React.useState(false);

    return (
        <div className={styles.wrapper}>
            <header>
                <img alt="Cute toast mascot" src="/toast.png" />
                <h1>Toast Playground</h1>
            </header>

            <Toast variant={selectedVariant} show={showToast} setShowToast={setShowToast}>{message}</Toast>

            <form className={styles.controlsWrapper} onSubmit={(e) => {
                e.preventDefault(); setShowToast(true)}
            }>
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
