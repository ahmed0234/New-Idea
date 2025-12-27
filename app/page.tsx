import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';

const page = () => {
  return (
    <div>
      <SignedOut>
        <SignInButton mode="modal">
          <button className="mr-4 rounded bg-blue-500 px-4 py-2 text-white">
            Sign In
          </button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton
          appearance={{
            elements: {
              userButtonAvatarBox: 'w-10 h-10',
            },
          }}
        />
      </SignedIn>
      <h1 className="text-5xl font-mono">Hello world !</h1>
    </div>
  );
};

export default page;
