 <?php/*
    require_once "./Backend/Conexao.php";
    
    class Pedidos{
        public $idpedidos; 
        public $idnome_do_cliente; 
        public $idtelefone;
        public $nomeProduto;
        public $valorUnitario;
        public $idquantidade;
        public $valorTotal;
        public $idendereço 

        public static function getAll()
        {
            $conn = Conexao::getDb();

            $inserirDados = $conn->query("SELECT * FROM pedidos");
            return $inserirDados->fetchAll(PDO::FETCH_ASSOC);
        }
        
        public function envioPedido()
        {
            $conn = Conexao::getDb();
    
            $inserirDados = $conn->query("INSERT INTO pedidos (nomeCliente, endereco,telefone,nomeProduto,valorUnitario, quantidade,valorTotal) VALUES ('$this->nomeCliente', '$this->endereco','$this->telefone','$this->nomeProduto','$this->valorUnitario','$this->quantidade','$this->valorTotal')");                      
            
            if ($inserirDados->rowCount() > 0) {
                return true;
            } else {
                return false;
            }
        }
    }
    $pedidosCliente = new Pedidos;
    $pedidosCliente->nome = $_POST['nomeCliente'];
    $pedidosCliente->mensagem = $_POST['endereco'];
    $pedidosCliente->mensagem = $_POST['telefone'];
    $pedidosCliente->mensagem = $_POST['nomeProduto'];
    $pedidosCliente->mensagem = $_POST['valorUnitario'];
    $pedidosCliente->mensagem = $_POST['quantidade'];
    $pedidosCliente->mensagem = $_POST['valorTotal'];

    $validar = $pedidosCliente->envioPedido();
    
   
 if ($validar == true) {
        echo json_encode(true);
    } else {
        echo json_encode(false);
    }
   

   
*/?> 