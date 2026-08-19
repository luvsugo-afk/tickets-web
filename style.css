:root {
    --bg: #faf9f7;
    --surface: #ffffff;
    --sidebar: #2d4a3e;
    --sidebar-text: #e8e6e3;
    --text: #1a1a1a;
    --text-muted: #6b6b6b;
    --accent: #4a7c59;
    --accent-hover: #3d6548;
    --border: #e5e5e5;
    --shadow: rgba(0,0,0,0.08);
    --font-serif: 'DM Serif Display', serif;
    --font-sans: 'Inter', sans-serif;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: var(--font-sans);
    background: var(--bg);
    color: var(--text);
    line-height: 1.6;
    font-size: 15px;
}

.page {
    display: flex;
    min-height: 100vh;
}

/* Sidebar */
.sidebar {
    width: 260px;
    background: var(--sidebar);
    color: var(--sidebar-text);
    padding: 40px 30px;
    position: fixed;
    height: 100vh;
}

.brand {
    font-family: var(--font-serif);
    font-size: 28px;
    margin-bottom: 60px;
    letter-spacing: -0.5px;
}

.nav {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.nav-item {
    color: var(--sidebar-text);
    text-decoration: none;
    padding: 12px 16px;
    border-radius: 6px;
    opacity: 0.7;
    transition: all 0.2s;
}

.nav-item:hover,
.nav-item.active {
    opacity: 1;
    background: rgba(255,255,255,0.1);
}

/* Main Content */
.main {
    flex: 1;
    margin-left: 260px;
    padding: 60px;
    max-width: 800px;
}

.header {
    margin-bottom: 48px;
    padding-bottom: 24px;
    border-bottom: 1px solid var(--border);
}

.header h1 {
    font-family: var(--font-serif);
    font-size: 42px;
    font-weight: 400;
    margin-bottom: 8px;
    letter-spacing: -0.5px;
}

.subtitle {
    color: var(--text-muted);
    font-size: 16px;
}

/* Form */
.form-section {
    margin-bottom: 48px;
}

.form-section h2 {
    font-family: var(--font-serif);
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 24px;
    color: var(--accent);
}

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
}

.field {
    margin-bottom: 24px;
}

label {
    display: block;
    font-weight: 500;
    margin-bottom: 8px;
    font-size: 14px;
    color: var(--text);
}

.required {
    color: #c45c4a;
}

input, select, textarea {
    width: 100%;
    padding: 14px 16px;
    border: 1px solid var(--border);
    border-radius: 4px;
    font-family: var(--font-sans);
    font-size: 15px;
    background: var(--surface);
    transition: all 0.2s;
}

input:focus, select:focus, textarea:focus {
    outline: none;
    border-color: var(--accent);
}

textarea {
    resize: vertical;
    min-height: 120px;
}

select {
    cursor: pointer;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%236b6b6b' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 16px center;
    padding-right: 40px;
}

/* Summary Card */
.summary-card {
    background: #f5f4f2;
    border-left: 4px solid var(--accent);
    padding: 28px;
    margin: 40px 0;
}

.summary-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
}

.summary-title {
    font-weight: 600;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: var(--text-muted);
}

.badge {
    padding: 6px 14px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border-radius: 4px;
    background: #e8e6e3;
    color: var(--text);
}

.badge.critica { background: #c45c4a; color: white; }
.badge.alta { background: #c4a13d; color: white; }
.badge.media { background: var(--accent); color: white; }
.badge.baja { background: #8b8b8b; color: white; }

.summary-problem {
    font-size: 18px;
    margin-bottom: 12px;
}

.summary-note {
    font-size: 14px;
    color: var(--text-muted);
}

/* Buttons */
.actions {
    margin-top: 40px;
}

.btn-primary {
    background: var(--accent);
    color: white;
    border: none;
    padding: 16px 40px;
    font-family: var(--font-sans);
    font-size: 15px;
    font-weight: 600;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s;
}

.btn-primary:hover:not(:disabled) {
    background: var(--accent-hover);
}

.btn-primary:disabled {
    background: #ccc;
    cursor: not-allowed;
}

.btn-secondary {
    background: transparent;
    color: var(--accent);
    border: 1px solid var(--accent);
    padding: 14px 32px;
    font-family: var(--font-sans);
    font-size: 15px;
    cursor: pointer;
    border-radius: 4px;
    margin-top: 24px;
}

.btn-secondary:hover {
    background: var(--accent);
    color: white;
}

/* Success */
.success-message {
    text-align: center;
    padding: 60px 40px;
    background: var(--surface);
    border: 1px solid var(--border);
}

.success-icon {
    width: 64px;
    height: 64px;
    background: var(--accent);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    margin: 0 auto 24px;
}

.success-message h2 {
    font-family: var(--font-serif);
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 8px;
}

.success-message > p {
    color: var(--text-muted);
    margin-bottom: 32px;
}

.ticket-details {
    background: var(--bg);
    padding: 24px;
    margin-bottom: 32px;
    text-align: left;
}

.ticket-details p {
    margin-bottom: 12px;
    padding-bottom: 12px;
    border-bottom: 1px solid var(--border);
}

.ticket-details p:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
}

.ticket-details strong {
    display: inline-block;
    width: 120px;
    color: var(--text-muted);
    font-weight: 500;
}

@media (max-width: 900px) {
    .sidebar {
        width: 100%;
        position: relative;
        height: auto;
        padding: 20px;
    }
    
    .main {
        margin-left: 0;
    }
    
    .page {
        flex-direction: column;
    }
}
