if [ $# -eq 0 ];then
  TAG="deploying"
else
  TAG="deploying $1"
fi
echo "$TAG"

#docker
docker build -t node-bundle-app .
docker run -dP node-bundle-app
docker ps
