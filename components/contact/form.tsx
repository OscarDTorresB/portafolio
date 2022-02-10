import { EmailData } from "internal/entities/emailEntities";
import { NextPage } from "next";
import { useState } from "react";

interface ContactFormProps {
    onSubmit: (data: EmailData) => void;
}

const defaultFormData: EmailData = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    company: "",
}

const ContactForm: NextPage<ContactFormProps> = ({
    onSubmit,
}) => {
    const [formData, setFormData] = useState<EmailData>(defaultFormData);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;

        // Is the name is not a key of the formData object we wont update the state
        if (!Object.keys(defaultFormData).includes(name)) return;

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
        setIsSubmitted(false);
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            if (Object.entries(formData).some(([entry, value]) => value === "" && entry !== "company")) {
                throw new Error("Form is missing some data");
            }

            setIsSubmitting(true);
            await onSubmit(formData);
            setFormData(defaultFormData);
            setIsSubmitted(true);
        } catch (error) {
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            {isSubmitting && <p>Sending...</p>}
            {isSubmitted && <p>Message sent!</p>}
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                    First Name*
                </label>
                <input required disabled={isSubmitting} type="text" name="firstName" id="firstName" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleChange} value={formData.firstName} />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                    Last Name*
                </label>
                <input required disabled={isSubmitting} type="text" name="lastName" id="lastName" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleChange} value={formData.lastName} />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email*
                </label>
                <input required disabled={isSubmitting} type="email" name="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleChange} value={formData.email} />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="company">
                    Company
                </label>
                <input disabled={isSubmitting} type="text" name="company" id="company" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleChange} value={formData.company} />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                    Message*
                </label>
                <textarea required disabled={isSubmitting} name="message" id="message" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleChange} value={formData.message} />
            </div>
            <div className="flex items-center justify-between">
                <button disabled={isSubmitting} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Send
                </button>
            </div>
        </form>
    )
}

export default ContactForm;