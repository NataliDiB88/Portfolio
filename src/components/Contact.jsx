const contactInfo = {
  email: "your-email@example.com",
  phone: "123-456-7890"
};

function Contact() {
  return (
    <section>
      <h2>Contact Me</h2>
      <p>Email: {contactInfo.email}</p>
      <p>Phone: {contactInfo.phone}</p>
      <form>
        <label>Name: <input type="text" required /></label>
        <label>Email: <input type="email" required /></label>
        <label>Message: <textarea required></textarea></label>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;

  