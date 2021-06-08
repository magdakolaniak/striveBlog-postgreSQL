import pg from 'pg';

const pool = new pg.Pool();

const query = async (queryText) => {
  try {
    const res = await pool.query(queryText);
    const array = res.rows;
    return array.length > 1 ? array : array[0];
  } catch (error) {
    throw error;
  }
};
export default query;
