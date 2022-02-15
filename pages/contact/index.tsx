import { NextPage } from 'next';
import Head from 'next/head';
import useEmailController from 'internal/hooks/useEmailController';
import ContactForm from 'components/contact/form';

const Contact: NextPage = () => {
  const { sendEmail } = useEmailController();

  return (
    <>
      <Head>
        <title>Contact me - Oscar&apos;s portfolio</title>
        <meta name="description" content="Contact me to discuss about software development." />
      </Head>
      <div className="my-10 mx-auto w-max max-w-full animate-fade-in">
        <h1 className="text-5xl font-bold">
          I am more than excited to <span className="text-sky-500">talk to you!</span>
        </h1>
        <p className="my-4">
          If you&apos;d like to get in touch, please send me an email at{' '}
          <a href="mailto:oscardtorres@hotmail.com" className="text-sky-600 hover:text-sky-800">
            my email address
          </a>
          {' '}or use the form below and I will get back to you as soon as possible.
        </p>
        <p className='text-center my-4 font-bold'>
          You can also download my resume{' '}
          <a
            href='/assets/files/Oscar_Torres_-_Full_Stack_Developer.pdf'
            className="text-sky-600 hover:text-sky-800"
            target="_blank"
          >
            here.
          </a>
        </p>
        <ContactForm onSubmit={sendEmail} />
      </div>
    </>
  );
}

export default Contact;
