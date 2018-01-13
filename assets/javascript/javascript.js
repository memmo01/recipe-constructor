var arr = [];
var breakfast = [];
var lunch = [];
var dinner = [];
var snack = []

var person = function(title, ing, inst, time) {
    this.title = title;
    this.ing = ing;
    this.inst = inst;
    this.time = time;

    this.populate = function() {

        var c = {
            title: title,
            ing: ing,
            inst: inst,
            time: time
        }
        if (c.time === "breakfast") {
            breakfast.push(c);
        } else if (c.time === "lunch") {
            lunch.push(c);
        } else if (c.time === "dinner") {
            dinner.push(c);
        } else if (c.time === "snack") {
            snack.push(c);
        } else {
            arr.push(c);
        }
    }
    console.log(arr);

}
$("#submit").on("click", function() {
    var input1 = $("#title").val().trim();
    var input2 = $("#ingredients").val().trim();
    var input3 = $("#instructions").val().trim();
    var input4 = "";

    console.log(breakfast);
    var radioVal = document.getElementsByName("time");
    if ((input1 === "") || (input2 === "") || (input3 === "")) {
        alert("Please fill in all inputs before submitting");

    } else {
        for (p = 0; p < radioVal.length; p++) {
            if (radioVal[p].checked) {
                var r = radioVal[p].value;
                input4 = r;
            }
        }
        if (input4 === "breakfast" && breakfast.length >= 24) {
            alert("you have reach max capacity for breakfast recipes!");
        } else if (input4 === "lunch" && lunch.length >= 24) {
            alert("you have reach max capacity for lunch recipes!");
        } else if (input4 === "dinner" && dinner.length >= 24) {
            alert("you have reach max capacity for dinner recipes!");
        } else if (input4 === "snack" && snack.length >= 24) {
            alert("you have reach max capacity for snack recipes!");
        } else {

            console.log(input1)

            var newMember = new person(input1, input2, input3, input4);
            newMember.populate();
            $("#title").val("");
            $("#ingredients").val("");
            $("#instructions").val("");
        }
    }
})

$(".BLDS").on("click", function() {
    $(".res-title").empty();
    $(".ingred").empty();
    $(".instruct").empty();

    var x = ($(this).val())

    if (x === "breakfast") {
        $(".results").empty();

        for (u = 0; u < breakfast.length; u++) {
            var w = breakfast[u].title;

            putToScreen(w, u, "breakfast")
        }
    } else if (x === "lunch") {
        $(".results").empty();
        for (u = 0; u < lunch.length; u++) {
            var w = lunch[u].title;

            putToScreen(w, u, "lunch")
        }
    } else if (x === "dinner") {
        $(".results").empty();
        for (u = 0; u < dinner.length; u++) {
            var w = dinner[u].title;

            putToScreen(w, u, "dinner")
        }
    } else if (x === "snack") {
        $(".results").empty();
        for (u = 0; u < snack.length; u++) {
            var w = snack[u].title;

            putToScreen(w, u, "snack")
        }
    }


    function putToScreen(w, u, timeOfDay) {



        var t = $("<button>");
        t.text(w);
        t.attr("data-let", u)
        t.addClass("title-select");
        t.attr("data-name", timeOfDay);

        $(".results").append(t);

    }

    $(".title-select").on("click", function() {

        var p = ($(this).data("let"));
        var g = ($(this).data("name"));



        if (g === "breakfast") {
            var rr = breakfast[p].title
            $(".res-title").html(rr);
            $(".ingred").html(breakfast[p].ing);
            $(".instruct").html(breakfast[p].inst);
        } else if (g === "lunch") {
            var rr = lunch[p].title
            $(".res-title").html(rr);
            $(".ingred").html(lunch[p].ing);
            $(".instruct").html(lunch[p].inst);
        } else if (g === "dinner") {
            var rr = dinner[p].title
            $(".res-title").html(rr);
            $(".ingred").html(dinner[p].ing);
            $(".instruct").html(dinner[p].inst);
        } else if (g === "snack") {
            var rr = snack[p].title
            $(".res-title").html(rr);
            $(".ingred").html(snack[p].ing);
            $(".instruct").html(snack[p].inst);
        }

    })


});