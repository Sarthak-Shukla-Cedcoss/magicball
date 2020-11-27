var sum=0;
function clickbutton(){
    uName=document.getElementById("userName").value;
    uName=uName.toUpperCase();
    document.getElementById("userNameDisplay").innerHTML=uName;
    let x = document.getElementById("div1");
    x.style.display = "none";
    let y=document.getElementById("div2");
    y.style.display = "block";
    
}
var userQuestion=['Do I need to change my diet?','Should i order PIZZA tonight','Should I change my career?',
    'Is my Goa plan Success ?','Am I going to get the promotion in my job?',"Wi'll i become PM in next Election ?",'Is it wise to get my advice from a Magic 8-ball?',
    'Will my ex and I get back together?','Should I avoid anything to live a healthy lifestyle?','Am I in the right career path?',
    'Will there be tragedy in my future?','Will I get money from somewhere?','Will I ever be able to win the lottery?','Will I have friends if I move away?'
]

var userAnswer=['Very doubtful.','My sources say no.','My reply is no.','It is decidedly so','Reply hazy try again',
'Do not count on it','My sources say no','Outlook not so good'
,'You may rely on it.',
'Better not tell you now.','Concentrate and ask again.',"Don't count on it.",
'It is certain','Ask again later.','Cannot predict now','Most likely.','Outlook good.'
,'As I see it, yes.','Signs point to yes','Without a doubt.','Yes – definitely.']
var index=0;
function clickbutton1(){
    debugger;
    let y=document.getElementById("div2");
    y.style.display = "none";
    let x=document.getElementById("div3");
    x.style.display = "block";
    randomNumber=Math.floor(Math.random() * 21);
    if(randomNumber>=18){
        marks=10;
    }
    else   if(randomNumber>=16){
        marks=9;
    }
    else   if(randomNumber>=14){
        marks=8;
    }
    else   if(randomNumber>=12){
        marks=7;
    }
    else   if(randomNumber>=10){
        marks=6;
    }
    else if(randomNumber>=8){
        marks=5;
    }
    else   if(randomNumber>=6){
        marks=4;
    }
    else   if(randomNumber>=4){
        marks=3;
    }
    else   if(randomNumber>=2){
        marks=2;
    }
    else  {
        marks=1;
    }
    sum=sum+marks;
    document.getElementById("question").innerHTML=userQuestion[index];
    document.getElementById("answer").innerHTML=userAnswer[randomNumber];
    len = userQuestion.length;

    if(len == index){
        let x = document.getElementById("div3");
        x.style.display = "none";
        let y=document.getElementById("div4");
        y.style.display = "block";
        uName=document.getElementById("userName").value;
        uName=uName.toUpperCase();
        sum=(sum/len)*10;
        var n = sum.toFixed(2);
        document.getElementById("name1").innerHTML=uName;
        document.getElementById("marks").innerHTML="POSITIVITY : "+n+"%";
    }
    else{
        index++;
    }
    
}
function quit(){
    let x = document.getElementById("div3");
    x.style.display = "none";
    let y=document.getElementById("div5");
    y.style.display = "block"; 
}
function quit1(){
    let x = document.getElementById("div5");
    x.style.display = "none";
    let y=document.getElementById("div1");
    y.style.display = "block"; 
}


