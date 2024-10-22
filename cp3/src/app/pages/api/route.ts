import { NextApiRequest, NextApiResponse } from 'next';

const notas: { id: number; name: string; date: string; grade: number }[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, date, grade } = req.body;
    const newCheckpoint = { id: notas.length + 1, name, date, grade };
    notas.push({ id: notas.length + 1, name, date, grade });
    return res.status(201).json(newCheckpoint);
  } else if (req.method === 'GET') {
    return res.status(200).json(notas);
  } else {
    return res.status(405).json({ message: 'Método não permitido' });
  }
}
