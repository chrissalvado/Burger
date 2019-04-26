$(function(){

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#newburger").val().trim()
        };
console.log(newBurger)
        $.ajax("/burgers/insertOne", {
            type: "POST",
            data: newBurger
        }).then(function(data){
            console.log("added a new burger",data);
            // location.reload()
        });
    });
$(document).on("click",".eatburger", function(event){
    // event.preventDefault();
console.log("we got cliicked")
    var id = $(this).data("id");
    var devouredState = {
         devoured: 0
    };
    console.log("id to update",id)
    $.ajax("/burgers/updateOne/" + id, {
        type: "POST",
        data: devouredState

    }).then(function() {
        console.log("burgers devoured");
        // location.reload();
    });

});
// (".deleteburger").on("click", function(event){
//     event.preventDefault();

//     var id = $(this).data("id");

// $.ajax({
//     type: "DELETE",
//     url:"/api/burgers" + id}).then(location.reload());

// });

});
