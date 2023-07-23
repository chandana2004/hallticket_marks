const phy=document.getElementById("phymarks");
const math=document.getElementById("mathmarks");
const che=document.getElementById("chemarks");
const name_=document.getElementById("name");

document.getElementById("submit").addEventListener("click", function () {
    const reg_no=document.getElementById("hallticket").value;
    fetch("https://sso.cosgrid.com/marks?reg_no="+reg_no)
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data);
        math.value=data.maths;
        phy.value=data.physics;
        che.value=data.chemistry;
        name_.value=data.name;
    })
    .catch((error)=>{console.log("Fetch error",error)})
});


// function btn() {
    
//     const reg_no=document.getElementById("hallticket").value;
//     fetch("https://sso.cosgrid.com/marks?reg_no="+reg_no)
//     .then((response)=>response.json())
//     .then((data)=>{
//         console.log(data);
//         math.value=data.maths;
//         phy.value=data.physics;
//         che.value=data.chemistry;
//         name_.value=data.name;
//     })
//     .catch((error)=>{console.log("Fetch error",error)})
// }