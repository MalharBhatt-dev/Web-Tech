const product = {
  id: "P101",
  name: "Wireless Headphones",
  specs: {
    color: "Matte Black",
    weight: "250g",
  },
  manufacturer: {
    name: "AudioTech",
    specs: {
      location: "Tokyo",
      warranty: "2 years",
      name: "AudioTech Global",
    },
  },
};

//& NOTE : First way to Object Destructuring:
//!let { id ,name , specs , manufacturer} =product;
//!let { color, weight} = specs;
//!let { name : manu_name , specs : Mspecs } = manufacturer;
//!let { location , warranty , name : Sname } = manufacturer.specs;

//& NOTE : Second way to Object Destructuring.
// let { id ,name , specs : { color , weight} ,manufacturer :{ name : companyname , specs : {location , warranty , name : global_name}}} = product


// console.log(Sname);
// console.log(location);