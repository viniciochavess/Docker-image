Exemplo simples de criação de um container docker.

# Para Realizar a build
docker build -t api-fake-user . 


# listar imagens
docker images

# Rodar Container

docker run -p 3000:3000 api-fake-user