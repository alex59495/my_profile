class Project < ApplicationRecord
  PROJECTS = [{
    title: "Loosamax",
    url: "https://loosamax59.herokuapp.com/",
    img: "Loosamax.png",
    description: '.loosamax-description',
    descr_skill: '.loosamax'
  },
    {
    title: "Resonances",
    url: "https://www.resonances.group/",
    img: "resonances.png",
    description: '.resonances-description',
    descr_skill: '.resonances'
  },{
    title: "2Mão Point",
    url: "https://segunda-mao-carrefour.herokuapp.com/",
    img: "2mao-point.png",
    description: '.2mao-description',
    descr_skill: '.2mao'
  },{
    title: "Themis Production",
    url: "https://themis-production.netlify.app/",
    img: "themis.png",
    description: '.themis-description',
    descr_skill: '.themis'
  },
  {
    title: "Obras - Création de PPSPS",
    url: "https://ppsps-project.herokuapp.com/",
    img: "ppsps.png",
    description: '.ppsps-description',
    descr_skill: '.ppsps'
  },
  {
    title: "Gratte ton chômage",
    url: "https://chomage-vi.herokuapp.com/",
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