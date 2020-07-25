FROM node:14.5.0-alpine3.12
WORKDIR /product-app
COPY . .
RUN cd product-app && npm install && npm run build && cd ..
FROM nginx:1.19.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY /product-app/dist/product-app /usr/share/nginx/html
EXPOSE 80
