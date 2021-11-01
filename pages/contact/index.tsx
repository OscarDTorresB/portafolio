import { NextPage } from 'next';

const Contact: NextPage = () => {
  return (
    <div className="my-10 mx-auto w-max max-w-full">
      <h1 className="text-5xl font-bold">
        I&apos;m still working on this page. 😅
      </h1>
      <p>
        If you&apos;d like to get in touch, please send me an email at{' '}
        <a href="mailto:oscardtorres@hotmail.com" className="text-blue-400 hover:text-blue-600">
          my email address
        </a>
        .
      </p>
    </div>
  );
}

export default Contact;
