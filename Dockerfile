FROM node:14

RUN apt-get update \
    && apt-get install -y libusb-1.0-0 libusb-1.0-0-dev libudev-dev \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN cp -r ./safe-deployment-assets/* ./node_modules/@gnosis.pm/safe-deployments/dist/assets/
RUN cp -r ./safe-deployment-assets/* ./node_modules/@gnosis.pm/safe-core-sdk/node_modules/@gnosis.pm/safe-deployments/dist/assets/

EXPOSE 3000

CMD ["yarn", "start"]
