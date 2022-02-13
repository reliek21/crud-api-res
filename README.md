
# CRUD - API REST
### Demo
Link: https://client-api-21.herokuapp.com/

## Run Locally

Clone the project

```bash
  git clone https://github.com/reliek21/crud-api-rest.git
```

Go to the project directory

```bash
  cd crud-api-rest
```

Install dependencies

```bash
  npm install
```

Start dev server

```bash
  npm run start:dev
```


## API Reference

#### URL: https://test-node-22.herokuapp.com

### Products
#### Get all Products

```http
  GET /api/products
```

#### Get Product

```http
  GET /api/products/{id}
```

#### Create Product

```http
  GET /api/products/
```

#### Data required to create product

| Data | Type     | Description      |
| :-------- | :------- | :-----------|
| `"code"` | `string` | **Required** |
| `"name"` | `string` | **Required** |
| `"description"` | `string` | **Required** |
| `"brand"` | `string` | **Required** |
| `"category"` | `ObjectId` | **Required** |
| `"price"` | `Number` | **Optional** |


#### Update Product

```http
  GET /api/products/{id}
```

#### Data required to update product

| Data | Type     | Description      |
| :-------- | :------- | :-----------|
| `"name"` | `string` | **Required** |
| `"price"` | `Number` | **Required** |


#### Delete Product

```http
  GET /api/products/{id}
```


### Categories
#### Get all Categories

```http
  GET /api/categories
```

#### Get Category

```http
  GET /api/categories/{id}
```

#### Create Category

```http
  GET /api/categories/
```

#### Data required to create category

| Data | Type     | Description      |
| :-------- | :------- | :-----------|
| `"code"` | `string` | **Required** |
| `"name"` | `string` | **Required** |
| `"description"` | `string` | **Required** |


#### Update Category

```http
  GET /api/categories/{id}
```

#### Data required to update category

| Data | Type     | Description      |
| :-------- | :------- | :-----------|
| `"name"` | `string` | **Required** |


#### Delete Category

```http
  GET /api/categories/{id}
```
## Author

[@reliek21](https://www.github.com/reliek21)

