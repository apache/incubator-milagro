FROM node:18

WORKDIR /app/website

EXPOSE 3000 35729
COPY ./docs /app/docs
COPY ./website /app/website
RUN yarn install
RUN yarn build

CMD ["yarn", "start"]
