import http from 'api/http.api';

export const getUsers = () => {
    return http.get('/user');
}

export const deleteUser = (id) => {
    return http.delete(`/user/${id}`);
}

export const register = (data) => {
    return http.post(`/register`, data);
}

export const login = (credential) => {
    return http.post(`/login`, credential);
}

export const getBooks = () => {
    return http.get('book');
}
export const postBook = (data) => {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('author', data.author);
    formData.append('image', data.image);

    return http.post('/book', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}
export const deleteBook = (id) => {
    return http.delete(`/book/${id}`);
}