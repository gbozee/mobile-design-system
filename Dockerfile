FROM mhart/alpine-node:14 as client

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

WORKDIR /app

COPY . .

# RUN mv package-prod.json package.json
# RUN mv production/.npmrc .npmrc 

RUN yarn --frozen-lockfile

RUN yarn build:prod

FROM mhart/alpine-node:14 
WORKDIR /app
COPY package.json .
COPY --from=client /app/storybook-static storybook-static 
RUN npm install -g serve 
EXPOSE 3000

CMD ["serve", "/app/storybook-static"]
