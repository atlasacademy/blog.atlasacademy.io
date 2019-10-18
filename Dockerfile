FROM nginx
MAINTAINER sadisticsolutione@gmail.com

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY dist /usr/share/nginx/html

WORKDIR /usr/share/nginx/html
