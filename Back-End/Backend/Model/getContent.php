 <?php

require_once("./Conexao.php");

class Content extends Conexao{
    public static function getAll() {
        $conn = Conexao::getDb();

        $i = 0;

        $stmt = $conn->prepare("SELECT * FROM produto");
        $stmt->execute();
        while($row = $stmt->fetch(PDO::FETCH_OBJ)){
            $json[$i]= 
                $row
            ;
            $i++;
        }

        header('Access-Control-Allow-Origin: *');
        header('Content-type: application/json');
        echo json_encode($json);
    }
}
 
