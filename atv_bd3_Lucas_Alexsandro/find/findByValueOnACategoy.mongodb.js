const database = 'BD3-Atv2-Lucas';
const collection = 'Loja';

use(database);

db.Loja.find({ categoria_produto: "Acessórios" }).sort({ valor_produto: 1 });
