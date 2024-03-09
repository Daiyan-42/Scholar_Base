import React from 'react';

function Publisher({ name, description, journals, website, address, phone, fax }) {
  return (
    <div style={styles.publisher}>
      <div>
        <h1 style={styles.header}>Publisher: {name}</h1>
        <p style={styles.description}>{description}</p>
      </div>
      <hr style={styles.divider} />
      <div style={styles.journals}>
        <h2 style={styles.subHeader}>Journals</h2>
        <table style={styles.journalTable}>
          <thead>
            <tr style={styles.journalHeader}>
              <th style={styles.journalCell}>Title</th>
              <th style={styles.journalCell}>Date Range</th>
            </tr>
          </thead>
          <tbody>
            {journals.map(journal => (
              <tr key={journal.id} style={styles.journalRow}>
                <td style={styles.journalCell}><a href={journal.url} style={styles.link}>{journal.title}</a></td>
                <td style={styles.journalCell}>{journal.dateRange}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <hr style={styles.divider} />
      <div style={styles.contact}>
        <p><strong>Website:</strong> <a href={website} style={styles.link}>{website}</a></p>
        <p><strong>Address:</strong> {address}</p>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Fax:</strong> {fax}</p>
      </div>
    </div>
  );
}

const styles = {
  publisher: {
    backgroundColor: '#f8f9fa',
    border: '1px solid #dee2e6',
    borderRadius: '5px',
    padding: '20px',
    marginBottom: '20px',
  },
  header: {
    fontSize: '28px',
    color: '#343a40',
    marginBottom: '20px',
  },
  description: {
    marginBottom: '20px',
    color: '#6c757d',
  },
  journals: {
    marginBottom: '20px',
  },
  subHeader: {
    fontSize: '24px',
    marginBottom: '10px',
    color: '#343a40',
  },
  journalTable: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  journalHeader: {
    borderBottom: '1px solid #dee2e6',
    backgroundColor: '#f8f9fa',
  },
  journalRow: {
    borderBottom: '1px solid #dee2e6',
  },
  journalCell: {
    padding: '10px',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
  },
  contact: {
    marginBottom: '10px',
  },
  divider: {
    borderTop: '1px solid #dee2e6',
    margin: '20px 0',
  },
};

export default Publisher;
