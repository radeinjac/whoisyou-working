export default function App() {
  return (
    <div style={styles.page}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.logo}>Who Is You</div>
        <nav style={styles.nav}>
          <a href="#book">Book</a>
          <a href="#coaching">Coaching</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
          <a href="#lang">🌍</a>
        </nav>
      </header>

      {/* Hero */}
      <section style={styles.hero}>
        <h1 style={styles.title}>Welcome to Who Is You 🚀</h1>
        <p style={styles.tagline}>Explore your stories. Book your power. Be you.</p>
      </section>

      {/* Book */}
      <section id="book" style={styles.section}>
        <h2 style={styles.sectionTitle}>📘 My Book</h2>
        <p>Discover the journey that inspired it all. Available soon.</p>
        <button style={styles.button}>Pre-order</button>
      </section>

      {/* Coaching */}
      <section id="coaching" style={styles.sectionAlt}>
        <h2 style={styles.sectionTitle}>🧠 Coaching & Consulting</h2>
        <p>Book a 1-on-1 session or a team workshop. Be heard, guided, and empowered.</p>
        <button style={styles.button}>Book Appointment</button>
      </section>

      {/* Blog */}
      <section id="blog" style={styles.section}>
        <h2 style={styles.sectionTitle}>📝 Latest Stories</h2>
        <p>Visit the blog to read thoughts, lessons, and dreams from the journey.</p>
        <button style={styles.button}>Go to Blog</button>
      </section>

      {/* Contact */}
      <section id="contact" style={styles.sectionAlt}>
        <h2 style={styles.sectionTitle}>📬 Contact Me</h2>
        <form style={styles.form}>
          <input style={styles.input} type="text" placeholder="Your Name" required />
          <input style={styles.input} type="email" placeholder="Your Email" required />
          <textarea style={styles.textarea} placeholder="Your Message" rows="4" required></textarea>
          <button style={styles.button} type="submit">Send</button>
        </form>
      </section>

      {/* Language Switcher */}
      <section id="lang" style={styles.section}>
        <h2 style={styles.sectionTitle}>🌍 Language</h2>
        <p>View this site in:</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button style={styles.lang}>English</button>
          <button style={styles.lang}>Slovenščina</button>
          <button style={styles.lang}>Srpski</button>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© 2025 Who Is You. All rights reserved.</p>
      </footer>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: 'sans-serif',
    background: '#f8f9fb',
    color: '#111',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem 2rem',
    background: '#0f0f1a',
    color: '#fff',
    alignItems: 'center',
    position: 'sticky',
    top: 0,
    zIndex: 10,
  },
  logo: { fontSize: '1.5rem', fontWeight: 'bold' },
  nav: {
    display: 'flex',
    gap: '1.5rem',
  },
  hero: {
    padding: '4rem 2rem',
    textAlign: 'center',
    background: 'linear-gradient(to right, #6225e6, #ec4899)',
    color: '#fff',
  },
  title: { fontSize: '3rem', marginBottom: '1rem' },
  tagline: { fontSize: '1.2rem' },
  section: {
    padding: '4rem 2rem',
    textAlign: 'center',
  },
  sectionAlt: {
    padding: '4rem 2rem',
    textAlign: 'center',
    background: '#f0f4f8',
  },
  sectionTitle: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  button: {
    marginTop: '1rem',
    padding: '0.7rem 1.5rem',
    fontSize: '1rem',
    borderRadius: '8px',
    border: 'none',
    background: '#6225e6',
    color: '#fff',
    cursor: 'pointer',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    maxWidth: '400px',
    margin: '0 auto',
  },
  input: {
    padding: '0.7rem',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '6px',
  },
  textarea: {
    padding: '0.7rem',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '6px',
  },
  lang: {
    padding: '0.6rem 1.2rem',
    borderRadius: '6px',
    border: '1px solid #aaa',
    cursor: 'pointer',
    background: '#fff',
  },
  footer: {
    padding: '2rem',
    textAlign: 'center',
    background: '#0f0f1a',
    color: '#fff',
    marginTop: '3rem',
  },
};
