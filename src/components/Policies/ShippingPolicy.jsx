import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const ShippingPolicy = () => {
  return (
    <>
        <Header />
        
        <div style={styles.container}>
            <h1 style={styles.header}>Shipping Policy</h1>
            <p style={styles.effectiveDate}><strong>Effective Date:</strong> [08th August, 2024]</p>
            <p style={styles.paragraph}>At Voyger Online, we are committed to delivering your order in a timely and efficient manner.</p>
            
            <h2 style={styles.subHeader}>1. Shipping Locations</h2>
            <p style={styles.paragraph}>We ship products within India. Please note that we do not ship to P.O. Boxes.</p>

            <h2 style={styles.subHeader}>2. Processing Time</h2>
            <p style={styles.paragraph}>Orders are processed within maximum 7 business days. Custom orders may require additional time.</p>

            <h2 style={styles.subHeader}>3. Shipping Rates</h2>
            <p style={styles.paragraph}>Shipping charges are calculated based on the weight of the package and the destination. You will be informed of the shipping cost during checkout.</p>

            <h2 style={styles.subHeader}>4. Delivery Time</h2>
            <p style={styles.paragraph}>Delivery times may vary depending on the destination. Please allow 7 business days for delivery.</p>

            <h2 style={styles.subHeader}>5. Tracking</h2>
            <p style={styles.paragraph}>Once your order is shipped, you will receive a tracking number to monitor the status of your shipment.</p>

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

export default ShippingPolicy