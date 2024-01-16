// Get Place details from Api
const getPlace = async () => {
  const res = await fetch(
    "https://raw.githubusercontent.com/debojyoti/places-fake-rest-api/master/places.json"
  );
  const date = await res.json();
  return date.places;
};
// Get Cafe details from Api
const getCafe = async () => {
  const res = await fetch(
    "https://raw.githubusercontent.com/debojyoti/places-fake-rest-api/master/cafes.json"
  );
  const date = await res.json();
  return date.cafes;
};
//Search Place ID
const findPlaceId = (cafe, search) => {
  const place = [];
  for (let index = 0; index < cafe.length; index++) {
    let name = cafe[index].name;
    if (name.toUpperCase().includes(search.toUpperCase())) {
      place.push(cafe[index]);
    }
  }
  return place;
};

// Find Cafe Address Details
const find_cafe = async (search) => {
  const Cafe = await getCafe();
  const place = await getPlace();
  let result = [];
  const searchData = findPlaceId(Cafe, search);
  for (let index = 0; index < searchData.length; index++) {
    const getCafe = place.filter((data) => {
      return data.id === searchData[index].location_id;
    });

    const { street_no, locality, postal_code, lat, long } = getCafe[0];
    const { name } = searchData[index];
    result.push({ name, street_no, locality, postal_code, lat, long });
  }
  return result;
};

//Show cafe list
const showCafe = async () => {
  const search = document.getElementById("search").value;
  const elm = document.getElementById("table");
  const cafe = await find_cafe(search);
  if (cafe) {
    elm.innerHTML = `<tr>
      <th>Sl No.</th>
    <th>Name</th>
    <th>Location</th>
    <th>Street No</th>
    <th>Postal Code</th>
    <th>Lat</th>
    <th>Long</th>
  </tr>`;
    cafe.map((item,index) => {
      elm.innerHTML += `<tr>
        <td>${index+1}</td>
        <td>${item.name}</td>
        <td>${item.locality}</td>
        <td>${item.street_no}</td>
        <td>${item.postal_code}</td>
        <td>${item.lat}</td>
        <td>${item.long}</td>
    </tr>`;
    });
  }
};

const fun= document.getElementById("search")
fun.addEventListener("input",showCafe)
