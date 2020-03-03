FROM nginx:1.17.8
RUN rm /usr/share/nginx/html/index.html
COPY Application/ /usr/share/nginx/html