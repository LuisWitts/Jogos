var jogador = 1

function jogada(lc) {
    if () {
        
    }
    if (jogador == 1) {
         document.getElementById(lc).innerHTML="x"
        
    }else{
        document.getElementById(lc).innerHTML="o"
        
    }
   
   
    jogador++
    if(jogador > 2){
        jogador=1
    }

}
