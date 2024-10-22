FROM node AS vite-app

WORKDIR /client

COPY . .

RUN npm i

RUN npm run build

FROM nginx:alpine

WORKDIR /usr/share/nginx/

RUN rm -rf html

RUN mkdir html

WORKDIR /

COPY --from=vite-app ./client/dist /usr/share/nginx/html

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]
