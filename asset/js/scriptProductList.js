$(document).ready(function () {
    $(".orderBy").niceSelect();

    // start CatNav__item__Arrow

    $(".CatNav__item__Arrow").click(function (e) {
        let $subMenu = $(this).siblings(".CatNav__item__SubMenu");
        $subMenu.slideToggle("slow");
        if ($subMenu.parent().hasClass("active_menu")) {
            $subMenu.parent().removeClass("active_menu");
          } else {
            $subMenu.parent().addClass("active_menu");
          }
    });

    // end CatNav__item__Arrow

    // start  product-Right__Arrow

    $(".product-Right__Arrow").click(function (e) {
        $(this).toggleClass("product-Right__ArrowTr");
        let $CatNav__mobile = $(".CatNav__mobile");
        $CatNav__mobile.slideToggle("slow");
        if ($CatNav__mobile.hasClass("d-flex")) {
            $CatNav__mobile.removeClass('d-flex');
          } else {
            $CatNav__mobile.addClass("active_menu");
          }
    
    });

    // End product-Right__Arrow
});

function formatNumbersWithCommas(number) {
    const strNumber = number.toString();
    const parts = [];
    console.log(parts);
    for (let i = strNumber.length; i > 0; i -= 3) {
        const max = Math.max(i - 3, 0);
        console.log(max);
        const slicedItem = strNumber.slice(max, i);
        console.log(slicedItem);
        parts.unshift(strNumber.slice(Math.max(i - 3, 0), i));
    }
    return parts.join(",");
}


console.log(jsonFile);

// start Detail


$.each(jsonFile.Models, function (index, model) {
    let modelId = model.ModelId;
    let modelName = model.ModelName;
    let imageUrl = model.ImageUrl;
    let UnitCost = model.UnitCost;
    let QtyRemaining = model.QtyRemaining;
    let __DropModels = `
        <figure class="col-3 border DropModels_Image" data-id=${modelId} >
            <img src="https://dogmehshop.com/${imageUrl}"   alt="imgGl"/>
        </figure>
    `;
    $(".DropModels").append(__DropModels);
});

$(".DropModels_Image").click(function () {
    // console.log('erfan');
    let selectedModelId = $(this).data("id");
    // console.log(selectedModelId);
    const selectedItem = jsonFile.Models.filter(
        (val) => val.ModelId == selectedModelId
    )[0];
    let __seletImg = selectedItem.ImageUrl;
    $(".CenterImage")
        .find("img")
        .attr("src", "https://dogmehshop.com/" + __seletImg);

    let __selectPrice = selectedItem.UnitCost.toLocaleString();
    let __seletQtyRemaining =selectedItem.QtyRemaining ;

    $(".Cat__price > p").text(__selectPrice);

    if (__seletQtyRemaining >= 1) {
        $(".Cat__price > span").text("   موجود در انبار").css("color", "green");
    } else if (__seletQtyRemaining === 0) {
        $(".Cat__price > span").text("ناموجود است").css("color", "red");
    }

    // $('.Cat__price > span').text(__seletQtyRemaining)
});

function loadDefault() {
    let firstModel = jsonFile.Models[0];
    let modelId = firstModel.ModelId;
    let modelName = firstModel.ModelName;
    let imageUrl = firstModel.ImageUrl;
    let unitCost = firstModel.UnitCost.toLocaleString();
    let qtyRemaining = firstModel.QtyRemaining;
    // console.log(+unitCost.replaceAll(',',""))
    // unitCost = Number(unitCost.replaceAll(',',""));

    $(".CenterImage")
        .find("img")
        .attr("src", "https://dogmehshop.com/" + imageUrl);

    // Update the unit cost text
    $(".Cat__price > p").text(unitCost + " تومان");

    // Update the availability status
    let availabilitySpan = $(".Cat__price > span");
    if (qtyRemaining >= 1) {
        availabilitySpan.text("موجود در انبار").css("color", "green");
    } else if (qtyRemaining === 0) {
        availabilitySpan.text("ناموجود است").css("color", "red");
    }
}
loadDefault();

// end Detail
