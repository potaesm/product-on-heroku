FROM node:14.5.0-alpine3.12
WORKDIR /app
COPY /product-app/package*.json ./product-app/
RUN cd product-app && npm install
COPY /product-app ./product-app
RUN cd product-app && npm run build
FROM nginx:1.19.1-alpine
COPY /product-app/dist/product-app /usr/share/nginx/html
# Nginx configuration for Heroku
COPY nginx.conf /etc/nginx/conf.d/default.conf
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'