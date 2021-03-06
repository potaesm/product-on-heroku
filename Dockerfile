ARG app_name=product-app
# Build stage
FROM node:14.5.0-alpine3.12 AS build
ARG app_name
WORKDIR /${app_name}
COPY /${app_name}/package*.json ./
RUN npm install
COPY /${app_name} .
RUN npm run build
# Run stage
FROM nginx:1.19.1-alpine
ARG app_name
COPY --from=build /${app_name}/dist/${app_name} /usr/share/nginx/html
# Nginx configuration for Heroku
COPY nginx.conf /etc/nginx/conf.d/default.conf
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'