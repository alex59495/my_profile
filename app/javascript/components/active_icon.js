const activeIcon = () => {
  const game = document.getElementById("game");
  const iconGame = document.getElementById("icon-game");
  const skills = document.getElementById("skills");
  const iconSkills = document.getElementById("icon-skills");
  const projects = document.getElementById("projects");
  const iconProjects = document.getElementById("icon-projects");
  const home = document.getElementById("home");
  const iconHome = document.getElementById("icon-home");
  const about = document.getElementById("about-me");

  const observerGame = new IntersectionObserver(function(entries) {
    if(entries[0].isIntersecting === true) {
      iconGame.classList.add('active');
    } else {
      iconGame.classList.remove('active');
    }}, { threshold: [0.35] });
  observerGame.observe(game);

  const observerSkills = new IntersectionObserver(function(entries) {
    if(entries[0].isIntersecting === true) {
      iconSkills.classList.add('active');
    } else {
      iconSkills.classList.remove('active');
    }}, { threshold: [0.5] });
  observerSkills.observe(skills);

  const observerProjects = new IntersectionObserver(function(entries) {
    if(entries[0].isIntersecting === true) {
      iconProjects.classList.add('active');
    } else {
      iconProjects.classList.remove('active');
    }}, { threshold: [0.5] });
  observerProjects.observe(projects);

  const observerHome = new IntersectionObserver(function(entries) {
    if(entries[0].isIntersecting === true) {
      iconHome.classList.add('active');
    } else {
      iconHome.classList.remove('active');
    }}, { threshold: [0.2] });
  observerHome.observe(home);
}

export { activeIcon }