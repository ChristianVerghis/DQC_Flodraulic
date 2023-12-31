import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import React, { Suspense, useState } from "react";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const callbackUrl = decodeURI((router.query?.callbackUrl as string) ?? "/");

  function Loading() {
    return <span className="loading loading-infinity loading-lg"></span>;
  }

  //console.log(callbackUrl);
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    console.log("Logging in");
    const result = await signIn("credentials", {
      email,
      password,
      callbackUrl: callbackUrl ?? "/",
      redirect: false,
    });
    if (result?.error) {
      setError(result.error);
    }
    else if (result?.ok && email=="design@example.com"){router.push("http://localhost:420/design")}
    else if (result?.ok && email=="admin@example.com"){router.push("http://localhost:420/admin")}//later will be dependent on UID
    //Beginning of UID will identify user role
    else if (result?.ok) {
      router.push(callbackUrl);
    }
  };
  return (
    <div className="container">
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center card shadow-md">
          <form className="card-body w-96" onSubmit={handleSubmit}>
            <h1 className="text-4xl my-8">Sign In</h1>
            {!!error && <p className="text-error">ERROR: {error}</p>}
            <input
              type="text"
              className="input input-bordered"
              placeholder="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              className="input input-bordered"
              placeholder="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <><Suspense fallback={<Loading />}>
      </Suspense>
            <button className="btn" type="submit">
              Sign In
            </button>
            </>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
