class Github {
  constructor(){
    //OAuth ID + secret from github api
    this.client_id = '21532adca02e05e34e70';
    this.client_secret = '4f09afa13ca17c36060d6663b3033ce8fc243328';
    this.repos_count = 5;
    this.repos_sort = 'Created: asc';
  }
  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }
  }

  

}