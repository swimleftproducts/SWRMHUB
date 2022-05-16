Remeber to pull correct version
  sudo docker image pull --platform linux/arm/v7 swimleftproducts/nginxproxy 
  ** or pull the amd version for desktop
start with
  sudo docker run --network=host  -p 80:80 -p 443:443  nginxproxy
build using   
  docker buildx build --platform linux/amd64,linux/arm/v7 -t swimleftproducts/nginxproxy .



