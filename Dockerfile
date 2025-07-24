FROM nginx:alpine

# Copy all static files into Nginx's HTML directory
COPY . /usr/share/nginx/html

EXPOSE 80
