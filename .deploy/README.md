#### Docker Compose

Run `docker compose up --build` to run the services.\
Follow it up with a docker compose for getting the reverse proxy running (required to access the services)

```
docker compose -f docker-compose.caddy.yml up --build
```

```sh
sudo cp .deploy/caddy/Caddyfile /var/lib/docker/volumes/caddy_config/_data/caddy/Caddyfile
```
and 

```sh
docker exec -w /configs/caddy system-integration-caddy-1 caddy reload
```

to reload the config of Caddy, and fully enable HTTPS.
Modify the `.deploy/caddy/Caddyfile` to suit your needs