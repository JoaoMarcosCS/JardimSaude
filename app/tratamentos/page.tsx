import { DataTable } from "@/components/data-table";
import { User, columns } from "./columns";

async function getData(): Promise<User[]> {
  return [
    {
      id: "728ed52f",
      name:"Marcos",
      image:"https://avatars.githubusercontent.com/u/124599?v=4",
      email: "m@example.com",
      lastSeen:"Visto pela última vez às 20h39m"
    },
    {
      id: "728ed52f",
      name:"aaa",
      image:"https://avatars.githubusercontent.com/u/124599?v=4",
      email: "m@example.com",
      lastSeen:"Visto pela última vez às 20h39m"
    },
    {
      id: "728ed52f",
      name:"sss",
      image:"https://avatars.githubusercontent.com/u/124599?v=4",
      email: "m@example.com",
      lastSeen:"Visto pela última vez às 20h39m"
    },
    {
      id: "728ed52f",
      name:"11111",
      image:"https://avatars.githubusercontent.com/u/124599?v=4",
      email: "m@example.com",
      lastSeen:"Visto pela última vez às 20h39m"
    },
    {
      id: "728ed52f",
      name:"wwwqwqw",
      image:"https://avatars.githubusercontent.com/u/124599?v=4",
      email: "m@example.com",
      lastSeen:"Visto pela última vez às 20h39m"
    },
    {
      id: "728ed52f",
      name:"erreew",
      image:"https://avatars.githubusercontent.com/u/124599?v=4",
      email: "m@example.com",
      lastSeen:"Visto pela última vez às 20h39m"
    },
    {
      id: "728ed52f",
      name:"cvfvfv",
      image:"https://avatars.githubusercontent.com/u/124599?v=4",
      email: "m@example.com",
      lastSeen:"Visto pela última vez às 20h39m"
    },
    {
      id: "728ed52f",
      name:"Marcos",
      image:"https://avatars.githubusercontent.com/u/124599?v=4",
      email: "m@example.com",
      lastSeen:"Visto pela última vez às 20h39m"
    },
    {
      id: "728ed52f",
      name:"aaa",
      image:"https://avatars.githubusercontent.com/u/124599?v=4",
      email: "m@example.com",
      lastSeen:"Visto pela última vez às 20h39m"
    },
    {
      id: "728ed52f",
      name:"sss",
      image:"https://avatars.githubusercontent.com/u/124599?v=4",
      email: "m@example.com",
      lastSeen:"Visto pela última vez às 20h39m"
    },
    {
      id: "728ed52f",
      name:"11111",
      image:"https://avatars.githubusercontent.com/u/124599?v=4",
      email: "m@example.com",
      lastSeen:"Visto pela última vez às 20h39m"
    },
    {
      id: "728ed52f",
      name:"wwwqwqw",
      image:"https://avatars.githubusercontent.com/u/124599?v=4",
      email: "m@example.com",
      lastSeen:"Visto pela última vez às 20h39m"
    },
    {
      id: "728ed52f",
      name:"erreew",
      image:"https://avatars.githubusercontent.com/u/124599?v=4",
      email: "m@example.com",
      lastSeen:"Visto pela última vez às 20h39m"
    },
    {
      id: "728ed52f",
      name:"cvfvfv",
      image:"https://avatars.githubusercontent.com/u/124599?v=4",
      email: "m@example.com",
      lastSeen:"Visto pela última vez às 20h39m"
    },
    {
      id: "728ed52f",
      name:"Marcos",
      image:"https://avatars.githubusercontent.com/u/124599?v=4",
      email: "m@example.com",
      lastSeen:"Visto pela última vez às 20h39m"
    },
    {
      id: "728ed52f",
      name:"aaa",
      image:"https://avatars.githubusercontent.com/u/124599?v=4",
      email: "m@example.com",
      lastSeen:"Visto pela última vez às 20h39m"
    },
    {
      id: "728ed52f",
      name:"sss",
      image:"https://avatars.githubusercontent.com/u/124599?v=4",
      email: "m@example.com",
      lastSeen:"Visto pela última vez às 20h39m"
    },
    {
      id: "728ed52f",
      name:"11111",
      image:"https://avatars.githubusercontent.com/u/124599?v=4",
      email: "m@example.com",
      lastSeen:"Visto pela última vez às 20h39m"
    },
    {
      id: "728ed52f",
      name:"wwwqwqw",
      image:"https://avatars.githubusercontent.com/u/124599?v=4",
      email: "m@example.com",
      lastSeen:"Visto pela última vez às 20h39m"
    },
    {
      id: "728ed52f",
      name:"erreew",
      image:"https://avatars.githubusercontent.com/u/124599?v=4",
      email: "m@example.com",
      lastSeen:"Visto pela última vez às 20h39m"
    },
    {
      id: "728ed52f",
      name:"cvfvfv",
      image:"https://avatars.githubusercontent.com/u/124599?v=4",
      email: "m@example.com",
      lastSeen:"Visto pela última vez às 20h39m"
    },
    {
      id: "728ed52f",
      name:"Marcos",
      image:"https://avatars.githubusercontent.com/u/124599?v=4",
      email: "m@example.com",
      lastSeen:"Visto pela última vez às 20h39m"
    },
    {
      id: "728ed52f",
      name:"aaa",
      image:"https://avatars.githubusercontent.com/u/124599?v=4",
      email: "m@example.com",
      lastSeen:"Visto pela última vez às 20h39m"
    },
    {
      id: "728ed52f",
      name:"sss",
      image:"https://avatars.githubusercontent.com/u/124599?v=4",
      email: "m@example.com",
      lastSeen:"Visto pela última vez às 20h39m"
    },
    {
      id: "728ed52f",
      name:"11111",
      image:"https://avatars.githubusercontent.com/u/124599?v=4",
      email: "m@example.com",
      lastSeen:"Visto pela última vez às 20h39m"
    },
    {
      id: "728ed52f",
      name:"wwwqwqw",
      image:"https://avatars.githubusercontent.com/u/124599?v=4",
      email: "m@example.com",
      lastSeen:"Visto pela última vez às 20h39m"
    },
    {
      id: "728ed52f",
      name:"erreew",
      image:"https://avatars.githubusercontent.com/u/124599?v=4",
      email: "m@example.com",
      lastSeen:"Visto pela última vez às 20h39m"
    },
    {
      id: "728ed52f",
      name:"cvfvfv",
      image:"https://avatars.githubusercontent.com/u/124599?v=4",
      email: "m@example.com",
      lastSeen:"Visto pela última vez às 20h39m"
    },
  ]
}

const Tratamentos = async () => {
  const data = await getData()

  return(
    <section className="py-24">
      <div className="container">
        <h1 className="font-bold text-2xl">All Users</h1>
        <DataTable columns={columns} data={data} />
      </div>
    </section>
  )
}

export default Tratamentos;
