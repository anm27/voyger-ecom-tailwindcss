import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const RefundPolicy = () => {
  return (
    <>
        <Header />
        
        <div style={styles.container}>
            <h1 style={styles.header}>Refund Policy</h1>
            <p style={styles.effectiveDate}><strong>Effective Date:</strong> [08th August, 2024]</p>
            <p style={styles.paragraph}>At Voyger Online, we aim to provide high-quality handmade products. If you are not completely satisfied with your purchase, please review our refund policy.</p>
            
            <h2 style={styles.subHeader}>1. Returns</h2>
            <p style={styles.paragraph}>We accept returns within 7 days of the purchase date, provided the item is unused and in its original packaging.</p>

            <h2 style={styles.subHeader}>2. Refunds</h2>
            <p style={styles.paragraph}>Once we receive your return, we will inspect the item and notify you of the approval or rejection of your refund. If approved, the refund will be processed to your original method of payment in 7-8 days.</p>

            <h2 style={styles.subHeader}>3. Shipping Costs</h2>
            <p style={styles.paragraph}>Shipping costs for returns are non-refundable. You will be responsible for paying for your shipping costs for returning your item.</p>

            <h2 style={styles.subHeader}>4. Exchanges</h2>
            <p style={styles.paragraph}>We only replace items if they are defective or damaged. If you need to exchange it for the same item, contact us at [contact@voyger.com].</p>

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

export default RefundPolicy