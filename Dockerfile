FROM nginx:1.17.1-alpine
#config fix reload page error
#/etc/nginx/conf.d # namnd@namnd-Inspiron-7447:~$
#./default.conf -> file tạo
COPY ./default.conf /etc/nginx/conf.d
COPY /dist/english-front-end /usr/share/nginx/html
