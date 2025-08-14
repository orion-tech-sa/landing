import React from 'react';

interface TermsProps {
    isOpen: boolean;
    onClose: () => void;
}

const Terms: React.FC<TermsProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <>
            <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.6), rgba(0, 170, 255, 0.8));
          border-radius: 4px;
          transition: all 0.3s ease;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.8), rgba(0, 170, 255, 1));
          transform: scaleY(1.1);
        }
        .custom-scrollbar::-webkit-scrollbar-corner {
          background: transparent;
        }
      `}</style>
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.9)',
                backdropFilter: 'blur(20px)',
                zIndex: 9999,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem',
                overflowY: 'auto'
            }}>
                <div
                    className="custom-scrollbar"
                    style={{
                        background: 'var(--color-background-secondary)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '20px',
                        maxWidth: '800px',
                        width: '100%',
                        maxHeight: '90vh',
                        overflowY: 'auto',
                        position: 'relative',
                        boxShadow: '0 25px 50px rgba(0, 212, 255, 0.2)',
                        scrollBehavior: 'smooth',
                        scrollbarWidth: 'thin',
                        scrollbarColor: 'rgba(0, 212, 255, 0.5) rgba(255, 255, 255, 0.1)'
                    }}>
                    {/* Header */}
                    <div style={{
                        padding: '2rem 2rem 1rem',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        position: 'sticky',
                        top: 0,
                        background: 'var(--color-background-secondary)',
                        borderRadius: '20px 20px 0 0',
                        zIndex: 10
                    }}>
                        <div>
                            <h1 style={{
                                fontSize: '2rem',
                                fontWeight: '800',
                                color: 'var(--color-text-primary)',
                                marginBottom: '0.5rem',
                                letterSpacing: '-0.02em'
                            }}>
                                Terms and Conditions
                            </h1>
                            <p style={{
                                color: 'var(--color-text-secondary)',
                                fontSize: '0.9rem'
                            }}>
                                Last updated: January 1, 2025
                            </p>
                        </div>
                        <button
                            onClick={onClose}
                            style={{
                                background: 'rgba(255, 255, 255, 0.1)',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                borderRadius: '50%',
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                color: 'var(--color-text-secondary)',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                                e.currentTarget.style.color = 'var(--color-text-primary)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                                e.currentTarget.style.color = 'var(--color-text-secondary)';
                            }}
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                    </div>

                    {/* Content */}
                    <div style={{ padding: '2rem' }}>
                        {/* Introduction */}
                        <section style={{ marginBottom: '3rem' }}>
                            <p style={{
                                color: 'var(--color-text-secondary)',
                                lineHeight: '1.7',
                                fontSize: '1.1rem',
                                marginBottom: '1.5rem'
                            }}>
                                Welcome to Orion Technologies ("we," "our," or "us"). These Terms and Conditions ("Terms") 
                                govern your use of our AI platform and services. By accessing or using our services, you agree 
                                to be bound by these Terms and our Privacy Policy.
                            </p>
                        </section>

                        {/* Service Agreement */}
                        <section style={{ marginBottom: '3rem' }}>
                            <h2 style={{
                                fontSize: '1.5rem',
                                fontWeight: '700',
                                color: 'var(--color-text-primary)',
                                marginBottom: '1.5rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}>
              <span style={{
                  background: 'var(--color-gradient-primary)',
                  borderRadius: '8px',
                  padding: '0.5rem',
                  fontSize: '1rem'
              }}>📋</span>
                                Service Agreement
                            </h2>

                            <div style={{ marginBottom: '2rem' }}>
                                <h3 style={{
                                    fontSize: '1.2rem',
                                    fontWeight: '600',
                                    color: 'var(--color-text-primary)',
                                    marginBottom: '1rem'
                                }}>
                                    Acceptance of Terms
                                </h3>
                                <ul style={{
                                    color: 'var(--color-text-secondary)',
                                    lineHeight: '1.7',
                                    paddingLeft: '1.5rem',
                                    marginBottom: '1.5rem'
                                }}>
                                    <li>By using our AI platform, you accept these Terms in full</li>
                                    <li>You must be at least 18 years old to use our services</li>
                                    <li>You represent that you have authority to bind your organization</li>
                                    <li>These Terms may be updated periodically with notice</li>
                                    <li>Continued use after updates constitutes acceptance</li>
                                </ul>
                            </div>

                            <div style={{ marginBottom: '2rem' }}>
                                <h3 style={{
                                    fontSize: '1.2rem',
                                    fontWeight: '600',
                                    color: 'var(--color-text-primary)',
                                    marginBottom: '1rem'
                                }}>
                                    Account Responsibilities
                                </h3>
                                <ul style={{
                                    color: 'var(--color-text-secondary)',
                                    lineHeight: '1.7',
                                    paddingLeft: '1.5rem'
                                }}>
                                    <li>Maintain secure account credentials and authentication</li>
                                    <li>Provide accurate registration and billing information</li>
                                    <li>Notify us immediately of any unauthorized access</li>
                                    <li>Comply with usage limits and fair use policies</li>
                                    <li>Use services only for lawful business purposes</li>
                                </ul>
                            </div>
                        </section>

                        {/* Service Usage and Restrictions */}
                        <section style={{ marginBottom: '3rem' }}>
                            <h2 style={{
                                fontSize: '1.5rem',
                                fontWeight: '700',
                                color: 'var(--color-text-primary)',
                                marginBottom: '1.5rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}>
              <span style={{
                  background: 'var(--color-gradient-secondary)',
                  borderRadius: '8px',
                  padding: '0.5rem',
                  fontSize: '1rem'
              }}>⚡</span>
                                Service Usage and Restrictions
                            </h2>

                            <ul style={{
                                color: 'var(--color-text-secondary)',
                                lineHeight: '1.7',
                                paddingLeft: '1.5rem'
                            }}>
                                <li>Use our AI platform only for legitimate business purposes</li>
                                <li>Comply with all applicable laws and regulations</li>
                                <li>Do not attempt to reverse engineer or copy our technology</li>
                                <li>Respect intellectual property rights of Orion and third parties</li>
                                <li>Do not use services to generate harmful, illegal, or malicious content</li>
                                <li>Maintain reasonable usage levels as defined in your service plan</li>
                                <li>Do not share account credentials or allow unauthorized access</li>
                                <li>Report security vulnerabilities or suspicious activities promptly</li>
                            </ul>
                        </section>

                        {/* AI and Machine Learning */}
                        <section style={{ marginBottom: '3rem' }}>
                            <h2 style={{
                                fontSize: '1.5rem',
                                fontWeight: '700',
                                color: 'var(--color-text-primary)',
                                marginBottom: '1.5rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}>
              <span style={{
                  background: 'var(--color-gradient-tertiary)',
                  borderRadius: '8px',
                  padding: '0.5rem',
                  fontSize: '1rem'
              }}>🤖</span>
                                AI and Machine Learning
                            </h2>

                            <p style={{
                                color: 'var(--color-text-secondary)',
                                lineHeight: '1.7',
                                marginBottom: '1.5rem'
                            }}>
                                Our AI systems may process your data to provide personalized insights and improve our algorithms.
                                We implement privacy-preserving techniques such as:
                            </p>

                            <ul style={{
                                color: 'var(--color-text-secondary)',
                                lineHeight: '1.7',
                                paddingLeft: '1.5rem'
                            }}>
                                <li>Differential privacy to protect individual data points</li>
                                <li>Federated learning to train models without centralizing sensitive data</li>
                                <li>Data minimization principles in all AI processing workflows</li>
                                <li>Regular algorithmic audits to prevent bias and ensure fairness</li>
                            </ul>
                        </section>

                        {/* Data Sharing */}
                        <section style={{ marginBottom: '3rem' }}>
                            <h2 style={{
                                fontSize: '1.5rem',
                                fontWeight: '700',
                                color: 'var(--color-text-primary)',
                                marginBottom: '1.5rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}>
              <span style={{
                  background: 'var(--color-gradient-primary)',
                  borderRadius: '8px',
                  padding: '0.5rem',
                  fontSize: '1rem'
              }}>🔒</span>
                                Data Sharing and Disclosure
                            </h2>

                            <p style={{
                                color: 'var(--color-text-secondary)',
                                lineHeight: '1.7',
                                marginBottom: '1.5rem'
                            }}>
                                We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
                            </p>

                            <ul style={{
                                color: 'var(--color-text-secondary)',
                                lineHeight: '1.7',
                                paddingLeft: '1.5rem'
                            }}>
                                <li>With your explicit consent</li>
                                <li>To trusted service providers who assist in our operations</li>
                                <li>When required by law or to protect our rights and safety</li>
                                <li>In connection with a business transaction (merger, acquisition, etc.)</li>
                            </ul>
                        </section>

                        {/* Data Security */}
                        <section style={{ marginBottom: '3rem' }}>
                            <h2 style={{
                                fontSize: '1.5rem',
                                fontWeight: '700',
                                color: 'var(--color-text-primary)',
                                marginBottom: '1.5rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}>
              <span style={{
                  background: 'var(--color-gradient-secondary)',
                  borderRadius: '8px',
                  padding: '0.5rem',
                  fontSize: '1rem'
              }}>🛡️</span>
                                Data Security
                            </h2>

                            <p style={{
                                color: 'var(--color-text-secondary)',
                                lineHeight: '1.7'
                            }}>
                                We implement enterprise-grade security measures including end-to-end encryption,
                                multi-factor authentication, regular security audits, and compliance with industry
                                standards such as SOC 2 Type II, ISO 27001, and GDPR requirements.
                            </p>
                        </section>

                        {/* Your Rights */}
                        <section style={{ marginBottom: '3rem' }}>
                            <h2 style={{
                                fontSize: '1.5rem',
                                fontWeight: '700',
                                color: 'var(--color-text-primary)',
                                marginBottom: '1.5rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}>
              <span style={{
                  background: 'var(--color-gradient-tertiary)',
                  borderRadius: '8px',
                  padding: '0.5rem',
                  fontSize: '1rem'
              }}>⚖️</span>
                                Your Privacy Rights
                            </h2>

                            <p style={{
                                color: 'var(--color-text-secondary)',
                                lineHeight: '1.7',
                                marginBottom: '1.5rem'
                            }}>
                                Depending on your location, you may have the following rights:
                            </p>

                            <ul style={{
                                color: 'var(--color-text-secondary)',
                                lineHeight: '1.7',
                                paddingLeft: '1.5rem'
                            }}>
                                <li>Access, update, or delete your personal information</li>
                                <li>Restrict or object to certain data processing activities</li>
                                <li>Data portability and the right to receive your data</li>
                                <li>Withdraw consent for data processing</li>
                                <li>Lodge a complaint with a supervisory authority</li>
                            </ul>
                        </section>

                        {/* Contact Information */}
                        <section style={{
                            background: 'rgba(0, 212, 255, 0.05)',
                            border: '1px solid rgba(0, 212, 255, 0.1)',
                            borderRadius: '12px',
                            padding: '2rem',
                            textAlign: 'center'
                        }}>
                            <h2 style={{
                                fontSize: '1.5rem',
                                fontWeight: '700',
                                color: 'var(--color-text-primary)',
                                marginBottom: '1rem'
                            }}>
                                Questions or Concerns?
                            </h2>
                            <p style={{
                                color: 'var(--color-text-secondary)',
                                lineHeight: '1.7',
                                marginBottom: '1.5rem'
                            }}>
                                If you have any questions about this Privacy Policy or our data practices,
                                please contact our Data Protection Officer:
                            </p>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.5rem',
                                color: 'var(--color-accent)',
                                fontWeight: '600'
                            }}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                    <polyline points="22,6 12,13 2,6"/>
                                </svg>
                                privacy@orion.sa
                            </div>
                        </section>
                    </div>
                </div>

                {/* Background blur overlay */}
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: -1
                    }}
                    onClick={onClose}
                />
            </div>
        </>
    );
};

export default Terms;