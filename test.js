let products = [
  {
    image:
      "https://whirlpoolindia.vtexassets.com/arquivos/ids/167241-800-auto?v=638239809232900000&width=800&height=auto&aspect=true",
    name: "Intellifresh 235L 2 Star Frost Free Double-Door Refrigerator",
    type: "Double door Refrigerators",
    mainPrice: "17000",
    discountPrice: "12990",
    category: "Refigerator",
  },
  {
    image: "https://m.media-amazon.com/images/I/61o4Iv+vdBL._SX679_.jpg",
    name: "Bajaj PMH 25 DLX 24L Personal Air Cooler for home with DuraMarine Pump",
    type: "Home Coolers",
    mainPrice: "6000",
    discountPrice: "4800",
    category: "Air Cooler",
  },
  {
    image:
      "https://whirlpoolindia.vtexassets.com/arquivos/ids/162691-800-auto?v=637937389770530000&width=800&height=auto&aspect=true",
    name: "WDE 184L 2 Star Single Door Refrigerator with Handle",
    type: "Single Door Refrigerator",
    mainPrice: "17000",
    discountPrice: "12990",
    category: "Refrigerators",
  },
  {
    image:
      "https://res.cloudinary.com/dxfq3iotg/image/upload/v1562074043/234.png",
    name: "Toshiba Notebook with 500GB HDD & 8GB RAM",
    type: "Laptops & Notebooks",
    mainPrice: "60000 ",
    discountPrice: "54000",
    category: "laptops",
  },
  {
    image: "https://m.media-amazon.com/images/I/71a4ZQNqTiL._SX679_.jpg",
    name: "Samsung 80 cm (32 Inches) Wondertainment Series HD Ready LED",
    type: "Televisions",
    mainPrice: "22900",
    discountPrice: "14990",
    category: "Televisions",
  },
  {
    image: "/public/images/ca1_4.jpg",
    name: "Haier 1.5 Ton 3 Star Split Inverter Split Ac Hs18t Tqs3b",
    type: "Air Conditioners (AC)",
    mainPrice: "30000",
    discountPrice: "25500",
    category: "Air Condtioners",
  },
];
let flag = false;
let div1 = document.getElementById("adder");
let div2 = document.getElementById("adderserch");

for (let i = 0; i < products.length; i++) {
  console.log(1);
  let discount =
    ((products[i].mainPrice - products[i].discountPrice) /
      products[i].mainPrice) *
    100;
  discount = discount.toFixed(0);

  div1.innerHTML += `
    
          <div class="col-lg-4 mb-3 d-flex align-items-stretch">
              <div class="card mx-auto" style="width:20rem;">
                  <img src=${products[i].image} style="width:50%;height:50%" class="card-img-top img-fluid  mx-auto" alt="Card Image">
                  <div class="card-body d-flex flex-column">
                      <div class="mb-2">
                          <h6 class="font-weight-semibold mb-2">
                              <a  href="#" class="text-default mb-2" data-abc="true">
                              ${products[i].name}
                              </a>
                          </h6>

                          <a  href="#" class="text-muted" data-abc="true">${products[i].type}</a>
                      </div>
                      <h4  class="mb-0 font-weight-semibold">MRP: ₹<s>${products[i].mainPrice}</s>
                          <Span  class="discount">${discount}%OFF</Span>
                      </h4>
                      <h3 class="mb-1 font-weight-semibold">₹${products[i].discountPrice}</h3>

                      <div>
                          <i class="fa fa-star star"></i>
                          <i class="fa fa-star star"></i>
                          <i class="fa fa-star star"></i>
                          <i class="fa fa-star star"></i>
                      </div>

                      <div class="text-muted mb-3">34 reviews</div>

                      <button type="button" class="btn bg-cart"><i class="fa fa-cart-plus mr-2"></i> Add to
                          cart</button>
                  </div>
              </div>
          </div>
      `;
}

// prevent default use for keypress 
document.getElementById("serValue").addEventListener("onkeydown",(e)=>{
  e.preventDefault();
  serch();
})





//search function here
const serch = () => {
  let servalue = document.getElementById("serValue").value;
  let serchProducts = products.filter((item) => {
    return (
      item.name.toLowerCase().includes(servalue.toLowerCase()) ||
      item.type.toLowerCase().includes(servalue.toLowerCase()) ||
      item.category.toLowerCase().includes(servalue.toLowerCase())
    );
  });

  if(serchProducts.length===0){
    div2.innerHTML = `
    <div class = "text-center"><h6>Sorry No Products Found in today's special deal</h6></div>`;
    return;
  }

  div2.innerHTML = "";
  for (let i = 0; i < serchProducts.length; i++) {
    console.log(1);
    let discount =
      ((serchProducts[i].mainPrice - serchProducts[i].discountPrice) /
        serchProducts[i].mainPrice) *
      100;
    discount = discount.toFixed(0);

    div2.innerHTML += `
    
          <div class="col-lg-4 mb-3 d-flex align-items-stretch">
              <div class="card mx-auto" style="width:20rem;">
                  <img src=${serchProducts[i].image} style="width:50%;height:50%" class="card-img-top img-fluid  mx-auto" alt="Card Image">
                  <div class="card-body d-flex flex-column">
                      <div class="mb-2">
                          <h6 class="font-weight-semibold mb-2">
                              <a  href="#" class="text-default mb-2" data-abc="true">
                              ${serchProducts[i].name}
                              </a>
                          </h6>

                          <a  href="#" class="text-muted" data-abc="true">${serchProducts[i].type}</a>
                      </div>
                      <h4  class="mb-0 font-weight-semibold">MRP: ₹<s>${serchProducts[i].mainPrice}</s>
                          <Span  class="discount">${discount}%OFF</Span>
                      </h4>
                      <h3 class="mb-1 font-weight-semibold">₹${serchProducts[i].discountPrice}</h3>

                      <div>
                          <i class="fa fa-star star"></i>
                          <i class="fa fa-star star"></i>
                          <i class="fa fa-star star"></i>
                          <i class="fa fa-star star"></i>
                      </div>

                      <div class="text-muted mb-3">34 reviews</div>

                      <button type="button" class="btn bg-cart"><i class="fa fa-cart-plus mr-2"></i> Add to
                          cart</button>
                  </div>
              </div>
          </div>
      `;
  }
  if (servalue === "") {
    div2.innerHTML = "";
  }
};
