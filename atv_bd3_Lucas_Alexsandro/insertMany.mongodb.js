const database = 'BD3-Atv2-Lucas';
const collection = 'Loja';

use(database);

db[collection].insertMany(

    [
    {
          "nome_produto": "Smartphone X",
          "valor_produto": 2999.99,
          "fabricante_produto": "TechCorp",
          "quantidade_estoque": 120,
          "categoria_produto": "Eletrônicos",
          "descricao_produto": "Smartphone com 128GB de armazenamento e câmera de 12MP."
        },
        {
          "nome_produto": "Notebook Pro",
          "valor_produto": 5499.90,
          "fabricante_produto": "Computech",
          "quantidade_estoque": 45,
          "categoria_produto": "Informática",
          "descricao_produto": "Notebook com processador i7 e 16GB de RAM."
        },
        {
          "nome_produto": "TV Ultra HD",
          "valor_produto": 1999.99,
          "fabricante_produto": "VisionTech",
          "quantidade_estoque": 75,
          "categoria_produto": "Eletrônicos",
          "descricao_produto": "Televisão 50 polegadas com resolução 4K."
        },
        {
          "nome_produto": "Fone de Ouvido Wireless",
          "valor_produto": 299.90,
          "fabricante_produto": "SoundMaster",
          "quantidade_estoque": 200,
          "categoria_produto": "Acessórios",
          "descricao_produto": "Fone de ouvido sem fio com cancelamento de ruído."
        },
        {
          "nome_produto": "Geladeira Frost Free",
          "valor_produto": 3599.00,
          "fabricante_produto": "CoolHouse",
          "quantidade_estoque": 30,
          "categoria_produto": "Eletrodomésticos",
          "descricao_produto": "Geladeira com capacidade de 400L e tecnologia Frost Free."
        },
        {
          "nome_produto": "Cafeteira Elétrica",
          "valor_produto": 199.99,
          "fabricante_produto": "Café Plus",
          "quantidade_estoque": 90,
          "categoria_produto": "Eletrodomésticos",
          "descricao_produto": "Cafeteira automática com capacidade para 10 xícaras."
        },
        {
          "nome_produto": "Ar Condicionado Split",
          "valor_produto": 2299.00,
          "fabricante_produto": "Clima Frio",
          "quantidade_estoque": 50,
          "categoria_produto": "Eletrodomésticos",
          "descricao_produto": "Ar condicionado split com 12.000 BTUs e controle remoto."
        },
        {
          "nome_produto": "Smartwatch Fit",
          "valor_produto": 999.90,
          "fabricante_produto": "TimeTech",
          "quantidade_estoque": 150,
          "categoria_produto": "Acessórios",
          "descricao_produto": "Relógio inteligente com monitoramento de atividades físicas."
        },
        {
          "nome_produto": "Console de Video Game",
          "valor_produto": 2499.90,
          "fabricante_produto": "GameFun",
          "quantidade_estoque": 80,
          "categoria_produto": "Eletrônicos",
          "descricao_produto": "Console de última geração com 1TB de armazenamento."
        },
        {
          "nome_produto": "Máquina de Lavar Roupas",
          "valor_produto": 2199.00,
          "fabricante_produto": "WashPro",
          "quantidade_estoque": 60,
          "categoria_produto": "Eletrodomésticos",
          "descricao_produto": "Máquina de lavar com capacidade de 12kg e função de secagem."
        },
        {
          "nome_produto": "Cadeira Gamer",
          "valor_produto": 899.90,
          "fabricante_produto": "ComfortPlay",
          "quantidade_estoque": 120,
          "categoria_produto": "Móveis",
          "descricao_produto": "Cadeira ergonômica com ajuste de altura e apoio para os pés."
        },
        {
          "nome_produto": "Smart TV 60 polegadas",
          "valor_produto": 2999.00,
          "fabricante_produto": "VisionTech",
          "quantidade_estoque": 45,
          "categoria_produto": "Eletrônicos",
          "descricao_produto": "Televisão com sistema operacional integrado e 4K."
        },
        {
          "nome_produto": "Tablet Pro",
          "valor_produto": 1999.90,
          "fabricante_produto": "Computech",
          "quantidade_estoque": 110,
          "categoria_produto": "Informática",
          "descricao_produto": "Tablet com 256GB de armazenamento e tela de 10 polegadas."
        },
        {
          "nome_produto": "Micro-ondas Inox",
          "valor_produto": 599.99,
          "fabricante_produto": "FastCook",
          "quantidade_estoque": 80,
          "categoria_produto": "Eletrodomésticos",
          "descricao_produto": "Micro-ondas de 32L com painel digital."
        },
        {
          "nome_produto": "Home Theater 5.1",
          "valor_produto": 1299.90,
          "fabricante_produto": "SoundMaster",
          "quantidade_estoque": 40,
          "categoria_produto": "Eletrônicos",
          "descricao_produto": "Sistema de som surround com 5 caixas e subwoofer."
        },
        {
          "nome_produto": "Impressora Multifuncional",
          "valor_produto": 799.99,
          "fabricante_produto": "PrintMax",
          "quantidade_estoque": 100,
          "categoria_produto": "Informática",
          "descricao_produto": "Impressora com função de scanner e Wi-Fi integrado."
        },
        {
          "nome_produto": "Câmera Digital 20MP",
          "valor_produto": 1599.90,
          "fabricante_produto": "PhotoPro",
          "quantidade_estoque": 70,
          "categoria_produto": "Eletrônicos",
          "descricao_produto": "Câmera com 20 megapixels e gravação de vídeo em Full HD."
        },
        {
          "nome_produto": "Fogão 5 bocas",
          "valor_produto": 1899.00,
          "fabricante_produto": "CookMaster",
          "quantidade_estoque": 65,
          "categoria_produto": "Eletrodomésticos",
          "descricao_produto": "Fogão com acendimento automático e forno duplo."
        },
        {
          "nome_produto": "Ventilador de Teto",
          "valor_produto": 399.90,
          "fabricante_produto": "Clima Frio",
          "quantidade_estoque": 150,
          "categoria_produto": "Eletrodomésticos",
          "descricao_produto": "Ventilador de teto com controle remoto e iluminação LED."
        },
        {
          "nome_produto": "Monitor 27 polegadas",
          "valor_produto": 1299.99,
          "fabricante_produto": "Computech",
          "quantidade_estoque": 85,
          "categoria_produto": "Informática",
          "descricao_produto": "Monitor com resolução 1440p e taxa de atualização de 144Hz."
        },
        {
          "nome_produto": "Roteador Wi-Fi 6",
          "valor_produto": 499.90,
          "fabricante_produto": "NetSpeed",
          "quantidade_estoque": 95,
          "categoria_produto": "Informática",
          "descricao_produto": "Roteador com tecnologia Wi-Fi 6 e alcance de 150m."
        },
        {
          "nome_produto": "Máquina de Café Expresso",
          "valor_produto": 699.90,
          "fabricante_produto": "Café Plus",
          "quantidade_estoque": 40,
          "categoria_produto": "Eletrodomésticos",
          "descricao_produto": "Máquina de café expresso com sistema de cápsulas."
        },
        {
          "nome_produto": "Teclado Mecânico Gamer",
          "valor_produto": 299.99,
          "fabricante_produto": "GameFun",
          "quantidade_estoque": 130,
          "categoria_produto": "Acessórios",
          "descricao_produto": "Teclado mecânico RGB com switches Blue."
        },
        {
          "nome_produto": "Smartphone Y",
          "valor_produto": 2499.00,
          "fabricante_produto": "TechCorp",
          "quantidade_estoque": 140,
          "categoria_produto": "Eletrônicos",
          "descricao_produto": "Smartphone com 64GB de armazenamento e câmera tripla."
        },
        {
          "nome_produto": "Mochila Executiva",
          "valor_produto": 199.99,
          "fabricante_produto": "BagPro",
          "quantidade_estoque": 100,
          "categoria_produto": "Acessórios",
          "descricao_produto": "Mochila resistente à água com compartimento para notebook."
        },
        {
          "nome_produto": "Aspirador de Pó",
          "valor_produto": 399.90,
          "fabricante_produto": "CleanHome",
          "quantidade_estoque": 80,
          "categoria_produto": "Eletrodomésticos",
          "descricao_produto": "Aspirador de pó com tecnologia ciclônica e filtro HEPA."
        },
        {
          "nome_produto": "Headset Gamer",
          "valor_produto": 349.90,
          "fabricante_produto": "SoundMaster",
          "quantidade_estoque": 120,
          "categoria_produto": "Acessórios",
          "descricao_produto": "Headset com microfone embutido e som surround 7.1."
        },
        {
          "nome_produto": "Mouse Gamer RGB",
          "valor_produto": 199.99,
          "fabricante_produto": "GameFun",
          "quantidade_estoque": 150,
          "categoria_produto": "Acessórios",
          "descricao_produto": "Mouse com 12.000 DPI e iluminação RGB."
        },
        {
          "nome_produto": "Purificador de Água",
          "valor_produto": 499.90,
          "fabricante_produto": "CleanWater",
          "quantidade_estoque": 60,
          "categoria_produto": "Eletrodomésticos",
          "descricao_produto": "Purificador com sistema de filtragem de 3 estágios."
        },
        {
          "nome_produto": "Mesa para Computador",
          "valor_produto": 699.90,
          "fabricante_produto": "HomeOffice",
          "quantidade_estoque": 50,
          "categoria_produto": "Móveis",
          "descricao_produto": "Mesa compacta com design ergonômico e espaço para acessórios."
        },
        {
          "nome_produto": "Smartphone Z",
          "valor_produto": 3299.90,
          "fabricante_produto": "TechCorp",
          "quantidade_estoque": 85,
          "categoria_produto": "Eletrônicos",
          "descricao_produto": "Smartphone com 256GB de armazenamento e câmera de 108MP."
        },
        {
          "nome_produto": "Liquidificador 1200W",
          "valor_produto": 299.90,
          "fabricante_produto": "MixMaster",
          "quantidade_estoque": 90,
          "categoria_produto": "Eletrodomésticos",
          "descricao_produto": "Liquidificador com 5 velocidades e lâmina de aço inox."
        },
        {
          "nome_produto": "Barbeador Elétrico",
          "valor_produto": 199.99,
          "fabricante_produto": "ShavePro",
          "quantidade_estoque": 110,
          "categoria_produto": "Acessórios",
          "descricao_produto": "Barbeador elétrico com sistema de corte rotativo."
        },
        {
          "nome_produto": "Câmera de Segurança",
          "valor_produto": 599.90,
          "fabricante_produto": "SecureHome",
          "quantidade_estoque": 65,
          "categoria_produto": "Segurança",
          "descricao_produto": "Câmera com visão noturna e gravação em Full HD."
        },
        {
          "nome_produto": "Kit de Ferramentas",
          "valor_produto": 399.99,
          "fabricante_produto": "ToolPro",
          "quantidade_estoque": 80,
          "categoria_produto": "Ferramentas",
          "descricao_produto": "Kit com 50 peças de ferramentas manuais e elétricas."
        },
        {
          "nome_produto": "Impressora 3D",
          "valor_produto": 2599.90,
          "fabricante_produto": "PrintMax",
          "quantidade_estoque": 30,
          "categoria_produto": "Informática",
          "descricao_produto": "Impressora 3D com área de impressão de 20x20x20 cm."
        },
        {
          "nome_produto": "Patinete Elétrico",
          "valor_produto": 1999.00,
          "fabricante_produto": "MoveTech",
          "quantidade_estoque": 45,
          "categoria_produto": "Transportes",
          "descricao_produto": "Patinete elétrico com autonomia de 25 km e velocidade de 20 km/h."
        },
        {
          "nome_produto": "Cafeteira Italiana",
          "valor_produto": 149.90,
          "fabricante_produto": "Café Plus",
          "quantidade_estoque": 100,
          "categoria_produto": "Eletrodomésticos",
          "descricao_produto": "Cafeteira italiana de alumínio para 6 xícaras."
        },
        {
          "nome_produto": "Cooktop 4 bocas",
          "valor_produto": 999.90,
          "fabricante_produto": "CookMaster",
          "quantidade_estoque": 60,
          "categoria_produto": "Eletrodomésticos",
          "descricao_produto": "Cooktop a gás com acendimento automático."
        },
        {
          "nome_produto": "Bicicleta Elétrica",
          "valor_produto": 4999.90,
          "fabricante_produto": "EcoMove",
          "quantidade_estoque": 25,
          "categoria_produto": "Transportes",
          "descricao_produto": "Bicicleta elétrica com autonomia de 50 km e motor de 250W."
        },
        {
          "nome_produto": "Câmera Instantânea",
          "valor_produto": 599.90,
          "fabricante_produto": "PhotoPro",
          "quantidade_estoque": 85,
          "categoria_produto": "Eletrônicos",
          "descricao_produto": "Câmera instantânea com impressão de fotos em papel fotográfico."
        },
        {
          "nome_produto": "Smartphone W",
          "valor_produto": 2299.90,
          "fabricante_produto": "TechCorp",
          "quantidade_estoque": 90,
          "categoria_produto": "Eletrônicos",
          "descricao_produto": "Smartphone com 128GB de armazenamento e câmera dupla."
        },
        {
          "nome_produto": "Lavadora de Alta Pressão",
          "valor_produto": 799.90,
          "fabricante_produto": "CleanHome",
          "quantidade_estoque": 35,
          "categoria_produto": "Ferramentas",
          "descricao_produto": "Lavadora de alta pressão com 1800W de potência e 3 bicos de pressão."
        },
        {
          "nome_produto": "Notebook Ultra",
          "valor_produto": 3499.90,
          "fabricante_produto": "Computech",
          "quantidade_estoque": 50,
          "categoria_produto": "Informática",
          "descricao_produto": "Notebook ultrafino com tela de 14 polegadas e 512GB SSD."
        }
      ]
      

);