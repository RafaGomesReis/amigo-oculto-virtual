import express from 'express';
import { Request, Response } from 'express';

const app = express();
const port = 3001;

// Middleware para processar JSON
app.use(express.json());

// Rota básica
app.get('/', (req: Request, res: Response) => {
  res.json( {
    "/event": [
      {
        "id": 1,
        "status": true,
        "title": "Evento Teste Boladão",
        "description": "Mínimo: R$ 100,00",
        "grouped": true
      },
      {
        "id": 2,
        "status": false,
        "title": "Evento Aniversário",
        "description": "Mínimo: R$ 150,00",
        "grouped": false
      },
      {
        "id": 3,
        "status": true,
        "title": "Show de Música",
        "description": "Mínimo: R$ 200,00",
        "grouped": true
      },
      {
        "id": 4,
        "status": true,
        "title": "Palestra Motivacional",
        "description": "Mínimo: R$ 75,00",
        "grouped": false
      },
      {
        "id": 5,
        "status": false,
        "title": "Workshop de Programação",
        "description": "Mínimo: R$ 120,00",
        "grouped": true
      },
      {
        "id": 6,
        "status": true,
        "title": "Exposição de Arte",
        "description": "Mínimo: R$ 50,00",
        "grouped": false
      },
      {
        "id": 7,
        "status": false,
        "title": "Feira de Tecnologia",
        "description": "Mínimo: R$ 180,00",
        "grouped": true
      },
      {
        "id": 8,
        "status": true,
        "title": "Conferência de Negócios",
        "description": "Mínimo: R$ 250,00",
        "grouped": false
      },
      {
        "id": 9,
        "status": false,
        "title": "Sessão de Cinema",
        "description": "Mínimo: R$ 30,00",
        "grouped": true
      },
      {
        "id": 10,
        "status": true,
        "title": "Evento Gastronômico",
        "description": "Mínimo: R$ 90,00",
        "grouped": false
      },
      {
        "id": 11,
        "status": false,
        "title": "Festival de Jazz",
        "description": "Mínimo: R$ 130,00",
        "grouped": true
      }
    ]
  } );
});
// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
