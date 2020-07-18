FROM node:12-alpine

RUN mkdir -p /FrontEnd
WORKDIR /FrontEnd
COPY package.json /FrontEnd
COPY package-lock.json /FrontEnd
RUN npm install
COPY . /FrontEnd
CMD ["npm", "start"] 
#sudo docker run -it --rm busybox