FROM nginx:1.17.8
RUN rm /usr/share/nginx/html/index.html
RUN rm /etc/nginx/nginx.conf
COPY nginx.conf /etc/nginx
COPY Application/ /usr/share/nginx/html
