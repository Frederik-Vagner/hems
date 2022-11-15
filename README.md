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

If you use a different database information, like a different password or host it somewhere else, you need to create a `.env` file based on the [`.env.example`](.env.example) file, and update the properties to match your setup.

#### **Populating the database**

The system includes a seeding service that will wipe the data in the database and insert some predefined data, like users.\
You can run it with `npm run seed`


### NX Monorepository

We use Nrwl/NX to manage having multiple apps in one repository.
Thanks to NX, all apps can be run with the same command:
- API: `nx serve api`
- frontend: `nx serve hems`

## License

Distributed under the MIT License. See [LICENSE](./LICENSE) for more information.