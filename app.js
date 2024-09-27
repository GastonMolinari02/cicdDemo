const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const name = req.query.name || 'RubikCloud team!';

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Hello Page</title>
      <style>
        body {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin: 0;
          background: linear-gradient(117.37deg, #36255A 0.77%, #19181C 99.23%);
          font-family: Arial, sans-serif;
          color: white;
          text-align: center;
        }
        input {
          padding: 10px;
          margin: 10px 0;
          border: none;
          border-radius: 5px;
        }
        button {
          padding: 10px;
          background-color: #6C63FF;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
      </style>
    </head>
    <body>
      <h1>Hola ${name}!</h1>
      <form action="/" method="GET">
        <input type="text" id="name" name="name" required placeholder="Ingresa tu nombre">
        <button type="submit">Enviar</button>
      </form>
    </body>
    </html>
  `;

  res.status(200).send(htmlContent);
});

// Iniciar el servidor en el puerto 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});