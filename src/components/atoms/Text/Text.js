import React from 'react';

const Text = ({ children, styles }) => <p className={styles && styles.join(' ')}>{children}</p>;

export default Text;
