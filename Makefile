install:
	@yarn install

migration:
	@yarn typeorm migration:run

revert-migration:
	@yarn typeorm migration:revert

start:
	@docker-compose up -d && yarn typeorm migration:run

status:
	@docker-compose ps

stop:
	@docker-compose down

logs:
	@docker-compose logs -f app
