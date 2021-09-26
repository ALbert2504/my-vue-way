class Api {
  #baseURL = 'https://jsonplaceholder.typicode.com/';
  #endpoint = 'users';

  getUsers = async () => {
    const response = await fetch(`${this.#baseURL}${this.#endpoint}`);
    const data = await response.json();

    return data.map(this.#transformUser);
  };

  getUser = async (id) => {
    const response = await fetch(`${this.#baseURL}${this.#endpoint}/${id}`);
    const data = await response.json();

    return data;
  };

  #transformUser = (user) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      website: user.website,
      company: user.company.name,
      address: `${user.address.street} ${user.address.suite}`
    };
  };
}

export default new Api();