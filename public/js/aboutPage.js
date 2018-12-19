function aboutPage() {
  $(".contain").empty();
  $(".contain").append(links());
  $(".contain").append(aboutTitle());
  $(".contain").append(aboutText());
  $(".contain").append(aboutSkillTitle());
  $(".contain").append(aboutSkill());
}

{
  /* <i class="fab fa-github-square"></i>
<i class="fab fa-linkedin"></i> */
}

links = () => {
  const links = $("<div>")
    .addClass("links")
    .append(
      $("<a href = https://github.com/dashboard>")
        .addClass("githubLink")
        .append($("<i>").addClass("fab fa-github-square fa-4x")),
      $("<a href = https://dev.to/yoonsl>")
        .addClass("devToLink")
        .append($("<i>").addClass("fab fa-dev fa-4x")),
      $("<a href = https://www.linkedin.com/feed/?trk=onboarding-landing>")
        .addClass("linkedinLink")
        .append($("<i>").addClass("fab fa-linkedin fa-4x"))
    );

  return links;
};

aboutTitle = () => {
  const aboutTitle = $("<div>")
    .addClass("aboutTitle")
    .append($("<h1>").text("Yoonsub Lee"),
    $("<p>").text("Email: yoonsub90@gmail.com")
    );


  return aboutTitle;
};

aboutText = () => {
  const aboutText = $("<div>")
    .addClass("aboutText")
    .append(
      $("<p>").text(
        "Hello, my name is Yoonsub Lee and I am currently living in Lawrenceville, GA. I am studying to become a full-stack developer. Before coming to GTBC, I was working as account manager at a company called 'Telecell. While I was working I started to study Java,C# and Unity. My final goal is to create the best game in the world. I have been amused how games are like a different worlds created by human. Ever since, I have always wanted to create a world of my own. I am currently sharping up my JavaScript skills and also learing more about react and react-native"
      )
    );

  return aboutText;
};

aboutSkillTitle = () => {
  const aboutSkillTitle = $("<div>")
    .addClass("aboutSkillTitle")
    .append($("<h1>").text("Skills Aquired : "));

  return aboutSkillTitle;
};

aboutSkill = () => {
  const aboutSkill = $("<div>")
    .addClass("aboutSkill")
    .append(
      $("<ul>")
        .addClass("skillList")
        .append(
          $("<li>").text("HTML"),
          $("<li>").text("CSS"),
          $("<li>").text("JavaScript"),
          $("<li>").text("Node"),
          $("<li>").text("MongoDB"),
          $("<li>").text("Firebase")
        ),
      $("<ul>")
        .addClass("skillList")
        .append(
          $("<li>").text("Materialize"),
          $("<li>").text("Java"),
          $("<li>").text("C#"),
          $("<li>").text("Unity Engine"),
          $("<li>").text("Phaser 2 & 3 Engine"),
          $("<li>").text("MySQL")
        ),
      $("<ul>")
        .addClass("skillList")
        .append(
          $("<li>").text("Sequelize"),
          $("<li>").text("C#"),
          $("<li>").text("React"),
          $("<li>").text("React-native"),
          $("<li>").text("Socket-IO"),
          $("<li>").text("API settings")
        )
    );

  return aboutSkill;
};
