--Scripts--
1) To run server
    - npm start
2) To test
    - npm run test
3) To run migration
    - npm run migrate:up
    - npm run migrate:down
4) To format files
    - npm run format
5) To use eslint
    - npm run lint:fix
    - npm run lint


--Endpoint of users table--
1) GET 'http://localhost:4000/user'
2) GET 'http://localhost:4000/user/:id'
3) POST 'http://localhost:4000/user'
4) DELETE 'http://localhost:4000/user/:id'


--Endpoint of products table--
1) GET 'http://localhost:4000/product'
2) GET 'http://localhost:4000/product/:id'
3) POST 'http://localhost:4000/product'
4) DELETE 'http://localhost:4000/product/:id'


--Endpoint of orders table--
1) GET 'http://localhost:4000/order'
2) GET 'http://localhost:4000/order/:id'
3) POST 'http://localhost:4000/order'
4) DELETE 'http://localhost:4000/order/:id'

--set .env 
    PORT=5432
    DB_NAME_DEV=storefront_dev
    DB_NAME_TEST=storefront_test
    HOST=localhost
    PASSWORD=1234
    USER_NAME=postgres
    NODE_ENV=dev
    SALT=10
    PABBER=peter