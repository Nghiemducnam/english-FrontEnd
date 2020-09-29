FROM nginx:1.17.1-alpine
#config fix reload page error
COPY ./default.conf /etc/nginx/conf.d
COPY /dist/english-front-end /usr/share/nginx/html
