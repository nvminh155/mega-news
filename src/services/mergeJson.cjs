const fs = require("fs");
const path = require("path");

const categories = require("./category/categories.json");
const comments = require("./comment/comments.json");
const contacts = require("./contact/contacts.json");
const posts = require("./post/posts.json");
const users = require("./user/users.json");
const tags = require("./tag/tags.json");

const data = {
  users: users.users,
  posts: posts.posts,
  comments: comments.comments,
  categories: categories.categories,
  contacts: contacts.contacts,
  tags: tags.tags,
};

fs.writeFileSync(
  path.join(__dirname, "db.json"),
  JSON.stringify(data, null, 2)
);
