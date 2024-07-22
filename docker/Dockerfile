FROM node:20

# Layers in docker - help to cache images/data for faster build
# network - so that 2 container can talk to each other
# volumes - so that data persists when container goes down/killed
COPY package* .
COPY ./prisma .

RUN npm install
RUN npx prisma generate

COPY . .

RUN npm run build

EXPOSE 300

# add env data directly in execution
# docker run -p 3000:3000 -e DATABASE_URL="postgres://avnadmin:AVNS_EeDiMIdW-dNT4Ox9l1n@pg-35339ab4-harkirat-d1b9.a.aivencloud.com:25579/defaultdb?sslmode=require" image_name
CMD [ "node", "dist/index.js" ]