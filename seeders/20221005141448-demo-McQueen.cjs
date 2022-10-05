
module.exports = {
   up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('cars', [{
    marca: "Chevrolet",
 	modelo: "Cruze LT",
 	ano: 2020,
 	preco: 97000.00,
 	categoria: "sedan",
 	cor: "cinza",
 	cambio: "manual",
    created_at: new Date(),
    updated_at: new Date()
},
{
    marca: "Chevrolet",
 	modelo: "Cruze LT",
 	ano: 2022,
 	preco: 118000.00,
 	categoria: "sedan",
 	cor: "preta",
 	cambio: "manual",
    created_at: new Date(),
    updated_at: new Date()
},
{
    marca: "Chevrolet",
 	modelo: "Montana LS",
 	ano: 2019,
 	preco: 58000.00,
 	categoria: "pick up",
 	cor: "branca",
 	cambio: "manual",
    created_at: new Date(),
    updated_at: new Date()
},
{
    marca: "Chevrolet",
 	modelo: "Montana LS",
 	ano: 2019,
 	preco: 58000.00,
 	categoria: "pick up",
 	cor: "branca",
 	cambio: "manual",
    created_at: new Date(),
    updated_at: new Date()
},
{
    marca: "Chevrolet",
 	modelo: "Onix LT",
 	ano: 2021,
 	preco: 66000.00,
 	categoria: "hatch",
 	cor: "branca",
 	cambio: "manual",
    created_at: new Date(),
    updated_at: new Date()
},
{
    marca: "Chevrolet",
 	modelo: "Montana LS",
 	ano: 2019,
 	preco: 58000.00,
 	categoria: "pick up",
 	cor: "branca",
 	cambio: "manual",
    created_at: new Date(),
    updated_at: new Date()
},
{
    marca: "Chevrolet",
 	modelo: "S10 LS",
 	ano: 2022,
 	preco: 223000.00,
 	categoria: "pick up",
 	cor: "prata",
 	cambio: "automático",
    created_at: new Date(),
    updated_at: new Date()
},
{
    marca: "Chevrolet", 
    modelo: "Spin", 
    ano: 2018, 
    preco: 63000.00, 
    categoria: "minivan", 
    cor: "cinza", 
    cambio: "manual", 
    created_at: new Date(),
    updated_at: new Date()
}, 
{
    marca: "Chevrolet", 
    modelo: "Spin", 
    ano: 2019, 
    preco: 72000.00, 
    categoria: "minivan", 
    cor: "prata", 
    cambio: "automático", 
    created_at: new Date(),
    updated_at: new Date()
    }, 
    {
    marca: "Chevrolet", 
    modelo: "Tracker Premier", 
    ano: 2021, 
    preco: 135000.00, 
    categoria: "SUV", 
    cor: "prata", 
    cambio: "automático", 
    created_at: new Date(),
    updated_at: new Date()
    }, 
    {
    marca: "Fiat", 
    modelo: "Argo", 
    ano: 2021, 
    preco: 65500.00, 
    categoria: "hatch", 
    cor: "branca", 
    cambio: "manual", 
    created_at: new Date(),
    updated_at: new Date()
    }, 
    {
    marca: "Fiat",
    modelo: "Doblo", 
    ano: 2019, 
    preco: 74200.00, 
    categoria: "minivan", 
    cor: "prata", 
    cambio: "manual", 
    created_at: new Date(),
    updated_at: new Date()
    },
    {
    marca: "Fiat", 
    modelo: "Doblo", 
    ano: 2020, 
    preco: 78000.00, 
    categoria: "minivan", 
    cor: "prata", 
    cambio: "manual", 
    created_at: new Date(),
    updated_at: new Date()
    }, 
    {
    marca: "Fiat", 
    modelo: "Strada H Working", 
    ano: 2019, 
    preco: 63500.00, 
    categoria: "pick up", 
    cor: "prata", 
    cambio: "manual",
    created_at: new Date(),
    updated_at: new Date()
    }, 
    {
    marca: "Fiat", 
    modelo: "Toro", 
    ano: 2021, 
    preco: 129000.00, 
    categoria: "pick up", 
    cor: "branca", 
    cambio: "automático",
    created_at: new Date(),
    updated_at: new Date()
    }, 
    {
    marca: "Fiat", 
    modelo: "Uno", 
    ano: 2019, 
    preco: 44300.00, 
    categoria: "hatch",
    cor: "branca", 
    cambio: "manual", 
    created_at: new Date(),
    updated_at: new Date()
    }, 
    {
    marca: "Fiat", 
    modelo: "Uno", 
    ano: 2020, 
    preco: 47000.00, 
    categoria: "hatch", 
    cor: "branca", 
    cambio: "manual", 
    created_at: new Date(),
    updated_at: new Date()
    },
    {
    marca: "Ford", 
    modelo: "Ecosport", 
    ano: 2020, 
    preco: 74500.00, 
    categoria: "SUV", 
    cor: "prata", 
    cambio: "automático", 
    created_at: new Date(),
    updated_at: new Date()
    }, 
    {
    marca: "Ford", 
    modelo: "Ka", 
    ano: 2018, 
    preco: 41000.00, 
    categoria: "hatch", 
    cor: "branca", 
    cambio: "manual", 
    created_at: new Date(),
    updated_at: new Date()
    }, 
    {
    marca: "Ford", 
    modelo: "Ka", 
    ano: 2019, 
    preco: 44000.00, 
    categoria: "hatch", 
    cor: "prata", 
    cambio: "manual", 
    created_at: new Date(),
    updated_at: new Date()
    },
    {
    marca: "Ford", 
    modelo: "Ranger XLS", 
    ano: 2021, 
    preco: 187300.00, 
    categoria: "pick up", 
    cor: "branca", 
    cambio: "automático", 
    created_at: new Date(),
    updated_at: new Date()
    }, 
    {
    marca: "Honda", 
    modelo: "Civic", 
    ano: 2021, 
    preco: 122000.00, 
    categoria: "sedan", 
    cor: "prata", 
    cambio: "automático", 
    created_at: new Date(),
    updated_at: new Date()
    }, 
    {
    marca: "Hyundai", 
    modelo: "Creta", 
    ano: 2019, 
    preco: 102000.00, 
    categoria: "SUV", 
    cor: "branca", 
    cambio: "automático", 
    created_at: new Date(),
    updated_at: new Date()
    }, 
    {
    marca: "Hyundai", 
    modelo: "HB20 S", 
    ano: 2019, 
    preco: 52000.00, 
    categoria: "hatch", 
    cor: "preta", 
    cambio: "manual",
    created_at: new Date(),
    updated_at: new Date()
    }, 
    {
    marca: "Hyundai", 
    modelo: "HB20 vision", 
    ano: 2020, 
    preco: 60000.00, 
    categoria: "hatch", 
    cor: "branca", 
    cambio: "automático", 
    created_at: new Date(),
    updated_at: new Date()
    }, 
    {
    marca: "Nissan",
    modelo: "Frontier XE", 
    ano: 2020, 
    preco: 173000.00, 
    categoria: "pick up", 
    cor: "cinza", 
    cambio: "automático",
    created_at: new Date(),
    updated_at: new Date()
    }, 
    {
    marca: "Peugeot", 
    modelo: "208", 
    ano: 2022, 
    preco: 86000.00, 
    categoria: "hatch",
    cor: "branca", 
    cambio: "manual", 
    created_at: new Date(),
    updated_at: new Date()
    }, 
    {
    marca: "Peugeot", 
    modelo: "208 Active", 
    ano: 2021, 
    preco: 97500.00, 
    categoria: "hatch", 
    cor: "branca", 
    cambio: "automático", 
    created_at: new Date(),
    updated_at: new Date()
    }, 
    {
    marca: "Peugeot", 
    modelo: "5008 Griffe", 
    ano: 2019,
    preco: 165200.00, 
    categoria: "minivan", 
    cor: "verde", 
    cambio: "automático",
    created_at: new Date(),
    updated_at: new Date()
    }, 
    {
    marca: "Renault", 
    modelo: "Captur", 
    ano: 2020, 
    preco: 103000.00, 
    categoria: "SUV", 
    cor: "prata", 
    cambio: "automático", 
    created_at: new Date(),
    updated_at: new Date()
    }, 
    {
    marca: "Renault", 
    modelo: "Captur", 
    ano: 2021, 
    preco: 110000.00, 
    categoria: "SUV", 
    cor: "branca", 
    cambio: "automático", 
    created_at: new Date(),
    updated_at: new Date()
    }, 
    {
    marca: "Renault", 
    modelo: "Duster", 
    ano: 2020, 
    preco: 77200.00, 
    categoria: "SUV", 
    cor: "prata", 
    cambio: "automático", 
    created_at: new Date(),
    updated_at: new Date()
    }, 
    {
    marca: "Renault", 
    modelo: "Kwid", 
    ano: 2020, 
    preco: 48000.00, 
    categoria: "hatch", 
    cor: "branca", 
    cambio: "manual", 
    created_at: new Date(),
    updated_at: new Date()
    }, 
    {
    marca: "Renault", 
    modelo: "Kwid", 
    ano: 2021, 
    preco: 50000.00, 
    categoria: "hatch", 
    cor: "branca", 
    cambio: "manual", 
    created_at: new Date(),
    updated_at: new Date()
    }, 
    {
    marca: "Toyota", 
    modelo: "Corolla", 
    ano: 2019, 
    preco: 97000.00, 
    categoria: "sedan", 
    cor: "prata", 
    cambio: "automático", 
    created_at: new Date(),
    updated_at: new Date()
    }, 
    {
    marca: "Toyota", 
    modelo: "Corolla", 
    ano: 2022, 
    preco: 115000.00, 
    categoria: "sedan", 
    cor: "cinza", 
    cambio: "automático", 
    created_at: new Date(),
    updated_at: new Date()
    }, 
    {
    marca: "Toyota", 
    modelo: "Corolla Cross", 
    ano: 2022, 
    preco: 138600.00, 
    categoria: "SUV", 
    cor: "prata", 
    cambio: "automático", 
    created_at: new Date(),
    updated_at: new Date()
    }, 
    {
    marca: "Toyota", 
    modelo: "Etios", 
    ano: 2020, 
    preco: 56900.00, 
    categoria: "sedan", 
    cor: "branca", 
    cambio: "manual", 
    created_at: new Date(),
    updated_at: new Date()
    },
    {
    marca: "Volkswagen", 
    modelo: "Voyage", 
    ano: 2019, 
    preco: 63200.00, 
    categoria: "sedan", 
    cor: "preta", 
    cambio: "manual", 
    created_at: new Date(),
    updated_at: new Date()
    }, 
    {
    marca: "Volkswagen", 
    modelo: "Voyage", 
    ano: 2020, 
    preco: 68000.00, 
    categoria: "sedan", 
    cor: "branca", 
    cambio: "manual", 
    created_at: new Date(),
    updated_at: new Date()
    }, 
    {
    marca: "Volkswagen", 
    modelo: "Gol Mpi", 
    ano: 2021, 
    preco: 75000.00, 
    categoria: "hatch", 
    cor: "cinza", 
    cambio: "manual",
    created_at: new Date(),
    updated_at: new Date()
    },
    {
    marca: "Volkswagen", 
    modelo: "Golf", 
    ano: 2020, 
    preco: 165000.00, 
    categoria: "hatch", 
    cor: "azul", 
    cambio: "automático", 
    created_at: new Date(),
    updated_at: new Date()
    }, 
    {
    marca: "Volkswagen", 
    modelo: "Jetta Rline", 
    ano: 2020, 
    preco: 130000.00, 
    categoria: "sedan", 
    cor: "branca", 
    cambio: "automático", 
    created_at: new Date(),
    updated_at: new Date()
    }, 
    {
    marca: "Volkswagen", 
    modelo: "Nivus Highline", 
    ano: 2021, 
    preco: 122400.00, 
    categoria: "SUV", 
    cor: "cinza", 
    cambio: "automático", 
    created_at: new Date(),
    updated_at: new Date()
    }, 
    {
    marca: "Volkswagen", 
    modelo: "Passat Highline", 
    ano: 2018, 
    preco: 161000.00,
    categoria: "sedan", 
    cor: "preta", 
    cambio: "automático",  
    created_at: new Date(),
    updated_at: new Date()
    }, 
    {
    marca: "Volkswagen", 
    modelo: "Saveiro Robust", 
    ano: 2021, 
    preco: 65300.00, 
    categoria: "pick up", 
    cor: "branca", 
    cambio: "manual", 
    created_at: new Date(),
    updated_at: new Date()
    }, 
    {
    marca: "Volkswagen", 
    modelo: "Tcross Highline", 
    ano: 2020, 
    preco: 142000.00, 
    categoria: "SUV", 
    cor: "prata", 
    cambio: "automático", 
    created_at: new Date(),
    updated_at: new Date()
    }])
    },
    down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('cars', null, {})
  },
};