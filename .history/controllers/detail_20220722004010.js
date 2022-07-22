function getProduct(){

    var promise = axios ({
        url:'https://shop.cyberlearn.vn/api/Product',
        method:'GET',
    });

    promise.then(function(result){
        renderProduct(result.data.content,'tableRender');
    })
}


function renderProduct (arrFrame,idBody){
    var htmlContent = '';
    for (var index = 0; index < arrFrame.length; index ++) {
        var frame = arrFrame[index];
        // console.log(frame)

        htmlContent += `
        <div class="frame m-4">
            <div class="frame-item">
                <div class="frame-item-top">
                    <img class="frameimg"src="${frame.image}" alt="...">
                    <p>${frame.name}</p>
                    <p>${frame.shortDescription}</p>
                </div>
                <div class="frame-item-bottom">
                    <a href="./detail.html?productid=${frame.id}" class="btbuy" onclick="buyframe('${frame.id}')" type="button">Buy now</a>
                    <a class="btprice" type="button">${frame.price}$</a>
                </div>
            </div>
        </div>
        `
    }

    document.getElementById(idBody).innerHTML = htmlContent;
}






function getProductDetail() {

    var promise = axios ({
        url:'https://shop.cyberlearn.vn/api/Product/getbyid?id=4',
        method:'GET',
    });

    promise.then(function(result){
        renderProductDetail(result.data.content,'detailProduct');
    })
}








window.onload = function (){
    getProduct();
    getProductDetail();
 }

 