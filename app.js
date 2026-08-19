:root {
    /* Violeta CLARO y SUAVE */
    --bg: #F8F6FA;              /* Fondo lavanda muy claro */
    --surface: #FFFFFF;          /* Tarjetas blancas */
    --sidebar: #A89BB0;          /* Violeta CLARO y suave */
    --sidebar-text: #000000;     /* Texto NEGRO en sidebar */
    --text: #000000;             /* TODO texto NEGRO */
    --text-muted: #333333;       /* Gris oscuro casi negro */
    --accent: #B8A8C0;           /* Violeta muy suave */
    --accent-hover: #C4B8CC;     /* Hover más claro */
    --border: #D8D0E0;           /* Bordes violeta grisáceo */
    --shadow: rgba(168, 155, 176, 0.12);
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
    background: #F8F6FA;          /* Fondo lavanda claro */
    color: #000000;               /* NEGRO */
    line-height: 1.6;
    font-size: 15px;
}

.page {
    display: flex;
    min-height: 100vh;
}

/* Sidebar - VIOLETA CLARO */
.sidebar {
    width: 260px;
    background: #A89BB0;        /* Violeta suave claro */
    color: #000000;               /* Texto NEGRO */
    padding: 40px 30px;
    position: fixed;
    height: 100vh;
}

.brand {
    font-family: var(--font-serif);
    font-size: 28px;
    margin-bottom: 60px;
    letter-spacing: -0.5px;
    color: #000000;               /* NEGRO */
    font-weight: 600;
}

.nav {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.nav-item {
    color: #000000;               /* NEGRO */
    text-decoration: none;
    padding: 12px 16px;
    border-radius: 6px;
    font-weight: 500;
    transition: all 0.2s;
}

.nav-item:hover,
.nav-item.active {
    background: rgba(0, 0, 0, 0.08);  /* Sombra negra suave */
    color: #000000;               /* NEGRO */
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
    border-bottom: 1px solid #D8D0E0;
}

.header h1 {
    font-family: var(--font-serif);
    font-size: 42px;
    font-weight: 400;
    margin-bottom: 8px;
    letter-spacing: -0.5px;
    color: #000000;               /* NEGRO */
}

.subtitle {
    color: #333333;               /* Gris oscuro */
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
    color: #000000;               /* NEGRO */
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
    font-weight: 600;
    margin-bottom: 8px;
    font-size: 14px;
    color: #000000;               /* NEGRO */
}

.required {
    color: #000000;               /* NEGRO */
    font-weight: 700;
}

input, select, textarea {
    width: 100%;
    padding: 14px 16px;
    border: 1px solid #D8D0E0;
    border-radius: 4px;
    font-family: var(--font-sans);
    font-size: 15px;
    background: #FFFFFF;
    color: #000000;               /* NEGRO */
    transition: all 0.2s;
}

input:focus, select:focus, textarea:focus {
    outline: none;
    border-color: #B8A8C0;
    box-shadow: 0 0 0 3px rgba(184, 168, 192, 0.2);
}

textarea {
    resize: vertical;
    min-height: 120px;
}

select {
    cursor: pointer;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23000000' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 16px center;
    padding-right: 40px;
}

/* Summary Card */
.summary-card {
    background: #FFFFFF;
    border-left: 4px solid #B8A8C0;
    padding: 28px;
    margin: 40px 0;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
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
    color: #000000;               /* NEGRO */
}

.badge {
    padding: 6px 14px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border-radius: 4px;
    background: #E8E0EC;
    color: #000000;               /* NEGRO */
}

.badge.critica { background: #FFCDD2; color: #000000; }
.badge.alta { background: #FFE0B2; color: #000000; }
.badge.media { background: #B8A8C0; color: #000000; }
.badge.baja { background: #D8D0E0; color: #000000; }

.summary-problem {
    font-size: 18px;
    margin-bottom: 12px;
    color: #000000;               /* NEGRO */
}

.summary-note {
    font-size: 14px;
    color: #333333;               /* Gris oscuro */
}

/* Buttons */
.actions {
    margin-top: 40px;
}

.btn-primary {
    background: #B8A8C0;          /* Violeta suave */
    color: #000000;               /* NEGRO */
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
    background: #A89BB0;
    color: #000000;
    transform: translateY(-1px);
}

.btn-primary:disabled {
    opacity: 0.4;
    cursor: not-allowed;
}

.btn-secondary {
    background: transparent;
    color: #000000;               /* NEGRO */
    border: 2px solid #D8D0E0;
    padding: 12px 32px;
    font-family: var(--font-sans);
    font-size: 14px;
    font-weight: 600;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s;
}

.btn-secondary:hover {
    background: #D8D0E0;
    color: #000000;
}

/* Success Message */
.success-message {
    text-align: center;
    padding: 60px 40px;
    background: #FFFFFF;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
}

.success-icon {
    width: 80px;
    height: 80px;
    background: #B8A8C0;
    color: #000000;               /* NEGRO */
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
    color: #000000;               /* NEGRO */
}

.success-message > p {
    color: #333333;
    margin-bottom: 32px;
}

.ticket-details {
    background: #F8F6FA;
    padding: 24px;
    border-radius: 8px;
    margin-bottom: 32px;
    text-align: left;
}

.ticket-details p {
    margin-bottom: 12px;
    color: #000000;               /* NEGRO */
}

.ticket-details strong {
    display: inline-block;
    width: 100px;
    color: #000000;               /* NEGRO */
    font-weight: 600;
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
}
