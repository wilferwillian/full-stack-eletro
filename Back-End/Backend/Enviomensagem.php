<?php
    require_once "./Backend/Api.php";
    
    class Mensagem{
        public $nome; 
        public $mensagem; 

        public static function getAll()
        {
            $conn = Conexao::getDb();

            $inserirDados = $conn->query("SELECT * FROM usuarios");
            return $inserirDados->fetchAll(PDO::FETCH_ASSOC);
        }
        
        public function envioMensagem()
        {
            $conn = Conexao::getDb();
    
            $inserirDados = $conn->query("INSERT INTO usuarios (nome, mensagem) VALUES ('$this->nome', '$this->mensagem')");                      
            
            if ($inserirDados->rowCount() > 0) {
                return true;
            } else {
                return false;
            }
        }
    }
    $mensagemCliente = new Mensagem;
    $mensagemCliente->nome = $_POST['nome'];
    $mensagemCliente->mensagem = $_POST['mensagem'];

    $validar = $mensagemCliente->envioMensagem();
    
   
 if ($validar == true) {
        echo json_encode(true);
    } else {
        echo json_encode(false);
    }
   

   
?>
