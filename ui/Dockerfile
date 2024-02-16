FROM node:18 as builder

WORKDIR '/app'

COPY ./package.json .
COPY ./package-lock.json .

RUN ["npm", "ci"]
COPY ./ .
#RUN ["npm", "dedupe"]
RUN ["npm", "run", "build"]
# COPY build build
FROM nginx:latest
COPY --from=builder /app/build /usr/share/nginx/html


EXPOSE 80

# Start nginx in the foreground to keep container from exiting after startup
CMD nginx -g 'daemon off;'