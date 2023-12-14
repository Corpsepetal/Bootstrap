$(document).ready(function () {
    $("#dm").on("click", function() {
        if ($(this).prop("checked")) {
            $("header, footer, body").addClass("dark-mode");
            $("#dm_label").html("&#x2601;");
        } else {
            $("header, footer, body").removeClass("dark-mode");
            $("#dm_label").html("&#x2600;");
        }
    });

    const currentTime = new Date().getHours();
    if (currentTime >= 6 && currentTime < 18) {
        $("body").addClass("daytime");
    } else {
        $("body").addClass("nighttime");
    }

    $("#mybutton").hover(
        function () {
            $(this).text("I'm warning you!");
        },
        function () {
            $(this).text("Don't click me!");
        }
    );

    $("#mybutton").on("click", function() {
        alert("QUIT CLICKING ME!");
    });
});
