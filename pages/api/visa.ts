import { NextApiHandler } from "next";

const VisaXmlApi: NextApiHandler = (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/xml");
  res.end(
    `<?xml version="1.0" encoding="UTF-8"?>
    <Response>
        <Say voice="alice" language="es-MX">Hay una fecha disponible!</Say>
    </Response>
    `
  );
}

export default VisaXmlApi;