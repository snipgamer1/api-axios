import ListUsers from "./components/ListUsers";
import CreateUser from "./components/CreateUser";
import UpdateUser from "./components/UpdateUser";
import GetUser from "./components/GetUser";
import DeleteUser from "./components/DeleteUser";


export default function Home() {

  return (
    <div className="flex flex-col justify-center items-center ">
      <h1 className='text-4xl font-bold text-center p-6'>Lista de Usarios</h1>
      <ListUsers />
      <CreateUser />
      <UpdateUser />
      <GetUser />
      <DeleteUser />
    </div>

  );
}
