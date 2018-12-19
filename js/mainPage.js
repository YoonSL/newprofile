function maintitle() {
    $('#mySidenav').css("width","0px");
    $(".contain").empty();
    $(".contain").append(
        $("<div>").addClass("mainTitle").append(
            $("<h1>").attr("id","titleText").text("Yoonsub Lee's HomePage!")
        )
    )
}

maintitle();


