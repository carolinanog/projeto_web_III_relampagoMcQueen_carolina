# Projeto-RelampagoMcQueenCarros-Web-III-Carolina
Projeto Web 3 DevEL{AS} Carolina - Sistema interno de uma revendedora online de carros usados, a Relâmpago McQueen Carros, para visualizar todos os carros do inventário, ou buscar um carro por ID ou por nome, inserir novo carro ao sistema, deletar uma carro, e atualizar os dados de um carro no sistema.


Já no sistema interno, é preciso que o funcionário esteja cadastrado e logado, para conseguir realizar as operações: 1. Cadastrar um veículo no sistema; 2. Buscar um veículo por ID; 3. Buscar um veículo por nome; 4. Atualizar o cadastro de um veículo no sistema; 4. Excluir um veículo do sistema/ 5. Visualizar todo o inventário da Relâmpago McQueen.

# Como rodar o projeto:
- Clone o projeto do Git através do SSH git@github.com:carolinanog/projeto_web_III.git ou do HTTPS https://github.com/carolinanog/projeto_web_III.git, ou, ainda baixe o projeto zipado, como preferir.

- Rode o comando "npm i" na raiz do terminal para instalar os pacotes/as dependências necessárias.

- Caso queira alterar as variáveis de ambiente do .env, configure seu próprio arquivo .env com os requisitos necessários, listados também no arquivo .env.example: 

PORT = <<PORT>>  - Porta da aplicação geral
HOST_DB = <<HOST_DB>>  - Host da base de dados
PORT_DB = <<PORT_DB>>  - Porta da base de dados
USER_DB = <<USER_DB>>  - Usuário da base de dados
PASS_DB = <<PASS_DB>>  - Senha da base de dados
DATABASE= <<DATABASE>> - Nome da base de dados
DIALECT= <<DIALECT>>   - Dialeto da linguagem SQL - foi utilizado o PostGres neste projeto 

- Caso queira popular a base de dados em sua máquina, rodar os comandos npx sequelize-cli init, após para fazer migration de DB, npx sequelize db:migrate, e seed npx sequelize-cli seed:generate --name demo-McQueen ajustando para como estão os arquivos migration e seeder no projeto. 

- No terminal, na raiz do projeto, insira o comando "npm run dev". Você deverá ver a mensagem "O servidor está funcionando na porta 80.".

- No ThunderClient, importe o arquivo "thunder-collection_projeto_web_III.json", que se encontra na raiz do projeto.

# Utilizando o sistema interno da Relâmpago McQueen Carros via ThunderClient:

Na coleção importada no passo anterior, você verá as seguintes requests salvas, para acessar o banco de dados da Relâmpago McQueen Carros, podendo fazer buscas específicas e alterações, conforme:

# GET_All_Cars-McQueenInternalSystem
Pela rota http://localhost/McQueenInternalSystem/allCars - já salva para o teste, é só enviar com o send, que poderá ver todo o inventário disponível na Relâmpago McQueen Carros.


# GETCarByID-McQueenInternalSystem
Pela rota http://localhost/McQueenInternalSystem/carByID/3c96a316-61dd-40cb-89d1-2895cd466ef6 - já salva para o teste, é só enviar com o send, que poderá ver todo o carro registrado com esse ID na Relâmpago McQueen Carros. 
Outras sugestões de rotas, para a busca por ID:

http://localhost/McQueenInternalSystem/carByID/f8d54ec0-64cc-46c8-8f64-3280df166a68 - Nivus Highline

http://localhost/McQueenInternalSystem/carByID/5ded8ed3-03e1-4732-af1f-03ffa2953251 - Creta

Outras buscas podem ser feitas, é necessário apenas buscar pelo ID, que pode ser encontrado através da requisição GET_All_Cars-McQueenInternalSystem. 

# GETCarBYNAME-McQueenInternalSystem
Pela rota http://localhost/McQueenInternalSystem/carByName/DOBLo - já salva para o teste, é só enviar com o send, que poderá ver todos os carros Doblo registrados com esse nome de modela na Relâmpago McQueen Carros. 
Outras sugestões de rotas, para a busca por nome, salientando que é possível passar os nomes dos modelos em letras maiúsculas, ou minúsculas:

http://localhost/McQueenInternalSystem/carByName/civic
http://localhost/McQueenInternalSystem/carByName/UNO


# POSTAddNewCar-McQueenInternalSystem
Pela rota http://localhost/McQueenInternalSystem/addNewCar - já salva para o teste, é possível adicionar um novo carro na base de dados da  Relâmpago McQueen Carros. No body da requisição, é para estarem esses dados para o envio e cadastro de novo carro, caso não estejam, copie e cole em JSON do Body da requisição:

{   
    "marca": "Teste POST2 novo carro cadastrar", 
    "modelo": "TESTE POST2 Tcross Highline", 
    "ano": 2020, 
    "preco": 135000.00, 
    "categoria": "SUV", 
    "cor": "prata", 
    "cambio": "automático"
  }
# DELETECar-McQueenInternalSystem
Pela rota http://localhost/McQueenInternalSystem/deleteCar/46704ba9-2e38-4262-a10e-9f49d181721e - já salva para o teste, é só enviar com o send, que deleterá o carro Cruze LT registrado com esse ID do banco de dados da Relâmpago McQueen. Como sugestão, é possível deletar outros carros da base de dados, passando pela rota o ID do carro a ser deletado.

# PUT-updateCarInfo-McQueenInternalSystem
Pela rota http://localhost/McQueenInternalSystem/updateCarInfo/406f255f-1419-42fc-ab1a-c59268ff1dff - já salva para o teste, é só enviar com o send com essas informações no body para atualizar os dados desse carro, com esse ID:
{
  "marca": "UPDATE PUT TESTE5",
 	"modelo": "PUT TESTE5",
 	"preco": 12000.00,
 	"categoria": "PUT UPDATE teste4"
}

  para atualizar as informações do carro registrado com esse ID do banco de dados da Relâmpago McQueen. Como sugestão, é possível checar pela rota http://localhost/McQueenInternalSystem/carByID/406f255f-1419-42fc-ab1a-c59268ff1dff da requisição de busca pelo ID o mesmo carro, com as alterações passadas pelo body salvas e o registro no banco de dados alteradoS.
