build:
	docker compose build --no-cache

up:
	docker compose up -d --build

backend:
	docker compose up -d --build backend

stop:
	docker compose stop

down:
	docker compose down

restart:
	docker compose down
	docker compose up -d --build

ps:
	docker compose ps

npm:
	docker compose exec frontend npm install