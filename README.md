# HEMS

This is a management system developed as a prototype for a larger project. It has been developed as part of a two-day-long Hackathon by 3-5 people.

## Running the project 

The system is composed of the following apps:
- Rest API written in [NestJs](https://nestjs.com/)
- Frontend Single-page application written in [Angular](https://angular.io/)
### Database

The api requires connection to a Postgres database. You can run one locally with

```docker
docker run --name postgres --restart unless-stopped -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -e POSTGRES_DB=hems -p 5432:5432 -d postgres
```

### NX Monorepository

We use Nrwl/NX to manage having multiple apps in one repository.
Thanks to NX, all apps can be run with the same command:
- API: `nx serve api`
- frontend: `nx serve hems`
## License

Distributed under the MIT License. See [LICENSE](./LICENSE) for more information.