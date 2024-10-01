const database = 'BD3-Atv2-Lucas';
const collection = 'Loja';

use(database);

db.Loja.find({ categoria_produto: { $nin: ["Eletrônicos", "Eletrodomésticos"] } }).limit(5);
