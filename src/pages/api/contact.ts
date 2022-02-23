import mailer from '@sendgrid/mail';
import type { NextApiRequest, NextApiResponse } from 'next';

async function contact(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    mailer.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = JSON.parse(req.body);

    try {
        await mailer.send(msg);
        res.status(200).send({ msg: 'SEND_EMAIL_SUCCESS' });
    } catch (error) {
        res.status(400).send({ msg: 'SEND_EMAIL_FAILED' });
    }
}

export default contact;
