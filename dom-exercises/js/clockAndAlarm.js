const d = document;

export function clock(startButton, stopButton, showTime){
    
    let startTime;

    d.addEventListener('click', e => {

        if(e.target.matches(startButton)){
            
            startTime = setInterval(() => {

                let time = new Date().toLocaleTimeString();
                d.querySelector(showTime).textContent = time;
    
            },1000);

            e.target.disabled = true;
        }

        if(e.target.matches(stopButton)){

            clearInterval(startTime);
            d.querySelector(showTime).textContent = null;
            d.querySelector(startButton).disabled = false;
        }
    })
}

export function alarm(startButton, stopButton = null, sound){
    
    let startTime;
    const $audio = d.createElement('audio');
    $audio.setAttribute('src',sound);

    d.addEventListener('click', e => {

        if(e.target.matches(startButton)){

            startTime = setTimeout(() => {
                
                $audio.play();

            }, 2000);

            e.target.disabled = true;
        }

        if(e.target.matches(stopButton)){

            clearTimeout(startTime);
            $audio.pause();
            $audio.currentTime = 0;
            d.querySelector(startButton).disabled = false;
        }
    })
}