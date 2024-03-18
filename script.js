const btn = document.getElementById('btn');

var str = 'Hello, world!';
var text = '';
var temp = '';
var isReady = true;

var ch = 0;
var i = 31;

function loop() {
    setTimeout(() => {
        if(ch < str.length) 
        {
            if(String.fromCharCode(i) == str[ch])
            {
                text += String.fromCharCode(i);
                document.getElementById("h1_id").innerHTML = text;
                ch++;
                i = 31;
            }
            else
            {
                temp = text + String.fromCharCode(i);
                document.getElementById("h1_id").innerHTML = temp;
            }
            i++;
            loop();
        }
        else
            btn.style.visibility = 'visible';

    },10);
}

btn.addEventListener('click', () => {
    btn.style.visibility = 'hidden';
    ch = 0;
    i = 31;
    text = '';
    temp = '';
    loop();
})