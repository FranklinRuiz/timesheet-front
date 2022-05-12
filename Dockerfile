FROM nginx:1.21.3-alpine

RUN apk add --no-cache tzdata
ENV TZ=America/Lima
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN mkdir -p /var/www/html/sgsi-front

RUN rm -r /etc/nginx/conf.d/default.conf

COPY sgsi-front.conf /etc/nginx/conf.d/

COPY dist/sgsi-front /var/www/html/sgsi-front