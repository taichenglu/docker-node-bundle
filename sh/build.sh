#git
cd ..
git pull
npm install
npm update

#build
if [ $# -eq 0 ];then
  echo "building"
  npm run build
else
  echo "building deploy"
  npm run build
fi
