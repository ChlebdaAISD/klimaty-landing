FROM node:22-alpine AS builder
WORKDIR /app

# Build-time env vars baked into the Vite bundle. Railway passes service
# variables as --build-arg automatically; the ARG lines make them visible here.
ARG VITE_KLIMATY_CONTACT_WEBHOOK
ARG VITE_N8N_NAME
ARG VITE_N8N_VALUE
ENV VITE_KLIMATY_CONTACT_WEBHOOK=$VITE_KLIMATY_CONTACT_WEBHOOK
ENV VITE_N8N_NAME=$VITE_N8N_NAME
ENV VITE_N8N_VALUE=$VITE_N8N_VALUE

COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:1.27-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
