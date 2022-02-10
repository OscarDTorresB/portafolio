import emailjs, { init } from '@emailjs/browser';
import { EmailData } from 'internal/entities/emailEntities';

const emailConnectionData = {
    userId: process.env.EMAILJS_USER_ID || 'user_DaGHV8B3d5eFBnE26Pa5m',
    accessToken: process.env.EMAILJS_ACCESS_TOKEN || '75e7b999a59de223cf57c089f2517a63',
    serviceId: 'personal_hotmail',
    templateId: 'default_template',
}

const useEmailController = () => {
    init(emailConnectionData.userId);

    const sendEmail = async (emailData: EmailData) => {
        emailjs.send(
            emailConnectionData.serviceId,
            emailConnectionData.templateId,
            emailData,
        )
    };

    return {
        sendEmail,
    };
}

export default useEmailController;
