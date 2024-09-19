var x = 0
var y = 0



function Reset(){
    x = 0
    y = 0
  
    document.querySelector(".Score1").innerHTML = 0
    document.querySelector(".Score2").innerHTML = 0
    document.querySelector(".Result").innerHTML = "RESULT"
    document.querySelector(".PD1").setAttribute("src", "dice6.png")
    document.querySelector(".PD2").setAttribute("src", "dice6.png")
}

function Roll(){
    
    R()
    
        document.querySelector(".Resetbtn").disabled = true
     

        document.querySelector(".Rollbtn").disabled = true
  


    function R(){
        document.querySelector(".Result").innerHTML = "RESULT"

        var inter = 0
        var  time = setInterval(animate, 100)
        
        function animate(){
            var animate1 = Math.floor(Math.random() * 6 + 1)
            var animate2 = Math.floor(Math.random() * 6 + 1)
            document.querySelector(".PD1").setAttribute("src", "dice"+animate1+".png")
            document.querySelector(".PD2").setAttribute("src", "dice"+animate2+".png")
                inter++
                if(inter > 10){
                    clearInterval(time)
                    var RandomNumber1 = Math.floor(Math.random() * 6 + 1)
                    var RandomNumber2 = Math.floor(Math.random() * 6 + 1)
                    
                    var Dice1 = document.querySelector(".PD1").setAttribute("src", "dice"+RandomNumber1+".png")
                    var Dice2 = document.querySelector(".PD2").setAttribute("src", "dice"+RandomNumber2+".png")
                
                    if(RandomNumber1 > RandomNumber2){
                        x = x+1
                        document.querySelector(".Score1").innerHTML = x
                        document.querySelector(".Result").innerHTML = "Dice 1 WIN"
                        return x
                    } else if(RandomNumber1 < RandomNumber2){
                        y = y+1
                        document.querySelector(".Score2").innerHTML = y
                        document.querySelector(".Result").innerHTML = "Dice 2 WIN"
                
                        return y
                    } else if(RandomNumber1 === RandomNumber2){
                        document.querySelector(".Result").innerHTML = "Draw"
                    }
                }

                if (inter === 10 ){
                    document.querySelector(".Resetbtn").disabled = false
                    document.querySelector(".Rollbtn").disabled = false
                }
                
            }
            
    }
    

}