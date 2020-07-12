FROM node:alpine as builder
WORKDIR '/srv'
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build 

FROM nginx 
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /srv/build /usr/share/nginx/html