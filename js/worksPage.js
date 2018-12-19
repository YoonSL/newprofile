function workPage() {
    $('#mySidenav').css("width","0px");
    $(".contain").empty();
    $(".contain").append(worksTitle());
    $(".contain").append(worksImg());
  }

worksTitle = () => {
    const worksTitle = $("<div>").addClass("worksTitle").append(
        $("<h1>").addClass("worksTitleText").text("My Works: ")
    )

    return worksTitle;
}


worksImg = () => {
    $(".contain").append(
        $("<div>").addClass("row").append(
            $("<div>").addClass("box").append(
                $("<a href = 'https://todowithsqlandsocket.herokuapp.com/'>").append(
                    $("<img src = 'assets/todolist1.png'>"))
            ),
            $("<div>").addClass("box").append(
                $("<a href = 'https://todohomework14.herokuapp.com/'>").append(
                    $("<img src = 'assets/todolist2mobile.png'>"))
            ),
            $("<div>").addClass("box").append(
                $("<a href = 'https://yoonsl.github.io/Homework02-1re/'>").append(
                    $("<img src = 'assets/cssprac1.png'>"))
            ),
            $("<div>").addClass("box").append(
                $("<a href = 'https://yoonsl.github.io/Homework02-2re/'>").append(
                    $("<img src = 'assets/cssprac2.png'>"))
            )
        ),
        $("<div>").addClass("row").append(
            $("<div>").addClass("box").append(
                $("<a href = 'https://yoonsl.github.io/Homework02-3re/'>").append(
                    $("<img src = 'assets/cssprac3.png'>"))
            ),
            $("<div>").addClass("box").append(
                $("<a href = 'https://https://yoonsl.github.io/Homework03-1//'>").append(
                    $("<img src = 'assets/cssprac4.png'>"))
            ),
            $("<div>").addClass("box").append(
                $("<a href = 'https://trelloclonegt.herokuapp.com/'>").append(
                    $("<img src = 'assets/trelloclone.png'>"))
            ),
            $("<div>").addClass("box").append(
                $("<a href = 'https://space-shooting-game.herokuapp.com/'>").append(
                    $("<img src = 'assets/project2game.png'>"))
            )
        )    
    )
}