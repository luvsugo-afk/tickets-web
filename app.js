:root {
    /* Lavanda pastel */
    --bg: #EDE8F5;                 /* Lavanda pastel claro */
    --surface: #FFFFFF;            /* Blanco para tarjetas */
    --sidebar: #8B7AA0;            /* Violeta grisáceo suave */
    --sidebar-text: #FFFFFF;         /* Blanco */
    --text: #000000;                 /* NEGRO absoluto */
    --text-muted: #333333;           /* Gris muy oscuro (casi negro) */
    --accent: #A89BB8;               /* Lavanda pastel medio */
    --accent-hover: #8B7AA0;         /* Hover más oscuro */
    --accent-soft: #D4C8E0;          /* Lavanda muy claro */
    --border: #C8BED4;               /* Borde lavanda */
    --shadow: rgba(139, 122, 160, 0.12);
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
    color: var(--text);                /* NEGRO */
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
    color: var(--sidebar-text);
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
    opacity: 0.9;
    transition: all 0.2s;
}

.nav-item:hover,
.nav-item.active {
    opacity: 1;
    background: rgba(255, 255, 255, 0.2);
    color: #FFFFFF;
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
    color: var(--text);                /* NEGRO */
}

.subtitle {
    color: var(--text-muted);          /* Gris oscuro casi negro */
    font-size: 16px;
}

/* Form */
.form-section {
    background: var(--surface);
    padding: 32px;
    border-radius: 8px;
    margin-bottom: 32px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}

.form-section h2 {
    font-family: var(--font-serif);
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 24px;
    color: var(--text);                /* NEGRO */
}

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
}

.field {
    margin-bottom: 20px;
}

label {
    display: block;
    font-weight: 600;
    margin-bottom: 8px;
    font-size: 14px;
    color: var(--text);                /* NEGRO */
}

.required {
    color: #B71C1C;                    /* Rojo oscuro */
}

input, select, textarea {
    width: 100%;
    padding: 14px 16px;
    border: 1px solid var(--border);
    border-radius: 6px;
    font-family: var(--font-sans);
    font-size: 15px;
    background: var(--bg);             /* Fondo lavanda pastel */
    color: var(--text);                  /* NEGRO */
    transition: all 0.2s;
}

input:focus, select:focus, textarea:focus {
    outline: none;
    border-color: var(--accent);
    box-shadow: 0 0 0 3px var(--shadow);
    background: var(--surface);
}

textarea {
    resize: vertical;
    min-height: 120px;
}

select {
    cursor: pointer;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%238B7AA0' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 16px center;
    padding-right: 40px;
}

/* Summary Card */
.summary-card {
    background: var(--surface);
    border-left: 4px solid var(--accent);
    padding: 28px;
    margin: 40px 0;
    border-radius: 0 8px 8px 0;
    box-shadow: 0 2px 8px rgba(0,0,0,0.04);
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
    background: var(--accent-soft);
    color: var(--text);                /* NEGRO */
}

.badge.critica { background: #EF9A9A; color: #000000; }
.badge.alta { background: #FFCC80; color: #000000; }
.badge.media { background: var(--accent); color: #000000; }
.badge.baja { background: #C8BED4; color: #000000; }

.summary-problem {
    font-size: 18px;
    margin-bottom: 12px;
    color: var(--text);                /* NEGRO */
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
    color: #000000;                    /* NEGRO */
    border: none;
    padding: 16px 40px;
    font-family: var(--font-sans);
    font-size: 15px;
    font-weight: 600;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s;
}

.btn-primary:hover:not(:disabled) {
    background: var(--accent-hover);
    transform: translateY(-1px);
    color: #FFFFFF;
}

.btn-primary:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.btn-secondary {
    background: transparent;
    color: var(--text);                /* NEGRO */
    border: 2px solid var(--border);
    padding: 12px 32px;
    font-family: var(--font-sans);
    font-size: 14px;
    font-weight: 600;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s;
}

.btn-secondary:hover {
    background: var(--accent-soft);
    border-color: var(--accent);
}

/* Success Message */
.success-message {
    text-align: center;
    padding: 60px 40px;
    background: var(--surface);
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.06);
}

.success-icon {
    width: 80px;
    height: 80px;
    background: var(--accent);
    color: #000000;                    /* NEGRO */
    font-size: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 24px;
    font-weight: bold;
}

.success-message h2 {
    font-family: var(--font-serif);
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 12px;
    color: var(--text);                /* NEGRO */
}

.success-message > p {
    color: var(--text-muted);
    margin-bottom: 32px;
}

.ticket-details {
    background: var(--bg);
    padding: 24px;
    border-radius: 8px;
    margin-bottom: 32px;
    text-align: left;
}

.ticket-details p {
    margin-bottom: 12px;
    color: var(--text);                /* NEGRO */
}

.ticket-details strong {
    display: inline-block;
    width: 100px;
    color: var(--text-muted);
}

/* Responsive */
@media (max-width: 768px) {
    .sidebar {
        width: 100%;
        position: relative;
        height: auto;
        padding: 20px;
    }
    
    .main {
        margin-left: 0;
        padding: 30px;
    }
    
    .form-row {
        grid-template-columns: 1fr;
    }
    
    .form-section {
        padding: 24px;
    }
}
