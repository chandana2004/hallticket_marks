const eng = document.getElementById("engmarks");
const math = document.getElementById("mathmarks");
const social = document.getElementById("socialmarks");
const name_ = document.getElementById("name_");

document.getElementById("submit").addEventListener("click", function () {
  const reg_no = document.getElementById("hallticket").value;
  fetch("https://sso.cosgrid.com/marks?reg_no="+reg_no)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      name_.value = data.name;
      eng.value = data.maths;
      math.value = data.physics;
      social.value = data.chemistry;
    })
    .catch(error => {console.log("FETCH ERROR:", error)});
});
