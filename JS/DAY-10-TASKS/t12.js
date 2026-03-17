function getTotalPrice(products){
    if(!products) return "";
    let total_price = 0;
    for(product of products){
        total_price += product.price;
    }
    return total_price;
}

const products = [{name:"pen",price:10},{name:"book",price:50},{name:"bag",price:100}];
console.log(getTotalPrice(products));