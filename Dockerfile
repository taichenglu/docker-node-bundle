FROM    mhart/alpine-node:base-6.9.1

COPY dist /src

WORKDIR /src
EXPOSE  3000

CMD ["node", "bundle.js"]
