VERSION=v1.0.2

.PHONY: build
build:
		yarn build:prod

.PHONY: docker
docker:
		docker build ./docker -t potatozgh/mars-ui:$(VERSION)
		rm -rf ./docker/dist
		docker push potatozgh/mars-ui:$(VERSION)
		docker rmi potatozgh/mars-ui:$(VERSION)


.PHONY: register
register:
		make build
		make docker
