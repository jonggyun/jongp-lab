Personal blog creation project

# Personal Blog

## About

> Personal blog web application

## Project Specification

> Client

- reactjs, es6, sass, redux, redux-thunk

> Server

- node.js (express), JWT token

> Database

- MongoDB (mongoose)

### Back-End

```
├── index.js
├── middlewares
│   └── auth.js
├── routes
│   ├── admin
│   │   ├── adminCtrl.js
│   │   ├── category
│   │   │   ├── categoryCtrl.js
│   │   │   └── index.js
│   │   ├── index.js
│   │   └── post
│   │       ├── index.js
│   │       └── postCtrl.js
│   ├── ctrl.js
│   ├── index.js
│   └── post
│       ├── index.js
│       └── postCtrl.js
└── schemas
    ├── category.js
    ├── comment.js
    ├── index.js
    ├── post.js
    └── user.js
```

### Front-End

```
├── components
│   ├── AdminAbout
│   ├── AdminCategory
│   ├── AdminLogin
│   ├── AdminMain
│   ├── AdminPost
│   ├── AdminPostDetail
│   ├── AdminPostEditor
│   ├── App
│   ├── UserAbout
│   ├── UserPost
│   ├── UserPostDetail
│   ├── common
│   │   ├── AdminHeader
│   │   ├── AdminLeftMenu
│   │   ├── Button
│   │   ├── EditorButton
│   │   ├── MarkdownEditor
│   │   ├── MarkdownRender
│   │   ├── Modal
│   │   ├── PostDetail
│   │   ├── PostDetailComment
│   │   ├── PostDetailContent
│   │   ├── PostThumbnail
│   │   ├── PostThumbnailExp
│   │   ├── SelectBox
│   │   ├── Tag
│   │   └── UserHeader
│   └── modal
│       ├── AddCategory
│       ├── DelCategory
│       └── ModCategory
├── config
│   ├── _colors.scss
│   ├── _mixins.scss
│   ├── _sizes.scss
│   └── _variables.scss
├── images
├── index.js
└── redux
    ├── configureStore.js
    └── modules
        ├── admin.js
        ├── category.js
        ├── comment.js
        ├── editor.js
        ├── posts.js
        ├── userAbout.js
        ├── userPosts.js
        └── userSearch.js
```
