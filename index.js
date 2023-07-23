function btn()
{
  alert("form successfully submitted");
  const data=
  {
     "reg_no":document.getElementById("regnum").value,
     "name":document.getElementById("fname").value,
     "maths":document.getElementById("mat").value,
     "physics":document.getElementById("phy").value,
     "chemistry":document.getElementById("che").value,
  }
  console.log(data);
  fetch("https://sso.cosgrid.com/marks/",
  {
    method:"POST",
    body:JSON.stringify(data),
    headers: {
      "Content-Type": "application/json", // Specify the content type as JSON
    },
  })
  .then(response=>response.json())
  .then(data=>{
    console.log("success");
  
  })
  .catch(error=>{console.log("something went wrong!")})
}
