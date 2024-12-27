import { Card, Input, Button, Typography } from '@material-tailwind/react';
import { useState } from 'react';
import { IUserData } from '../../rtk/types';

export const CreatePage: React.FC = () => {
  const [user, setUser] = useState<IUserData>({ name: '', email: '' });

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('hello');
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prevValue) => ({ ...prevValue, [e.target.name]: e.target.value }));
  };

  return (
    <div className="flex justify-center my-20">
      <Card
        color="transparent"
        shadow={false}
        placeholder={undefined}
        onPointerEnterCapture={null}
        onPointerLeaveCapture={null}
      >
        <Typography
          variant="h4"
          color="blue-gray"
          placeholder={undefined}
          onPointerEnterCapture={null}
          onPointerLeaveCapture={null}
        >
          Add User
        </Typography>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={onSubmitHandler}
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-3"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Name:
            </Typography>
            <Input
              size="lg"
              placeholder="name"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: 'before:content-none after:content-none',
              }}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              crossOrigin={undefined}
              name="name"
              onChange={onChangeHandler}
            />
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-3"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Email:
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: 'before:content-none after:content-none',
              }}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              crossOrigin={undefined}
              name="email"
              onChange={onChangeHandler}
            />
          </div>

          <Button
            className="mt-6"
            fullWidth
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Card>
    </div>
  );
};
