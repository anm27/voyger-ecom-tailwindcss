import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const PrivacyPolicy = () => {
  return (
    <>
        <Header />
        
        <div style={styles.container}>
            <h1 style={styles.header}>Privacy Policy</h1>
            <p style={styles.effectiveDate}><strong>Effective Date:</strong> [08th August, 2024]</p>
            <p style={styles.paragraph}>Voyger Online is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information.</p>
            
            <h2 style={styles.subHeader}>1. Information We Collect</h2>
            <p style={styles.paragraph}>We collect personal information you provide directly to us, such as when you create an account, place an order, or contact us.</p>

            <h2 style={styles.subHeader}>2. How We Use Your Information</h2>
            <p style={styles.paragraph}>We use your information to provide, maintain, and improve our services, process transactions, and communicate with you.</p>

            <h2 style={styles.subHeader}>3. Sharing Your Information</h2>
            <p style={styles.paragraph}>We do not share your personal information with third parties except to comply with the law, develop our products, or protect our rights.</p>

            <h2 style={styles.subHeader}>4. Security</h2>
            <p style={styles.paragraph}>We use administrative, technical, and physical security measures to protect your personal information.</p>

            <h2 style={styles.subHeader}>5. Your Rights</h2>
            <p style={styles.paragraph}>You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at [contact@voyger.com].</p>

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

export default PrivacyPolicy

// Website URL : https://voyger.online
// Privacy Policy Page Page Link:
// https://voyger.online/privacy-policy
// Terms & Conditions Page Link Page:
// https://voyger.online/terms-and-conditions
// Shipping Policy Page Link:
// https://voyger.online/shipping-policy
// Refund Policy Page Link:
// https://voyger.online/refund-policy