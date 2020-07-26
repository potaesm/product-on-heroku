# Example for deploy an angular app to Heroku with docker
## Step
* Place **app folder** to the root
* Edit app_name in Dockerfile to **app folder** name
* Optional for production build and github page support: In package.json at scripts.build
```bash
"ng build --prod && cp -R dist/product-app/index.html dist/product-app/404.html"
```