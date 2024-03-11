import ContactForm from ".././components/contactform/ContactForm";
import PageWrap from "../components/PageWrap";


function ContactPage() {
  return (
    <PageWrap
      centerColumnContent={<ContactForm />}
    />
  );
}

export default ContactPage;
