const d = document;
let x = 0,
y = 0;

export function moveBall(e, ball, stage){

    const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),
    limitsBall = $ball.getBoundingClientRect(),
    limitStage = $stage.getBoundingClientRect();

    switch(e.keyCode){

        //Up
        case 38:
            if(limitsBall.top - 10 > limitStage.top){

                e.preventDefault();
                y--; 
            } 
        break;
        //Left
        case 37:
            if(limitsBall.left - 10 > limitStage.left){

                e.preventDefault();
                x--;
            } 
        break;
        //Right
        case 39: 
            if(limitsBall.right + 10 < limitStage.right){
            
                e.preventDefault();
                x++;
            } 
        break;
        //Down
        case 40: 
            if(limitsBall.bottom + 10 < limitStage.bottom){
            
                e.preventDefault();
                y++;
            } 
        break;

        default: break;
    }

    $ball.style.transform = `translate(${x * 10}px,${y * 10}px)`;
}

export function shortcuts(e){

    
    if(e.key === 'a' && e.altKey){
        
        alert('You activated alt + a');
    }

    if(e.key === 'd' && e.altKey){
        
        confirm('Did you pressed alt + d');
    }

    if(e.key === 'e' && e.altKey){
        
        prompt('My name is Enrique, right?');
    }
}