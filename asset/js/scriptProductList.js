$(document).ready(function () {
  $(".orderBy").niceSelect();

  // start CatNav__item__Arrow

  $(".CatNav__item__Arrow").click(function (e) {
    e.preventDefault();
    let $subMenu = $(this).siblings(".CatNav__item__SubMenu");
    $subMenu.slideToggle("slow");
    $subMenu.parent().toggleClass("active_menu");
    $subMenu.css("display", "flex");
  });

  // end CatNav__item__Arrow

  // start  product-Right__Arrow

  $(".product-Right__Arrow").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("product-Right__ArrowTr");
    let $CatNav__mobile = $(".CatNav__mobile");
    $CatNav__mobile.slideToggle("slow");
    $CatNav__mobile.toggleClass("d-flex");
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
    const slicedItem = strNumber.slice(max, i)
    console.log(slicedItem);
    parts.unshift(strNumber.slice(Math.max(i - 3, 0), i));
  }
  return parts.join(',');
}

console.log(jsonFile);

// start Detail

// function loadDefaultImage() {
//   $(".CenterImage").find("img").attr("src", "https://dogmehshop.com/" + __seletImg);
// }
// loadDefaultImage()

$.each(jsonFile.Models, function (index, model) {
  let modelId = model.ModelId;
  let modelName = model.ModelName;
  let imageUrl = model.ImageUrl;
  let UnitCost = model.UnitCost;
  let QtyRemaining = model.QtyRemaining;
  let __DropModels = `
    <figure class="col-3 border DropModels_Image" data-id=${modelId} >
      <img src="https://dogmehshop.com/${imageUrl}"   alt="imgGl" /  >
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

  let __selectPrice = formatNumbersWithCommas(selectedItem.UnitCost);
  let __seletQtyRemaining = selectedItem.QtyRemaining;

  $(".Cat__price > p").text(__selectPrice);

  if (__seletQtyRemaining >= 1) {
    $(".Cat__price > span").text("   موجود در انبار").css("color", "green");
  } else if (__seletQtyRemaining === 0) {
    $(".Cat__price > span").text("ناموجود است").css("color", "red");
  }
});

function loadDefault() {
  let firstModel = jsonFile.Models[0];
  let modelId = firstModel.ModelId;
  let modelName = firstModel.ModelName;
  let imageUrl = firstModel.ImageUrl;
  let unitCost = formatNumbersWithCommas(firstModel.UnitCost);
  let qtyRemaining = firstModel.QtyRemaining;

  console.log("Model ID:", modelId);
  console.log("Model Name:", modelName);
  console.log("Image URL:", imageUrl);
  console.log("Unit Cost:", unitCost);
  console.log("Quantity Remaining:", qtyRemaining)

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
