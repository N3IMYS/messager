CONT_NAME=message

docker run -d \
  -p 8080:8080 \
  --name $CONT_NAME \
  $CONT_NAME