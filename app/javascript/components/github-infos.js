const githubInfos = () => {
  const numberCommits = async () => {
    try {
      const queryString = 'q=' + encodeURIComponent('author:alex59495');
      const response = await fetch(`https://api.github.com/search/commits?${queryString}&sort=author-date&order=desc`,{
        headers: {'Accept': 'application/vnd.github.cloak-preview'}
      })
      response.json()
        .then((res) => {
          const total_commit = res.total_count
          document.getElementById('numCommits').innerText = total_commit
        })
    } catch (error) {
      console.log(error)
    }
  }

  numberCommits();
  
  const numberPR = async () => {
    try {
      const queryString = 'q=' + encodeURIComponent('author:alex59495 type:pr');
      const response = await fetch(`https://api.github.com/search/issues?${queryString}&sort=author-date&order=desc`,{
        headers: {'Accept': 'application/vnd.github.cloak-preview'}
      })
      response.json()
        .then((res) => {
          const total_pr = res.total_count
          document.getElementById('numPR').innerText = total_pr
        })
    } catch (error) {
      console.log(error)
    }
  }

  numberPR();
  
  const numberRepo = async () => {
    try {
      const queryString = 'q=' + encodeURIComponent('user:alex59495');
      const response = await fetch(`https://api.github.com/search/repositories?${queryString}&sort=author-date&order=desc`,{
        headers: {'Accept': 'application/vnd.github.cloak-preview'}
      })
      response.json()
        .then((res) => {
          const total_repo = res.total_count
          document.getElementById('numRepo').innerText = total_repo
        })
    } catch (error) {
      console.log(error)
    }
  }

  numberRepo();
}


export { githubInfos };