class Github {
  constructor(){
    //OAuth ID + secret from github api
    this.client_id = '21532adca02e05e34e70';
    this.client_secret = '4f09afa13ca17c36060d6663b3033ce8fc243328';
  }
  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    return {
      profile
    }
  }

}