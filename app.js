(function() {

       let screen = document.querySelector('.screen') ;
       let buttons = document.querySelectorAll('.btn') ;
       let clear = document.querySelector('.btn-clear') ;
       let equal = document.querySelector('.btn-equal') ;

       buttons.forEach(function(button) {
        button.addEventListener('click',function(e){
            let value = e.target.dataset.num;
            screen.value += value;
        }) 
       });

       equal.addEventListener('click',function(e){
        if(screen.value ===''){
            screen.value = '';
        }else{
            let answer = eval(screen.value);
            if (answer.toString().length >= 8){
                screen.value = answer.toFixed(8);
            }else{
                screen.value = answer; 
            }
        }
        })
        
        clear.addEventListener('click', function(e){
            screen.value = "";
        })

        setTimeout(()=>{
            var msg = document.getElementById("greeting");
            msg.style.opacity='0';
        }, 1500);

        setTimeout(()=>{
            var msg = document.getElementById("greeting");
            msg.parentNode.removeChild(msg)
        }, 2500);





})();
