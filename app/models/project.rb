class Project < ApplicationRecord
  PROJECTS = [{
    title: "Gratte ton chômage",
    url: "http://www.grattetonchomage.fr",
    img: "Chomage-VI.png",
    description: '.chomage-vi-description',
    descr_skill: '.chomage-vi'
  },
  {
    title: "Traits d'Union",
    url: "https://www.traits-dunion.com.br",
    img: "Traits-Union-banner.png",
    description: '.traits-union-description',
    descr_skill: '.traits-union'
  },
  {
    title: "Sororitree",
    url: "http://www.sororitree.org/",
    img: 'Sororitree.png',
    description: '.sororitree-description',
    descr_skill: '.sororitree'
  },
  {
    title: "Search 4 Class",
    url: "https://search-4-class.herokuapp.com/",
    img: 'Search-4-Class.png',
    description: '.search-4-class-description',
    descr_skill: '.search4class'
  }]
end