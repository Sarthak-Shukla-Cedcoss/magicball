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
    'Is my Goa plan Success ?','Am I going to get the promotion in my job?',"Wi'll i become PM in next Election ?",
    'Is it wise to get my advice from a Magic 8-ball?','Will my ex and I get back together?','Am I in the right career path?',
    'Should I avoid anything to live a healthy lifestyle?','Will there be tragedy in my future?','Will I get money from somewhere?',
    'Will I ever be able to win the lottery?','Will I have friends if I move away?']
var userAnswer=['Very doubtful.','My sources say no.','My reply is no.','It is decidedly so','Reply hazy try again',
    'Do not count on it','My sources say no','Outlook not so good','You may rely on it.','Better not tell you now.',
    'Concentrate and ask again.',"Don't count on it.",'It is certain','Ask again later.','Cannot predict now','Most likely.',
    'Outlook good.','As I see it, yes.','Signs point to yes','Without a doubt.','Yes – definitely.']
var index=0;

// function ansshow(){
//     randomNumber=Math.floor(Math.random() * 21);
//     document.getElementById("answer").innerHTML=userAnswer[randomNumber];
// }
function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("ans").style.display = "block";
  }
function clickbutton1(){
    debugger;
    document.getElementById("loader").style.display = "block";
    document.getElementById("ans").style.display = "none";
    let y=document.getElementById("div2");
    y.style.display = "none";
    let x=document.getElementById("div3");
    x.style.display = "block";
    setTimeout(showPage,3000);
    randomNumber=Math.floor(Math.random() * 21);
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
        document.getElementById("name1").innerHTML=uName;
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
    index=0;
}
function quit1(){
    let x = document.getElementById("div5");
    x.style.display = "none";
    let y=document.getElementById("div1");
    y.style.display = "block"; 
    index=0;
}