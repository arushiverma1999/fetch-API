btn1=document.querySelector(".btn1");
btn2=document.querySelector(".btn2");
btn3=document.querySelector(".btn3");
btn1.addEventListener("click",get_text);
btn2.addEventListener("click",get_json);
btn3.addEventListener("click",external_api);
output=document.querySelector(".output");
function get_text()
{
   fetch('msg.txt')
   .then(
       (response) => 
     (response.text())
   )
   .then( (value) =>
   {
        output.innerHTML=`<li> ${value} </li>`
   });
}
function get_json(){
    fetch("jsonfile.json").then((response) =>
    
       (response.json())
    )
    .then((value) =>
    {
        let out=" ";
        value.forEach( (x) =>
        {
            output.innerHTML +=`<li> ${x.title}</li>`
        });
     
    });
}
function external_api(){
    fetch("https://api.github.com/users").then(function (response)
    {
        return(response.json());
    })
    .then(function(value)
    {
        let out=" ";
        value.forEach(function (x)
        {
            output.innerHTML +=`<li> ${x.login}</li>`
        });
     
    });
}