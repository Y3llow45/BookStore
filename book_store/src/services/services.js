const url = 'http://localhost:5000/';

export const register = (username, password) => {
  let user = { username, password }
  return fetch(`${url}register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user)
  })
}

export const login = (username, password) => {
  let user = { username, password }
  return fetch(`${url}login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user)
  })
}

export const search = (keyword) => {
  return fetch(`${url}search/${keyword}`)
    .then(res => res.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.log(error));
};

export const getAll = (pageNum) => {
  if (pageNum < 0) {
    pageNum = 0;
  }
  return fetch(`${url}books/${pageNum}`)
    .then(res => res.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.log(error));
}

export const getBook = (title) => {
  return fetch(`${url}book/${title}`)
    .then(res => res.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.log(error));
}

export const getLiked = () => {
  const token = localStorage.getItem('token');
  if (!token) {
    displayInfo("You need to login first");
    return;
  }

  return fetch(`${url}getLiked`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token,
    }
  })
    .then(res => res.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.log(error));
}

export const like = (id) => {
  const token = localStorage.getItem('token');
  if (!token) {
    displayInfo("You need to login first")
    return;
  }

  return fetch(`${url}like/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token,
    },
  })
    .then(res => {
      res.json();
      if (res.status === 200) {
        displaySuccess("Added to liked");
      }
    })
    .catch(
      (error) => console.log(error)
    );
};

export const unLike = (id) => {
  const token = localStorage.getItem('token');
  if (!token) {
    displayInfo("You need to login first");
    return;
  }

  return fetch(`${url}unlike/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token,
    },
  })
    .then(res => {
      res.json()
      if (res.status === 200) {
        displaySuccess("Removed from liked");
      }
    })
    .catch((error) => console.log(error));
};

export const checkUsername = (username) => {
  return fetch(`${url}checkUsername/${username}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then(res => res.json())
    .then(data => {
      if (data.message === 'true') {
        displayInfo("Username already exists");
        return true;
      }
      return false;
    })
    .catch((error) => console.log(error));
};