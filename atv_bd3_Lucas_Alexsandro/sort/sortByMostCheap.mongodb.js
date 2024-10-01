const database = 'BD3-Atv2-Lucas';
const collection = 'Loja';

use(database);

db.Loja.find().sort({ valor_produto: 1 }).limit(1);


