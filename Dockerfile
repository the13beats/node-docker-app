FROM image
WORKDIR  /app
COPY package*.json ./
RUN npm ins
COPY . .
EXPOSE 3001
CMD ["node", "app.js"]