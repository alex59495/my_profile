const activeIcon = () => {
  const game = document.getElementById("game");
  const iconGame = document.getElementById("icon-game");
  const skills = document.getElementById("skills");
  const iconSkills = document.getElementById("icon-skills");
  const projects = document.getElementById("projects");
  const iconProjects = document.getElementById("icon-projects");
  const home = document.getElementById("home");
  const iconHome = document.getElementById("icon-home");
  const works = document.getElementById("works");
  const iconWorks = document.getElementById("icon-works");

  const observerGame = new IntersectionObserver(function(entries) {
    if(entries[0].isIntersecting) {
      iconGame.classList.add('active');
    } else {
      iconGame.classList.remove('active');
    }});
  observerGame.observe(game);

  const observerWorks = new IntersectionObserver(function(entries) {
    if(entries[0].isIntersecting) {
      iconWorks.classList.add('active');
    } else {
      iconWorks.classList.remove('active');
    }});
  observerWorks.observe(works);

  const observerSkills = new IntersectionObserver(function(entries) {
    if(entries[0].isIntersecting) {
      iconSkills.classList.add('active');
    } else {
      iconSkills.classList.remove('active');
    }});
  observerSkills.observe(skills);

  const observerProjects = new IntersectionObserver(function(entries) {
    if(entries[0].isIntersecting) {
      iconProjects.classList.add('active');
    } else {
      iconProjects.classList.remove('active');
    }});
  observerProjects.observe(projects);

  const observerHome = new IntersectionObserver(function(entries) {
    if(entries[0].isIntersecting) {
      iconHome.classList.add('active');
    } else {
      iconHome.classList.remove('active');
    }});
  observerHome.observe(home);
}

export { activeIcon }