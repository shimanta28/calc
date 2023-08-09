var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');
var p=document.querySelector('#p')
let x;let y;let s;
for (item of btn) {
    item.addEventListener('click',
        (e) => {
            btntext = e.target.innerText;
            screen.value += btntext;
        }
    )
}

function sin(){
    screen.value=Math.sin(screen.value*Math.PI/180);
}
function cos(){
    screen.value=Math.cos(screen.value*Math.PI/180);
}
function tan(){
    screen.value=Math.tan(screen.value*Math.PI/180);
}

function pow(){
    if(p.value==0){
    x=screen.value;
    screen.value=screen.value+"^";
    p.value=1;
    s=screen.value.length;
    
    }
    else{
        y=screen.value.substr(s,screen.value.length-s);
        screen.value=Math.pow(x,y);
        p.value=0;
    }

}
function sqrt(){
    screen.value=Math.sqrt(screen.value,2);
}
function log(){
    screen.value=Math.log(screen.value);
}
function pi(){
    screen.value=Math.PI;
}
function e(){
    screen.value=Math.E;
}
function fact(){
    var i,num,f;
    f=1;
    num=screen.value;
    for(i=1;i<=num;i++){
        f=f*i;
    }
    i=i-1;

    screen.value=f;
}

function backspc(){
    screen.value=screen.value.substr(0,screen.value.length-1);
}