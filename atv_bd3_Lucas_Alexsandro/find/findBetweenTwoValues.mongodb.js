
const database = 'BD3-Atv2-Lucas';
const collection = 'Loja';

use(database);

db.Loja.find({ valor_produto: { $gte: 200, $lte: 300 } });



