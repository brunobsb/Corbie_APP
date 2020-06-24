import React from 'react';
import './Text.css';

const Text = ({ children, styles }) => <p className={styles && styles.join(' ')}>{children}</p>;

export default Text;
