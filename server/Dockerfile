FROM node AS build

WORKDIR /server

COPY package.json .

RUN npm i

COPY . .

RUN npm run build

FROM node AS production

COPY package.json .

COPY --from=build /server/package-lock.json .

RUN npm ci --only=production

COPY --from=build /server/dist ./dist

EXPOSE 8080

CMD ["npm", "run", "start"]
