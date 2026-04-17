import Image from "next/image";




const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://react.dev/images/docs/scientists/yXOvdOSs.jpg',
  imageSize: 90,
};

export function SimpleButton() {
  return <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Button With Tailwind</button>;
}

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">{user.name}</h1>
      <SimpleButton />
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}
