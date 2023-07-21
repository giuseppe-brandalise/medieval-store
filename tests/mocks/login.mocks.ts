const user = {
  id: 1,
  username: 'Hagar',
  vocation: 'Guerreiro',
  level: 10,
  password: '$2a$10$9eUhAx7h2V3bqjGV00ptBeI6/8IchtgA2qdGkrLXJr.tzR4CYW5vi'
};

const login = {
    username: 'Hagar',
    password: 'terrível'
};

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJIYWdhciIsImlhdCI6MTY4OTkxMjI3MH0.MSCzdXuKo9i6Z7lZO1yoyR5Xx1P8-j5nHyg_EYWqg7w';

export default {
  token,
  login,
  user,
};