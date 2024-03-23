const btn = document.getElementById('btn');
var userText = document.getElementById('text');

var text = '';
var temp = '';

var ch = 0;
var i = 31;

function loop() {
    setTimeout(() => {
        if(ch < userText.value.length) 
        {
            if(String.fromCharCode(i) == userText.value[ch])
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
    },);
}

btn.addEventListener('click', () => {
    ch = 0;
    i = 31;
    text = '';
    temp = '';
    loop();
})