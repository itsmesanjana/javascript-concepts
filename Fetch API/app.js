const URL="https://cat-fact.herokuapp.com/facts";
const factPara=document.querySelector("#fact");
const btn=document.querySelector("#btn");



const getFacts=async()=>{
    console.log("Getting data....");//let promise=ftech(url) as we are using ascync function here ....
    let response=await fetch(URL);
    console.log(response);
    //Json is used to convert the given data into javascript objects that can be understand by the developer
    let data=await response.json();
    // console.log(data[0].text);
    factPara.innerText=data[3].text;
};
btn.addEventListener("click",getFacts);