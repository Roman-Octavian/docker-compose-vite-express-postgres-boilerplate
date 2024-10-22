import { Router } from 'express';
import { db } from '../db/index.js';
import { calculationsTable } from '../db/schema';

const router = Router();

router.post('/post', async (req, res) => {
  try {
    const calculation: typeof calculationsTable.$inferInsert = {
      input: req.body.input,
      result: req.body.result,
    };

    const insert = await db.insert(calculationsTable).values(calculation);

    res.status(200).json({
      success: insert?.rowCount && insert.rowCount > 0,
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

router.get('/', async (_req, res) => {
  try {
    console.log(db);
    res.status(200).json({
      success: true,
      records: await db.select().from(calculationsTable),
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

export default router;
