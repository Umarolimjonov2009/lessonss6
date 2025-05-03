const btn = document.getElementById("btn");
const box = document.getElementById("box");

function chizish(malumot) {
  console.log(malumot);

  box.innerHTML = `
         <h1>Foydalanuvchi joylashuvini aniqlash</h1>
         <button id="btn">Joylashuvni ko'rsat</button>
         <p>Kenglik: ${malumot.loc.split(",")[0]}</p>
         <p>Uzunlik: ${malumot.loc.split(",")[1]}</p>
         <p>Mamlakat: ${malumot.country}</p>
         <p>Shahar:  ${malumot.city}</p>
         <p>Ip Manzil:  ${malumot.ip}</p>
         <p>Internet provayder:  ${malumot.org}</p>
         <div id="map">
            <iframe
                width="100%"
                height="300"
                frameborder="0" style="border:0;border-radius:20px"
                src="https://www.google.com/maps?q=${
                  malumot.loc.split(",")[0]
                },${malumot.loc.split(",")[1]}&output=embed" allowfullscreen>
            </iframe>
         </div>
    
    `;
}

btn.addEventListener("click", () => {
  fetch("https://ipinfo.io/json")
    .then((javob) => javob.json())
    .then((data) => chizish(data));
});
