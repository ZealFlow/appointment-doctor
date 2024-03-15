FROM node:alpine

ENV JWT_SECRET='MABIMATKHONGBIET'
ENV PORT=3001
ENV host='localhost'
ENV user='root'
ENV password='Tin18082002'
ENV database='example'

WORKDIR /healthhub/backend
COPY ./package*.json ./
RUN npm install -g typescript && npm install
COPY . .
RUN npm run build

CMD ["npm", "start"]