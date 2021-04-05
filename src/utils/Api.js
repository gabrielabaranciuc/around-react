class Api {
    constructor({ baseUrl, headers }) {
      this._baseUrl = baseUrl;
      this._headers = headers;
    }
  
    getAppInfo() {
      return Promise.all([this.getInitialCards(), this.getUserInfo()]);
    }
  
    getInitialCards() {
      return fetch(`${this._baseUrl}/cards`, {
        headers: this._headers,
      })
        .then((res) =>
          (res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))
        )
    }
  
    getUserInfo() {
      return fetch(`${this._baseUrl}/users/me`, {
        headers: this._headers,
      })
        .then((res) =>
          (res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))
        )
    }
  
    changeAvatar(formData) {
      return fetch(`${this._baseUrl}/users/me/avatar`, {
        headers: this._headers,
        method: "PATCH",
        body: JSON.stringify(
          { avatar: formData.imageLink }
        ),
      })
        .then((res) =>
          (res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))
        )
    }
  
    changeUserInfo(formData) {
      return fetch(`${this._baseUrl}/users/me`, {
        headers: this._headers,
        method: "PATCH",
        body: JSON.stringify({
          name: formData.name,
          about: formData.job,
        }),
      })
        .then((res) =>
          (res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))
        )
    }
  
    addCard(formData) {
      return fetch(`${this._baseUrl}/cards`, {
        headers: this._headers,
        method: "POST",
        body: JSON.stringify({
          name: formData.title,
          link: formData.link,
        }),
      })
        .then((res) =>
          (res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))
        )
    }
  
    deleteCard(cardId) {
      return fetch(`${this._baseUrl}/cards/${cardId}`, {
        headers: this._headers,
        method: "DELETE",
      })
        .then((res) =>
          (res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))
        )
    }
  
    updateLike(LikeButtonActive, cardId) {
      if (LikeButtonActive) {
        return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
          method: "DELETE",
          headers: this._headers
        })
          .then((res) => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Error: ${res.status}`);
          })
      }
      else {
        return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
          method: "PUT",
          headers: this._headers
        })
          .then((res) => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Error: ${res.status}`);
          })
      }
    }
  }

  const api = new Api({
    baseUrl: "https://around.nomoreparties.co/v1/group-7",
    headers: {
      Authorization: "7fda3d54-cdd7-4a60-96d1-9efeeab5176a",
      "Content-Type": "application/json",
    },
  });

  export default api;