import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const TermsCondition = () => {
  return (
    <>
        <Header />
        
        <div style={styles.container}>
            <h1 style={styles.header}>Terms & Conditions</h1>
            <p style={styles.effectiveDate}><strong>Effective Date:</strong> [08th August, 2024]</p>
            <p style={styles.paragraph}>Welcome to Voyger Online. These terms and conditions outline the rules and regulations for using our website and services.</p>
            
            <h2 style={styles.subHeader}>1. Introduction</h2>
            <p style={styles.paragraph}>By accessing this website, we assume you accept these terms and conditions. Do not continue to use Voyger Online if you do not agree to all of the terms and conditions stated on this page.</p>
            
            <h2 style={styles.subHeader}>2. Intellectual Property Rights</h2>
            <p style={styles.paragraph}>Unless otherwise stated, we own the intellectual property rights for all material on Voyger Online. All intellectual property rights are reserved.</p>

            <h2 style={styles.subHeader}>3. Use License</h2>
            <p style={styles.paragraph}>You may access this from Voyger Online for your own personal use subject to restrictions set in these terms and conditions.</p>

            <h2 style={styles.subHeader}>4. Limitations of Liability</h2>
            <p style={styles.paragraph}>We are not liable for any damages that may occur to you as a result of your misuse of our website.</p>

            <h2 style={styles.subHeader}>5. User Accounts</h2>
            <p style={styles.paragraph}>You are responsible for maintaining the confidentiality of your account information and for all activities under your account.</p>

            <h2 style={styles.subHeader}>6. Product Descriptions</h2>
            <p style={styles.paragraph}>We strive to provide accurate descriptions of our handmade products. However, we do not guarantee that the descriptions are completely accurate, reliable, or error-free.</p>

            <h2 style={styles.subHeader}>7. Order Acceptance</h2>
            <p style={styles.paragraph}>We reserve the right to refuse or cancel any order at our discretion.</p>

            <h2 style={styles.subHeader}>8. Governing Law</h2>
            <p style={styles.paragraph}>These terms and conditions are governed by and construed in accordance with the laws of India.</p>

            <footer style={styles.footer}>
                <p>© 2024 Voyger Online. All rights reserved.</p>
            </footer>
        </div>

        <Footer />
    </>
  )
}

const styles = {
    container: {
        maxWidth: '800px',
        margin: '20px auto',
        padding: '20px',
        backgroundColor: '#fff',
        color: '#333',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    header: {
        fontSize: '2em',
        marginBottom: '20px',
    },
    effectiveDate: {
        marginBottom: '20px',
    },
    paragraph: {
        marginBottom: '10px',
    },
    subHeader: {
        fontSize: '1.5em',
        marginTop: '30px',
        marginBottom: '10px',
    },
    footer: {
        textAlign: 'center',
        marginTop: '20px',
        fontSize: '0.9em',
        color: '#777',
    }
};

export default TermsCondition