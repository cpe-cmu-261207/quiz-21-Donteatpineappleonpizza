callApi();

let gender ;
const TagGender = document.getElementById("span-gender-icon");
const TagImg = document.getElementById("img-profile")
const NameTag = document.getElementById("p-name");
const AddressTag = document.getElementById("p-address");
const EmailTag = document.getElementById("p-email");
const btnRandom = document.getElementById("btn-random");

btnRandom.onclick = () => {
  callApi();
};

async function callApi() {
  const resp = await axios.get("https://randomuser.me/api/");

if (resp.data.results[0].gender == "female"){
  TagGender.innerText = "👩";
}else{
  TagGender.innerText = "👨";
}

TagImg.src=resp.data.results[0].picture.large;
//gender = resp.data.results[0].gender;
NameTag.innerText =
  resp.data.results[0].name.first + " " + resp.data.results[0].name.last;
EmailTag.innerText = resp.data.results[0].email;
AddressTag.innerText =
  resp.data.results[0].location.city +
  " " +
  resp.data.results[0].location.state +
  " " +
  resp.data.results[0].location.country +
  " " +
  resp.data.results[0].location.postcode;
console.log(resp.data.results[0]);
}


