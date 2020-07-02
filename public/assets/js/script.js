$(document).ready(function () {
    const $newDiv = $("<div>");
    const $burgerCard = ($($newDiv).addClass("card bg-light mb-3")).append($($newDiv).addClass("card-body"));
    const $burgername = $("<h5>").text("jQuery Placeholder Burger").attr("class", "card-title text-center");

    $("#new-burger-col").prepend($burgerCard.append($burgername));
});



