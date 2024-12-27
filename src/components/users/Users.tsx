import { useGetUsersQuery } from '../../rtk/user/userSlice';

export const Users: React.FC = () => {
  const { data: users, isLoading, isSuccess, isError } = useGetUsersQuery();

  return (
    <div className="flex justify-center p-3">
      {isLoading && <h3>Loading...</h3>}
      {isError && <h3>Something went wrong</h3>}
      {isSuccess &&
        users.map((user) => (
          <div key={user.id} className="p-3 border-2 border-black m-2 flex flex-col gap-1 justify-center items-start ">
            <h4>{user.name}</h4>
            <h4>{user.email}</h4>
            <div className='flex gap-2 self-center'>
                <button className="text-white px-3 py-1 bg-red-600 rounded-lg">Delete</button>
                <button className="text-white px-3 py-1 bg-green-600 rounded-lg">Edit</button>
            </div>
          </div>
        ))}
    </div>
  );
};
