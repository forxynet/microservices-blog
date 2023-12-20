# microservices-blog
nodejs and react microservice with kubernetes


Docker 
----------------------------------------------
docker build -t dynamicq/posts .
----------------------------------------------

Kubernet
----------------------------------------------
kubectl apply -f posts-depl.yaml
kubectl get deployments
kubectl rollout restart deployment posts-depl
kubectl get pods
kubectl logs posts-depl-847dc5ff4d-bhdrb
kubectl delete services posts-clusterip-srv


kubectl apply -f posts-srv.yaml
kubectl get services
kubectl describe service posts-srv

----------------------------------------------
docker build -t dynamicq/event-bus .
docker push dynamicq/event-bus
----------------------------------------------

kubectl apply -f event-bus-depl.yaml
docker build -t dynamicq/event-bus .
kubectl get deployments
kubectl rollout restart deployment posts-depl
kubectl rollout restart deployment event-bus-depl
kubectl get pods
kubectl logs posts-depl-679cc565f7-8sq2g





